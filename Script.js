// ============================================================
//  SHUB — script.js
//  Navigation multi-pages + interactions
// ============================================================

// ── Navigation entre pages ───────────────────────────────────
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const activeLink = document.querySelector(`.nav-link[onclick*="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');

  closeMenu();
}

// ── Menu burger mobile ────────────────────────────────────────
function toggleMenu() {
  const links = document.getElementById('nav-links');
  const burger = document.getElementById('burger');
  links.classList.toggle('open');
  burger.classList.toggle('open');
}

function closeMenu() {
  document.getElementById('nav-links').classList.remove('open');
  document.getElementById('burger').classList.remove('open');
}

// ── Scroll navbar shadow ──────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── Fermer menu si clic en dehors ────────────────────────────
document.addEventListener('click', (e) => {
  const nav = document.getElementById('nav-links');
  const burger = document.getElementById('burger');
  if (nav && nav.classList.contains('open')) {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  }
});

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showPage('accueil');
});