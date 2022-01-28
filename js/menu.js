let menuCanvas = document.querySelector(".off-canvas-menu");
let menuLinks = document.querySelector(".off-canvas-link");

menuLinks.addEventListener("click", ()=> {
    menuCanvas.classList.toggle(".off-canvas-menu-cerrar");
})