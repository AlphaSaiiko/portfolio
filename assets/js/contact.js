/* ==========================================================================
   Contact : copie de l'adresse e-mail dans le presse-papiers
   ========================================================================== */

(function (P) {
  'use strict';

  P.initContact = function (C) {
    var cfg = C.contact;
    var btn = document.getElementById('copy');
    var emailEl = document.getElementById('email');

    function flash(label) {
      btn.textContent = label;
      setTimeout(function () { btn.textContent = cfg.copyLabel; }, 1800);
    }

    function fallback() {
      var range = document.createRange();
      range.selectNodeContents(emailEl);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      flash(cfg.selectedLabel);
    }

    btn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cfg.email).then(function () { flash(cfg.copiedLabel); }, fallback);
      } else {
        fallback();
      }
    });
  };
})(window.Portfolio);
