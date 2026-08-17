(function () {
  "use strict";

  var nav = document.getElementById("siteNav");
  var railFill = document.getElementById("railFill");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    // nav blur state
    if (nav) {
      if (y > 20) nav.classList.add("is-scrolled");
      else nav.classList.remove("is-scrolled");
    }

    // scroll progress rail
    if (railFill) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0;
      railFill.style.height = pct + "%";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
