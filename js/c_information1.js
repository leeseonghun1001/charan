// window.addEventListener("load", function () {
//   // 글자 들어오는 느낌 구현
//   AOS.init();
//   // 카드섹션에 들어가는 수치 동적 표현
//   const upTexts = this.document.querySelectorAll(".upText");
//   upTexts.forEach(function (item, index) {
//     numAnimation(index);
//   });
//   function numAnimation(idx) {
//     const num = 0;
//     const targetRate = upTexts[idx].getAttribute("data-rate");
//     const timer = this.setInterval(() => {
//       ++num;
//       upTexts.innerText = num;
//       if (num === targetRate) {
//         this.clearInterval(timer);
//       }
//     }, 10);
//   }
// });
// window.addEventListener("load", function () {
//   // 글자 들어오는 느낌 구현
//   AOS.init();
//   // 카드섹션에 들어가는 수치 동적 표현
//   const numAnimations = this.document.querySelectorAll(".upText");
//   numAnimations.forEach((numAnimation) => {
//     const targerNum = numAnimation.getAttribute(".data-rate");
//     let num = 0;

//     const timer = this.setInterval(() => {
//       ++num;
//       numAnimation.innerText = num;
//       if (cum === targerNum) {
//         this.clearInterval(timer);
//       }
//     }, 10);
//   });
// });
