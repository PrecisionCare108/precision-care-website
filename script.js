const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
