window.addEventListener("load" , ()=>{
  const prdSwiper1 = new Swiper(".itemSwiper1", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    // 반응형
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
  })
})