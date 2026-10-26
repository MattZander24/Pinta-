# Instrucciones de Prueba - Landing Page PINTA?

## Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo en modo background:

```bash
astro dev --background
```

El servidor estará disponible en: http://localhost:4321

## Verificar la Página Principal

### 1. Sección Hero (#bienvenida)
- **Banner de colores:** Verifica que aparezca una barra superior con tres colores (Cian, Amarillo, Magenta)
- **Título principal:** Debe mostrar "WELCOME TO PINTA?" con estética de sticker púrpura
- **Efecto de corte de papel:** El título debe tener un efecto de sombra/superposición
- **Placeholders flotantes:** Debes ver círculos animados representando claqueta, discos y stickers
- **Fondo:** Debe tener un patrón de cuadrícula (notebook) en color claro

### 2. Sección Portfolio (#portfolio)
- **Fondo oscuro:** La sección debe tener fondo negro/oscuro
- **Título PORTFOLIO:** Debe aparecer centrado y destacado
- **4 botones verticales:**
  - Graphic Design > (púrpura)
  - 3D Modeling > (magenta)
  - Motion Graphics > (cian)
  - Clientes > (amarillo)
- **Efecto hover:** Al pasar el cursor sobre cada botón, debe haber un efecto visual (borde blanco, movimiento)
- **Contenedor de vista previa:** A la derecha debe aparecer un contenedor con placeholder para vista previa
- **Navegación:** Al hacer clic en cada botón, debe redirigir a `/creaciones?categoria=[categoria]`

### 3. Sección Misión (#mision)
- **Fondo claro con cuadrícula:** Patrón de cuadrícula similar a Hero
- **Stickers decorativos:** Debes ver círculos de colores decorativos (estrellas, labios, coronas - placeholders)
- **Logo PINTA?:** El logo debe aparecer dividido en dos mitades (superior e inferior)
- **Texto revelado:**
  - Título: "DISFRUTAR ES PARTE DEL PROCESO"
  - Bajada: Texto explicativo sobre la agencia
- **Efecto hover en logo:** Al pasar el cursor sobre las mitades del logo, deben separarse ligeramente

### 4. Sección Contacto (#contacto)
- **Título destacado:** "HABLA CON PINTA?" en botón/etiqueta turquesa
- **Formulario con 3 campos:**
  - Nombre (input text)
  - Email (input email)
  - Consulta (textarea)
- **Botón ENVIAR:** Debe aparecer en la esquina inferior derecha, color turquesa
- **Footer:**
  - Logo "PINTA?"
  - Slogan "Disfrutar es parte del proceso"
  - Redes sociales "@agenciapinta"

## Verificar la Página de Creaciones

### Navegación desde Portfolio
- Haz clic en cualquiera de los 4 botones de la sección Portfolio
- Debes ser redirigido a `/creaciones?categoria=[categoria]`

### Página Creaciones
- **Header:**
  - Sticker "CREACIONES" en la esquina superior izquierda
  - Dropdown selector de categorías en la esquina superior derecha
- **Dropdown:**
  - Opciones: Todas las categorías, Graphic Design, 3D Modeling, Motion Graphics, Clientes
  - Al cambiar la selección, la URL debe actualizarse con el parámetro `?categoria=...`
- **Grilla de tarjetas:**
  - 3 tarjetas en horizontal
  - Cada tarjeta con estilo oscuro/púrpura y borde superior redondeado
  - Placeholders de preview:
    - Nintendo Switch 3D
    - Cámara Vintage
    - Granada Pinta
  - Efecto hover: sombra aumentada

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
- **Placeholders:** Los elementos visuales (claqueta, discos, stickers, previews) son placeholders CSS/SVG simples que serán reemplazados por assets finales.
- **Animación GSAP:** La sección Misión tiene la estructura HTML preparada para animación GSAP, pero la animación no está implementada en esta versión.
- **Formulario:** El formulario de contacto es solo visual (frontend), no tiene backend funcional.
- **Colores personalizados:** Se usa Tailwind CSS v4 con configuración `@theme` en `src/styles/global.css`.

## Checklist de Verificación

- [ ] Servidor de desarrollo inicia correctamente
- [ ] Página principal carga en http://localhost:4321
- [ ] Sección Hero muestra banner de colores y título
- [ ] Sección Portfolio muestra 4 botones interactivos
- [ ] Navegación a /creaciones funciona desde Portfolio
- [ ] Sección Misión muestra logo y texto
- [ ] Sección Contacto muestra formulario y footer
- [ ] Página creaciones muestra grilla de 3 tarjetas
- [ ] Dropdown de categorías en creaciones funciona
- [ ] Build se ejecuta sin errores
