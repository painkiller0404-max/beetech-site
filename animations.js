/* BEE TECHNOLOGY: animations (scroll reveals, count-up, header, scroll-spy, language fade) */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---- Header: shadow + shrink after scrolling ---- */
  var header = document.querySelector(".header");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Stagger delays for grouped items ---- */
  document.querySelectorAll(".grid").forEach(function (grid) {
    var cols = grid.classList.contains("four") ? 4 : 3;
    Array.prototype.forEach.call(grid.children, function (c, i) {
      c.style.setProperty("--d", ((i % cols) * 0.1).toFixed(2) + "s");
    });
  });
  document.querySelectorAll(".stats").forEach(function (list) {
    Array.prototype.forEach.call(list.children, function (c, i) {
      c.style.setProperty("--d", (i * 0.12).toFixed(2) + "s");
    });
  });

  /* ---- Count-up for the 01..04 numbers ---- */
  function countUp(el) {
    if (!el || reduce) return;
    var target = parseInt(el.textContent, 10);
    if (isNaN(target)) return;
    var start = null, dur = 900;
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    el.textContent = pad(0);
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = pad(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---- Scroll reveals ---- */
  var items = document.querySelectorAll(".reveal");
  function show(el) {
    el.classList.add("in");
    var delay = parseFloat(el.style.getPropertyValue("--d")) || 0;
    setTimeout(function () { el.classList.add("done"); }, 900 + delay * 1000);
    if (el.classList.contains("why")) countUp(el.querySelector(".num"));
  }
  if (reduce || !hasIO) {
    items.forEach(function (el) { el.classList.add("in", "done"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          show(en.target);
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---- Scroll-spy: highlight the current section in the menu ---- */
  var links = {};
  document.querySelectorAll(".menu a").forEach(function (a) {
    links[a.getAttribute("href")] = a;
  });
  function clearActive() {
    Object.keys(links).forEach(function (k) { links[k].classList.remove("active"); });
  }
  if (hasIO) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          clearActive();
          var l = links["#" + en.target.id];
          if (l) l.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["services", "about", "why", "contact"].forEach(function (id) {
      var s = document.getElementById(id);
      if (s) spy.observe(s);
    });
    window.addEventListener("scroll", function () {
      if (window.scrollY < 200) clearActive();
    }, { passive: true });
  }

  /* ---- Language switch: quick fade between languages ---- */
  var langBox = document.querySelector(".lang");
  if (langBox) {
    langBox.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      e.stopPropagation(); // replace script.js's direct handler with a faded one
      var lang = btn.getAttribute("data-lang");
      if (reduce || lang === document.documentElement.lang) {
        applyLang(lang);
        return;
      }
      document.body.classList.add("lang-switching");
      setTimeout(function () {
        applyLang(lang);
        requestAnimationFrame(function () {
          document.body.classList.remove("lang-switching");
        });
      }, 180);
    }, true);
  }
})();
