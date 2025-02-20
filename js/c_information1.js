window.addEventListener("load", function () {
    // 글자 들어오는 느낌 구현
    AOS.init();
  
    // 모든 .detail 요소에 이벤트 추가
    document.querySelectorAll(".detail").forEach((detail) => {
      detail.addEventListener("mouseenter", function () {
        // 모든 .upText 클래스를 가진 요소 선택
        const counters = detail.querySelectorAll(".upText");
  
        counters.forEach((counter) => {
          // 초기 숫자를 0으로 설정
          counter.textContent = "0";
  
          // 목표 숫자 가져오기 (data-target 속성값)
          const targetNum = +counter.getAttribute("data-target");
          const duration = 1000; // 2초 동안 애니메이션 실행
          const frameRate = 60; // 초당 60 프레임
          const totalFrames = (duration / 1000) * frameRate;
          const increment = targetNum / totalFrames;
  
          let count = 0;
          let frame = 0;
  
          const updateCounter = () => {
            if (frame < totalFrames) {
              count += increment;
              counter.textContent = Math.ceil(count);
              frame++;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = targetNum; // 목표 숫자 정확히 설정
            }
          };
  
          // 숫자 증가 애니메이션 실행
          updateCounter();
        });
      });
    });
  });
  