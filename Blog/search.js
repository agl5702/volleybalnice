document.querySelector(".search-icon").addEventListener("click", function () {
  const searchInput = document.querySelector(".search-container input");
  const userMenu = document.querySelector(".user-menu");
  const logo = document.querySelector(".logo");
  const burgerMenu = document.querySelector(".burgermenu");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const middle = document.querySelector(".middle");
  const searchContainer = document.querySelector(".search-container");
  const searchIcon = document.querySelector(".search-icon");
  // Obtén el estado actual del display del input de búsqueda
  const currentDisplay = window.getComputedStyle(searchInput).display;

  // Comprueba si el ancho de la ventana es menor o igual a 600px
  if (window.innerWidth <= 600) {
    if (currentDisplay === "none") {
      // Muestra el input de búsqueda
      searchInput.style.display = "block";
      searchInput.focus();

      // Oculta otros elementos
      searchIcon.style.left = "0";
      userMenu.style.display = "none";
      logo.style.display = "none";
      burgerMenu.style.display = "none";
      left.style.display = "none";
      right.style.display = "none";
      middle.style.width = "100%";
      searchContainer.style.width = "100%";
    } else {
      // Oculta el input de búsqueda
      searchInput.style.display = "none";

      // Muestra otros elementos
      userMenu.style.display = "";
      logo.style.display = "";
      burgerMenu.style.display = "";
      right.style.display = "";
      left.style.display = "";
      middle.style.width = "";
      searchContainer.style.width = "";
      location.reload();
    }
  }
});
