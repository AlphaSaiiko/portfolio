/* ==========================================================================
   Point d'entrée : lit content/content.js et construit la page.
   ========================================================================== */

(function (P) {
  'use strict';

  function start() {
    var C = window.SITE_CONTENT;
    if (!C) {
      console.error('content/content.js introuvable ou invalide.');
      return;
    }
    P.renderStatic(C);
    P.initProjects(C);
    P.initCareerAndSkills(C);
    P.initInternship(C);
    P.initTheme();
    P.initContact(C);
    P.initCrystal();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})(window.Portfolio);
