/**
 * Main Portfolio JavaScript — Enhanced Edition
 * Features: Aurora cursor trail, smooth ring, card spotlight,
 * magnetic buttons, scroll animations, counters, filters
 */

// ═══════════════════════════════════════════════════════════════════
// CUSTOM CURSOR — Aurora Trail + Smooth Ring
// ═══════════════════════════════════════════════════════════════════
class AuroraCursor {
  constructor() {
    this.ring = document.querySelector('.cursor-ring');
    this.dot = document.querySelector('.cursor-dot');
    this.label = document.querySelector('.cursor-label');
    this.canvas = document.getElementById('cursor-trail-canvas');

    if (!this.ring || !this.dot || !this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.mouse = { x: 0, y: 0 };
    this.ringPos = { x: 0, y: 0 };
    this.trail = [];
    this.maxTrail = 35;
    this.isHovering = false;
    this.isHoveringCard = false;

    this.resize();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());

    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      // Update dot immediately
      this.dot.style.left = e.clientX + 'px';
      this.dot.style.top = e.clientY + 'px';

      // Add trail point
      this.trail.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        size: this.isHovering ? 3 : 2,
        hue: (Date.now() * 0.1) % 360,
      });

      if (this.trail.length > this.maxTrail) {
        this.trail.shift();
      }
    });

    // Interactive elements
    const links = document.querySelectorAll('a, button, .filter-btn');
    const cards = document.querySelectorAll('.project-card, .skill-card, .cert-card, .achievement-card, .education-card, .pub-card');

    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.isHovering = true;
        this.ring.classList.add('hovering');
        this.dot.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        this.isHovering = false;
        this.ring.classList.remove('hovering');
        this.dot.classList.remove('hovering');
        this.label.classList.remove('visible');
      });
    });

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.isHoveringCard = true;
        this.ring.classList.add('hovering-card');
        this.dot.classList.add('hovering');
        this.label.textContent = 'VIEW';
        this.label.classList.add('visible');
      });
      card.addEventListener('mouseleave', () => {
        this.isHoveringCard = false;
        this.ring.classList.remove('hovering-card');
        this.dot.classList.remove('hovering');
        this.label.classList.remove('visible');
      });
    });
  }

  drawTrail() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.trail.length; i++) {
      const point = this.trail[i];
      point.life -= 0.025;

      if (point.life <= 0) {
        this.trail.splice(i, 1);
        i--;
        continue;
      }

      const alpha = point.life * 0.5;
      const size = point.size * point.life;

      // Draw glow
      const gradient = this.ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, size * 6
      );
      gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha * 0.8})`);
      gradient.addColorStop(0.4, `rgba(124, 58, 237, ${alpha * 0.3})`);
      gradient.addColorStop(1, `rgba(236, 72, 153, 0)`);

      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, size * 6, 0, Math.PI * 2);
      this.ctx.fillStyle = gradient;
      this.ctx.fill();

      // Draw core
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
      this.ctx.fill();
    }
  }

  animate() {
    // Smooth ring follow (elastic easing)
    const ease = 0.12;
    this.ringPos.x += (this.mouse.x - this.ringPos.x) * ease;
    this.ringPos.y += (this.mouse.y - this.ringPos.y) * ease;

    this.ring.style.left = this.ringPos.x + 'px';
    this.ring.style.top = this.ringPos.y + 'px';

    // Label follows ring
    if (this.label.classList.contains('visible')) {
      this.label.style.left = this.ringPos.x + 'px';
      this.label.style.top = (this.ringPos.y + 2) + 'px';
    }

    this.drawTrail();
    requestAnimationFrame(() => this.animate());
  }
}

// ═══════════════════════════════════════════════════════════════════
// CARD SPOTLIGHT EFFECT
// ═══════════════════════════════════════════════════════════════════
class CardSpotlight {
  constructor() {
    this.cards = document.querySelectorAll('.spotlight-card');
    this.init();
  }

  init() {
    this.cards.forEach(card => {
      const spotlight = card.querySelector('.card-spotlight');
      if (!spotlight) return;

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        spotlight.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(0, 212, 255, 0.08), transparent 60%)`;
      });
    });
  }
}

// ═══════════════════════════════════════════════════════════════════
// MAGNETIC BUTTON EFFECT
// ═══════════════════════════════════════════════════════════════════
class MagneticButtons {
  constructor() {
    this.buttons = document.querySelectorAll('.magnetic-btn');
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }
}

// ═══════════════════════════════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });

      const mobileMenu = document.getElementById('mobile-menu');
      const hamburger = document.getElementById('hamburger');
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
});

// ═══════════════════════════════════════════════════════════════════
// NAVBAR SCROLL EFFECT + ACTIVE TRACKING
// ═══════════════════════════════════════════════════════════════════
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ═══════════════════════════════════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════════════════════════════════
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
}

// ═══════════════════════════════════════════════════════════════════
// SCROLL ANIMATIONS (Intersection Observer)
// ═══════════════════════════════════════════════════════════════════
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -60px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      const children = entry.target.querySelectorAll('.stagger-child');
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * 0.1}s`;
        child.classList.add('visible');
      });

      if (entry.target.classList.contains('stats-container')) {
        animateCounters(entry.target);
      }

      if (entry.target.classList.contains('skills-section')) {
        animateSkillRings();
      }
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });
});

// ═══════════════════════════════════════════════════════════════════
// COUNTER ANIMATION & DYNAMIC UPDATES
// ═══════════════════════════════════════════════════════════════════
function initDynamicCounters() {
  const projectCount = document.querySelectorAll('.project-card').length;
  const certCount = document.querySelectorAll('.achievement-card').length;
  const internCount = document.querySelectorAll('.timeline-item').length;

  const countProjectsEl = document.getElementById('count-projects');
  const countCertsEl = document.getElementById('count-certs');
  const countInternsEl = document.getElementById('count-interns');

  if (countProjectsEl && projectCount > 0) countProjectsEl.dataset.target = projectCount;
  if (countCertsEl && certCount > 0) countCertsEl.dataset.target = certCount;
  if (countInternsEl && internCount > 0) countInternsEl.dataset.target = internCount;
}

function animateCounters(container) {
  initDynamicCounters();
  const counters = container.querySelectorAll('.counter');
  counters.forEach(counter => {
    if (counter.dataset.animated) return;
    counter.dataset.animated = 'true';

    const target = parseInt(counter.dataset.target);
    const suffix = counter.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(eased * target);

      counter.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  });
}

// ═══════════════════════════════════════════════════════════════════
// SKILL RING ANIMATION
// ═══════════════════════════════════════════════════════════════════
function animateSkillRings() {
  document.querySelectorAll('.skill-ring-progress').forEach(ring => {
    if (ring.dataset.animated) return;
    ring.dataset.animated = 'true';

    const percent = parseInt(ring.dataset.percent);
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percent / 100) * circumference;

    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference;

    setTimeout(() => {
      ring.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)';
      ring.style.strokeDashoffset = offset;
    }, 200);
  });
}

// ═══════════════════════════════════════════════════════════════════
// PROJECT FILTERS
// ═══════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card, index) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.transitionDelay = `${index * 0.06}s`;
          card.classList.remove('hidden');
          card.classList.add('show');
        } else {
          card.style.transitionDelay = '0s';
          card.classList.add('hidden');
          card.classList.remove('show');
        }
      });
    });
  });
});

// ═══════════════════════════════════════════════════════════════════
// TILT EFFECT ON CARDS
// ═══════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -6;
      const rotateY = (x - centerX) / centerX * 6;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
});

// ═══════════════════════════════════════════════════════════════════
// PARALLAX AURORA BLOBS
// ═══════════════════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const blobs = document.querySelectorAll('.aurora-blob');

  blobs.forEach((blob, i) => {
    const speed = 0.03 + i * 0.02;
    blob.style.transform += ` translateY(${scrollY * speed}px)`;
  });
});

// ═══════════════════════════════════════════════════════════════════
// CONTACT FORM (Formspree)
// ═══════════════════════════════════════════════════════════════════
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showNotification('Message sent successfully! 🎉', 'success');
        contactForm.reset();
      } else {
        showNotification('Oops! Something went wrong. Please try again.', 'error');
      }
    } catch (error) {
      showNotification('Network error. Please check your connection.', 'error');
    }

    btnText.style.display = 'inline';
    btnLoader.style.display = 'none';
    submitBtn.disabled = false;
  });
}

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add('show'), 10);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 400);
  }, 4000);
}

// ═══════════════════════════════════════════════════════════════════
// BACK TO TOP
// ═══════════════════════════════════════════════════════════════════
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 600);
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ═══════════════════════════════════════════════════════════════════
// PRELOADER
// ═══════════════════════════════════════════════════════════════════
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => preloader.style.display = 'none', 800);
    }, 1000);
  }
});

// ═══════════════════════════════════════════════════════════════════
// INITIALIZE ALL MODULES
// ═══════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Check if not a touch device
  if (window.matchMedia('(hover: hover)').matches) {
    new AuroraCursor();
    new MagneticButtons();
  }
  new CardSpotlight();
});
