# Tarea: Auditoría, Configuración y Preparación de Build para Despliegue en Vercel - PINTA?

## Objetivo
Auditar la base de código actual de la landing page "PINTA?", corregir potenciales bloqueos durante el Server-Side Rendering (SSR) del build de Astro y dejar la configuración de entorno lista para un despliegue estático, estable y altamente optimizado en Vercel.

---

## 1. Integración del Adaptador y Configuración de Astro (`astro.config.mjs`)
1. Asegura que el archivo de configuración contenga `output: 'static'` explícito.
2. Agrega e integra el adaptador oficial de Vercel para Astro (`@astrojs/vercel`) instalándolo si no está en las dependencias:
   - Configura `adapter: vercel()` dentro de `astro.config.mjs`.
3. Verifica la declaración correcta de las integraciones activas: `tailwind()` y `react()`.

---

## 2. Auditoría de Dependencias y Scripts (`package.json`)
1. Verifica que existan los scripts de compilación estándar:
   - `"build": "astro build"`
   - `"preview": "astro preview"`
2. Confirma que todas las librerías críticas para el cliente (`gsap`, `@studio-freight/lenis`, `@astrojs/react`, `@astrojs/tailwind`, `react`, `react-dom`) estén registradas como dependencias de producción (`dependencies`) y no únicamente como dependencias de desarrollo (`devDependencies`).

---

## 3. Compatibilidad SSR y Directivas de Cliente (Client Directives)
Para evitar que la etapa de Server-Side Rendering de Astro falle al intentar acceder a APIs del navegador (`window`, `document`, `HTMLCanvasElement`):
1. **Script Globales / GSAP / Lenis:** Confirma que el código de inicialización de Lenis Smooth Scroll y GSAP ScrollTrigger resida dentro de etiquetas `<script>` en los componentes `.astro` (los cuales se ejecutan solo en el cliente) o encapsulado en comprobaciones `if (typeof window !== 'undefined')`.
2. **Islas de React:**
   - Para la grilla interactiva `/creaciones` o componentes de preview, aplica la directiva de hidratación adecuada (`client:load` o `client:visible`).
   - Si algún componente de React depende 100% de APIs del navegador durante el render inicial, utiliza la directiva `client:only="react"`.

---

## 4. Estructura y Caché de Assets Estáticos (`vercel.json`)
1. Comprueba que los assets gráficos organizados en `/public/assets/` (`inicio`, `mision`, `portfolio`, `contacto`) sean servidos directamente por ruta estática absoluta (`/assets/...`) y no mediante importaciones binarias dentro del JS de `src/`.
2. Crea un archivo `vercel.json` en la raíz del proyecto para aplicar políticas de caché prolongado (`Cache-Control`) en assets estáticos (imágenes, SVG, fuentes, modelos 3D y videos):

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 5. Auditoría del Formulario con Web3Forms
Comprueba que el componente de contacto lea la clave pública desde import.meta.env.PUBLIC_WEB3FORMS_KEY.

Asegura que si la variable de entorno no está definida localmente durante el build, el componente no rompa la compilación (usar un fallback seguro o evaluación condicional).

---
## 6. Verificación de Compilación Local
Ejecuta la prueba de fuego en la terminal:

PowerShell
npm run build
Confirma que la carpeta /dist se genere de forma limpia y sin advertencias ni errores. Si la compilación es exitosa, ejecuta npm run preview para probar la versión de producción localmente antes de subir a GitHub/Vercel.
