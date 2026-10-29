# Instrucciones de Prueba - Landing Page PINTA? (Versión 2 con Assets)

## Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo en modo background:

```bash
astro dev --background
```

El servidor estará disponible en: http://localhost:4321

## Verificar la Página Principal

### 1. Sección Hero (#bienvenida)
- **Fondo de textura:** Debe mostrar la imagen de fondo de periódico (`/assets/inicio/InicioBack.png`)
- **Título principal:** Debe mostrar el sticker "WELCOME TO PINTA?" (`/assets/inicio/InicioStick.png`)
- **Stickers flotantes:** Debes ver los stickers posicionados alrededor del título:
  - Labios (`boca-1.png`, `boca-2.png`)
  - Estrellas (`star-2.png`)
  - Claqueta/vinilo (`ExpeStic.png`)
- **Animaciones:** Los stickers deben tener animaciones suaves (bounce, pulse)

### 2. Sección Portfolio (#portfolio)
- **Fondo:** Debe mostrar la imagen de fondo (`/assets/portfolio/BG-PORTFOLIO.png`)
- **Título PORTFOLIO:** Debe aparecer como imagen (`/assets/portfolio/BANNER-PORTFOLIO.png`)
- **4 botones verticales:**
  - Graphic Design > (púrpura)
  - 3D Modeling > (magenta)
  - Motion Graphics > (cian)
  - Clientes > (amarillo)
- **Efecto hover interactivo:**
  - Al pasar el cursor sobre cada botón, el contenedor derecho debe cambiar de color y mostrar información de la categoría
  - Transición suave (fade) entre previews
- **Navegación:** Al hacer clic en cada botón, debe redirigir a `/creaciones?categoria=[categoria]`

### 3. Sección Misión (#mision) - **NUEVA ANIMACIÓN GSAP**
- **Fondo:** Debe mostrar la imagen de cuadrícula (`/assets/mision/BG-PINTA.png`)
- **Stickers decorativos:** Debes ver los stickers de `/assets/mision/stickers/`:
  - Coronas (`crown.png`)
  - Corazones (`heart.png`)
  - Rayos (`lightnin.png`)
  - Labios (`mouth.png`)
  - Estrellas (`star-1.png` a `star-4.png`)
- **Logo PINTA?:** Debe mostrar la imagen del logo (`/assets/mision/logo.png`)
- **Animación GSAP ScrollTrigger:**
  - Al scrollear hasta la sección, el scroll debe fijarse (pin) cuando el logo está centrado
  - El logo debe animarse (escalar y desvanecerse) al continuar scrolleando
  - El texto "DISFRUTAR ES PARTE DEL PROCESO" debe revelarse gradualmente
  - El scroll debe liberarse al finalizar la animación
- **Texto revelado:**
  - Título: "DISFRUTAR ES PARTE DEL PROCESO"
  - Bajada: Texto explicativo sobre la agencia

### 4. Sección Contacto (#contacto)
- **Fondo:** Debe mostrar la imagen de fondo (`/assets/contacto/BG-CONTACTO.png`)
- **Título destacado:** Debe mostrar el sticker "HABLA CON PINTA?" (`/assets/contacto/BANNER-CONTACTO.png`)
- **Formulario con 3 campos:**
  - Nombre (input text)
  - Email (input email)
  - Consulta (textarea)
- **Botón ENVIAR:** Debe aparecer en la esquina inferior derecha, color turquesa
- **Footer:**
  - Logo "PINTA?"
  - Slogan "Disfrutar es parte del proceso"
  - Redes sociales "@agenciapinta"
  - Stickers decorativos de estrellas (`/assets/contacto/STARS/`)

## Verificar la Página de Creaciones

### Navegación desde Portfolio
- Haz clic en cualquiera de los 4 botones de la sección Portfolio
- Debes ser redirigido a `/creaciones?categoria=[categoria]`

### Página Creaciones
- **Header:**
  - Sticker "CREACIONES" en la esquina superior izquierda (placeholder por ahora)
  - Dropdown selector de categorías en la esquina superior derecha
- **Dropdown:**
  - Opciones: Todas las categorías, Graphic Design, 3D Modeling, Motion Graphics, Clientes
  - Al cambiar la selección, la URL debe actualizarse con el parámetro `?categoria=...`
  - La grilla debe filtrarse dinámicamente según la categoría seleccionada
- **Grilla de tarjetas:**
  - 3 tarjetas en horizontal (o menos si se filtra por categoría)
  - Cada tarjeta con estilo oscuro/púrpura y borde superior redondeado
  - Placeholders de preview (por ahora, hasta tener renders finales):
    - Nintendo Switch 3D (3D Modeling)
    - Cámara Vintage (Graphic Design)
    - Granada Pinta (Motion Graphics)
  - Efecto hover: sombra aumentada
- **Filtrado dinámico:**
  - Al seleccionar una categoría, solo deben mostrarse los proyectos de esa categoría
  - Si no hay proyectos en una categoría, debe mostrar mensaje "No hay proyectos en esta categoría"

## Verificar Build

Para verificar que el proyecto compila sin errores:

```bash
astro build
```

El comando debe completarse exitosamente sin errores.

## Comandos de Gestión del Servidor

- **Iniciar servidor en background:** `astro dev --background`
- **Detener servidor:** `astro dev stop`
- **Ver estado del servidor:** `astro dev status`
- **Ver logs del servidor:** `astro dev logs`

## Notas Importantes

- **Desktop Only:** Esta versión está diseñada exclusivamente para escritorio. No se ha implementado responsive móvil.
- **Assets integrados:** Los elementos visuales ahora usan imágenes reales de `/public/assets/`
- **Placeholders temporales:** Portfolio y Creaciones aún usan placeholders para previews hasta tener renders finales
- **Animación GSAP:** La sección Misión implementa animación GSAP con ScrollTrigger
- **React Components:** Portfolio y CreationsGrid ahora son componentes React (.jsx) para lógica interactiva
- **Formulario:** El formulario de contacto es solo visual (frontend), no tiene backend funcional.
- **Colores personalizados:** Se usa Tailwind CSS v4 con configuración `@theme` en `src/styles/global.css`.
- **GSAP CDN:** GSAP y ScrollTrigger se cargan desde CDN en el Layout global

## Checklist de Verificación

- [ ] Servidor de desarrollo inicia correctamente
- [ ] Página principal carga en http://localhost:4321
- [ ] Sección Hero muestra fondo de textura y sticker principal
- [ ] Sección Hero muestra stickers flotantes animados
- [ ] Sección Portfolio muestra fondo y título como imágenes
- [ ] Sección Portfolio muestra 4 botones interactivos con hover
- [ ] Efecto hover en Portfolio cambia el preview derecho
- [ ] Navegación a /creaciones funciona desde Portfolio
- [ ] Sección Misión muestra fondo de cuadrícula y stickers
- [ ] Sección Misión muestra logo como imagen
- [ ] **Animación GSAP ScrollTrigger funciona al scrollear** (logo se anima, texto se revela)
- [ ] Sección Contacto muestra fondo y título como imágenes
- [ ] Sección Contacto muestra formulario y footer con stickers
- [ ] Página creaciones muestra grilla de tarjetas
- [ ] Dropdown de categorías en creaciones funciona
- [ ] Filtrado dinámico en creaciones funciona
- [ ] Build se ejecuta sin errores
