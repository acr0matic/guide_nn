
if (isMobile) {
  const tour = new Swiper('.slider-tour', {
    slidesPerView: 1.1,
    speed: 300,
    spaceBetween: 16,
    autoHeight: true,
  });
}

const feedback = new Swiper('.slider-feedback', {
  slidesPerView: 1.1,
  speed: 300,
  spaceBetween: 16,
  autoHeight: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '#feedback .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
  }
});

const gallery = new Swiper('.slider-gallery', {
  slidesPerView: 1,
  speed: 300,
  spaceBetween: 16,

  pagination: {
    el: '#modal-tour .swiper-pagination',
    clickable: true,
  },
});

const modalSlider = new Swiper('.slider-modal', {
  slidesPerView: 1,
  speed: 300,
  spaceBetween: 16,
  allowTouchMove: false,
  simulateTouch: false,
  autoHeight: true,

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});