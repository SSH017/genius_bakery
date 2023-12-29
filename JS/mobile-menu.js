
const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const formatsSectionSlider = document.querySelector(".formats-section__slider");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  formatsSectionSlider.classList.toggle("is-hidden");
  document.body.classList.toggle("is-mobile-menu-open"); // добавьте эту строку
};

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);

const mobileNavLinks = document.querySelectorAll(".mobile-menu__nav a");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    formatsSectionSlider.classList.remove("is-hidden");
    document.body.classList.remove("is-mobile-menu-open"); // добавьте эту строку
  });
});
