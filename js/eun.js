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

// 제이쿼리
$(document).ready(function () {
  var products = [
    { image: "images/favicon/insta1.jpg", title: " 사료를 잘 먹지않던 우리 강아지가 바우오가닉 사료로 바꾸어줬더니 너무 잘먹어요 걱정없이 먹일수있어서 너무좋아요", ID: "chae1***", tag: "#바우오가닉 #유기농사료" },
    { image: "images/favicon/insta2.jpg", title: " 다른 사료는 안먹고 그나마 주문한 사료만 먹습니다 포장도 배송도 튼튼한편이고 매우 만족스러운 구매를한것 같습니다", ID: "ion****", tag: " #매우만족 #최고" },
    { image: "images/favicon/insta3.jpg", title: " 기호성 정말좋아요~ 알이작아서 소형견 먹기좋아요. 부드러우면서 더 잘먹어서 항상 이걸로 시켜요", ID: "870***", tag: " #소형견 #최고에요" },
    { image: "images/favicon/insta4.jpg", title: " 15살 노견한테 안심하고 먹여요. 호흡이 안좋아서 고생했었어서 이것만 먹여요", ID: "fdo***", tag: "#노견 #감사합니다" },
    { image: "images/favicon/insta5.jpg", title: " 급하게 주문해도 급하게 배송되니 정말 감사합니다 ~ 강아지가 잘먹어요~ 늘 구매하는 제품입니다", ID: "lovel***", tag: "#빠른배송 #매번구매중" },
    { image: "images/favicon/insta6.jpg", title: " 좋아요 14살 밥투정 이 사료로 드디어 마무리. 유독 이 사료만 밥투정 없이 아주 맛있게 먹네요~ 굿", ID: " dogr***", tag: "#재구매" },
    { image: "images/favicon/insta7.jpg", title: " 이제는 먼저 사료달라고 밥그릇들고 기다리네요 유기농이라 믿고먹이기도 너무좋아요", ID: "odjl***", tag: "#바우오가닉최공" },
    { image: "images/favicon/insta8.jpg", title: " 지난번에 큰개 먹이려고 구입했는데 대형견이랑 강아지 둘다 잘먹어서 또 구매했어요. 배송도 빨라요.", ID: "988r***", description: "#대형견 #사료" },
  ];

  // 더보기 버튼 클릭 시 추가 상품 표시
  $("#load-more").click(function (e) {
    // 추가 상품을 4개씩 보여줌
    var additionalProducts = products.slice($(".insta-img a").length, $(".insta-img a").length + 4);
    additionalProducts.forEach(function (product) {
      // 각 상품의 카트 영역 생성
      var productHtml = ` <a href="#">
      <div class="write-2">아이디: ${product.ID} ${product.title} ${product.tag}</div>
      <span class="write-1">
        <img src="${product.image}" alt="@" />
      </span>
    </a>`;
      // 생성된 카트 영역을 상품 컨테이너에 추가
      $(".insta-img").append(productHtml);
    });
  });

  // 페이지 로드 시 초기 상품 표시
  $("#load-more").trigger("click");

 
});
