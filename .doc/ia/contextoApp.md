# Contexto del Proyecto: Landing Page "PINTA?"

## 1. Descripción del Proyecto
Estamos desarrollando la primera versión (v1) de una **landing page de alto impacto visual** para una agencia de diseño multimedia llamada **PINTA?**[cite: 1, 2]. 
- **Alcance actual:** Exclusivamente para pantallas de escritorio (Desktop Only / No responsive en esta etapa).
- **Tipo de aplicación:** 100% Frontend estático / SPA interactiva (sin backend propio ni base de datos).
- **Estética/Branding:** Estilo descontracturado, urbano y creativo con estética de recortes, cuadernos cuadriculados, stickers, colores vibrantes (púrpura, cian, magenta, amarillo) y modo oscuro en la sección de portfolio[cite: 1, 2].

---

## 2. Stack Tecnológico Elegido
- **Framework Principal:** Astro (v4+) [usando arquitectura de islas (*Astro Islands*) y generación estática].
- **UI & Componentes Interactivos:** React (para islas con estado complejo como la grilla de creaciones).
- **Estilos:** Tailwind CSS + CSS global.
- **Animaciones & Smooth Scroll:** GSAP + ScrollTrigger (para efectos de paros de scroll y división de elementos) y Lenis (smooth scroll global).
- **Gráficos 3D / Media (A integrar):** Three.js / React Three Fiber o Spline.

---

## 3. Estructura y Sitemap de la Aplicación

### Ruta Principal: `/` (`index.astro`)
1. **Hero (`#bienvenida`):** Banner superior con sticker "WELCOME TO PINTA?" sobre fondo de corte de papel y espacio para stickers/elementos 3D flotantes[cite: 1, 2].
2. **Portfolio (`#portfolio`):** Sección oscura con 4 botones (`Graphic Design`, `3D Modeling`, `Motion Graphics`, `Clientes`)[cite: 1, 2]. Al hacer hover en cada opción, se muestra un preview del trabajo en el contenedor lateral[cite: 1]. Al hacer clic, redirige a `/creaciones`[cite: 1].
3. **Misión (`#mision`):** Fondo claro con grilla[cite: 2]. El scroll se pausa con GSAP ScrollTrigger, el logo central se divide a la mitad y emerge el texto explicativo de la empresa (*"Disfrutar es parte del proceso"*)[cite: 1, 4].
4. **Contacto (`#contacto`):** Sección "HABLA CON PINTA?" con un formulario simple que contiene 3 campos (`Nombre`, `Email`, `Consulta`) y un botón de `ENVIAR`[cite: 1, 2].

### Ruta Secundaria: `/creaciones` (`creaciones.astro`)
- Grilla interactiva de 3 columnas para exhibir los trabajos (modelos 3D, videos, imágenes) con un selector desplegable superior para filtrar por categoría[cite: 1, 2, 3].

---

## 4. Estado Actual del Desarrollo
- La estructura base HTML/CSS, ruteo y maquetación con Tailwind CSS de las secciones de `/` y `/creaciones` ya está implementada en Astro.
- A la espera de los assets finales (modelos `.glb`/`.gltf`, videos, texturas) por parte de la diseñadora multimedia[cite: 1].
- Se busca resolver de forma independiente:
  1. La **funcionalidad del formulario de contacto** (integración serverless/API externa sin backend propio).
  2. La **estrategia y plataformas para el hosting / despliegue** del sitio estático en producción.