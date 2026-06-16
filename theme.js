// Light/dark mode toggle. The early-init script in each page's <head> sets the
// initial `.dark` class on <html> (stored choice, else system preference) before
// paint; this just handles the click and persists the new choice.
(function () {
  function attach() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isDark = document.documentElement.classList.toggle('dark');
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch (e) {}
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();
