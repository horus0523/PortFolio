const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

/* Permite que el menu hambuerguesa tenga funcionalidad y cierre el menu al seleccionar una opción */

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

        if (entry.isIntersecting) {
            document.querySelector(".menu a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        } else {
            menulink.classList.remove("selected");
        }
    });
}, {rootMargin: "-30% 0px -70% 0px"});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened");
    });

    /* observer */
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
    /* observer */
});
