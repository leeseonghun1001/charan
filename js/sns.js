window.addEventListener("load", function () {
  function updateVideoSources() {
    const videos = [
      { id: "myvideo1", baseSrc: "assets/charan_video_1" },
      { id: "myvideo2", baseSrc: "assets/charan_video_2" },
      { id: "myvideo3", baseSrc: "assets/charan_video_3" },
      { id: "myvideo4", baseSrc: "assets/charan_video_4" },
      { id: "myvideo5", baseSrc: "assets/charan_video_5" },
    ];

    const resolution = window.matchMedia("(max-width: 620px)").matches
      ? ".360.mp4"
      : ".mp4";

    videos.forEach(({ id, baseSrc }) => {
      const video = document.getElementById(id);
      if (video) {
        const source = video.querySelector("source");
        source.setAttribute("src", baseSrc + resolution);
        video.load();
      }
    });
  }

  // 최초 실행 (모든 비디오 소스 설정)
  updateVideoSources();

  // `resize` 이벤트 최적화 (디바운스 적용)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateVideoSources, 200);
  });
});
