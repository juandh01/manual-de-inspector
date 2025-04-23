---
id: security
title: Panel Security (Seguridad del sitio)
---

## 🔒 ¿Qué es el Panel Security?

El panel **Security** permite verificar el estado de seguridad de tu sitio web. Es donde el navegador te muestra **si estás usando HTTPS correctamente**, si hay recursos no seguros (mixed content), y si los certificados TLS son válidos.

Es especialmente útil cuando trabajás con:

- Formularios de login
- Pagos online
- Integraciones con APIs
- PWAs o sitios que requieren permisos del usuario

> 🧠 Es como un certificado de salud para tu sitio web. Si algo falla acá, el navegador puede bloquear funciones críticas.

---

## 📍 ¿Dónde se encuentra?

1. Abrí DevTools (`F12`)
2. Hacé clic en la pestaña **Security**
3. Si no aparece, abrí desde el menú: `More tools → Security`

---

## 🧭 ¿Qué muestra este panel?

Está dividido en 3 secciones principales:

### ✅ 1. Security Overview (Resumen general)

Muestra si el sitio actual cumple con las condiciones mínimas de seguridad:

- ✅ HTTPS activo (sí o no)
- 🔐 Certificado TLS válido (sí o no)
- ⚠️ Mixed Content (cargando cosas por HTTP en una página HTTPS)

Los estados pueden ser:

- **Secure**: Todo bien, candado verde activo.
- **Not secure**: Algo se está cargando sin cifrado.
- **With warnings**: Certificado válido, pero hay recursos mixtos (JS, imágenes, fuentes, etc.)

> 📌 Ideal para detectar si alguien incluyó un `<script src="http://...">` en una página HTTPS.

---

### 📄 2. Certificate (Certificado del sitio)

Al hacer clic en “View certificate”, podés ver detalles como:

- Emisor del certificado (Ej: Let's Encrypt, Cloudflare)
- Organización (si aplica)
- Fechas de emisión y expiración
- Algoritmo de cifrado
- Dominio para el que fue emitido

> ⚠️ Si el certificado está vencido, mal configurado o no coincide con el dominio, el navegador lo marcará como inseguro.

---

### 🕵️ 3. Subrecursos (Subresources)

Lista de todos los recursos externos cargados y su protocolo:

| Tipo de recurso | Protocolo | Estado       |
|------------------|-----------|--------------|
| JS externo       | HTTPS     | ✅ Seguro     |
| Imagen externa   | HTTP      | ⚠️ No seguro  |
| Fuente CDN       | HTTPS     | ✅ Seguro     |

Podés hacer clic en cada uno para ver qué URL está generando el problema y desde dónde se cargó.

---

## ⚠️ Mixed Content: el enemigo silencioso

Un sitio puede estar en HTTPS y aún así cargar archivos inseguros. Esto genera “Mixed Content”, que puede:

- Bloquear la carga automática de recursos
- Generar advertencias en consola
- Causar que los navegadores más estrictos **bloqueen tu sitio**

Ejemplo de error típico:

```bash
Mixed Content: The page at 'https://miweb.com' was loaded over HTTPS, but requested an insecure image 'http://inseguro.com/foto.jpg'.
```

### Solución:

- Asegurate de usar solo URLs HTTPS
- Migrá servicios antiguos a versiones seguras
- Activá redirecciones `http → https` en tu servidor

---

## 🛠 Otros elementos clave

- **Content Security Policy (CSP)**: políticas de seguridad que definen qué se puede cargar (ideal contra XSS)
- **HSTS**: fuerza al navegador a usar siempre HTTPS
- **COOP y COEP**: políticas para controlar el aislamiento de contextos (interacción entre iframes, scripts, etc.)

Podés ver estos headers en el panel **Network → Headers → Response Headers**

---

## ✅ ¿Cuándo usar este panel?

- Cuando tu sitio muestra advertencias de seguridad
- Al implementar formularios o pasarelas de pago
- Para validar que un dominio o subdominio tenga el certificado correcto
- Si usás recursos de terceros (CDNs, APIs, imágenes, fuentes)
- Para verificar integridad de servicios en sitios corporativos o públicos

---

## 🧠 Tips Pro

- El candado verde **no significa que tu sitio sea 100% seguro**, solo que la conexión es cifrada.
- Activá `Strict-Transport-Security` (HSTS) para reforzar HTTPS en todos los navegadores.
- Comprobá que tus APIs también estén servidas bajo HTTPS o podrían bloquearse.
- Si usás scripts de terceros, validá que no estén insertando contenido mixto o manipulaciones JS.

---

## 🧠 ¿Por qué es importante?

Porque los navegadores modernos **bloquean funciones avanzadas** (como geolocalización, cámaras, almacenamiento local, notificaciones, etc.) si el sitio **no usa HTTPS correctamente**.

> 🔒 Si tu sitio es inseguro, tu usuario tampoco se va a sentir seguro.

---

