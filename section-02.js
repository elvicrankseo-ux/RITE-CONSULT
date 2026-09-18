/* ==========================================================================
   SECTION 02 — Core Philosophy + Technology Problem Advisor
   Append this entire block to the END of the existing script.js, AFTER the
   final "})();" line already there. This is its own self-contained IIFE,
   so it does not touch or depend on the Section 01 script above it.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Philosophy flow — one-time reveal when it scrolls into view
     ------------------------------------------------------------------ */
  var flow = document.querySelector('.flow');

  if (flow && !reduceMotion && 'IntersectionObserver' in window) {
    flow.classList.add('flow--animate');

    var flowObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          flowObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    flowObserver.observe(flow);
  }

  /* ------------------------------------------------------------------
     Problem Advisor — accessible, exclusive accordion
     ------------------------------------------------------------------ */
  var problemOptions = document.querySelectorAll('.problem__option');

  problemOptions.forEach(function (button) {
    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';

      // Close every option first, so only one is ever open at a time.
      problemOptions.forEach(function (otherButton) {
        var otherPanel = document.getElementById(otherButton.getAttribute('aria-controls'));
        otherButton.setAttribute('aria-expanded', 'false');
        if (otherPanel) {
          otherPanel.classList.remove('is-open');
          otherPanel.inert = true;
        }
      });

      // Re-open the clicked option, unless it was the one already open
      // (clicking an open option closes it back down).
      if (!isOpen) {
        var panel = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', 'true');
        if (panel) {
          panel.classList.add('is-open');
          panel.inert = false;
        }
      }
    });
  });
})();
