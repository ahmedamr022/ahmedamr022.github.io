/**
 * Neural Network Particle Animation
 * Creates an interactive canvas with floating nodes and synaptic connections
 * Responds to mouse interaction for an immersive experience
 */

class NeuralNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 180 };
    this.colors = {
      primary: { r: 0, g: 212, b: 255 },    // cyan
      secondary: { r: 124, g: 58, b: 237 },  // purple
    };
    this.connectionDistance = 140;
    this.particleCount = 0;

    this._resize = this.resize.bind(this);
    this._mouseMove = this.handleMouseMove.bind(this);
    this._mouseOut = this.handleMouseOut.bind(this);

    window.addEventListener('resize', this._resize);
    window.addEventListener('mousemove', this._mouseMove);
    window.addEventListener('mouseout', this._mouseOut);

    this.resize();
    this.init();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.calculateParticleCount();
    if (this.particles.length > 0) {
      this.adjustParticles();
    }
  }

  calculateParticleCount() {
    const area = this.canvas.width * this.canvas.height;
    this.particleCount = Math.min(Math.floor(area / 8000), 200);
  }

  adjustParticles() {
    // Add or remove particles to match count
    while (this.particles.length < this.particleCount) {
      this.particles.push(this.createParticle());
    }
    while (this.particles.length > this.particleCount) {
      this.particles.pop();
    }
  }

  createParticle(x, y) {
    const size = Math.random() * 2.5 + 0.8;
    const colorMix = Math.random();
    return {
      x: x || Math.random() * this.canvas.width,
      y: y || Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: size,
      baseSize: size,
      colorMix: colorMix,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    };
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  }

  handleMouseOut() {
    this.mouse.x = null;
    this.mouse.y = null;
  }

  getColor(mix, alpha) {
    const r = Math.round(this.colors.primary.r + (this.colors.secondary.r - this.colors.primary.r) * mix);
    const g = Math.round(this.colors.primary.g + (this.colors.secondary.g - this.colors.primary.g) * mix);
    const b = Math.round(this.colors.primary.b + (this.colors.secondary.b - this.colors.primary.b) * mix);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  update() {
    this.particles.forEach(p => {
      // Pulse animation
      p.pulse += p.pulseSpeed;
      const pulseFactor = 1 + Math.sin(p.pulse) * 0.3;

      // Mouse interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Gentle attraction
          p.vx += Math.cos(angle) * force * 0.015;
          p.vy += Math.sin(angle) * force * 0.015;
          p.size = p.baseSize * (1 + force * 1.5) * pulseFactor;
        } else {
          p.size = p.baseSize * pulseFactor;
        }
      } else {
        p.size = p.baseSize * pulseFactor;
      }

      // Apply velocity with damping
      p.vx *= 0.99;
      p.vy *= 0.99;
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = this.canvas.width + 10;
      if (p.x > this.canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = this.canvas.height + 10;
      if (p.y > this.canvas.height + 10) p.y = -10;
    });
  }

  drawParticles() {
    this.particles.forEach(p => {
      // Outer glow
      const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
      gradient.addColorStop(0, this.getColor(p.colorMix, 0.6));
      gradient.addColorStop(0.5, this.getColor(p.colorMix, 0.1));
      gradient.addColorStop(1, this.getColor(p.colorMix, 0));

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
      this.ctx.fillStyle = gradient;
      this.ctx.fill();

      // Core
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = this.getColor(p.colorMix, 0.9);
      this.ctx.fill();
    });
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.connectionDistance) {
          const opacity = (1 - dist / this.connectionDistance) * 0.25;
          const mixAvg = (this.particles[i].colorMix + this.particles[j].colorMix) / 2;

          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = this.getColor(mixAvg, opacity);
          this.ctx.lineWidth = 0.6;
          this.ctx.stroke();
        }
      }
    }

    // Draw connections to mouse
    if (this.mouse.x !== null && this.mouse.y !== null) {
      this.particles.forEach(p => {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const opacity = (1 - dist / this.mouse.radius) * 0.4;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = this.getColor(0.5, opacity);
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update();
    this.drawConnections();
    this.drawParticles();
    requestAnimationFrame(() => this.animate());
  }

  destroy() {
    window.removeEventListener('resize', this._resize);
    window.removeEventListener('mousemove', this._mouseMove);
    window.removeEventListener('mouseout', this._mouseOut);
  }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  new NeuralNetwork('neural-canvas');
});
