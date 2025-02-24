document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".sobre-arriba").style.transform = "translateY(-100%)";
        document.querySelector(".sobre-abajo").style.transform = "translateY(100%)";
    }, 500); // Espera 0.5s antes de iniciar la animación

    setTimeout(() => {
        document.querySelector(".carta-container").style.display = "none";
        document.querySelector(".contenido-invitacion").classList.remove("oculto");
    }, 1500); // 1.5s en total antes de mostrar la invitación
});
