const toggle = document.querySelector('.toggle');
const topbar = document.querySelector('.topbar');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');
const themeSwitch = document.querySelector('.themeSwitch');
const body = document.querySelector('body');

toggle.onclick = () => {
  toggle.classList.toggle('active');
  topbar.classList.toggle('active');
  navigation.classList.toggle('active');
  main.classList.toggle('active');
}

const toggleMenu = () => {
  toggle.classList.remove('active');
  topbar.classList.remove('active')
  navigation.classList.remove('active');
  main.classList.remove('active');
};

themeSwitch.onclick = () => {
  body.classList.toggle('dark');
}
