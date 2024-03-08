window.addEventListener("load", function (){
    AOS.init();
      //상단스와이퍼
      var swiper = new Swiper(".bow", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      })
      });