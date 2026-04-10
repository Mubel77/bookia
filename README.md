# Documentación del proyecto Bookia

## Descripción general

Bookia es un sitio web estático creado con HTML y CSS. Está diseñado como una pequeña página web de biblioteca en línea que muestra:
- Página principal (`index.html`)
- Vista de libros (`libros.html`)
- Vista de autores (`autores.html`)
- Vista de reseñas (`resenas.html`)

Cada página tiene su propio archivo CSS en la carpeta `styles/` para separar el estilo y mantener el proyecto organizado.

---

## Estructura del proyecto

```
bookia/
  index.html
  libros.html
  autores.html
  resenas.html
  README.md
  styles/
    index.css
    libros.css
    autores.css
    resenas.css
  public/
    logo.jpeg
    libros.jpg
    reseñas.jpg
    autores.jpg
    recomedables.jpg
    fondo.jpeg
```

> Nota: `public/` contiene imágenes que se usan en las cartas y el logo del sitio.

---

## Explicación de cada archivo

### 1. `index.html`

Esta es la página de inicio. Sirve como puerta de entrada al sitio.

Contenido principal:
- `header` con logo, menú principal y botón hamburguesa para mobile.
- Sección `hero` con título, descripción y botón para ir a la página de libros.
- Tarjetas de servicios que muestran enlaces a Libros, Reseñas y Autores.
- Sección de fondo con imagen de hero secundaria.
- Tarjetas de libros recomendados.
- `footer` con contacto, redes sociales y formulario de suscripción.

¿Por qué es importante?
- Muestra la estructura básica de una web.
- Enseña cómo organizar contenido en secciones.
- Incluye navegación entre páginas.

### 2. `styles/index.css`

Este archivo define el estilo para la página de inicio.

¿Qué controla?
- Estilos globales: márgenes, tipografía y `box-sizing`.
- Header y navegación con colores y diseño.
- Hero con fondo, tipografía y botón.
- Tarjetas (`card`) con sombra, bordes redondeados y espaciado.
- Fondo de imagen con overlay oscuro.
- Footer con columnas y formulario de suscripción.
- Responsividad: cuando la pantalla es pequeña, el menú cambia a una vista mobile,
  y el footer queda centrado.

Temas importantes para principiantes:
- Cómo usar clases como `.card` para aplicar el mismo estilo a varios elementos.
- Cómo usar `@media(max-width:768px)` para adaptar la web al móvil.
- Cómo dar estilo a elementos de formulario.

### 3. `libros.html`

Esta página muestra la lista de libros.

Contenido principal:
- `header` con el mismo menú y logo redondo.
- `hero-libros` con título principal.
- Botones de filtro para ver libros por categoría.
- Rejilla de cards de libros (`.libros-grid`).
- Cada libro tiene una imagen, título, autor, descripción y botón `Ver reseña`.
- Footer similar al de `index.html`.

¿Por qué es útil?
- Enseña cómo usar `data-` attributes (`data-categoria`) para filtrar contenido.
- Muestra una vista tipo catálogo.
- Permite ver cómo usar flexbox y grid para organizar cards.

### 4. `styles/libros.css`

Estilos específicos para la página de libros.

¿Qué controla?
- Diseño del header y responsive.
- Estilo del `hero-libros`.
- Botones de filtro con estados activos.
- Cards de libros con animaciones, sombras y formato de descripción.
- Diseño responsive para mostrar una columna en móvil.
- Footer centrado y adaptado al móvil.

Lecciones clave:
- Cómo diseñar tarjetas con `border-radius` y `box-shadow`.
- Cómo hacer un botón activo con `.active`.
- Cómo ocultar y mostrar un menú mobile.

### 5. `autores.html`

Esta página presenta información de autores.

Contenido principal:
- `header` con menú y logo.
- `hero-autores` con título y descripción.
- Lista de autores en tarjetas (`.autor-card`).
- Cada autor muestra imagen, nombre, nacionalidad, descripción y libros destacados.
- Footer con las mismas secciones.

Para el aprendiz:
- Comprender la estructura repetitiva de tarjetas.
- Ver cómo separar contenido en bloques claros.
- Aprende la importancia de los títulos y textos explicativos.

### 6. `styles/autores.css`

Estilos para la página de autores.

¿Qué controla?
- Estilo del hero y header.
- Diseño de tarjetas de autor con borde izquierdo verde.
- Imagen circular de autor y descripción de texto.
- Lista de libros del autor en formato limpio.
- Responsividad para que el layout se adapte al móvil.

Temas útiles:
- Uso de `display:flex` para alinear imagen y texto.
- Cómo usar colores suaves para una presentación elegante.
- Cómo convertir listas en un diseño visual agradable.

### 7. `resenas.html`

Aquí se muestran reseñas de libros.

Contenido principal:
- `header` con navegación y logo redondo.
- `hero-resenas` con título y subtítulo.
- Lista de reseñas con cards (`.resena-card`).
- Cada reseña tiene imagen, título, autor, estrellas, texto y autor de la reseña.
- Formulario para que el visitante publique su propia reseña.
- Footer igual que las demás páginas.

¿Qué enseña?
- Cómo crear una sección de opiniones.
- Cómo estructurar texto largo en una tarjeta.
- Cómo crear formularios con `label`, `input`, `select` y `textarea`.

### 8. `styles/resenas.css`

Estilos para la página de reseñas.

¿Qué controla?
- Estilo del hero de reseñas.
- Formato de tarjetas de reseña con sombra y separación.
- Diseño de estrellas, autor y fecha.
- Estilo del formulario de reseña.
- Responsividad para que todo se vea bien en móvil.

Conceptos clave:
- Organización de tarjetas de contenido.
- Uso de tipografía para diferenciar títulos y texto.
- Estilos para formulario amigables.

---

## Cómo funciona el menú mobile

Cada página incluye JavaScript simple dentro del HTML:
- Se agrega un botón hamburguesa con la clase `.hamburguesa`.
- Al hacer clic cambia la clase `active` en el menú.
- Al cambiar la clase, el menú se muestra y oculta en mobile.
- También se cierra automáticamente cuando se pulsa un enlace.

Esto es una forma básica de hacer un menú responsive sin librerías externas.

---

## Consejos para principiantes

1. **HTML y CSS separados**: cada página HTML tiene su propio archivo CSS.
2. **Clases reutilizables**: `.card`, `.footer-section`, `.btn-submit` ayudan a mantener código ordenado.
3. **Responsive**: el proyecto usa `@media(max-width:768px)` para adaptar al móvil.
4. **Estructura clara**: cada página tiene `header`, `section`, `footer`.
5. **Navegación simple**: enlaces entre páginas permiten moverse por el sitio.

---

## Resumen rápido

- `index.html` + `styles/index.css`: página de inicio y presentación.
- `libros.html` + `styles/libros.css`: catálogo de libros y filtros.
- `autores.html` + `styles/autores.css`: listado de autores y sus obras.
- `resenas.html` + `styles/resenas.css`: reseñas de libros y formulario de opinión.

Con esta documentación podrás entender cómo está construido Bookia y cómo puedes continuar aprendiendo HTML y CSS trabajando directamente sobre estos archivos.