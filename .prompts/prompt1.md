# Tarea: Implementación de la Estructura Base y Estilos (Versión 1) - Landing Page PINTA?

## Objetivo
Estructurar la maqueta semántica HTML/Astro y estilos en Tailwind CSS para la landing page de la agencia multimedia "PINTA?" basada en el sitemap y los wireframes adjuntos. Actualmente NO contamos con assets finales, por lo que usaremos placeholders SVG/CSS y colores definidos en la identidad visual.
Nota: La versión actual es exclusivamente para escritorio (Desktop First / Desktop Only), no requiere responsiveness móvil.

---

## 1. Configuración de Identidad Visual y Tailwind CSS
Configura las siguientes variables de color y estilos base en `src/styles/global.css` o `tailwind.config.mjs`:
- **Paleta de Colores Principal:**
  - Púrpura principal: `#5E1B67` / `#6B1D73` (Botones, encabezados, títulos)
  - Cian / Turquesa: `#00B5B5` / `#00C2CB`
  - Amarillo: `#FFDE00`
  - Magenta / Rosado: `#E6007E`
  - Fondos: Oscuro / Negro `#0E0E0E` (Sección Portfolio) y Blanco Cuadriculado `#F4F4F6` (Secciones Hero, Misión y Contacto).
- **Estilos globales:**
  - Fondo de hoja de cuaderno / cuadrícula para las secciones claras (Hero, Misión, Contacto).
  - Tipografías sans-serif en negrita con esquinas suaves/redondeadas para títulos.

---

## 2. Estructura de Páginas y Rutas

### Ruta 1: Landing Principal (`src/pages/index.astro`)
Debe contener las siguientes secciones en orden vertical:

1. **Sección Hero (`#bienvenida`):**
   - Banner superior con barra de colores (Cian, Amarillo, Magenta).
   - Título central destacado: `"WELCOME TO PINTA?"` con estética de etiqueta/sticker púrpuras sobre fondo de corte de papel.
   - Espacio contenedor con placeholders para futuros elementos flotantes (reproductor/claqueta, discos, stickers).

2. **Sección Portfolio (`#portfolio`):**
   - Fondo negro/oscuro.
   - Encabezado con título `"PORTFOLIO"`.
   - Menú con 4 botones verticales interactivos (Púrpura, Magenta, Turquesa, Amarillo):
     - `Graphic Design >`
     - `3D Modeling >`
     - `Motion Graphics >`
     - `Clientes >`
   - Efecto Hover: Al pasar el cursor por cada botón, cambia el contenedor lateral derecho mostrando una vista previa del tipo de trabajo seleccionado.
   - Evento Click: Cada botón redirige a `/creaciones?categoria=[categoria]`.

3. **Sección Misión / Visión (`#mision`):**
   - Fondo claro con patrón de cuadrícula y stickers ilustrativos de adorno (estrellas, labios, coronas).
   - Contenedor interactivo central para el logo `"PINTA?"` preparado para animación GSAP.
   - Estructura del corte: Un elemento divisor central para el logo dividido en dos mitades (superior/inferior) que se despliegan para revelar el texto central:
     - Título: `"DISFRUTAR ES PARTE DEL PROCESO"`
     - Bajada/Texto: *"Somos una agencia de diseño multimedia donde las ideas fluyen, la creatividad se descontractura y cada proyecto es una oportunidad para experimentar, crear y disfrutar del proceso."*

4. **Sección Contacto (`#contacto`):**
   - Título destacado: `"HABLA CON PINTA?"` en botón o etiqueta turquesa.
   - Formulario de contacto centrado con 3 campos rectangulares simples:
     - `Nombre` (input text)
     - `Email` (input email)
     - `Consulta...` (textarea)
   - Botón de envío en esquina inferior derecha: `"ENVIAR"` (Turquesa).
   - Footer inferior sencillo con el logo `"PINTA?"`, el slogan *"Disfrutar es parte del proceso"* y las redes sociales (`@agenciapinta`).

---

### Ruta 2: Galería de Trabajos (`src/pages/creaciones.astro`)
Página secundaria para listar los trabajos:

1. **Header / Control Bar:**
   - Sticker superior izquierdo con título `"CREACIONES"`.
   - Selector desplegable (Dropdown) superior derecho para filtrar categorías: `[Graphic Design, 3D Modeling, Motion Graphics, Clientes]`.

2. **Grilla de Contenido (`CreationsGrid`):**
   - Grilla horizontal de 3 columnas para tarjetas de proyectos.
   - Cada tarjeta debe tener:
     - Estilo visual de tarjeta oscura/púrpura con borde superior redondeado.
     - Contenedor de preview (para modelo 3D / video / imagen).
     - Placeholders de tarjetas: Nintendo Switch 3D, Cámara Vintage, Granada Pinta.

---

## 3. Instrucciones de Implementación
- Crea los componentes modularizados dentro de `src/components/home/` (`Hero.astro`, `Portfolio.astro`, `Mission.astro`, `Contact.astro`) y `src/components/creaciones/` (`CreationsGrid.jsx` o `.astro`).
- Usa clases de Tailwind CSS exclusivamente para los layouts y cajas.
- Agrega placeholders CSS/SVG claros donde irán los assets visuales (videos/modelos 3D) para que sean fácilmente reemplazables después.