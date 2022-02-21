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

try{const sliderThumbs = new Swiper('.slider-thumbs', {
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
  loopedSlides: 3,
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;

const video = document.querySelectorAll('video');

sliderMain.on('slideChange', () => {
  for(let i = 0; i < video.length; i+= 1) {
    video[i].pause();
  }
});

const pagination = document.querySelector('.pagination');
const paginBtn = document.querySelector('.pagination__arrow');

paginBtn.addEventListener('click', () => {
  pagination.classList.toggle('pagination_active')
});

}catch {
  
}


// ________AUDIO____CHECKBOX___
  try{const mute = document.querySelector('.mute-box__checkbox');
  const audio = new Audio('./assets/audio/waterTower.mp3');

  mute.addEventListener('change', () => {
    if(mute.checked) {
      audio.play();
    }else{
      audio.pause();
    }
  });} catch {

  }
