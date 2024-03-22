window.addEventListener("load", function () {
  AOS.init();
  //상단스와이퍼
  var bow = new Swiper(".bow", {
    spaceBetween:0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  //   top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  const shopBtn = document.getElementById("shop-btn");
  shopBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.scrollY == 5000) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(window.scrollY);

    if (window.scrollY == 0) {
      window.scrollTo({
        top: 15000,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 15000,
        behavior: "smooth",
      });
    }
  });
});
$(document).ready(function () {
  $(document).ready(function () {
    $(".mb-close").click(() => {
      $(".menu").fadeOut(500);
      $(".mb-menu").show();
    });
    $(".mb-menu").click(() => {
      $(".menu").fadeIn(500);
      $(".mb-menu").hide();
    });
  });
});
