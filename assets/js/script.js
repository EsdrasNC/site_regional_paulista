function menuShow() {
  let menuToggle = document.querySelector(".mobile-menu");
  if (menuToggle.classList.contains("open")) {
    menuToggle.classList.remove("open");
  } else {
    menuToggle.classList.add("open");
  }
}

//video inline
var video = document.getElementById("meuVideo");

// Verificar se o dispositivo é móvel
if (window.innerWidth < 768) {
  video.setAttribute("playsinline", "true");
  video.setAttribute("muted", "true");
  video.play();
}
