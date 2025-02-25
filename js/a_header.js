window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY; // 현재 스크롤 위치
    const windowHeight = window.innerHeight; // 화면 높이
    const documentHeight = document.documentElement.scrollHeight; // 문서 전체 높이
    const targetScroll = 500;

    const fixedElement = document.querySelector(".floating");

    // 특정 스크롤 이상이면 표시

    if (scrollY >= targetScroll) {
      fixedElement.style.display = "block";
    } else {
      fixedElement.style.display = "none";
    }

    // 하단 영역에 도달하면 숨김
    // scrollY + windowHeight >= documentHeight - 100 조건을 사용해 화면 하단에서 100px 위에 도달
    if (scrollY + windowHeight >= documentHeight - 200) {
      fixedElement.style.display = "none";
    }
  });
});
