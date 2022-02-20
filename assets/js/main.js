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


// ________SWIPER_________

const sliderThumbs = new Swiper('.slider-thumbs', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  // width: 1000,
});

sliderThumbs.on('click', (swiper) => {
  swiper.slideTo(swiper.clickedIndex)
});

const sliderMain = new Swiper('.slider-main', {
  loop: true,
  spaceBetween: 10,
  loopedSlides: 4,
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;