// Inventor's Den - Main Script

// Pause marquee on hover
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

// Hamburger menu toggle
const hamburger = document.querySelector('.nav-hamburger');
const navRight = document.querySelector('.nav-right');
if (hamburger && navRight) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navRight.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('open'));
  });

  // Close menu when a nav link is clicked
  navRight.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navRight.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
