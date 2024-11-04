const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("show"); // Alterna a visibilidade do menu
  menuToggle.classList.toggle("rotate"); // Gira o ícone
});

const convencaoToggle = document.getElementById("convencao-toggle");
const submenuConvencao = document.getElementById("submenu-convencao");
const arrow = convencaoToggle.querySelector(".arrow");
const backButton = document.getElementById("back-button");

convencaoToggle.addEventListener("click", function(event) {
  event.preventDefault();
  submenuConvencao.classList.toggle("show"); // Mostra/esconde o menu lateral
  arrow.classList.toggle("rotate"); // Gira a seta
});

backButton.addEventListener("click", function() {
  submenuConvencao.classList.remove("show"); // Esconde o menu lateral
  arrow.classList.remove("rotate"); // Restaura a posição da seta
});
;
