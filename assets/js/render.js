/* ==========================================================
   render.js : injecte le texte de content.js dans la page
   - attributs data-text="chemin"  -> textContent
   - attributs data-aria="chemin"  -> aria-label
   - plus les blocs répétés (nav, parcours, compétences, contact)
   ========================================================== */
(function () {
  'use strict';
  var P = window.Portfolio;

  function bindAttributes() {
    document.querySelectorAll('[data-text]').forEach(function (el) {
      var v = P.get(el.getAttribute('data-text'));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-aria]').forEach(function (el) {
      var v = P.get(el.getAttribute('data-aria'));
      if (v != null) el.setAttribute('aria-label', v);
    });
  }

  function renderMeta() {
    var m = P.get('meta', {});
    if (m.lang) document.documentElement.lang = m.lang;
    if (m.title) document.title = m.title;
    var d = document.querySelector('meta[name="description"]');
    if (d && m.description) d.setAttribute('content', m.description);
  }

  function renderNav() {
    var nav = P.byId('nav');
    var themeBtn = P.byId('theme');
    var html = (P.get('nav.links', [])).map(function (l) {
      return '<a href="' + P.esc(P.safeUrl(l.href)) + '">' + P.esc(l.label) + '</a>';
    }).join('');
    var cta = P.get('nav.cta');
    if (cta) html += '<a class="nav-cta" href="' + P.esc(P.safeUrl(cta.href)) + '">' + P.esc(cta.label) + '</a>';
    themeBtn.insertAdjacentHTML('beforebegin', html);
  }

  function entryHTML(e) {
    var points = e.points && e.points.length
      ? '<ul class="points">' + e.points.map(function (x) { return '<li>' + P.esc(x) + '</li>'; }).join('') + '</ul>'
      : '';
    return '<article class="entry">' +
      '<p class="when">' + P.esc(e.when) + '</p>' +
      '<h3>' + P.esc(e.title) + '</h3>' +
      '<p class="org">' + P.esc(e.org) + '</p>' +
      (e.desc ? '<p class="desc">' + P.esc(e.desc) + '</p>' : '') +
      points + '</article>';
  }

  function renderCareer() {
    P.byId('experience').innerHTML = P.get('career.experience', []).map(entryHTML).join('');
    P.byId('education').innerHTML = P.get('career.education', []).map(entryHTML).join('');
  }

  function renderSkills() {
    P.byId('skills').innerHTML = P.get('skills.items', []).map(function (s) {
      return '<div class="skill"><dt>' + P.esc(s.label) + '</dt><dd>' + P.esc(s.value) + '</dd></div>';
    }).join('');
  }

  function renderContact() {
    var c = P.get('contact', {});
    var copy = P.byId('contact-copy');
    (c.paragraphs || []).forEach(function (t) {
      var p = document.createElement('p');
      p.textContent = t;
      copy.appendChild(p);
    });
    P.byId('email').textContent = c.email || '';
    P.byId('copy').textContent = c.copyLabel || 'Copier';

    var gh = P.byId('github-link');
    gh.href = P.safeUrl(c.githubUrl);
    gh.textContent = c.githubText || c.githubUrl || '';

    var mail = P.byId('mail-cta');
    mail.href = 'mailto:' + (c.email || '');
    mail.textContent = c.mailCta || '';

    var all = P.byId('github-all');
    all.href = P.safeUrl(P.get('projects.githubUrl'));
  }

  P.renderStatic = function () {
    renderMeta();
    bindAttributes();
    renderNav();
    renderCareer();
    renderSkills();
    renderContact();
  };
})();
