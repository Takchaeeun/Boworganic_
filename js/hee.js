//==== 희승 영역 ====
window.onload = function () {
  // ==== 뉴스 swiper
  var swiper = new Swiper(".swNews", {
    slidesPerView: 3.6,
    spaceBetween: 50,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 맞춤사료
};
