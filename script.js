const burger = document.getElementById("burgerMenu");
const navMenu = document.getElementById("navMenu");
const body = document.body;

function toggleMenu() {
  const isOpen = navMenu.classList.toggle("open");
  burger.classList.toggle("open", isOpen);
  body.classList.toggle("menu-open", isOpen);
  burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}
function closeMenu() {
  navMenu.classList.remove("open");
  burger.classList.remove("open");
  body.classList.remove("menu-open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Open menu");
}
burger.addEventListener("click", toggleMenu);

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navMenu.classList.contains("open")) {
    closeMenu();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("open")) closeMenu();
});
const navBarInner = document.querySelector(".navBarInner");
window.addEventListener("scroll", () => {
  navBarInner.style.padding =
    window.scrollY > 20 ? "0.7rem 3rem" : "1.1rem 3rem";
});
