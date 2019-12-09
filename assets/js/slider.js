window.onload = function() {
  let swiper = new Swiper('.slider-ingredientes', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.slider-ingredientes-pagination',
      clickable: true,
    },
  });
}