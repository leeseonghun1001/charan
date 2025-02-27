window.addEventListener("load", () => {
  // 메인배너 스와이퍼
  const mainSwiper = new Swiper(".main-banner", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  // 메인배너와 서브배너 스와이퍼의 시간차
  setTimeout(() => {
    const subSwiper = new Swiper(".sub-banner", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }, 500);
  
});
