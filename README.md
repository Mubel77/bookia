# Documentación del proyecto Bookia

## Descripción general

Bookia es un sitio web estático desarrollado en HTML, CSS, JavaScript y jQuery. Está pensado como una biblioteca digital con una interfaz moderna, navegable y responsive, donde los usuarios pueden ver libros, autores, reseñas y publicar nuevas opiniones.

En esta segunda entrega se corrigieron los errores observados en la primera versión y se agregaron nuevas funcionalidades para mejorar la experiencia del usuario.

---

## Cambios corregidos en esta entrega

Se realizaron mejoras sobre los puntos sugeridos por la profesora y se dejaron solucionados los problemas principales:

- Se corrigió el hover del menú de navegación para que no se desplace el header ni se vea desordenado.
- Se ajustaron los márgenes laterales en las páginas de libros, reseñas y autores para mejorar la distribución visual.
- Se corrigió el enlace de contacto para que dirija correctamente a la sección de contacto del footer.
- Se mejoró la jerarquía tipográfica del texto principal en la portada para que sea más legible y ordenado.
- Se reemplazaron o ajustaron imágenes que estaban pixeladas para que se vean con mejor calidad.
- Se hizo que el sitio sea responsive en distintas pantallas, incluyendo celulares y tablets.

---

## Estructura del proyecto

```
bookia/
  index.html
  libros.html
  autores.html
  resenas.html
  javascript.js
  animaciones.js
  styles/
    index.css
    libros.css
    autores.css
    resenas.css
    shared.css
  public/
    logo02.png
    heroLibro.jpg
    elNombreDelViento.jpg
    1984.jpg
    davinci.webp
    orgullo.webp
    islaDelTesoro.webp
    harry.webp
    100.webp
    perro.webp
    fondo.jpeg
```

---

## Archivos principales

### 1. index.html
Página principal del sitio.

Incluye:
- Header con logo, menú principal y navegación responsive.
- Hero con texto principal mejorado y diseño más limpio.
- Secciones de servicios, libros recomendados y comunidad lectora.
- Footer con contacto y redes sociales.

### 2. libros.html
Vista de catálogo de libros.

Incluye:
- Header y navegación consistentes con las demás páginas.
- Filtros por categoría con JavaScript.
- Tarjetas de libros con efecto hover.
- Diseño responsive para móviles.

### 3. autores.html
Página dedicada a los autores.

Incluye:
- Tarjetas de autores con información más ordenada.
- Mejor distribución de márgenes y espacio visual.
- Diseño adaptado para pantallas pequeñas.

### 4. resenas.html
Página para mostrar reseñas y publicar nuevas opiniones.

Incluye:
- Lista de reseñas visualmente organizada.
- Formulario para publicar una reseña.
- Validaciones con JavaScript.
- Creación dinámica de reseñas con innerHTML.

---

## Estilos y estructura visual

### styles/shared.css
Archivo nuevo que centraliza los estilos del header y el footer para que se compartan en todas las páginas.

### styles/index.css
Contiene los estilos de la página de inicio, incluyendo el hero, tarjetas de servicios y secciones destacadas.

### styles/libros.css
Define el diseño de las tarjetas de libros, filtros y layout responsive.

### styles/autores.css
Estiliza las tarjetas de autores y el contenido correspondiente.

### styles/resenas.css
Controla la apariencia de las reseñas, tarjetas y formulario de publicación.

---

## Funcionalidades agregadas

### JavaScript
Se agregaron funcionalidades interactivas para mejorar la navegación y la experiencia del usuario:

- Filtro de libros por categoría.
- Validación del formulario de reseñas.
- Publicación dinámica de reseñas en la misma página.
- Mejoras visuales en los elementos de la interfaz.

### jQuery y animaciones
Se incorporaron animaciones con jQuery para dar una sensación más dinámica al sitio:

- Animación del logo al pasar el mouse.
- Efecto de entrada del contenedor hero en la página principal.
- Elevación de tarjetas de libros y reseñas al pasar el mouse.

---

## Responsividad

El sitio fue adaptado para funcionar correctamente en:

- Desktop
- Tablet
- Celulares

Se ajustaron tamaños de texto, espacios, columnas y menú para que la experiencia sea cómoda en todas las pantallas.

---

## Resumen de la segunda entrega

En esta entrega se cumplieron los objetivos principales:

1. Corregir errores visuales y de navegación.
2. Mejorar la disposición y proporciones del contenido.
3. Hacer la página responsive.
4. Añadir funcionalidades con JavaScript y validaciones.
5. Incorporar animaciones con jQuery.

Bookia quedó con una interfaz más pulida, organizada y funcional, lista para presentarse como segunda entrega del proyecto.