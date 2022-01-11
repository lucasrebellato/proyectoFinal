/* nav menu */

const elBoton = document.querySelector("button");
const navMenu = document.querySelector(".nav_1");
elBoton.addEventListener("click", () =>  {
    navMenu.classList.toggle("nav_menu");
});