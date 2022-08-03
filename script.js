var hamburgher = document.querySelector(".hamburgher");
var navMenu = document.querySelector(".nav-menu");

hamburgher.addEventListener("click", (el) => {
    el.preventDefault();
    hamburgher.classList.toggle("active")
    navMenu.classList.toggle("active")
})