/* ==========================================================
   mocks.js : maquettes décoratives des projets « vedettes »
   Référencées dans content.js via  mock: "doc"  ou  mock: "pdf"
   ========================================================== */
(function () {
  'use strict';
  var P = window.Portfolio;

  P.MOCKS = {
    doc:
      '<div class="mock" aria-hidden="true">' +
        '<div class="mock-bar"><i></i><i></i><i></i></div>' +
        '<div class="mock-body">' +
          '<div class="ln w80"></div>' +
          '<div class="ln w60"><span class="caret"><b>A</b></span></div>' +
          '<div class="ln w90"></div>' +
          '<div class="ln w50"><span class="caret c2"><b>B</b></span></div>' +
          '<div class="ln w70"></div>' +
        '</div>' +
        '<div class="chat"><span>Section 2 relue</span><span class="me">Merci, je valide</span></div>' +
      '</div>',

    pdf:
      '<div class="mock" aria-hidden="true">' +
        '<div class="mock-bar"><i></i><i></i><i></i></div>' +
        '<div class="mock-body">' +
          '<div class="pdf-head"><div class="ln w40"></div><span class="pdf-badge">PDF</span></div>' +
          '<div class="pdf-row"><div class="ln"></div><div class="ln w90"></div></div>' +
          '<div class="pdf-row"><div class="ln"></div><div class="ln w70"></div></div>' +
          '<div class="pdf-row"><div class="ln"></div><div class="ln w80"></div></div>' +
          '<div class="pdf-row"><div class="ln"></div><div class="ln w60"></div></div>' +
          '<div class="pdf-sign"></div>' +
        '</div>' +
      '</div>'
  };
})();
