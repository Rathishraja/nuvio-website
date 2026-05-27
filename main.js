/**
 * NUVIO — main.js
 * Where curious minds connect.
 *
 * Modules:
 *  1. Scroll Reveal Animation
 *  2. Animated Stat Counters
 *  3. Nav Scroll Effect
 *  4. Mobile Hamburger Menu
 */

'use strict';

/* ================================================================
   1. SCROLL REVEAL
   Observes .reveal elements and adds .visible when in viewport
================================================================ */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  if (!revealElements.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger delay for sibling elements entering together
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 60);

          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}


/* ================================================================
   2. ANIMATED STAT COUNTERS
   Counts up to data-target value when stat enters viewport
================================================================ */

function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-num');

  if (!statNumbers.length) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        
        const el        = entry.target;
        const target    = parseInt(el.dataset.target, 10) || 100;
        const suffix    = '+';
        const duration  = 1400; // ms
        const stepCount = 50;
        const stepTime  = Math.floor(duration / stepCount);
        const increment = Math.ceil(target / stepCount);
        let current     = 0;

        const timer = setInterval(() => {
          current = Math.min(current + increment, target);
          el.textContent = current + suffix;

          if (current >= target) {
            clearInterval(timer);
          }
        }, stepTime);

        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((el) => counterObserver.observe(el));
}


/* ================================================================
   3. NAV SCROLL EFFECT
   Darkens nav background on scroll for readability
================================================================ */

function initNavScroll() {
  const nav = document.querySelector('nav');

  if (!nav) return;

  const SCROLL_THRESHOLD = 40;

  function updateNav() {
    nav.style.background =
      window.scrollY > SCROLL_THRESHOLD
        ? 'rgba(10, 10, 10, 0.95)'
        : 'rgba(10, 10, 10, 0.7)';
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run once on load
}


/* ================================================================
   4. MOBILE HAMBURGER MENU
   Toggles the mobile nav overlay
================================================================ */

function initMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return;

  let isOpen = false;

  // Open styles applied via JS to override responsive CSS
  const OPEN_STYLES = `
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 24px 20px;
    gap: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    z-index: 99;
  `;

  function openMenu() {
    navLinks.style.cssText = OPEN_STYLES;
    hamburger.classList.add('open');
    isOpen = true;
  }

  function closeMenu() {
    navLinks.style.cssText = '';
    hamburger.classList.remove('open');
    isOpen = false;
  }

  // Toggle on hamburger click
  hamburger.addEventListener('click', () => {
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu when any nav link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on resize back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isOpen) {
      closeMenu();
      navLinks.style.cssText = ''; // reset inline styles fully
    }
  });
}



function initMagneticButtons() {
  const buttons = document.querySelectorAll(
    '.hero-cta .btn-primary, .hero-cta .btn-secondary, .join-card .btn-primary'
  );

  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const moveX = (x - rect.width / 2) * 0.08;
      const moveY = (y - rect.height / 2) * 0.08;

      button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
}

function initFormModal() {
  const openBtns = document.querySelectorAll('#open-form, #open-form-2, #open-form-footer');
  const modal = document.getElementById('formModal');
  const closeOverlay = document.getElementById('closeForm');
  const closeBtn = document.getElementById('closeFormBtn');

  if (!openBtns.length || !modal) return;

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeOverlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
}

function initFounderSection() {
 
  /* ── 1. MAGNETIC BUTTONS (founder-specific targets) ────────── */
  const founderMagneticBtns = document.querySelectorAll('.founder-btn-magnetic');
 
  founderMagneticBtns.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect  = btn.getBoundingClientRect();
      const moveX = (e.clientX - rect.left - rect.width  / 2) * 0.1;
      const moveY = (e.clientY - rect.top  - rect.height / 2) * 0.1;
      btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
 
 
  /* ── 2. SUBTLE PARALLAX ON IMAGE ───────────────────────────── */
  const founderPhoto = document.querySelector('.founder-photo');
  const founderSection = document.getElementById('founder');
 
  if (founderPhoto && founderSection) {
    let ticking = false;
 
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect       = founderSection.getBoundingClientRect();
          const windowH    = window.innerHeight;
 
          // Only apply when section is in view
          if (rect.top < windowH && rect.bottom > 0) {
            const progress = (windowH - rect.top) / (windowH + rect.height);
            const yShift   = (progress - 0.5) * 40; // ±20 px range
            founderPhoto.style.transform = `translateY(${-yShift}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
 
 
  /* ── 3. HOVER GLOW TRACK on credibility pills ──────────────── */
  const credPills = document.querySelectorAll('.founder-cred-pill');
 
  credPills.forEach((pill) => {
    pill.addEventListener('mousemove', (e) => {
      const rect  = pill.getBoundingClientRect();
      const x     = ((e.clientX - rect.left) / rect.width)  * 100;
      const y     = ((e.clientY - rect.top)  / rect.height) * 100;
      pill.style.background =
        `radial-gradient(circle at ${x}% ${y}%, rgba(124,58,237,0.15) 0%, rgba(17,17,17,0.9) 70%)`;
    });
    pill.addEventListener('mouseleave', () => {
      pill.style.background = '';
    });
  });
 
 
  /* ── 4. SOCIAL ICON STAGGER ON SECTION REVEAL ─────────────── */
  const founderSocials = document.querySelectorAll('.founder-social-icon');
  const socialObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          founderSocials.forEach((icon, i) => {
            setTimeout(() => {
              icon.style.opacity   = '1';
              icon.style.transform = 'translateY(0)';
            }, i * 80);
          });
          socialObserver.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );
 
  // Set initial hidden state so stagger works
  founderSocials.forEach((icon) => {
    icon.style.opacity   = '0';
    icon.style.transform = 'translateY(12px)';
    icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
 
  const socialsRow = document.querySelector('.founder-socials');
  if (socialsRow) socialObserver.observe(socialsRow);
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCounters();
  initNavScroll();
  initMobileMenu();
  initMagneticButtons();
  initFormModal();
  initFounderSection();
});

/* ================================================================
   INIT — Run all modules on DOM ready
================================================================ */
