/* BEE TECHNOLOGY: logo preloader (shown once per browser session) */
(function () {
  "use strict";
  var root = document.documentElement;
  var pl = document.getElementById("preloader");
  if (!pl) return;
  if (!root.classList.contains("pl")) { pl.remove(); return; }

  var MIN = 2400;   // let the drawing animation finish
  var MAX = 4500;   // never keep visitors waiting longer than this
  var start = performance.now();
  var finished = false;

  function finish() {
    if (finished) return;
    finished = true;
    root.classList.add("pl-go");     // hero animation starts as the overlay fades
    pl.classList.add("hide");
    setTimeout(function () {
      root.classList.remove("pl");   // unlock scrolling
      pl.remove();
    }, 700);
  }

  function whenReady() {
    var wait = Math.max(0, MIN - (performance.now() - start));
    setTimeout(finish, wait);
  }

  setTimeout(finish, MAX);
  if (document.readyState === "complete") whenReady();
  else window.addEventListener("load", whenReady);
})();
