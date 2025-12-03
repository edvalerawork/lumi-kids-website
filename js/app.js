function navigate(page) {

    // Ocultar páginas
    Object.values(pages).forEach(p => p.classList.add("hidden"));
    Object.values(pages).forEach(p => p.classList.remove("visible"));

    // Mostrar la página seleccionada
    pages[page].classList.remove("hidden");
    pages[page].classList.add("visible");

    // Quitar activo a todos los botones
    navButtons.forEach(b => b.classList.remove("activo"));

    // Activar el botón correcto según la página
    document.querySelector(`.menu-btn[data-page="${page}"]`)?.classList.add("activo");
    }

    function abrirJuego(url) {
        const modal = document.getElementById("modalJuego");
        const iframe = document.getElementById("juegoIframe");

        iframe.src = url;
        modal.style.display = "flex";
    }

    function cerrarJuego() {
        const modal = document.getElementById("modalJuego");
        const iframe = document.getElementById("juegoIframe");

        iframe.src = "";
        modal.style.display = "none";
    }
