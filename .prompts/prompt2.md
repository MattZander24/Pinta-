# Tarea: Integración de Assets Gráficos y Animaciones de Scroll/Hover (Versión 1) - PINTA?

## Objetivo
Reemplazar los placeholders temporales de la maqueta base con los assets gráficos reales ubicados en las carpetas `inicio`, `Pinta`, `portfolio` y `contacto`. Adicionalmente, configurar las animaciones principales con GSAP, ScrollTrigger y efectos de hover.

---

## 1. Organización de Assets en `/public` [YA REALIZADO. SOLO VERIFICAR.]
Mueve los archivos gráficos recibidos a las siguientes rutas públicas del proyecto Astro:
- `/public/assets/inicio/` (Texturas de papel, stickers, claqueta, vinilos, barra de colores header)
- `/public/assets/mision/` (Logo PINTA?, estrellas decorativas, coronas, rayos, fondo de cuadrícula)
- `/public/assets/portfolio/` (Renders 3D en PNG/JPG, afiches, botones redondeados de categorías, sticker bola de espejos)
- `/public/assets/contacto/` (Sticker "HABLA CON PINTA?", botón ENVIAR, redes)

---

## 2. Implementación por Secciones

### A. Hero (`Hero.astro`)
- Montar el fondo de textura de periódico y papel cortado superior.
- Reemplazar el título principal por la imagen/sticker `WELCOME TO PINTA?`.
- Posicionar de forma absoluta los stickers flotantes (claqueta, vinilo, labios, estrellas) rodeando el título.

### B. Portfolio (`Portfolio.astro`)
- Fondo oscuro `#0E0E0E`.
- Implementar los 4 botones redondeados (`GRAPHIC DESIGN`, `3D MODELING`, `MOTION GRAPHICS`, `CLIENTES`).
- **Lógica de Hover Interactivo:**
  - Al hacer hover sobre cada botón, actualizar de forma fluida (fade in/out) la imagen de la card derecha con el render correspondiente (ej: Granada Pinta para 3D Modeling, Pósters para Graphic Design).
  - Al hacer clic en un botón, redirigir a `/creaciones?cat=[categoria]`.

### C. Misión con GSAP ScrollTrigger (`Mission.astro`)
- Configurar la sección sobre el fondo de hoja cuadriculada.
- **Animación ScrollTrigger:**
  1. Fijar la pantalla (`pin: true`) cuando el logo `PINTA?` quede centrado en la vista.
  2. Al scrollear, dividir el logo `PINTA?` en dos partes (mitad superior sube, mitad inferior baja).
  3. Desplegar en el centro el texto de misión: *"DISFRUTAR ES PARTE DEL PROCESO"* y la bajada descriptiva de la agencia.
  4. Liberar el scroll al finalizar la animación para continuar hacia Contacto.

### D. Galería Creaciones (`src/pages/creaciones.astro` / `CreationsGrid.jsx`)
- Colocar el sticker de `CREACIONES` con la bola de espejos en la esquina superior izquierda.
- Cargar las tarjetas con los renders 3D (Nintendo Switch, Cámara Vintage, Granada Pinta).
- Conectar el selector desplegable (`Dropdown`) para filtrar dinámicamente la grilla según la categoría elegida.

### E. Contacto (`Contact.astro`)
- Integrar la etiqueta `"HABLA CON PINTA?"` y los campos de formulario estilizados.
- Colocar el footer inferior con los créditos, redes `@agenciapinta` y logo.