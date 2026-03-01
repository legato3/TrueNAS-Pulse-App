(function() {
  const KEY = "pulse_theme";
  const root = document.documentElement;

  function applyTheme(value){
    if (!value) {
      root.removeAttribute("data-theme");
      return;
    }
    root.setAttribute("data-theme", value);
  }

  const saved = localStorage.getItem(KEY);
  applyTheme(saved);

  window.PulseTheme = {
    toggle: function(){
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : current === "light" ? null : "dark";
      if (next === null) localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, next);
      applyTheme(next);
      window.location.reload(); // simplest to ensure CSS refresh
    }
  };
})();
