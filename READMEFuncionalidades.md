# Funcionalidades Futuras para Bookia

Este documento describe funcionalidades que podrían implementarse en el sitio web Bookia para mejorar la experiencia del usuario. Estas funcionalidades han sido consideradas pero no están actualmente implementadas en el sitio estático.

## Funcionalidad de Filtrado de Libros

### Descripción
Permite a los usuarios filtrar la lista de libros por categorías literarias (Ficción, Misterio, Romance, Aventura, Fantasía) o ver todos los libros disponibles.

### Cómo funcionaría
- **Botones de filtro**: En la página `libros.html`, habría botones para cada categoría.
- **Interacción**: Al hacer clic en un botón, solo se mostrarían los libros de esa categoría.
- **Estado activo**: El botón seleccionado tendría un estilo visual diferente para indicar la categoría activa.
- **Animación**: Los libros aparecerían/desaparecerían con una transición suave.

### Beneficios
- Mejora la navegación en catálogos grandes.
- Ayuda a los usuarios a encontrar libros de su interés rápidamente.
- Proporciona una experiencia más interactiva.

### Implementación técnica
- Usaría JavaScript para manipular el DOM.
- Los libros tendrían atributos `data-categoria` para identificar su categoría.
- Se aplicaría `display: none/block` con transiciones CSS.

## Funcionalidad del Menú Hamburguesa

### Descripción
Un menú de navegación responsive que se activa en dispositivos móviles, permitiendo acceder a las diferentes secciones del sitio.

### Cómo funcionaría
- **Botón hamburguesa**: Un icono de tres líneas que se transforma en una X cuando está activo.
- **Menú desplegable**: Al activar, se muestra un menú vertical con enlaces a Inicio, Libros, Reseñas, Autores y Contacto.
- **Animación**: El icono se anima rotando las líneas para formar una X.
- **Cierre automático**: El menú se cierra al hacer clic en un enlace o fuera del menú.

### Beneficios
- Mejora la usabilidad en dispositivos móviles.
- Mantiene un diseño limpio en pantallas pequeñas.
- Proporciona navegación intuitiva sin ocupar espacio permanente.

### Implementación técnica
- Usaría CSS puro con un checkbox oculto y label para el toggle.
- El menú se mostraría/ocultaría usando `display: none/flex` en media queries.
- Animaciones CSS para la transformación del icono.

## Otras Funcionalidades Posibles

### Búsqueda de Libros
- Campo de búsqueda para encontrar libros por título o autor.
- Resultados en tiempo real mientras se escribe.

### Sistema de Reseñas Interactivo
- Formulario para que usuarios agreguen reseñas.
- Sistema de calificación con estrellas.
- Comentarios y respuestas.


### Autenticación de Usuarios
- Registro e inicio de sesión.
- Perfiles de usuario con libros favoritos.

### Recomendaciones Personalizadas
- Algoritmo simple basado en categorías preferidas.
- Sección de "Recomendados para ti".

---

Estas funcionalidades podrían implementarse en futuras versiones del sitio para hacerlo más dinámico e interactivo. Cada una requeriría JavaScript para la lógica del lado del cliente y posiblemente un backend para persistir datos.