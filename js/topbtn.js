window.addEventListener("load" , function(){
    const backToTopBtn = document.getElementById("backToTop");
// 버튼 클릭 시 맨 위로 스크롤
backToTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
})