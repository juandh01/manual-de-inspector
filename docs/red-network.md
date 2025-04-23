---
id: red-network
title: Panel de Red (Network)
---

## 🌐 ¿Qué es el Panel de Red?

El panel de red (**Network**) permite **monitorear todas las solicitudes que hace una página web** hacia el servidor u otras fuentes. Esto incluye archivos HTML, CSS, JS, imágenes, fuentes, peticiones AJAX, APIs, recursos multimedia, y más.

Es vital para:

- Analizar el rendimiento de carga
- Detectar errores de red o peticiones fallidas
- Ver respuestas completas del servidor
- Depurar problemas de conexión o CORS
- Entender qué carga exactamente el navegador

> ⚠️ Todo lo que ves (y mucho de lo que no) pasa por este panel.

---

## 🔍 ¿Cómo activarlo?

1. Abrí DevTools con `F12` o `Ctrl + Shift + I`
2. Hacé clic en la pestaña **"Network"**
3. Recargá la página (`F5`) para ver todas las solicitudes desde el inicio

> 💡 Consejo: activá el ícono de grabación (🔴) si querés registrar dinámicamente una interacción sin recargar.

---

## 🧪 ¿Qué podés ver aquí?

Cada fila representa una solicitud HTTP. Estas son las columnas clave:

| Columna       | Qué muestra                                                 |
|---------------|--------------------------------------------------------------|
| **Name**      | Nombre del recurso solicitado                                |
| **Status**    | Código de estado HTTP (`200`, `404`, `500`, etc.)            |
| **Type**      | Tipo de recurso: `document`, `script`, `xhr`, `font`, etc.   |
| **Initiator** | Qué disparó la solicitud (HTML, JS, evento dinámico, etc.)   |
| **Size**      | Tamaño del recurso descargado                                |
| **Time**      | Tiempo total de descarga                                     |
| **Waterfall** | Diagrama visual del tiempo de cada fase                      |

> 📊 El gráfico "Waterfall" es clave para detectar recursos lentos o bloqueantes.

---

## 📁 Tipos de recursos que se registran

- HTML (`document`)
- CSS (`stylesheet`)
- JavaScript (`script`)
- Imágenes (`img`, `svg`, `webp`, etc.)
- Fuentes (`woff`, `woff2`, `ttf`)
- Videos/Audios (`mp4`, `webm`, `mp3`)
- Peticiones `XHR` / `fetch` / `axios` (APIs)
- WebSockets
- Archivos generados dinámicamente (`blob`, `data:`)

---

## 🎯 Filtros y organización

En la parte superior del panel podés:

- Filtrar por tipo: `JS`, `CSS`, `XHR`, `Img`, `Media`, `Font`, `Doc`, `Other`
- Buscar por nombre o URL
- Mostrar solo errores (con código distinto a 200)
- Ordenar por columnas (por tamaño, tiempo, estado, etc.)
- Activar la opción **"Preserve log"** para no perder el historial al recargar

> 🧠 Ideal para debuggear formularios que recargan o SPAs que hacen múltiples fetch sin refrescar la página.

---

## 🛠 Analizar peticiones XHR o Fetch

Esencial para ver cómo una app web se comunica con APIs o servicios externos.

Pasos:

1. Filtrá por `XHR` o `Fetch`
2. Hacé clic en una solicitud → pestaña **"Headers"**:
   - Método (`GET`, `POST`, `PUT`, etc.)
   - URL exacta
   - Parámetros de consulta (`query params`)
   - Headers personalizados (ej: `Authorization`, `Token`, `Content-Type`)
3. Pestaña **"Response"**:
   - Ver respuesta JSON, HTML, texto o binaria
4. Pestaña **"Preview"**:
   - Vista estructurada (muy útil para JSON o HTML)

---

## ❌ Ver errores de red

Errores comunes que aparecen resaltados en rojo:

- **404 Not Found** → recurso no encontrado
- **500 Internal Server Error** → error del servidor
- **403 Forbidden** → sin permisos
- **401 Unauthorized** → no autenticado
- **CORS** → política de origen cruzado bloqueada

> 💬 Al hacer clic, podés ver el detalle del error en "Headers" y en la consola.

---

## ⏱ Medir tiempos de carga

Cada recurso muestra:

- **Tiempo total de carga**
- **Fases de la solicitud** (DNS, conexión, espera, descarga)
- **Carga paralela vs en serie**
- **Impacto de la caché** (ver columna “Size” → `from disk cache` o `memory cache`)

El gráfico de **Waterfall** te ayuda a identificar:

- Cuellos de botella
- Recursos que bloquean el renderizado
- Cargas lentas que podrían diferirse

---

## 🔄 Simular red lenta

Probá tu sitio en condiciones del mundo real:

1. En el menú superior, hacé clic en `No throttling`
2. Elegí: `Slow 3G`, `Fast 3G`, `Offline`, o configuraciones personalizadas

> 🐌 Muy útil para validar experiencia en móviles con conexión limitada.

---

## 📥 Descargar recursos

- Clic derecho sobre cualquier solicitud → **"Open in new tab"**
- Desde ahí podés:
  - Ver el recurso
  - Guardarlo (`Ctrl + S`)
  - Copiar su URL para compartir o testear

---

## 🎁 Tips pro

- `Shift + clic` en "Clear" también borra cookies y caché.
- Para ver el orden de carga → ordená por "Start Time"
- Si usás `console.log()` dentro de una respuesta AJAX, podés conectar eventos entre consola y red.
- Analizá headers como `cache-control`, `expires`, `ETag` para evaluar políticas de cacheo.

---

## 🧠 ¿Por qué usarlo?

Porque todo lo que se ve (y muchas cosas que no) se cargan a través de este panel. Es clave para:

- Optimizar la velocidad de carga
- Reducir consumo de datos en móviles
- Detectar errores invisibles al usuario
- Ver qué datos se envían/reciben en cada acción

> 🔎 Desde un ícono SVG hasta la respuesta de login de una API, todo pasa por acá. Si no entendés este panel, estás adivinando.

---