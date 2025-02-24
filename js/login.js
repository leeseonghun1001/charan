window.addEventListener("load", function () {
  const loginrightBtn = document.getElementById("top-form-insert-form");
  loginrightBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    //입력값검사
    let email = document.getElementById("email-insert").value;
    let userPw = document.getElementById("pw-insert").value;
    //에러 메세지 초기화
    document.getElementById("user-email-error").textContent = "";
    document.getElementById("user-psword-error").textContent = "";
    //이메일 유효성 검사
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      document.getElementById("user-email-error").textContent = "올바른 이메일 주소를 입력하세요.";
    }
    // 비밀번호 유효성 검사
    let userPwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!userPwRegex.test(userPw)) {
      document.getElementById("user-psword-error").textContent =
        "비밀번호는 8자 이상이어야 하며, 영문과 숫자를 최소 1개씩 포함해야 합니다.";
    }
  });
});



// window.onload = function () {
//   const register = document.getElementById("register");
//   register.addEventListener("submit", function (e) {
//     e.preventDefault();
//     //입력값 검사
//     let userId = document.getElementById("user-id").value;
//     let email = document.getElementById("email").value;
//     let userPw1 = document.getElementById("user-pw1").value;
//     let userPw2 = document.getElementById("user-pw2").value;
//     // 에러메세지 초기화
//     document.getElementById("user-id-error").textContent = "";
//     document.getElementById("email-error").textContent = "";
//     document.getElementById("user-pw1-error").textContent = "";
//     document.getElementById("user-pw2-error").textContent = "";
//     //아이디 유효성 검사
//     // 아이디는 4~15자리의 영문과 숫자
//     let userIdRegex = /^[a-zA-Z0-9]{4,15}$/;
//     if (!userIdRegex.test(userId)) {
//       document.getElementById("user-id-error").textContent = "아이디는 4~15자리의 영문과 숫자로 이루어져야 합니다.";
//     }
//     // 이메일 유효성 검사
//     let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailRegex.test(email)) {
//       document.getElementById("email-error").textContent = "올바른 이메일 주소를 입력하세요.";
//     }
//     // 비밀번호 유효성 검사
//     let userPwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (!userPwRegex.test(userPw1)) {
//       document.getElementById("user-pw1-error").textContent =
//         "비밀번호는 8자 이상이어야 하며, 영문과 숫자를 최소 1개씩 포함해야 합니다.";
//     }
//     //비밀번호 확인 유혀성 검사
//     if (userPw1 !== userPw2) {
//       document.getElementById("user-pw2-error").textContent = "비밀번호가 일치하지 않습니다.";
//     }
//   });
// };
