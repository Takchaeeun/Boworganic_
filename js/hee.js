//==== 희승 영역 ====
window.onload = function () {
  // ==== 뉴스 swiper ====
  var newSwiper = new Swiper(".swNews", {
    slidesPerView: 3.6,
    spaceBetween: 50,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".swNews .sw-next",
      prevEl: ".swNews .sw-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swNews .swiper-pagination",
      clickable: true,
    },
  });

  //==== 맞춤사료 ====
  const toggleBtns = document.querySelectorAll(".toggleBtn");
  //
  toggleBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleBtns.forEach(function (otherButton) {
        if (otherButton !== button) {
          otherButton.style.border = "1.5px solid #c0c0c0";
          otherButton.classList.remove("checked");
        }
      });

      if (!button.classList.contains("checked")) {
        button.style.border = "1.5px solid #77bd82";
      } else {
        button.style.border = "1.5px solid #c0c0c0";
      }

      // 상태를 토글
      button.classList.toggle("checked");
    });
  });

  // 이전, 다음 버튼 이동
  // [시작 버튼]
  const fitMain = document.getElementById("fitMain");
  const fitInfoWrap = document.getElementById("fitInfoWrap");
  const fitResult = document.getElementById("fitResult");
  const fitStart = document.getElementById("fitStart");
  fitStart.addEventListener("click", function () {
    fitMain.style.display = "none";
    fitInfoWrap.style.display = "block";
  });

  // [이전버튼 ]
  // [이전버튼] 메인화면으로 돌아가기
  var fitInfoPrev = fitInfoWrap.querySelector("#fitPrev");
  fitInfoPrev.addEventListener("click", function () {
    fitInfoWrap.style.display = "none";
    fitMain.style.display = "block";
  });

  // [이전버튼] 정보입력으로 돌아가기
  var page1 = document.getElementById("page1");
  var page1Prev = page1.querySelector("#fitPrev");
  page1Prev.addEventListener("click", function () {
    page1.style.display = "none";
    fitInfoWrap.style.display = "block";
  });

  // [이전버튼] 페이지1로 돌아가기
  var page2 = document.getElementById("page2");
  var page2Prev = page2.querySelector("#fitPrev");
  page2Prev.addEventListener("click", function () {
    page2.style.display = "none";
    page1.style.display = "block";
  });

  // [이전버튼] 페이지2로 돌아가기
  var page3 = document.getElementById("page3");
  var page3Prev = page3.querySelector("#fitPrev");
  page3Prev.addEventListener("click", function () {
    page3.style.display = "none";
    page2.style.display = "block";
  });

  // [이전버튼] 페이지3로 돌아가기
  var page4 = document.getElementById("page4");
  var page4Prev = page4.querySelector("#fitPrev");
  page4Prev.addEventListener("click", function () {
    page4.style.display = "none";
    page3.style.display = "block";
  });

  // [다음 버튼]
  // 페이지 변수 선언
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById("page3");
  var page4 = document.getElementById("page4");

  // 이벤트 핸들러 함수 정의
  // 선택지 선택 확인 : 메세지 창 띄움-> 선택 완료되면 다음 페이지로
  function validateAndMoveToNextPage(currentPage, nextPage) {
    // // 필수 입력 필드 확인
    // var fitNameInput = document.getElementById("fitName");
    // if (fitNameInput.value.trim() === "") {
    //   alert("이름을 입력해주세요.");
    //   return;
    // }

    // var fitBirthInput = document.getElementById("fitBirth");
    // if (fitBirthInput.value.trim() === "") {
    //   alert("생년월일을 입력해주세요.");
    //   return;
    // }

    // // 선택한 버튼 확인
    // var selectedButton = document.querySelector(".checked");
    // if (!selectedButton) {
    //   alert("성별을 선택해주세요.");
    //   return;
    // }

    // 모든 조건이 충족되면 다음 페이지로 이동
    currentPage.style.display = "none";
    nextPage.style.display = "block";
  }

  // [다음 버튼] 이벤트 핸들러 설정
  var fitInfoNext = fitInfoWrap.querySelector("#fitNext");
  fitInfoNext.addEventListener("click", function () {
    validateAndMoveToNextPage(fitInfoWrap, page1);
  });

  var page1Next = page1.querySelector("#fitNext");
  page1Next.addEventListener("click", function () {
    validateAndMoveToNextPage(page1, page2);
  });

  var page2Next = page2.querySelector("#fitNext");
  page2Next.addEventListener("click", function () {
    validateAndMoveToNextPage(page2, page3);
  });

  var page3Next = page3.querySelector("#fitNext");
  page3Next.addEventListener("click", function () {
    validateAndMoveToNextPage(page3, page4);
  });

  var page4Next = page4.querySelector("#fitNext");
  page4Next.addEventListener("click", function () {
    validateAndMoveToNextPage(page4, fitResult);
  });

  // [다음 버튼] 이벤트 핸들러 설정
  var fitNextBtn = document.getElementById("fitNext");
  fitNextBtn.addEventListener("click", function () {
    // 강아지 이름 설정 함수 호출
    setDogNameResult();

    // 다음 페이지로 이동
    validateAndMoveToNextPage(fitInfoWrap, page1);
  });

  // [다음 버튼 & progress] 이벤트 핸들러 설정
  var fitNextBtn = document.getElementById("fitNext");
  fitNextBtn.addEventListener("click", function () {
    // fitProgress 엘리먼트 선택
    var fitProgress = document.getElementById("fitProgress");

    // 현재 value 값 가져오기
    var currentValue = parseInt(fitProgress.value);

    // 최대 값이 100인지 확인
    if (currentValue < 100) {
      // value 값에 25 추가
      fitProgress.value = currentValue + 25;
    } else {
      // 이미 최대 값인 경우 아무 작업도 수행하지 않음
      // 혹은 원하는 동작을 수행할 수 있음
    }

    // 다음 페이지로 이동
    validateAndMoveToNextPage(currentPage, nextPage);
  });

  // [다음 버튼] 이벤트 핸들러 설정
  var fitNextBtn = document.getElementById("fitNext");
  fitNextBtn.addEventListener("click", function () {
    moveToNextPage(fitInfoWrap, page1);
  });

  // [결과 페이지] - 강아지 이름 설정 함수
  function setDogNameResult() {
    // #fitName 요소를 가져옴
    var fitNameInput = document.getElementById("fitName");
    var fitNameValue = fitNameInput.value;

    // #dogNameResult 엘리먼트 선택 후 내용 설정
    var dogNameResult = document.getElementById("dogNameResult");
    dogNameResult.textContent = `${fitNameValue}의 맞춤사료`;
    dogNameResult.style.fontSize = "2.5rem";
    dogNameResult.style.borderBottom = "1px solid #666";
    dogNameResult.style.padding = "21px 0";
  }

  // [결과 페이지] - 처음으로 돌아가기
  var linkMainbtn = document.getElementById("linkMainbtn");
  linkMainbtn.addEventListener("click", function () {
    // fitMain으로 이동
    fitResult.style.display = "none"; // 결과 페이지 감추기
    fitMain.style.display = "block"; // fitMain 보이기

    setDogNameResult();
  });

  // [결과 페이지] - 추천 이유
  // 결과 배열
  var results = [
    {
      recommendTitle: "CARE 3 피부&알러지 케어",
      foodImageSrc: "images/hee/fit-skin-care.png",
      fitResaons: [
        { title: "피부 건강 및 알러지 개선", detail: "크릴오일, 아마씨, 콜라겐, 아스타잔틴으로 피부질환 및 함영증 알러지에 도움을 줍니다." },
        { title: "면역력 증진", detail: "초록입홍합, 유카추출물이 면역력 증진 및 노폐물 제거와 항염효과에 도움을 줍니다." },
        { title: "소화개선", detail: "초록입홍합, 유카추출물이 면역력 증진 및 노폐물 제거와 항염효과에 도움을 줍니다." },
      ],
    },
    {
      recommendTitle: "추천 제품 2",
      foodImageSrc: "이미지2.jpg",
      fitResaons: [
        { title: "이유 1", detail: "이유 1에 대한 설명" },
        { title: "이유 2", detail: "이유 2에 대한 설명" },
        { title: "이유 3", detail: "이유 3에 대한 설명" },
      ],
    },
    {
      recommendTitle: "추천 제품 3",
      foodImageSrc: "이미지3.jpg",
      fitResaons: [
        { title: "이유 1", detail: "이유 1에 대한 설명" },
        { title: "이유 2", detail: "이유 2에 대한 설명" },
        { title: "이유 3", detail: "이유 3에 대한 설명" },
      ],
    },
    {
      recommendTitle: "추천 제품 4",
      foodImageSrc: "이미지4.jpg",
      fitResaons: [
        { title: "이유 1", detail: "이유 1에 대한 설명" },
        { title: "이유 2", detail: "이유 2에 대한 설명" },
        { title: "이유 3", detail: "이유 3에 대한 설명" },
      ],
    },
    {
      recommendTitle: "추천 제품 5",
      foodImageSrc: "이미지5.jpg",
      fitResaons: [
        { title: "이유 1", detail: "이유 1에 대한 설명" },
        { title: "이유 2", detail: "이유 2에 대한 설명" },
        { title: "이유 3", detail: "이유 3에 대한 설명" },
      ],
    },
    {
      recommendTitle: "추천 제품 6",
      foodImageSrc: "이미지6.jpg",
      fitResaons: [
        { title: "이유 1", detail: "이유 1에 대한 설명" },
        { title: "이유 2", detail: "이유 2에 대한 설명" },
        { title: "이유 3", detail: "이유 3에 대한 설명" },
      ],
    },
    {
      recommendTitle: "추천 제품 7",
      foodImageSrc: "이미지7.jpg",
      fitResaons: [
        { title: "이유 1", detail: "이유 1에 대한 설명" },
        { title: "이유 2", detail: "이유 2에 대한 설명" },
        { title: "이유 3", detail: "이유 3에 대한 설명" },
      ],
    },
    {
      recommendTitle: "추천 제품 8",
      foodImageSrc: "이미지8.jpg",
      fitResaons: [
        { title: "이유 1", detail: "이유 1에 대한 설명" },
        { title: "이유 2", detail: "이유 2에 대한 설명" },
        { title: "이유 3", detail: "이유 3에 대한 설명" },
      ],
    },
  ];

  // 결과 업데이트 함수
  function updateResult(resultIndex) {
    var selectedResult = results[resultIndex];

    // 결과 정보 설정
    document.getElementById("recommendTitle").textContent = selectedResult.recommendTitle;
    document.getElementById("foodImage").src = selectedResult.foodImageSrc;

    for (let i = 0; i < selectedResult.reasons.length; i++) {
      const reason = selectedResult.reasons[i];
      document.getElementById(`reasonTitle${i + 1}`).textContent = reason.title;
      document.getElementById(`reasonDetail${i + 1}`).textContent = reason.detail;
    }
  }

  // [결과 페이지] 결과 페이지로 돌아가기 이벤트 핸들러 설정
  var linkMainbtn = document.getElementById("linkMainbtn");
  linkMainbtn.addEventListener("click", function () {
    // 확인 대화 상자 표시
    var confirmation = confirm("첫 화면으로 돌아가시겠습니까?");

    // 사용자가 확인을 클릭했을 때
    if (confirmation) {
      // 작성한 데이터 초기화 함수 호출
      resetFormData();

      // 페이지 초기화 코드 추가 (예를 들어, 첫 화면으로 이동)
      fitResult.style.display = "none"; // 결과 페이지 숨기기
      fitMain.style.display = "block"; // 메인 페이지 보이기
    }
  });

  // [검사 페이지]

  // [데이터 초기화] 처음으로 돌아가면 작성데이터 없어짐
  // 초기화 함수 정의
  function resetFormData() {
    // 작성한 데이터 초기화 코드 추가
    document.getElementById("fitName").value = ""; // 예시: 이름 필드 초기화
    document.getElementById("fitBirth").value = ""; // 예시: 생년월일 필드 초기화
    // 다른 필드들에 대한 초기화 코드 추가
  }

  // "처음으로" 버튼 클릭 이벤트 핸들러 설정
  var linkMainBtn = document.getElementById("linkMainbtn");
  linkMainBtn.addEventListener("click", function () {
    // 작성한 데이터 초기화 함수 호출
    resetFormData();

    // 페이지 초기화 코드 추가 (예를 들어, 첫 화면으로 이동)
    fitResult.style.display = "none"; // 결과 페이지 숨기기
    fitMain.style.display = "block"; // 메인 페이지 보이기
  });
};

// =============== 제이쿼리 ================
$(document).ready(function () {
  // 페이지 로드 후 실행될 코드

  // #page4의 스크롤 기능
  $("#page4 .question-btn").on("wheel", function (e) {
    var delta = e.originalEvent.deltaY;
    this.scrollLeft += (delta > 0 ? 1 : -1) * 40;
    e.preventDefault();
  });
});

$(document).ready(function () {
  // 페이지가 로드되면 실행될 코드

  // 이전 버튼 클릭 이벤트 핸들러
  $(".fit-prev").click(function () {
    var currentPage = $(this).closest(".question-page");
    var prevPage = currentPage.prev(".question-page");

    currentPage.fadeOut(400, function () {
      prevPage.fadeIn(400);
    });
  });

  // 다음 버튼 클릭 이벤트 핸들러
  $(".fit-next").click(function () {
    var currentPage = $(this).closest(".question-page");
    var nextPage = currentPage.next(".question-page");

    currentPage.fadeOut(400, function () {
      nextPage.fadeIn(400);
    });
  });
});
