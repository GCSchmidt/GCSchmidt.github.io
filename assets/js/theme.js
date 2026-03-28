const THEME_KEY = 'gcschmidt-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

export function getTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === DARK_THEME || stored === LIGHT_THEME) {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME;
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

export function toggleTheme() {
  const current = getTheme();
  setTheme(current === DARK_THEME ? LIGHT_THEME : DARK_THEME);
}

export function initTheme() {
  const theme = getTheme();
  setTheme(theme);
}
