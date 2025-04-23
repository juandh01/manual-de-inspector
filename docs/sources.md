---
id: sources
title: Panel Sources (Depuración y Archivos)
---

## 🧠 ¿Qué es el Panel Sources?

El panel **Sources** te permite explorar todos los archivos que componen un sitio web (HTML, CSS, JS, imágenes, mapas de fuente) y **depurar código JavaScript** directamente desde el navegador.

Es la herramienta por excelencia para:

- Buscar y editar archivos fuente
- Colocar breakpoints
- Rastrear errores paso a paso
- Ver el flujo de ejecución del código
- Probar scripts en tiempo real

---

## 🗂 Estructura general del panel

El panel Sources está dividido en tres columnas principales:

### 🧭 1. Navegador de archivos

- Muestra todos los archivos cargados por la página.
- Organizados por origen (sitio actual, CDN, extensiones, Webpack, etc.).
- Permite buscar, navegar y abrir scripts, imágenes, CSS, HTML, JSON, etc.

> 💡 Si ves carpetas como `webpack://` o `ng://`, es porque el sitio usa un bundler moderno.

### 🔍 2. Editor central de archivos

- Acá podés abrir y ver cualquier archivo.
- Podés colocar breakpoints, editar código (aunque no se guarda en el servidor) y ver el mapa de origen si hay `source maps`.
- Las líneas con breakpoints aparecen marcadas con un punto azul.
- Las líneas ejecutadas se resaltan mientras corrés paso a paso.

### 🛠 3. Panel de depuración

Contiene varias sub-secciones clave:

#### 📌 Breakpoints
- Lista de todas las líneas donde pusiste puntos de interrupción.
- Podés activarlos o desactivarlos individualmente.

#### 🧪 Watch
- Permite monitorear expresiones o variables mientras se ejecuta el código.
- Ideal para seguir cambios en tiempo real (`usuario.nombre`, `estadoCarrito.length`, etc.)

#### 🧵 Call Stack
- Muestra la pila de funciones que se están ejecutando actualmente.
- Ideal para rastrear quién llamó a quién, y desde dónde.

#### 🗂 Scope
- Muestra todas las variables disponibles en el contexto actual (local, closure, global).
- Podés expandir objetos, ver valores y detectar si algo está `undefined`.

#### 📍 Event Listener Breakpoints
- Podés pausar la ejecución cada vez que se dispara un tipo de evento (como `click`, `keydown`, `load`, etc.).
- Muy útil cuando no sabés qué código se ejecuta en respuesta a una acción.

#### ⛓ DOM Breakpoints
- Permite pausar si un nodo del DOM cambia.
- Ideal para ver quién modifica un `div` o borra un elemento dinámicamente.

#### 🔁 XHR/Fetch Breakpoints
- Pausa cuando se hace una petición HTTP `XHR` o `fetch`.
- Te ayuda a interceptar respuestas de APIs para inspeccionar datos.

---

## 🧪 Depuración paso a paso

Cuando pausás la ejecución (por un breakpoint o error), podés usar los botones del panel superior:

| Botón | Función |
|-------|---------|
| ▶️ Resume | Continúa la ejecución |
| ⏭ Step over | Ejecuta la siguiente línea sin entrar en funciones |
| 🔽 Step into | Entra en la siguiente función llamada |
| ⏏ Step out | Sale de la función actual |
| ⏹ Stop | Detiene la depuración |

---

## ✍️ Edición en vivo (Live Edit)

Podés modificar archivos JavaScript directamente desde el editor y ejecutar cambios en tiempo real:

1. Abrí un archivo JS.
2. Cambiá una línea de código.
3. Presioná `Ctrl + S` para aplicar.
4. Recargá la función o el componente afectado desde consola.

> ⚠️ Los cambios **no se guardan** en el servidor, pero sirven para testear sin tocar tu proyecto real.

---

## 🔍 Buscar dentro del código

Usá `Ctrl + P` para buscar archivos por nombre.  
Y `Ctrl + Shift + F` para buscar texto dentro de todos los archivos abiertos.

También podés buscar dentro de un archivo con `Ctrl + F`.

> 🧠 Muy útil para encontrar funciones, errores o referencias a clases rápidamente.

---

## 🧠 Tips y extras

- Podés crear **Snippets** (fragmentos de código reutilizable) desde la pestaña lateral izquierda → `Snippets`.
- Usá `blackboxing` para ignorar archivos molestos como jQuery, lodash, etc. y enfocarte en tu código.
- Activá el modo “Pretty print” (`{}` ícono) para ver scripts minificados de forma legible.
- Desde el menú contextual podés "Add to Workspace" y enlazar archivos reales de tu máquina (modo avanzado).

---

## ✅ ¿Cuándo usarlo?

- Cuando necesitás seguir un bug paso a paso.
- Para ver de dónde viene un error silencioso.
- Cuando el sitio hace cosas inesperadas con JS.
- Para monitorear la ejecución de funciones específicas.
- Para aprender cómo funciona el código de otras páginas (sí, como espía legal 😎).

---

