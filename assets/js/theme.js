/* ==========================================================================
   Bascule thème clair / sombre (mémorisée dans le navigateur)
   ========================================================================== */

(function (P) {
  'use strict';

  var root = document.documentElement;

  P.effectiveTheme = function () {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  P.initTheme = function () {
    document.getElementById('theme').addEventListener('click', function () {
      var next = P.effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* stockage indisponible */ }
    });
  };
})(window.Portfolio);
