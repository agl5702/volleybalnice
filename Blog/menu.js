let abrir = document.querySelector(".abrir-menu");
let cerrar = document.querySelector(".cerrar-menu");
let menuResponsive = document.querySelector(".menu-responsive");

abrir.addEventListener("click", function () {
  menuResponsive.style.display = "block";
  menuResponsive.style.transform = "translateX(-100%)"; // Comienza fuera de la pantalla
  menuResponsive.style.opacity = 0; // Inicialmente invisible
  menuResponsive.style.transition =
    "transform 0.1s ease-in-out, opacity 0.1s ease-in-out 0.1s"; // Combina ambas transiciones, deslizamiento primero, luego desvanecimiento

  setTimeout(function () {
    menuResponsive.style.transform = "translateX(0)"; // Deslizar hacia la pantalla
    menuResponsive.style.opacity = 1; // Hacer visible gradualmente
  }, 10); // Pequeño retardo para que las transiciones se ejecuten secuencialmente

  document.querySelector("body").style.overflow = "hidden";
});

cerrar.addEventListener("click", function () {
  menuResponsive.style.transform = "translateX(-100%)"; // Slide the menu back to the left
  setTimeout(function () {
    menuResponsive.style.display = "none";
  }, 300); // Delay hiding the menu to ensure the transition finishes
  document.querySelector("body").style.overflow = "auto";
});
