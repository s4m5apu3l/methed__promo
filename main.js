const burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.header__nav');
let menuOpen = false;

burger.addEventListener('click', () => {
  if(!menuOpen) {
    burger.classList.add('is-active');
    menuOpen = true;
    menu.classList.add('header__nav-active');
  } else {
    burger.classList.remove('is-active');
    menuOpen = false;
    menu.classList.remove('header__nav-active');
  }
})

function closeMenu() {
  menu.classList.remove('header__nav-active');
  burger.classList.remove('is-active');
}