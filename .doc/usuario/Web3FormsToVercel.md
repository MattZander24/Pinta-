# Configuración de Web3Forms para Despliegue en Vercel

Este documento guía el proceso de configuración de la clave de API de Web3Forms cuando el proyecto se despliegue en producción en Vercel.

## 1. Obtener la API Key de Web3Forms

1. Visita [web3forms.com](https://web3forms.com)
2. Regístrate o inicia sesión en tu cuenta
3. Navega al dashboard de tu cuenta
4. Copia tu API Key gratuita (Access Key)
5. Esta clave será utilizada en la variable de entorno

## 2. Configurar Variables de Entorno en Vercel

1. Ingresa al Dashboard de tu proyecto en [Vercel](https://vercel.com/dashboard)
2. Selecciona tu proyecto PINTA
3. Ve a **Settings** (Configuración) en el menú superior
4. Selecciona **Environment Variables** (Variables de Entorno) en el menú lateral
5. Haz clic en **Add New** (Agregar nueva)

## 3. Agregar la Variable `PUBLIC_WEB3FORMS_KEY`

1. En el campo **Key** (Clave), ingresa: `PUBLIC_WEB3FORMS_KEY`
2. En el campo **Value** (Valor), pega tu API Key de Web3Forms
3. Selecciona los entornos donde se aplicará la variable:
   - ✅ **Production** (Producción)
   - ✅ **Preview** (Vista previa)
   - ✅ **Development** (Desarrollo)
4. Haz clic en **Save** (Guardar)

## 4. Redesplegar el Proyecto

⚠️ **Importante:** Después de agregar la variable de entorno en Vercel, es necesario realizar un **Redeploy** para que Astro compile la variable estática en el cliente.

### Opción A: Desde el Dashboard de Vercel

1. Ve a la pestaña **Deployments** (Despliegues)
2. Selecciona el despliegue más reciente
3. Haz clic en los tres puntos (⋮) en la esquina superior derecha
4. Selecciona **Redeploy** (Redesplegar)
5. Confirma la acción

### Opción B: Desde Git

Si tu proyecto está conectado a un repositorio Git:

1. Realiza un pequeño cambio en el código (por ejemplo, un comentario)
2. Haz commit y push al repositorio
3. Vercel detectará el cambio y realizará un nuevo despliegue automáticamente

## Notas Adicionales

- La variable `PUBLIC_WEB3FORMS_KEY` está prefijada con `PUBLIC_` porque Astro expone únicamente las variables con este prefijo al cliente (browser-side code)
- La clave de API se inyecta en el código del cliente durante el build time de Astro
- Asegúrate de mantener tu API Key segura y no compartirla públicamente
- Para desarrollo local, el archivo `.env` en la raíz del proyecto ya contiene la clave configurada
- El archivo `.env.example` está incluido en el control de versiones como referencia para otros desarrolladores

## Verificación

Después del redespliegue:

1. Visita tu sitio en producción
2. Navega a la sección de contacto
3. Completa el formulario y envíalo
4. Verifica que recibes el correo electrónico en tu cuenta de Web3Forms
5. Verifica que el mensaje de éxito se muestra correctamente en la interfaz

## Solución de Problemas

### El formulario no envía correos
- Verifica que la API Key sea correcta
- Revisa los logs de Vercel para errores de build o runtime
- Asegúrate de que la variable de entorno esté configurada en todos los entornos necesarios

### Error "window is not defined"
- Este error no debería ocurrir con la implementación actual, ya que el script se ejecuta en el cliente
- Si aparece, verifica que el script esté correctamente encapsulado en el componente Astro

### Mensajes de error no aparecen
- Verifica que el contenedor de feedback (`[data-contact-feedback]`) exista en el DOM
- Revisa la consola del navegador para errores de JavaScript
