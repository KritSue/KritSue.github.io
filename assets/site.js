const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

function updateToggle() {
  const dark = root.dataset.theme === 'dark' ||
    (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
  toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  toggle.title = `Switch to ${dark ? 'light' : 'dark'} theme`;
}
updateToggle();
toggle.addEventListener('click', () => {
  const dark = getComputedStyle(root).colorScheme === 'dark';
  root.dataset.theme = dark ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', root.dataset.theme);
  updateToggle();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateToggle);
document.querySelector('#year').textContent = new Date().getFullYear();
