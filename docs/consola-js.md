---
id: consola-js
title: Consola JavaScript
---

## 🧪 ¿Qué es la Consola de JavaScript?

La **consola de JavaScript** es una herramienta integrada en el navegador que permite:

- Ver mensajes del sistema, errores, advertencias y `logs` personalizados.
- Ejecutar código JavaScript directamente en el contexto de la página cargada.
- Probar funciones y depurar scripts en tiempo real.
- Inspeccionar objetos, eventos y respuestas de APIs.

Es como un laboratorio interactivo donde podés experimentar, probar y romper cosas... sin consecuencias permanentes (salvo que uses `delete document.body`, ahí sí nos vamos al demonio 😅).

---

## 🧭 ¿Dónde se encuentra?

Dentro del Inspector de Elementos, hacé clic en la pestaña **"Consola"** (o *Console*).  
También podés abrirla directamente con los siguientes atajos:

- 🪟 `Ctrl + Shift + J` → Windows/Linux
- 🍏 `Cmd + Option + J` → Mac

> ⚡ Si ya tenés abierta DevTools, simplemente cambiá de pestaña.

---

## 🧠 ¿Qué se puede hacer desde la consola?

### 🔍 Ver errores y advertencias

Cuando algo falla, lo sabés acá. Podés ver:

- ❌ **Errores de sintaxis** → `Uncaught SyntaxError`
- ⚠️ **Variables no definidas** → `Uncaught ReferenceError`
- 🔒 **Problemas de CORS**
- 📁 **Archivos JS, imágenes o fuentes que no se cargaron**
- 📝 **Logs personalizados** usando:
  - `console.log("info")`
  - `console.warn("advertencia")`
  - `console.error("error")`

Ejemplo:

```js
Uncaught ReferenceError: variableX is not defined
```

---

### ✍️ Ejecutar código en tiempo real

Podés escribir directamente cualquier código JS y ejecutarlo en la consola, como si fuera un mini editor:

```js
const saludo = (nombre) => `Hola, ${nombre}!`;
saludo("Dev");
```

> 🧠 El código corre en el mismo contexto que la página, podés acceder a elementos del DOM y funciones del sitio.

---

### 🔍 Inspeccionar elementos y objetos

- `$0` → hace referencia al último elemento seleccionado en el DOM.
- `console.dir(objeto)` → muestra todas las propiedades y métodos.
- `console.table(array)` → visualiza datos tabulados (¡ideal para arrays de objetos!).
- `document.querySelectorAll("a")` → podés hacer cualquier búsqueda en vivo.

---

### 🎯 Utilidades especiales

La consola también admite funciones nativas útiles:

- `clear()` → limpia toda la consola.
- `copy(objeto)` → copia el contenido de una variable al portapapeles.
- `monitor(func)` → muestra en consola cada vez que se llama esa función.
- `debug(func)` → crea un breakpoint automático en la ejecución de esa función.
- `$_` → referencia el **último resultado** ejecutado.

---

## 🔧 Tips ninja

- Podés escribir varias líneas presionando `Shift + Enter`.
- Con `console.trace()` podés ver la traza del origen de una función.
- Si escribís una variable mal, el error aparece inmediatamente, útil para cazar `undefined` antes de que se vuelvan bugs.
- Usá flechas ↑ ↓ para navegar por el historial de comandos.
- Podés inspeccionar eventos con `getEventListeners($0)` (solo en Chrome).

---

## 💡 ¿Sabías que...?

- Podés modificar el contenido de un sitio en tiempo real y luego copiar el resultado para pegarlo en tu código.
- En páginas con múltiples frames o iframes, podés cambiar el contexto de ejecución desde el combo que aparece arriba a la izquierda.
- La consola puede ser usada para analizar performance, probar APIs REST, inspeccionar respuestas AJAX y más.

---
