/**
 * NUVIO — main.js  (polished & fixed)
 * Where curious minds connect.
 *
 * Modules:
 *  1. Scroll Reveal Animation
 *  2. Animated Stat Counters
 *  3. Nav Scroll Effect
 *  4. Mobile Hamburger Menu  (fully rebuilt with CSS class approach)
 *  5. Magnetic Buttons
 *  6. Form Modal
 *  7. Founder Section
 */

'use strict';

/* ================================================================
   UTIL — reduced motion preference
================================================================ */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


/* ================================================================
   1. SCROLL REVEAL
   Uses per-section stagger so delays feel intentional
================================================================ */

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  // Map to track stagger order per parent section
  const sectionCounters = new Map();

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // Find the nearest section ancestor to stagger within it
        const section = el.closest('section, footer') || document.body;

        if (!sectionCounters.has(section)) {
          sectionCounters.set(section, 0);
          // Reset counter after a frame so next batch starts fresh
          setTimeout(() => sectionCounters.delete(section), 600);
        }

        const idx = sectionCounters.get(section);
        sectionCounters.set(section, idx + 1);

        const delay = prefersReducedMotion ? 0 : Math.min(idx * 80, 280);

        setTimeout(() => {
          el.classList.add('visible');
        }, delay);

        revealObserver.unobserve(el);
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -32px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}


/* ================================================================
   2. ANIMATED STAT COUNTERS
================================================================ */

function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-num');
  if (!statNumbers.length) return;

  if (prefersReducedMotion) {
    // Just show final values immediately
    statNumbers.forEach((el) => {
      const target = parseInt(el.dataset.target, 10) || 0;
      el.textContent = target + '+';
    });
    return;
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el        = entry.target;
        const target    = parseInt(el.dataset.target, 10) || 100;
        const suffix    = '+';
        const duration  = 1400;
        const stepCount = 50;
        const stepTime  = Math.floor(duration / stepCount);
        const increment = Math.ceil(target / stepCount);
        let current     = 0;

        const timer = setInterval(() => {
          current = Math.min(current + increment, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(timer);
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
================================================================ */

function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const SCROLL_THRESHOLD = 40;
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNav() {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;
    nav.style.background = scrolled
      ? 'rgba(10, 10, 10, 0.97)'
      : 'rgba(10, 10, 10, 0.7)';

    // Add a subtle shadow when scrolled
    nav.style.boxShadow = scrolled
      ? '0 1px 24px rgba(0,0,0,0.4)'
      : 'none';

    lastScrollY = window.scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });

  updateNav();
}


/* ================================================================
   4. MOBILE HAMBURGER MENU
   Uses CSS class approach — no inline style overrides
================================================================ */

function initMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  let isOpen = false;

  function openMenu() {
    navLinks.classList.add('mobile-open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // prevent scroll behind overlay
    isOpen = true;
  }

  function closeMenu() {
    navLinks.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    isOpen = false;
  }

  // Toggle on hamburger click
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen ? closeMenu() : openMenu();
  });

  // Keyboard support
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      isOpen ? closeMenu() : openMenu();
    }
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (isOpen && !hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeMenu();
  });

  // Clean up on desktop resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isOpen) {
      closeMenu();
    }
  }, { passive: true });
}


/* ================================================================
   5. MAGNETIC BUTTONS
   Skip on touch devices — no hover
================================================================ */

function initMagneticButtons() {
  // Skip entirely on touch-primary devices
  if (window.matchMedia('(hover: none)').matches || prefersReducedMotion) return;

  const buttons = document.querySelectorAll(
    '.hero-cta .btn-primary, .hero-cta .btn-secondary, .join-card .btn-primary'
  );
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener('mousemove', (e) => {
      const rect  = button.getBoundingClientRect();
      const moveX = (e.clientX - rect.left - rect.width  / 2) * 0.08;
      const moveY = (e.clientY - rect.top  - rect.height / 2) * 0.08;
      button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }, { passive: true });

    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });
}


/* ================================================================
   6. FORM MODAL
================================================================ */

function initFormModal() {
  const openBtns    = document.querySelectorAll('#open-form, #open-form-2, #open-form-footer');
  const modal       = document.getElementById('formModal');
  const closeOverlay = document.getElementById('closeForm');
  const closeBtn    = document.getElementById('closeFormBtn');

  if (!openBtns.length || !modal) return;

  function openModal(e) {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus the close button for accessibility
    setTimeout(() => closeBtn && closeBtn.focus(), 100);
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach((btn) => btn.addEventListener('click', openModal));

  if (closeOverlay) closeOverlay.addEventListener('click', closeModal);
  if (closeBtn)     closeBtn.addEventListener('click', closeModal);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}


/* ================================================================
   7. FOUNDER SECTION
================================================================ */

function initFounderSection() {
  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  /* ── 1. MAGNETIC BUTTONS (founder-specific) ── */
  if (!isTouchDevice && !prefersReducedMotion) {
    document.querySelectorAll('.founder-btn-magnetic').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect  = btn.getBoundingClientRect();
        const moveX = (e.clientX - rect.left - rect.width  / 2) * 0.1;
        const moveY = (e.clientY - rect.top  - rect.height / 2) * 0.1;
        btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }, { passive: true });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ── 2. PARALLAX ON FOUNDER PHOTO (desktop only) ── */
  const founderPhoto   = document.querySelector('.founder-photo');
  const founderSection = document.getElementById('team');

  if (founderPhoto && founderSection && !isTouchDevice && !prefersReducedMotion) {
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect    = founderSection.getBoundingClientRect();
          const windowH = window.innerHeight;

          if (rect.top < windowH && rect.bottom > 0) {
            const progress = (windowH - rect.top) / (windowH + rect.height);
            // Clamp and reduce range to avoid jarring motion
            const yShift = (Math.min(Math.max(progress, 0), 1) - 0.5) * 30;
            // Combine with existing float animation via CSS var
            founderPhoto.style.setProperty('--parallax-y', `${-yShift}px`);
            // Use a non-competing transform axis
            founderPhoto.style.translate = `0 ${-yShift}px`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── 3. HOVER GLOW on credibility pills ── */
  if (!isTouchDevice) {
    document.querySelectorAll('.founder-cred-pill').forEach((pill) => {
      pill.addEventListener('mousemove', (e) => {
        const rect = pill.getBoundingClientRect();
        const x    = ((e.clientX - rect.left) / rect.width)  * 100;
        const y    = ((e.clientY - rect.top)  / rect.height) * 100;
        pill.style.background =
          `radial-gradient(circle at ${x}% ${y}%, rgba(124,58,237,0.15) 0%, rgba(17,17,17,0.9) 70%)`;
      }, { passive: true });
      pill.addEventListener('mouseleave', () => {
        pill.style.background = '';
      });
    });
  }

  /* ── 4. SOCIAL ICON STAGGER ON REVEAL ── */
  const founderSocials = document.querySelectorAll('.founder-social-icon');
  if (!founderSocials.length) return;

  // Set initial hidden state
  founderSocials.forEach((icon) => {
    icon.style.opacity   = '0';
    icon.style.transform = 'translateY(12px)';
    icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const socialsRow = document.querySelector('.founder-socials');
  if (!socialsRow) return;

  const socialObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        founderSocials.forEach((icon, i) => {
          setTimeout(() => {
            icon.style.opacity   = '1';
            icon.style.transform = 'translateY(0)';
          }, prefersReducedMotion ? 0 : i * 80);
        });
        socialObserver.disconnect();
      });
    },
    { threshold: 0.4 }
  );

  socialObserver.observe(socialsRow);
}


/* ================================================================
   8. SMOOTH ANCHOR SCROLLING
   Accounts for fixed nav height
================================================================ */

function initSmoothAnchors() {
  const NAV_HEIGHT = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '68',
    10
  );

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      const targetY = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 16;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });

      // Update URL without scroll jump
      history.pushState(null, '', hash);
    });
  });
}


/* ================================================================
   INIT
================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initCounters();
  initNavScroll();
  initMobileMenu();
  initMagneticButtons();
  initFormModal();
  initFounderSection();
  initSmoothAnchors();
});
