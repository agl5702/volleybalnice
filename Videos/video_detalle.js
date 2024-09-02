document.getElementById("menuButton").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("oculto")) {
    menu.classList.remove("oculto");
    menu.classList.add("mostrar");
    this.textContent = "Ocultar Opciones"; // Cambia el texto del botón
  } else {
    menu.classList.remove("mostrar");
    menu.classList.add("oculto");
    this.textContent = "Mostrar Opciones"; // Cambia el texto del botón
  }
});


