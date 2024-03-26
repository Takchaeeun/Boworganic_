window.addEventListener("load", function () {
  AOS.init();
  //상단스와이퍼
  var bow = new Swiper(".bow", {
    // spaceBetween: 30,
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
        top: 5000,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 5000,
        behavior: "smooth",
      });
    }
  });
});
$(document).ready(function(){
  // 화면 크기 변경 시 이벤트를 처리하는 함수

     
       
          $(".mb-close").click(() => {
             
              $(".mb-menu").show();
          });
          $(".mb-menu").click(() => {
              $(".mbmenu").slideToggle(500);
          });
     
    


});
