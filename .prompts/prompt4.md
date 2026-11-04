# Tarea: Funcionalidad Asíncrona del Formulario de Contacto con Web3Forms y Configuración para Vercel

## Objetivo
Hacer 100% funcional el formulario de la sección "HABLA CON PINTA?" integrando el servicio de correo Web3Forms. El envío debe realizarse vía AJAX (`fetch`) sin recargar la página, manejando estados visuales (Cargando, Éxito, Error), protección anti-spam (Honeypot) y lectura segura de claves mediante variables de entorno en Astro.

---

## 1. Configuración de Variables de Entorno en Astro
Astro expone únicamente las variables con el prefijo `PUBLIC_` al cliente.
1. Crea o actualiza el archivo `.env` en la raíz del proyecto:
```env
PUBLIC_WEB3FORMS_KEY=tu_api_key_aqui
```

2. Crea un archivo `.env.example` en la raíz del proyecto para control de versiones:
```env
PUBLIC_WEB3FORMS_KEY=

```

---

## 2. Implementación del Componente `Contact.astro` (o la Isla correspondiente)

Actualiza el componente de la sección de contacto con las siguientes especificaciones:

### Estrategia HTML / Formulario:

* Tres campos de entrada obligatorios (`required`):
* `NOMBRE` (`input type="text" name="name"`)
* `E-MAIL` (`input type="email" name="email"`)
* `CONTANOS...` (`textarea name="message"`)


* Campos ocultos para Web3Forms:
* `<input type="hidden" name="access_key" value={import.meta.env.PUBLIC_WEB3FORMS_KEY} />`
* `<input type="hidden" name="subject" value="Nueva consulta desde la landing page PINTA?" />`
* Campo Anti-Spam Honeypot: `<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />`


* Botón de envío: `"ENVIAR"` (Turquesa).
* Contenedor para mensajes de feedback visual (éxito/error) debajo del formulario.

### Script Client-Side (`<script>` en Astro):

* Capturar el evento `submit` con `e.preventDefault()`.
* Deshabilitar el botón de envío y cambiar el texto a `"ENVIANDO..."` durante el proceso.
* Construir el cuerpo con `new FormData(form)` y enviarlo mediante `fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })`.
* **En caso de respuesta exitosa (`data.success`):**
* Resetear los campos del formulario (`form.reset()`).
* Mostrar un mensaje visual claro en color verde (ej: *"¡Mensaje enviado con éxito! Nos pondremos en contacto pronto."*).
* Restablecer el botón a su estado original (`"ENVIAR"`).


* **En caso de error:**
* Mostrar un mensaje de error visual en color rojo (ej: *"Ocurrió un error al enviar la consulta. Intentá nuevamente."*).
* Habilitar nuevamente el botón de envío.

---

## 3. Documentación para Despliegue en Vercel (`Web3FormsToVercel.md`)

Crea un archivo Markdown llamado `Web3FormsToVercel.md` en la raíz del proyecto con la guía paso a paso para configurar la clave de API cuando el proyecto se suba a producción:

1. Pasos para obtener la API Key gratuita en [web3forms.com](https://web3forms.com).
2. Pasos para ingresar al Dashboard del proyecto en **Vercel** (`Settings > Environment Variables`).
3. Declaración de la variable `PUBLIC_WEB3FORMS_KEY` asociando el valor a los entornos `Production`, `Preview` y `Development`.
4. Nota aclaratoria indicando que tras agregar la variable en Vercel es necesario realizar un *Redeploy* para que Astro compile la variable estática en el cliente.

Por favor, genera y/o modifica los archivos correspondientes manteniendo la estética visual y estilos en Tailwind CSS ya configurados.
