(function() {
  var toggle = document.getElementById("nav-toggle");
  var panel = document.getElementById("nav-panel");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", function() {
    var open = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });

  panel.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();
