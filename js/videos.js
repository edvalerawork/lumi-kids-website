const botones = document.querySelectorAll(".video-age-btn");
const title = document.getElementById("videoTitle");
const subtitle = document.getElementById("videoSubtitle");
const grid = document.getElementById("videoGrid");

//   VIDEOS POR CATEGORÍA
const videos = {
    "5-7": [
        { youtubeId: "r-Asw-QJo3U", titulo: "¿Qué es el dinero?", desc: "Aprende qué es el dinero y para qué sirve", tiempo: "1:38" },
        { youtubeId: "ydpafZsf4_4", titulo: "Contando Monedas", desc: "Aprende a contar diferentes monedas", tiempo: "2:35" },
        { youtubeId: "9lOPH35Fcr0", titulo: "Mi Primera Alcancía", desc: "Descubre por qué es importante ahorrar", tiempo: "1:30" }
    ],

    "8-10": [
        { youtubeId: "OrUO7uD9uZo", titulo: "El Poder del Ahorro", desc: "Aprende cómo ahorrar de forma divertida", tiempo: "5:17" },
        { youtubeId: "GfbmdajRuC0", titulo: "Necesidades vs Deseos", desc: "Aprende a distinguir entre necesidades y deseos", tiempo: "1:39" },
        { youtubeId: "TEKaSi2aijE", titulo: "Presupuesto para Niños", desc: "Cómo organizar mejor tu dinero", tiempo: "5:05" }
    ],

    "10-12": [
        { youtubeId: "X38MGyuc0ds", titulo: "Introducción a las Inversiones", desc: "Cómo manejar tu propio dinero", tiempo: "4:03" },
        { youtubeId: "oLIVRI7YtjI", titulo: "Emprendimiento para Niños", desc: "Aprende cómo iniciar un pequeño negocio", tiempo: "6:58" },
        { youtubeId: "8PEcigPsswE", titulo: "Planificación Financiera", desc: "Aprende a organizar tu dinero inteligentemente", tiempo: "4:15" }
    ]
};

//  MINIATURA AUTOMÁTICA YT
function getYoutubeThumbnail(id) {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}


// RENDERIZAR LAS TARJETAS DEL VIDEO
function cargar(edad) {

    title.textContent = `Videos para ${edad.replace("-", " - ")} años`;
    subtitle.textContent = "Contenido especialmente seleccionado para este rango de edad";

    const lista = videos[edad];

    grid.innerHTML = lista.map(video => {

        const thumb = getYoutubeThumbnail(video.youtubeId);

        return `
            <div class="video-card" onclick="abrirVideo('${video.youtubeId}')">

                <div class="video-card-top">
                    <img src="${thumb}" class="video-thumb">

                    <span class="video-time">
                        <i class="bi bi-clock"></i> ${video.tiempo}
                    </span>

                    <div class="video-play">
                        <i class="bi bi-play-fill"></i>
                    </div>
                </div>

                <div class="video-card-body">
                    <h3>${video.titulo}</h3>
                    <p>${video.desc}</p>
                </div>

            </div>
        `;
    }).join("");
}


//  EVENTO CAMBIO DE EDAD
botones.forEach(btn => {
    btn.addEventListener("click", () => {

        botones.forEach(b => b.classList.remove("activo"));
        btn.classList.add("activo");

        cargar(btn.dataset.age);
    });
});

// CARGA INICIAL
cargar("5-7");


// MODAL PARA VER EL VIDEO
function abrirVideo(youtubeId) {
    const modal = document.getElementById("modalVideo");
    const iframe = document.getElementById("iframeVideo");

    modal.classList.add("activo");

    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
}

function cerrarVideo() {
    const modal = document.getElementById("modalVideo");
    const iframe = document.getElementById("iframeVideo");

    modal.classList.remove("activo");
    iframe.src = ""; // Detener video
}
