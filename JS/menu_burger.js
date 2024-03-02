const menuBurger = document.querySelector(".menuburger");
const menuCross = document.querySelector(".cross");
const mobileMenu = document.querySelector(".links");

menuBurger.addEventListener("click", () => {
  mobileMenu.classList.add("mobile-menu");
  menuBurger.classList.add("hide");
  menuCross.classList.remove("hide");
});

menuCross.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu");
  menuCross.classList.add("hide");
  menuBurger.classList.remove("hide");
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("mobile-menu");
  menuCross.classList.add("hide");
  menuBurger.classList.remove("hide");
});