const inactiveMenuBtn = document.getElementById("menu");
const activeMenuBtn = document.getElementById("close-menu");
const offScreenMenu = document.getElementById("off-screen-menu");
const overlay = document.getElementById("overlay");

const openMenu = () => {
  offScreenMenu.classList.add("active");
  offScreenMenu.ariaHidden = false;
  overlay.classList.add("active");
  overlay.ariaHidden = false;

  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  offScreenMenu.classList.remove("active");
  offScreenMenu.ariaHidden = true;
  overlay.classList.remove("active");
  overlay.ariaHidden = true;

  document.body.style.overflow = "";
};

document.addEventListener("DOMContentLoaded", () => {
  inactiveMenuBtn.addEventListener("click", openMenu);
  activeMenuBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
});
