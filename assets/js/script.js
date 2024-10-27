const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
  //video inline
  var video = document.getElementById("meuVideo");
  
  // Verificar se o dispositivo é móvel
  if (window.innerWidth < 768) {
    video.setAttribute("playsinline", "true");
    video.setAttribute("muted", "true");
    video.play();
  } 