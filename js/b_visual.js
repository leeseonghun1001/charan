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
