//==== 희승 영역 ====
window.onload = function () {
  // ==== 뉴스 swiper
  // var swiper = new Swiper(".swNews", {
  //   slidesPerView: 3.6,
  //   spaceBetween: 50,
  //   speed: 1000,
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swNews .sw-next",
  //     prevEl: ".swNews .sw-prev",
  //   },
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swNews .swiper-pagination",
  //     clickable: true,
  //   },
  // });

  //==== 맞춤사료
  // 버튼을 클릭하면 다음 페이지 or 이전 페이지가 나온다.
  const fitStart = document.getElementById("fitStart");
  const fitPrev = document.getElementById("fitPrev");
  const fitMain = document.getElementById("fitMain");
  const fitInfoWrap = document.getElementById("fitInfoWrap");

  fitStart.addEventListener("click", function () {
    fitMain.style.display = "none";
    fitInfoWrap.style.display = "block";
  });

  fitPrev.addEventListener("click", function () {
    fitInfoWrap.style.display = "none";
    fitMain.style.display = "block";
  });
};
