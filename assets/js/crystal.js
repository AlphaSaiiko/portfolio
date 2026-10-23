/* ==========================================================================
   Cristal 3D de l'accueil (Three.js)
   Si WebGL ou Three.js est indisponible, le bloc est simplement masqué.
   ========================================================================== */

(function (P) {
  'use strict';

  P.initCrystal = function () {
    var host = document.getElementById('crystal');
    if (!host) return;
    if (!window.THREE) { host.hidden = true; return; }

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var root = document.documentElement;
    var renderer;

    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
    catch (e) { host.hidden = true; return; }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.setAttribute('aria-hidden', 'true');
    host.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0, 8);
    var group = new THREE.Group();
    scene.add(group);

    /* ---- Formes ---- */
    var outer = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.1, 1)),
      new THREE.LineBasicMaterial({ transparent: true, opacity: 0.95 })
    );
    var inner = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.OctahedronGeometry(1.1, 0)),
      new THREE.LineBasicMaterial({ transparent: true, opacity: 0.6 })
    );
    var ring = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.014, 8, 180),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.55 })
    );
    ring.rotation.x = Math.PI / 2.6;

    var N = 150, pos = new Float32Array(N * 3);
    for (var i = 0; i < N; i++) {
      var u = Math.random() * 2 - 1;
      var th = Math.random() * Math.PI * 2;
      var r = 3.5 + Math.random() * 1.3;
      var s = Math.sqrt(1 - u * u);
      pos[i * 3]     = r * s * Math.cos(th);
      pos[i * 3 + 1] = r * u;
      pos[i * 3 + 2] = r * s * Math.sin(th);
    }
    var pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    var pts = new THREE.Points(pg, new THREE.PointsMaterial({ size: 0.045, transparent: true, opacity: 0.75 }));

    group.add(outer, inner, ring, pts);

    /* ---- Couleurs liées au thème ---- */
    function draw() { renderer.render(scene, camera); }

    function colors() {
      var cs = getComputedStyle(root);
      var accent = cs.getPropertyValue('--accent').trim();
      var muted = cs.getPropertyValue('--muted').trim();
      outer.material.color.set(accent);
      inner.material.color.set(accent);
      ring.material.color.set(muted);
      pts.material.color.set(muted);
      if (reduce) draw();
    }

    function size() {
      var w = host.clientWidth, h = host.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (reduce) draw();
    }

    /* ---- Animation ---- */
    var tx = 0, ty = 0, rx = 0, ry = 0, running = true, t0 = performance.now();

    window.addEventListener('pointermove', function (e) {
      var b = host.getBoundingClientRect();
      tx = (e.clientX - b.left) / b.width - 0.5;
      ty = (e.clientY - b.top) / b.height - 0.5;
    }, { passive: true });

    function frame(now) {
      if (!running) return;
      var t = (now - t0) / 1000;
      rx += (tx * 0.9 - rx) * 0.05;
      ry += (ty * 0.5 - ry) * 0.05;
      group.rotation.y = t * 0.18 + rx;
      group.rotation.x = Math.sin(t * 0.3) * 0.15 + ry;
      ring.rotation.z = t * 0.1;
      draw();
      requestAnimationFrame(frame);
    }

    colors();
    size();

    if ('ResizeObserver' in window) new ResizeObserver(size).observe(host);
    else window.addEventListener('resize', size);

    new MutationObserver(colors).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', colors);

    if (reduce) { draw(); return; }
    requestAnimationFrame(frame);

    // Pause quand le cristal n'est plus visible
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        var visible = entries[0].isIntersecting;
        if (visible && !running) { running = true; requestAnimationFrame(frame); }
        else if (!visible) { running = false; }
      }).observe(host);
    }
  };
})(window.Portfolio);
