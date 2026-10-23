/* ==========================================================================
   Jauge du stage : une barre par semaine + compte à rebours
   ========================================================================== */

(function (P) {
  'use strict';
  var h = P.h;

  function daysFrom(iso) {
    var target = new Date(iso + 'T00:00:00');
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.round((target - today) / 86400000);
  }

  P.initInternship = function (C) {
    var cfg = C.internship;

    // Barres
    var weeks = document.getElementById('weeks');
    weeks.setAttribute('aria-label', cfg.gaugeLabel);
    weeks.style.gridTemplateColumns = 'repeat(' + cfg.weeks + ', 1fr)';
    for (var i = 0; i < cfg.weeks; i++) {
      var bar = h('i', { title: cfg.weekLabel + ' ' + (i + 1) });
      bar.style.setProperty('--i', i);
      weeks.appendChild(bar);
    }

    // Compte à rebours
    var el = document.getElementById('countdown');
    var start = daysFrom(cfg.start.iso);
    var end = daysFrom(cfg.end.iso);
    var text = cfg.countdown.default;

    if (start > 1) text = cfg.countdown.upcoming.replace('{days}', start);
    else if (start === 1) text = cfg.countdown.tomorrow;
    else if (end >= 0) text = cfg.countdown.ongoing;

    el.textContent = text;
  };
})(window.Portfolio);
