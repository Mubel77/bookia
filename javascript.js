// ========================================
// FUNCIONALIDADES DE FILTRADO DE LIBROS
// ========================================

function filtrarLibros(categoria) {
    // Obtener todos los libros
    let libros = document.querySelectorAll('.libro-card');
    let librosEncontrados = 0;
    
    // Recorrer cada libro
    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        let categoriaLibro = libro.getAttribute('data-categoria');
        
        // Si la categoría es "todos" mostrar todos los libros
        // Si no, mostrar solo los que coincidan con la categoría
        if (categoria === 'todos' || categoriaLibro === categoria) {
            libro.style.display = 'block';
            librosEncontrados++;
        } else {
            libro.style.display = 'none';
        }
    }
    
    // Mostrar mensaje si no hay libros de la categoría seleccionada
    let mensajeExistente = document.getElementById('mensaje-sin-libros');
    if (mensajeExistente) {
        mensajeExistente.remove();
    }
    
    if (librosEncontrados === 0) {
        let contenedor = document.querySelector('.libros-grid');
        let mensaje = document.createElement('div');
        mensaje.id = 'mensaje-sin-libros';
        mensaje.style.gridColumn = '1 / -1';
        mensaje.style.textAlign = 'center';
        mensaje.style.padding = '40px 20px';
        mensaje.style.fontSize = '1.2em';
        mensaje.style.color = '#555';
        mensaje.textContent = 'No hay libros disponibles en la categoría "' + categoria.charAt(0).toUpperCase() + categoria.slice(1) + '"';
        contenedor.appendChild(mensaje);
    }
}

// Agregar evento click a los botones de filtro
function inicializarFiltros() {
    let botones = document.querySelectorAll('.filtro-btn');
    
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function() {
            // Remover la clase 'active' de todos los botones
            for (let j = 0; j < botones.length; j++) {
                botones[j].classList.remove('active');
            }
            
            // Agregar la clase 'active' al botón clickeado
            this.classList.add('active');
            
            // Obtener el texto del botón y convertirlo a minúsculas
            let texto = this.textContent.trim().toLowerCase();
            
            // Llamar a la función de filtrado
            filtrarLibros(texto);
        });
    }
}

// ========================================
// FUNCIONALIDADES DEL FORMULARIO DE RESEÑAS
// ========================================

const CLAVE_RESENAS_USUARIO = 'bookia-resenas-usuario';

function obtenerImagenPorDefecto() {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 208" role="img" aria-labelledby="titulo descripcion">
            <title id="titulo">Portada genérica</title>
            <desc id="descripcion">Imagen por defecto para una reseña de libro</desc>
            <defs>
                <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#f4e6cf"/>
                    <stop offset="100%" stop-color="#d6c3a2"/>
                </linearGradient>
            </defs>
            <rect width="160" height="208" rx="14" fill="url(#gradiente)"/>
            <rect x="18" y="20" width="124" height="168" rx="10" fill="#ffffff" fill-opacity="0.28"/>
            <rect x="34" y="46" width="92" height="14" rx="7" fill="#386150" fill-opacity="0.35"/>
            <rect x="34" y="72" width="68" height="12" rx="6" fill="#8A716A" fill-opacity="0.35"/>
            <rect x="34" y="96" width="92" height="12" rx="6" fill="#386150" fill-opacity="0.22"/>
            <rect x="34" y="120" width="78" height="12" rx="6" fill="#8A716A" fill-opacity="0.28"/>
            <rect x="34" y="150" width="92" height="22" rx="11" fill="#35AC78" fill-opacity="0.18"/>
        </svg>`;

    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function obtenerResenasGuardadas() {
    try {
        const guardadas = localStorage.getItem(CLAVE_RESENAS_USUARIO);
        return guardadas ? JSON.parse(guardadas) : [];
    } catch (error) {
        return [];
    }
}

function guardarResenasGuardadas(resenas) {
    localStorage.setItem(CLAVE_RESENAS_USUARIO, JSON.stringify(resenas));
}

function obtenerFechaActual() {
    const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date().toLocaleDateString('es-ES', opciones);
}

function crearCardResena(resena) {
    const articulo = document.createElement('article');
    articulo.className = 'resena-card';

    articulo.innerHTML = `
        <div class="resena-header">
            <img src="${resena.imagen}" alt="Portada genérica del libro">
            <div class="resena-info">
                <h3>${resena.tituloLibro}</h3>
                <p class="autor">${resena.autorLibro}</p>
                <div class="estrellas">${resena.calificacion}</div>
            </div>
        </div>
        <p class="resena-texto">"${resena.textoResena}"</p>
        <div class="resena-footer">
            <span class="resena-autor">Por ${resena.tuNombre}</span>
            <span class="resena-fecha">${resena.fecha}</span>
        </div>
    `;

    return articulo;
}

function cargarResenasGuardadas() {
    const lista = document.querySelector('.resenas-lista');

    if (!lista) {
        return;
    }

    const resenas = obtenerResenasGuardadas();
    for (let i = resenas.length - 1; i >= 0; i--) {
        lista.insertBefore(crearCardResena(resenas[i]), lista.firstChild);
    }
}

function validarFormularioResena() {
    // Obtener el formulario
    let formulario = document.querySelector('.resena-form');
    let listaResenas = document.querySelector('.resenas-lista');
    
    if (!formulario || !listaResenas) {
        return;
    }
    
    // Agregar evento al enviar el formulario
    formulario.addEventListener('submit', function(evento) {
        // Prevenir el envío por defecto
        evento.preventDefault();
        
        // Obtener los valores del formulario
        let tituloLibro = document.getElementById('titulo-libro').value.trim();
        let autorLibro = document.getElementById('autor-libro').value.trim();
        let tuNombre = document.getElementById('tu-nombre').value.trim();
        let calificacion = document.getElementById('calificacion').value;
        let tuResena = document.getElementById('tu-resena').value.trim();
        let fecha = obtenerFechaActual();
        let imagenPorDefecto = obtenerImagenPorDefecto();
        
        // Validar que ningún campo esté vacío
        if (tituloLibro === '' || autorLibro === '' || tuNombre === '' || 
            calificacion === 'Selecciona una calificación' || tuResena === '') {
            alert('Por favor, completa todos los campos del formulario');
            return;
        }
        
        // Validar que la reseña tenga al menos 10 caracteres
        if (tuResena.length < 10) {
            alert('La reseña debe tener al menos 10 caracteres');
            return;
        }

        const nuevaResena = {
            tituloLibro: tituloLibro,
            autorLibro: autorLibro,
            tuNombre: tuNombre,
            calificacion: calificacion,
            textoResena: tuResena,
            fecha: fecha,
            imagen: imagenPorDefecto
        };

        const resenasGuardadas = obtenerResenasGuardadas();
        resenasGuardadas.unshift(nuevaResena);
        guardarResenasGuardadas(resenasGuardadas);

        const nuevaCard = crearCardResena(nuevaResena);
        listaResenas.insertBefore(nuevaCard, listaResenas.firstChild);
        
        // Si todas las validaciones pasaron
        alert('¡Reseña publicada exitosamente!\n\nLibro: ' + tituloLibro + '\nAutor: ' + autorLibro + '\nCalificación: ' + calificacion);
        
        // Limpiar el formulario
        formulario.reset();
    });
}

// ========================================
// INICIALIZAR FUNCIONALIDADES AL CARGAR LA PÁGINA
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar filtros si estamos en libros.html
    inicializarFiltros();
    
    // Validar formulario si estamos en resenas.html
    cargarResenasGuardadas();
    validarFormularioResena();
});
