$(document).ready(function () {
  // 상단에 메뉴 호버 시 서브메뉴 슬라이드
  $(".h-categoty").hover(
    function () {
    $(".menu-snb").stop().slideDown();
    },
    function () {
    $(".menu-snb").stop().slideUp();
    }
    
  );
  $("#mb-menu").click(
    function () {
      $(".mb-menu-snb").stop().slideToggle();
    }
   
  );
});
