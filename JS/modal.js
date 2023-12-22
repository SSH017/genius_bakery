const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

// const mobileMenu = document.querySelector(".mobile-menu");
// const menuBtnOpen = document.querySelector(".menu-btn-open");
// const menuBtnClose = document.querySelector(".menu-btn-close");

// const toggleMenu = () => mobileMenu.classList.toggle("is-open");

// menuBtnOpen.addEventListener("click", toggleMenu);
// menuBtnClose.addEventListener("click", toggleMenu);

