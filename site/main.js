// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky nav scroll state
const nav = document.getElementById('nav');
const updateNav = () => {
  if (window.scrollY > 24) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

// Mobile menu
const menuBtn = document.querySelector('.nav__menu');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  mobileNav.hidden = open;
  mobileNav.classList.toggle('is-open', !open);
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
    mobileNav.classList.remove('is-open');
  });
});

// Reveal on scroll — progressive enhancement only.
// Skip entirely if reduced motion, no IntersectionObserver, or non-interactive UA.
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !prefersReduced) {
  const revealTargets = document.querySelectorAll(
    '.section .container--narrow, .specs, .gallery, .finishes, .stones, .style__content, .form'
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealTargets.forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });

  // Safety net: if anything is still hidden after 4s (e.g. headless screenshot tools
  // that don't trigger IO during scroll), force visible.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => el.classList.add('is-visible'));
  }, 4000);
}

// Form: client-side stub (Cloudflare Pages has no built-in form handler).
// Replace with a real endpoint (Cloudflare Worker, Formspree, Resend, etc.) when ready.
window.handleSubmit = function (e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Thank you — we will be in touch.';
  form.reset();
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = 'Send Inquiry';
  }, 5000);
  return false;
};
