/**
 * Typewriter Effect
 * Cycles through an array of strings with typing/deleting animation
 * Includes a blinking cursor effect
 */

class TypeWriter {
  constructor(element, options = {}) {
    this.element = element;
    if (!this.element) return;

    this.words = options.words || ['AI Engineer'];
    this.typeSpeed = options.typeSpeed || 80;
    this.deleteSpeed = options.deleteSpeed || 40;
    this.pauseTime = options.pauseTime || 2500;
    this.pauseBeforeDelete = options.pauseBeforeDelete || 1500;

    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.isPaused = false;

    this.type();
  }

  type() {
    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      // Deleting
      this.charIndex--;
      this.element.textContent = currentWord.substring(0, this.charIndex);

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        setTimeout(() => this.type(), 400);
        return;
      }

      setTimeout(() => this.type(), this.deleteSpeed + Math.random() * 30);
    } else {
      // Typing
      this.charIndex++;
      this.element.textContent = currentWord.substring(0, this.charIndex);

      if (this.charIndex === currentWord.length) {
        // Finished typing, pause before deleting
        setTimeout(() => {
          this.isDeleting = true;
          this.type();
        }, this.pauseBeforeDelete);
        return;
      }

      // Variable typing speed for realism
      const variance = Math.random() * 60;
      setTimeout(() => this.type(), this.typeSpeed + variance);
    }
  }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typewriter');
  if (el) {
    const words = el.dataset.words ? JSON.parse(el.dataset.words) : [
      'AI Engineer',
      'Deep Learning Specialist',
      'ML Researcher',
      'Computer Vision Expert',
      'NLP Engineer'
    ];
    new TypeWriter(el, { words });
  }
});
