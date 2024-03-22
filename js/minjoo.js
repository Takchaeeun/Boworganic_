window.addEventListener("load", function () {
  AOS.init();
  //상단스와이퍼
  var bow = new Swiper(".bow", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  // 제품스와이퍼
  var promotion = new Swiper(".organic", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //   top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(window.scrollY);

    if (window.scrollY == 0) {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    // } else if (window.scrollY == 1000) {
    //   window.scrollTo({
    //     top: 2000,
    //     behavior: "smooth",
    //   });
    // } else if (window.scrollY == 0) {
    //   window.scrollTo({
    //     top: 4000,
    //     behavior: "smooth",
    //   });
    } else {
      window.scrollTo({
        top: 5000,
        behavior: "smooth",
      });
    }
  });
  // 제품 구매하기 버튼 스크롤 기능
  const Promo = document.querySelectorAll("#promo");
  Promo.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const scrollTarget = this.getAttribute("data-scroll");
      window.scrollTo({
        top: scrollTarget,
        behavior: "smooth",
      });
    });
  });
//   document.addEventListener('DOMContentLoaded', function () {
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     const menuLines = document.querySelectorAll('.line');
    
//     hamburgerMenu.addEventListener('click', function () {
//         hamburgerMenu.classList.toggle('active');
//     });
// });
});
