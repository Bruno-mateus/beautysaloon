var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWraperSize: true
    }
  }
})
