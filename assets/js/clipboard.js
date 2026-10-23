/* ==========================================================
   clipboard.js : bouton « Copier » l'adresse e-mail
   ========================================================== */
(function () {
  'use strict';
  var P = window.Portfolio;

  P.initClipboard = function () {
    var btn = P.byId('copy');
    var emailEl = P.byId('email');
    var labels = {
      copy: P.get('contact.copyLabel', 'Copier'),
      done: P.get('contact.copiedLabel', 'Copié'),
      sel:  P.get('contact.selectedLabel', 'Sélectionné')
    };

    function flash(text) {
      btn.textContent = text;
      setTimeout(function () { btn.textContent = labels.copy; }, 1800);
    }
    function fallback() {
      var range = document.createRange();
      range.selectNodeContents(emailEl);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      flash(labels.sel);
    }

    btn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailEl.textContent.trim())
          .then(function () { flash(labels.done); }, fallback);
      } else {
        fallback();
      }
    });
  };
})();
