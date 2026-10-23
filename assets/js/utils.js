/* ==========================================================================
   Utilitaires partagés. Tout le code du site vit dans l'espace de noms
   window.Portfolio pour éviter de polluer l'espace global.
   ========================================================================== */

window.Portfolio = window.Portfolio || {};

(function (P) {
  'use strict';

  /** Lit une valeur imbriquée : get(obj, "hero.status"). */
  P.get = function (obj, path) {
    return path.split('.').reduce(function (o, k) {
      return o == null ? undefined : o[k];
    }, obj);
  };

  /**
   * Crée un élément DOM.
   * h('a', { class: 'link', href: '#x' }, 'texte', autreNoeud)
   */
  P.h = function (tag, attrs) {
    var el = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === false || v == null) return;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else el.setAttribute(k, v);
    });
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    }
    return el;
  };

  /** Transforme une chaîne SVG de confiance (icons.js) en élément. */
  P.svg = function (markup) {
    var t = document.createElement('template');
    t.innerHTML = markup.trim();
    return t.content.firstChild;
  };

  /** Vide un élément. */
  P.clear = function (el) {
    while (el.firstChild) el.removeChild(el.firstChild);
  };
})(window.Portfolio);
