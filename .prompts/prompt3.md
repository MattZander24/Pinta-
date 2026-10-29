# Tarea: Refactorización de Layout, Posicionamiento de Stickers y Tipografía - PINTA? (Versión 1)

## Contexto y Diagnóstico
Las animaciones y la carga de componentes ya funcionan correctamente, pero la disposición de elementos requiere un ajuste estricto de maquetado respecto a las imágenes de referencia en `\.doc\sitio`. Los elementos actualmente se apilan de forma secuencial en lugar de seguir la composición por capas, posiciones absolutas y bordes compartidos entre secciones.

---

## 1. Configuración de Tipografía y Estilos Base
1. Configura la tipografía alternativa **Outfit** (de Google Fonts) como fuente principal del proyecto.
   - Importa `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800;900&display=swap');` en `src/styles/global.css`.
   - Extiende `tailwind.config.mjs` para establecer `Outfit` como `font-sans`.
2. Asigna los pesos tipográficos:
   - Títulos y etiquetas principales: `font-black` (weight 900) o `font-extrabold` (weight 800) en mayúsculas.
   - Textos descriptivos / bajadas: `font-medium` o `font-normal`.

---

## 2. Metodología de Posicionamiento por Capas (Z-Index y Absolute Positioning)
Para evitar que las imágenes y stickers se apilen verticalmente una debajo de otra:
1. Las secciones principales (`Hero`, `Portfolio`, `Mision`, `Contacto`) deben actuar como contenedores `relative` con alto/ancho definido o `min-h-screen` según corresponda.
2. Utiliza un contenedor principal por sección para el flujo de contenido base (títulos, botones, formularios).
3. Todo elemento decorativo (stickers, estrellas, vinilos, claquetas, coronas, cortes de papel) debe utilizar `position: absolute` con coordenadas exactas (`top-X`, `left-Y`, `right-Z`, `bottom-W`, `transform translate`) y control estricto de `z-index`.

---

## 3. Manejo de Stickers Inter-sección (Bordes entre Secciones)
Existen elementos y stickers que se posicionan justo en el límite entre dos secciones (por ejemplo, entre Hero y Portfolio, o entre Misión y Contacto):
1. No encierres los stickers de borde en contenedores con `overflow: hidden`.
2. Permite que los stickers que sobrepasan una sección sobresalgan mediante `overflow: visible` en el contenedor padre.
3. Asigna un `z-index` elevado (ej. `z-20` o `z-30`) a los stickers que se solapan sobre el cambio de fondo entre secciones para mantener la fluidez visual del collage.

---

## 4. Plan de Trabajo: Sección por Sección
Revisa los archivos de imagen dentro de `\.doc\sitio` para tomar referencia exacta de la distancia, rotación y alineación:

1. **Sección 1: Hero / Bienvenida**
   - Ajusta el banner superior de colores.
   - Ubica la etiqueta `WELCOME TO PINTA?` centrada.
   - Posiciona los stickers periféricos (claqueta, disco, labios, estrellas, cursor) con posiciones absolutas alrededor del título, imitando el collage del wireframe.

2. **Sección 2: Portfolio**
   - Disposición en 2 columnas principales:
     - Columna izquierda: Título `PORTFOLIO` + lista vertical de 4 botones estilizados.
     - Columna derecha: Tarjeta fija/contenedor de preview donde la imagen cambia según el hover del botón seleccionado.

3. **Sección 3: Misión**
   - Contenedor en hoja cuadriculada.
   - Logo central `PINTA?` posicionado para la animación de división, alineado vertical y horizontalmente en el viewport.
   - Texto de misión y stickers decorativos (estrellas, coronas, rayos) posicionados de forma flotante en los márgenes.

4. **Sección 4: Contacto**
   - Botón `HABLA CON PINTA?` encabezando el área.
   - Formulario alineado al centro.
   - Footer inferior con los datos de autoría y redes.

Ajusta primero la configuración tipográfica global y el layout base del Hero, notificando los cambios aplicados antes de continuar con la siguiente sección.