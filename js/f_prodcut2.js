window.addEventListener("load", function () {
  // 윈도우가 다 읽고 마지막에 읽어줘 라는 명령
  // ↓itemSwiper 코드
  const itemSwiper = new Swiper(".itemSwiper2", {
    // ↑변수 예약 선언문
    // const 이름은 맘대로. 딴 거 써도 됨.
    // loop: true,
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 4.5,
    // 첫 화면에 이미지 몇 개 보여줄래
    spaceBetween: 20,
    breakpoints: {
      // 브라우저 작은 크기부터 써나가기
      590: {
        slidesPerView: 2.5,
      },
      // 쉼표 잊지 말기! 밑에 빨간 줄 뜰거임
      768: {
        slidesPerView: 3.5,
      },
      1050: {
        // 1050 이상일때 브라우저 크기 임의 설정 숫자
        slidesPerView: 4.5,
      },
    },
  });
  const popup = document.querySelector("#popup-btn");
  popup.addEventListener("click", function () {
    let new1Window = window.open("fineYourStyle.html", "popup", "width=800, height=800, top=0, left=0");
    if (new1Window == null) {
      alert("팝업창이 차단되었습니다");
    }
  });
});
