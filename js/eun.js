window.addEventListener("load", function () {
    const body = document.querySelector("body");
const modal = document.querySelector(".modal-wrap");
const modalClose = this.document.querySelector(".modal-close");
// isOpen 값에 따라 스크롤을 제어하는 함수
function controlScroll(isOpen) {
  if (isOpen) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
}

// 초기 모달 상태 설정
const isOpen = true;
controlScroll(isOpen);

modalClose.addEventListener("click", function () {
  modal.style.display = "none";

  // 모달이 닫힐 때는 스크롤을 다시 활성화
  controlScroll(false);
});
});