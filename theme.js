try {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.dataset.theme = 'light';
  }
} catch (error) {
  // The toggle still works when browser storage is unavailable.
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.theme-toggle');
  if (!button) return;

  const updateButton = () => {
    const light = document.documentElement.dataset.theme === 'light';
    button.setAttribute('aria-pressed', String(light));
    button.textContent = light ? 'Use dark palette' : 'Try light palette';
  };

  updateButton();
  button.addEventListener('click', () => {
    const light = document.documentElement.dataset.theme !== 'light';
    if (light) {
      document.documentElement.dataset.theme = 'light';
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem('theme', light ? 'light' : 'dark');
    } catch (error) {
      // Keep the current palette even if the preference cannot be saved.
    }
    updateButton();
  });
});
