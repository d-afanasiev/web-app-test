const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_THEME = 'theme';
const STORAGE_STATUS = 'chekbox';

const refs = {
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

if (localStorage.getItem(STORAGE_STATUS) === 'true') {
  refs.themeSwitch.checked = localStorage.getItem(STORAGE_STATUS);
  document.body.classList.add(localStorage.getItem(STORAGE_THEME));
}

refs.themeSwitch.addEventListener('change', event => {
  if (refs.themeSwitch.checked) {
    localStorage.setItem([STORAGE_THEME], Theme.DARK);
    localStorage.setItem([STORAGE_STATUS], refs.themeSwitch.checked);
    document.body.classList.remove(`${Theme.LIGHT}`);
    document.body.classList.add(`${Theme.DARK}`);
    return;
  }
  localStorage.setItem([STORAGE_THEME], Theme.LIGHT);
  localStorage.setItem([STORAGE_STATUS], refs.themeSwitch.checked);
  document.body.classList.add(`${Theme.LIGHT}`);
  document.body.classList.remove(`${Theme.DARK}`);
});
