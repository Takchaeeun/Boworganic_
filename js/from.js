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
  //   top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(window.scrollY);

    if (window.scrollY == 0) {
      window.scrollTo({
        top: 15000,
        behavior: "smooth",
      });
    }
  });
});
