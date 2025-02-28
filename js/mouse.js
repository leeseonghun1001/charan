$(document).ready(function () {
  //mousePponter 아이디를 변수명에 담기
  let $mousePointer = $("#mouse-pointer");
  $clickElements = $("a , button , input , img");
  // css스타일 설정을 변경해 마우스커서 위치 움직이는 함수
  function moveCursor(e) {
    $mousePointer.css({
      "left": e.pageX,
      "top": e.pageY,
    });
    // console.log(moveCursor);
  }
  $clickElements.mouseenter(function () {
    //console.log("마우스들어왔따");
    $mousePointer.addClass("hover");
  });
  $clickElements.mouseleave(function () {
    console.log("마우스들어왔따");
    //$mousePointer.removeClass("hover");
  });
  //윈도우를 켰을때 mousemove 해라 뒤엔는 함수
  $(window).on("mousemove", moveCursor);
});
