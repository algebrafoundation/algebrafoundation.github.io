/* Algebra Foundation — main.js
   Isinya empat hal: menu mobile, animasi masuk, garis header saat di-scroll,
   dan cadangan kalau file logo belum diletakkan di assets/img/logo.png.

   Semua animasi sifatnya tambahan. Kalau JavaScript gagal jalan,
   seluruh isi halaman tetap terbaca. */

(function () {
  'use strict';

  function all(sel) {
    return Array.prototype.slice.call(document.querySelectorAll(sel));
  }

  function tampilkanSemua() {
    all('.reveal').forEach(function (el) { el.classList.add('is-in'); });
    var lg = document.getElementById('ledger');
    if (lg) lg.classList.add('is-on');
  }

  /* Jaring pengaman: apa pun yang terjadi, dalam 2,5 detik semua isi terlihat. */
  window.setTimeout(tampilkanSemua, 2500);

  try {
    /* --- Menu mobile --- */
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');

    if (burger && nav) {
      burger.addEventListener('click', function () {
        var open = nav.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
      });

      nav.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          nav.classList.remove('is-open');
          burger.setAttribute('aria-expanded', 'false');
          burger.setAttribute('aria-label', 'Buka menu');
        }
      });
    }

    /* --- Garis bawah header muncul setelah di-scroll --- */
    var topbar = document.getElementById('topbar');
    if (topbar) {
      var onScroll = function () {
        if (window.scrollY > 8) topbar.classList.add('is-stuck');
        else topbar.classList.remove('is-stuck');
      };
      window.addEventListener('scroll', onScroll);
      onScroll();
    }

    /* --- Animasi elemen saat masuk layar --- */
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      tampilkanSemua();
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(entry.target.id === 'ledger' ? 'is-on' : 'is-in');
          io.unobserve(entry.target);
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      all('.reveal').forEach(function (el, i) {
        el.style.transitionDelay = (i * 90) + 'ms';
        io.observe(el);
      });

      var ledger = document.getElementById('ledger');
      if (ledger) io.observe(ledger);
    }

    /* --- Slot foto yang belum diisi tampil sebagai panel bermotif --- */
    all('.foto').forEach(function (box) {
      var img = box.querySelector('img');
      if (!img) { box.classList.add('is-empty'); return; }
      var kosong = function () { box.classList.add('is-empty'); };
      img.addEventListener('error', kosong);
      img.addEventListener('load', function () { box.classList.remove('is-empty'); });
      if (img.complete && img.naturalWidth === 0) kosong();
    });

    /* --- Tahun otomatis di footer --- */
    var tahun = document.getElementById('tahun');
    if (tahun) tahun.textContent = new Date().getFullYear();

  } catch (err) {
    tampilkanSemua();
  }
})();
