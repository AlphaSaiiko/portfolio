/* ==========================================================================
   Maquettes décoratives des grandes cartes de projet.
   Types disponibles : "doc" (éditeur collaboratif) et "pdf" (rapport PDF).
   ========================================================================== */

(function (P) {
  'use strict';
  var h = P.h;

  function windowBar() {
    return h('div', { class: 'mock-bar' }, h('i'), h('i'), h('i'));
  }

  function line(width, extra) {
    return h('div', { class: 'ln ' + (width || '') }, extra);
  }

  function caret(letter, second) {
    return h('span', { class: 'caret' + (second ? ' c2' : '') }, h('b', { text: letter }));
  }

  function docMock(m) {
    var carets = m.carets || ['A', 'B'];
    var body = h('div', { class: 'mock-body' },
      line('w80'),
      line('w60', caret(carets[0], false)),
      line('w90'),
      line('w50', caret(carets[1], true)),
      line('w70')
    );
    var chat = h('div', { class: 'chat' });
    (m.chat || []).forEach(function (msg) {
      chat.appendChild(h('span', { class: msg.mine ? 'me' : '', text: msg.text }));
    });
    return h('div', { class: 'mock', 'aria-hidden': 'true' }, windowBar(), body, chat);
  }

  function pdfRow(width) {
    return h('div', { class: 'pdf-row' }, line(), line(width));
  }

  function pdfMock(m) {
    var body = h('div', { class: 'mock-body' },
      h('div', { class: 'pdf-head' }, line('w40'), h('span', { class: 'pdf-badge', text: m.badge || 'PDF' })),
      pdfRow('w90'),
      pdfRow('w70'),
      pdfRow('w80'),
      pdfRow('w60'),
      h('div', { class: 'pdf-sign' })
    );
    return h('div', { class: 'mock', 'aria-hidden': 'true' }, windowBar(), body);
  }

  P.buildMock = function (mock) {
    if (!mock) return null;
    if (mock.type === 'doc') return docMock(mock);
    if (mock.type === 'pdf') return pdfMock(mock);
    return null;
  };
})(window.Portfolio);
