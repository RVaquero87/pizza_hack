function sliderLoad() {
  let swiper = new Swiper('.slider-ingredientes', {
    slidesPerView: 3,
    spaceBetween: 20,
    //loop: true,
    preventClicks: 1,
    preloadImages: 1,
    breakpoints: {
      960: {
        slidesPerView: 4,
        spaceBetween: 10,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}