// ========================================
// DATOS DE CATEGORÍAS
// ========================================

let categorias = ['todos', 'ficción', 'misterio', 'romance', 'aventura', 'fantasía'];

// ========================================
// FUNCIONALIDADES DE FILTRADO DE LIBROS
// ========================================

function validarCategoria(categoria) {
    // Verificar si la categoría existe en nuestro arreglo
    for (let i = 0; i < categorias.length; i++) {
        if (categorias[i] === categoria) {
            return true;
        }
    }
    return false;
}

function filtrarLibros(categoria) {
    // Validar que la categoría sea válida
    if (!validarCategoria(categoria)) {
        alert('Categoría no válida');
        return;
    }
    
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
    
    // Obtener el elemento del mensaje
    let mensajeDiv = document.getElementById('mensaje-filtro');
    
    // Si no hay libros, mostrar mensaje
    if (librosEncontrados === 0) {
        alert('No hay libros disponibles en la categoría: ' + categoria);
        mensajeDiv.textContent = 'No hay libros disponibles en la categoría: ' + categoria;
        mensajeDiv.style.display = 'block';
    } else {
        // Ocultar el mensaje si hay libros
        mensajeDiv.style.display = 'none';
        mensajeDiv.textContent = '';
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

function validarFormularioResena() {
    // Obtener el formulario
    let formulario = document.querySelector('.resena-form');
    
    if (!formulario) {
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
    validarFormularioResena();
});
