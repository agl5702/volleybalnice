document.querySelector(".search-button").addEventListener("click", function () {
  const searchInput = document.querySelector(".search-input");
  if (window.innerWidth <= 600 && searchInput.style.display === "none") {
    searchInput.style.display = "block";
    searchInput.focus();
  } else if (window.innerWidth <= 600) {
    searchInput.style.display = "none";
  }
});
