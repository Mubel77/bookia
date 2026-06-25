// ========================================
// FUNCIONALIDADES DE FILTRADO DE LIBROS
// ========================================

function normalizarTexto(texto) {

    return String(texto)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

}

function filtrarLibros(categoria) {

    let libros = document.querySelectorAll(".libro-card");
    let librosEncontrados = 0;
    let categoriaNormalizada = normalizarTexto(categoria || "todos");

    for (let i = 0; i < libros.length; i++) {

        let libro = libros[i];
        let categoriaLibro = normalizarTexto(libro.getAttribute("data-categoria") || "");

        if (categoriaNormalizada == "todos" || categoriaLibro == categoriaNormalizada) {

            libro.style.display = "block";
            librosEncontrados++;

        } else {

            libro.style.display = "none";

        }

    }

    let mensajeExistente = document.getElementById("mensaje-sin-libros");

    if (mensajeExistente) {
        mensajeExistente.remove();
    }

    if (librosEncontrados == 0) {

        let contenedor = document.querySelector(".libros-grid");

        let mensaje = document.createElement("div");

        mensaje.id = "mensaje-sin-libros";
        mensaje.style.gridColumn = "1 / -1";
        mensaje.style.textAlign = "center";
        mensaje.style.padding = "40px 20px";
        mensaje.style.fontSize = "1.2em";
        mensaje.style.color = "#555";

        let textoCategoria = String(categoria || "todos")
            .replace(/-/g, " ")
            .trim();

        mensaje.textContent =
            'No hay libros disponibles en la categoría "' +
            textoCategoria.charAt(0).toUpperCase() +
            textoCategoria.slice(1) +
            '"';

        contenedor.appendChild(mensaje);

    }

}

function inicializarFiltros() {

    let botones = document.querySelectorAll(".filtro-btn");

    for (let i = 0; i < botones.length; i++) {

        botones[i].addEventListener("click", function () {

            for (let j = 0; j < botones.length; j++) {

                botones[j].classList.remove("active");

            }

            this.classList.add("active");

            let categoria = this.getAttribute("data-categoria") || normalizarTexto(this.textContent);

            filtrarLibros(categoria);

        });

    }

}

// ========================================
// FUNCIONALIDADES DEL FORMULARIO DE RESEÑAS
// ========================================

function obtenerImagenPorDefecto() {

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 208">
        <defs>
            <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f4e6cf"/>
                <stop offset="100%" stop-color="#d6c3a2"/>
            </linearGradient>
        </defs>

        <rect width="160" height="208" rx="14" fill="url(#gradiente)"/>

        <rect x="18" y="20" width="124" height="168" rx="10"
        fill="#ffffff" fill-opacity="0.28"/>

        <rect x="34" y="46" width="92" height="14" rx="7"
        fill="#386150" fill-opacity="0.35"/>

        <rect x="34" y="72" width="68" height="12" rx="6"
        fill="#8A716A" fill-opacity="0.35"/>

        <rect x="34" y="96" width="92" height="12" rx="6"
        fill="#386150" fill-opacity="0.22"/>

        <rect x="34" y="120" width="78" height="12" rx="6"
        fill="#8A716A" fill-opacity="0.28"/>

        <rect x="34" y="150" width="92" height="22" rx="11"
        fill="#35AC78" fill-opacity="0.18"/>

    </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);

}

function obtenerFechaActual() {

    let opciones = {

        day: "numeric",
        month: "long",
        year: "numeric"

    };

    return new Date().toLocaleDateString("es-ES", opciones);

}

function crearCardResena(resena) {

    let articulo = document.createElement("article");

    articulo.className = "resena-card";

    articulo.innerHTML = `

        <div class="resena-header">

            <img src="${resena.imagen}" alt="Libro">

            <div class="resena-info">

                <h3>${resena.tituloLibro}</h3>

                <p class="autor">${resena.autorLibro}</p>

                <div class="estrellas">${resena.calificacion}</div>

            </div>

        </div>

        <p class="resena-texto">

            "${resena.textoResena}"

        </p>

        <div class="resena-footer">

            <span class="resena-autor">

                Por ${resena.tuNombre}

            </span>

            <span class="resena-fecha">

                ${resena.fecha}

            </span>

        </div>

    `;

    return articulo;

}

function validarFormularioResena() {

    let formulario = document.querySelector(".resena-form");

    let listaResenas = document.querySelector(".resenas-lista");

    if (!formulario || !listaResenas) {

        return;

    }

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        let tituloLibro = document.getElementById("titulo-libro").value.trim();

        let autorLibro = document.getElementById("autor-libro").value.trim();

        let tuNombre = document.getElementById("tu-nombre").value.trim();

        let calificacion = document.getElementById("calificacion").value;

        let tuResena = document.getElementById("tu-resena").value.trim();

        let fecha = obtenerFechaActual();

        let imagen = obtenerImagenPorDefecto();

        if (
            tituloLibro == "" ||
            autorLibro == "" ||
            tuNombre == "" ||
            calificacion == "Selecciona una calificación" ||
            tuResena == ""
        ) {

            alert("Por favor, completa todos los campos.");

            return;

        }

        if (tuResena.length < 10) {

            alert("La reseña debe tener al menos 10 caracteres.");

            return;

        }

        let nuevaResena = {

            tituloLibro: tituloLibro,
            autorLibro: autorLibro,
            tuNombre: tuNombre,
            calificacion: calificacion,
            textoResena: tuResena,
            fecha: fecha,
            imagen: imagen

        };

        let nuevaCard = crearCardResena(nuevaResena);

        listaResenas.insertBefore(
            nuevaCard,
            listaResenas.firstChild
        );

        alert("¡Reseña publicada correctamente!");

        formulario.reset();

    });

}

// ========================================
// INICIO
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    inicializarFiltros();

    validarFormularioResena();

});