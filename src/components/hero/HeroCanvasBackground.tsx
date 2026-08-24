import React, { useEffect, useRef } from 'react';

/**
 * Luxurious, clean, high-end cyber background canvas:
 * 1. Deep rich atmospheric nebula spotlights (Violet on top-left, Cyan on right).
 * 2. 3D Perspective Cyber Floor Grid with subtle glowing intersection nodes.
 * 3. Delicate, slow drifting cyber dust specks.
 * Zero clutter, zero noise — 100% visual elegance.
 */
export function HeroCanvasBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
    };

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 16 Ambient dust particles
    const DUST = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2 - 0.08,
      alpha: Math.random() * 0.5 + 0.15,
      color: Math.random() > 0.4 ? '#38bdf8' : '#c084fc',
    }));

    let time = 0;

    const render = () => {
      time += 0.012;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const normX = (mouse.x / width - 0.5) * 2;
      const normY = (mouse.y / height - 0.5) * 2;

      ctx.clearRect(0, 0, width, height);

      // ─── 1. ATMOSPHERIC DEEP NEBULA GLOWS ───────────────────────
      // Violet spotlight (top-left)
      const violet = ctx.createRadialGradient(
        width * 0.18 + normX * 25,
        height * 0.18 + normY * 20,
        0,
        width * 0.18,
        height * 0.18,
        width * 0.42
      );
      violet.addColorStop(0, 'rgba(139, 92, 246, 0.16)');
      violet.addColorStop(0.6, 'rgba(124, 58, 237, 0.04)');
      violet.addColorStop(1, 'rgba(3, 3, 8, 0)');
      ctx.fillStyle = violet;
      ctx.fillRect(0, 0, width, height);

      // Cyan spotlight (mid-right)
      const cyan = ctx.createRadialGradient(
        width * 0.72 - normX * 20,
        height * 0.45 - normY * 20,
        0,
        width * 0.72,
        height * 0.45,
        width * 0.48
      );
      cyan.addColorStop(0, 'rgba(34, 211, 238, 0.12)');
      cyan.addColorStop(0.6, 'rgba(59, 130, 246, 0.03)');
      cyan.addColorStop(1, 'rgba(3, 3, 8, 0)');
      ctx.fillStyle = cyan;
      ctx.fillRect(0, 0, width, height);

      // ─── 2. 3D PERSPECTIVE FLOOR GRID ───────────────────────────
      const horizonY = height * 0.46;
      const bottomY = height * 1.05;
      const vanishX = width * 0.65 + normX * 30;

      ctx.save();
      ctx.lineWidth = 1;

      // Perspective Rays radiating from vanish point
      const rayCount = 24;
      for (let i = -rayCount / 2; i <= rayCount / 2; i++) {
        const bottomX = vanishX + i * (width * 0.055);
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
        ctx.beginPath();
        ctx.moveTo(vanishX + i * 3, horizonY);
        ctx.lineTo(bottomX, bottomY);
        ctx.stroke();
      }

      // Horizontal Floor Rings (exponential spacing for 3D depth)
      const rings = 14;
      for (let j = 1; j <= rings; j++) {
        const ratio = Math.pow(j / rings, 2.4);
        const y = horizonY + ratio * (bottomY - horizonY);
        const spread = (y - horizonY) / (bottomY - horizonY);
        const leftX = vanishX - (rayCount / 2) * (width * 0.055) * spread;
        const rightX = vanishX + (rayCount / 2) * (width * 0.055) * spread;

        ctx.strokeStyle = `rgba(56, 189, 248, ${0.03 + spread * 0.14})`;
        ctx.beginPath();
        ctx.moveTo(leftX, y);
        ctx.lineTo(rightX, y);
        ctx.stroke();

        // Floor Node Glowing Cross-points
        for (let i = -6; i <= 6; i += 2) {
          const x = vanishX + i * (width * 0.055) * spread;
          const distMouse = Math.hypot(x - mouse.x, y - mouse.y);
          const mouseGlow = Math.max(0, 1 - distMouse / 220);

          const dotAlpha = (0.15 + spread * 0.35 + mouseGlow * 0.5) * (Math.sin(time * 1.5 + i + j) * 0.15 + 0.85);
          ctx.fillStyle = mouseGlow > 0.2 ? '#38bdf8' : (i % 4 === 0 ? '#a855f7' : '#38bdf8');
          ctx.beginPath();
          ctx.arc(x, y, 1.2 + spread * 1.2 + mouseGlow * 1.5, 0, Math.PI * 2);
          ctx.globalAlpha = Math.min(1, Math.max(0, dotAlpha));
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
      ctx.restore();

      // ─── 3. DELICATE AMBIENT CYBER DUST ─────────────────────────
      DUST.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (Math.sin(time * 2 + p.x) * 0.2 + 0.8);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
