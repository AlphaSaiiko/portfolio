/* ==========================================================================
   Rendu des textes simples et de la navigation.

   Dans index.html :
     data-text="chemin.dans.content"        -> remplit le texte de l'élément
     data-href="chemin.dans.content"        -> remplit l'attribut href
     data-aria-label="chemin.dans.content"  -> remplit l'attribut aria-label
   ========================================================================== */

(function (P) {
  'use strict';
  var h = P.h;

  function bind(C, attr, apply) {
    document.querySelectorAll('[data-' + attr + ']').forEach(function (el) {
      var value = P.get(C, el.getAttribute('data-' + attr));
      if (value == null) {
        console.warn('[content] clé introuvable :', el.getAttribute('data-' + attr));
        return;
      }
      apply(el, value);
    });
  }

  P.renderStatic = function (C) {
    document.documentElement.lang = C.site.lang;
    document.title = C.site.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', C.site.description);

    bind(C, 'text', function (el, v) { el.textContent = v; });
    bind(C, 'href', function (el, v) { el.setAttribute('href', v); });
    bind(C, 'aria-label', function (el, v) { el.setAttribute('aria-label', v); });

    // Menu : les liens sont insérés avant le bouton de thème
    var nav = document.getElementById('nav');
    var themeBtn = document.getElementById('theme');
    C.nav.forEach(function (item) {
      nav.insertBefore(
        h('a', { href: item.href, class: item.cta ? 'nav-cta' : '', text: item.label }),
        themeBtn
      );
    });

    // Nom (une ligne par élément)
    var name = document.getElementById('hero-name');
    C.hero.nameLines.forEach(function (line) { name.appendChild(h('span', { text: line })); });

    // Boutons d'action de l'accueil
    var actions = document.getElementById('hero-actions');
    C.hero.actions.forEach(function (a) {
      actions.appendChild(h('a', { class: 'btn btn-' + a.style, href: a.href, text: a.label }));
    });

    // Paragraphes de contact + bouton e-mail
    var paras = document.getElementById('contact-paragraphs');
    C.contact.paragraphs.forEach(function (t) { paras.appendChild(h('p', { text: t })); });
    document.getElementById('mail-btn').setAttribute('href', 'mailto:' + C.contact.email);

    // Lien « tous mes dépôts »
    var more = document.getElementById('github-more');
    more.appendChild(
      h('a', { class: 'btn btn-ghost', href: C.projects.github.url, target: '_blank', rel: 'noopener noreferrer' },
        P.svg(P.icons.github),
        C.projects.github.label
      )
    );
  };
})(window.Portfolio);
