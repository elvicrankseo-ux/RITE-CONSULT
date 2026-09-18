(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Header state on scroll
     ------------------------------------------------------------------ */
  var header = document.getElementById('site-header');

  function updateHeaderState() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  /* ------------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------------ */
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var menuLinks = menu.querySelectorAll('a');
  var DESKTOP_BREAKPOINT = 960;

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');

    var firstLink = menu.querySelector('a');
    if (firstLink) firstLink.focus();

    document.addEventListener('keydown', onKeydown);
  }

  function closeMenu(returnFocus) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');

    document.removeEventListener('keydown', onKeydown);

    if (returnFocus) toggle.focus();
  }

  function onKeydown(event) {
    if (event.key === 'Escape') {
      closeMenu(true);
    }
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu(false);
    });
  });

  // If the viewport grows into the desktop breakpoint while the menu
  // is open, close it so state never gets stuck.
  window.addEventListener('resize', function () {
    if (window.innerWidth >= DESKTOP_BREAKPOINT) {
      closeMenu(false);
    }
  });
})();
