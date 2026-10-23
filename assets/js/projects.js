/* ==========================================================================
   Projets : cartes + filtres par catégorie
   ========================================================================== */

(function (P) {
  'use strict';
  var h = P.h;

  function buildTextBlock(p, tagsLabel) {
    var nodes = [
      h('p', { class: 'kind', text: p.kind }),
      h('h3', { text: p.title }),
      h('p', { class: 'desc', text: p.description })
    ];

    if (p.points && p.points.length) {
      var ul = h('ul', { class: 'points' });
      p.points.forEach(function (t) { ul.appendChild(h('li', { text: t })); });
      nodes.push(ul);
    }

    var tags = h('ul', { class: 'tags', 'aria-label': tagsLabel });
    p.tags.forEach(function (t) { tags.appendChild(h('li', { text: t })); });
    nodes.push(tags);

    if (p.links && p.links.length) {
      var links = h('div', { class: 'links' });
      p.links.forEach(function (l) {
        links.appendChild(
          h('a', { class: 'link', href: l.url, target: '_blank', rel: 'noopener noreferrer' },
            l.label, P.svg(P.icons.external))
        );
      });
      nodes.push(links);
    }
    return nodes;
  }

  function buildCard(p, tagsLabel) {
    var card = h('article', { class: 'card' + (p.feat ? ' card--feat' : '') });
    var content = buildTextBlock(p, tagsLabel);

    if (p.feat) {
      var text = h('div', { class: 'feat-text' });
      content.forEach(function (n) { text.appendChild(n); });
      var split = h('div', { class: 'feat-split' }, text, P.buildMock(p.mock));
      card.appendChild(split);
    } else {
      content.forEach(function (n) { card.appendChild(n); });
    }
    return card;
  }

  P.initProjects = function (C) {
    var cfg = C.projects;
    var grid = document.getElementById('grid');
    var filters = document.getElementById('filters');
    var current = 'all';

    function render() {
      grid.classList.toggle('filtered', current !== 'all');
      P.clear(grid);
      cfg.items
        .filter(function (p) { return current === 'all' || p.categories.indexOf(current) > -1; })
        .forEach(function (p) { grid.appendChild(buildCard(p, cfg.tagsLabel)); });

      Array.prototype.forEach.call(filters.children, function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.filter === current));
      });
    }

    cfg.filters.forEach(function (f) {
      var b = h('button', { type: 'button', class: 'chip', text: f.label });
      b.dataset.filter = f.id;
      b.addEventListener('click', function () { current = f.id; render(); });
      filters.appendChild(b);
    });

    render();
  };
})(window.Portfolio);
