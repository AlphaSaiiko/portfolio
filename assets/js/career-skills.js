/* ==========================================================================
   Parcours (expérience, formation) et compétences
   ========================================================================== */

(function (P) {
  'use strict';
  var h = P.h;

  function buildEntry(e) {
    var article = h('article', { class: 'entry' },
      h('p', { class: 'when', text: e.when }),
      h('h3', { text: e.title }),
      h('p', { class: 'org', text: e.org })
    );
    if (e.points) {
      var ul = h('ul', { class: 'points' });
      e.points.forEach(function (t) { ul.appendChild(h('li', { text: t })); });
      article.appendChild(ul);
    }
    if (e.description) article.appendChild(h('p', { class: 'desc', text: e.description }));
    return article;
  }

  function fillColumn(el, column) {
    el.appendChild(h('h3', { class: 'col-title', text: column.title }));
    column.entries.forEach(function (e) { el.appendChild(buildEntry(e)); });
  }

  P.initCareerAndSkills = function (C) {
    fillColumn(document.getElementById('experience'), C.career.experience);
    fillColumn(document.getElementById('education'), C.career.education);

    var skills = document.getElementById('skills');
    C.skills.groups.forEach(function (g) {
      skills.appendChild(
        h('div', { class: 'skill' },
          h('dt', { text: g.label }),
          h('dd', { text: g.items })
        )
      );
    });
  };
})(window.Portfolio);
