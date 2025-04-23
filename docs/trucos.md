---
id: trucos
title: Trucos y Tips
---

## 🧠 ¿Para qué sirve esta sección?

Además de las funciones “oficiales” del inspector, existen muchos **trucos, atajos y hacks** que los usuarios avanzados usan todos los días para:

- Depurar más rápido
- Entender mejor el comportamiento de la web
- Probar cosas creativas sin modificar archivos
- Simular estados del usuario
- Jugar con el diseño sin romper producción

Acá te muestro los más útiles (y algunos secretos).

---

## ⚡ Atajos de teclado rápidos

| Acción                            | Atajo                          |
|----------------------------------|--------------------------------|
| Abrir el inspector               | `F12` o `Ctrl + Shift + I`     |
| Ir directamente a la consola     | `Ctrl + Shift + J`             |
| Buscar dentro del DOM            | `Ctrl + F`                     |
| Selección visual (modo lupa)     | `Ctrl + Shift + C`             |
| Navegar entre pestañas del panel | `Ctrl + [` / `Ctrl + ]`        |
| Abrir herramientas desde menú    | `Ctrl + Shift + P` (Command Palette) |

> 🧠 También podés mantener `Ctrl` (o `Cmd` en Mac) y hacer clic en un enlace para abrirlo directo en la pestaña de DOM.

---

## 🎨 Cambiar estilos en vivo como diseñador ninja

Desde el panel de estilos podés experimentar en tiempo real:

```css
font-family: 'Poppins', sans-serif;
background-color: #333;
color: white;
text-shadow: 1px 1px 2px black;
```

También podés:

- Usar el **selector de color** con clic en el cuadrito de color
- Probar sombras o transiciones rápidas (`box-shadow`, `transition`)
- Agregar reglas enteras con “+ Add new rule” en el panel

> 🎯 Ideal para diseñadores que quieren ajustar sin abrir el editor.

---

## 🔄 Forzar estados CSS (pseudoclases)

Simulá `:hover`, `:focus`, `:visited` o `:active`:

1. Seleccioná un elemento
2. Hacé clic en `:hov` (arriba del panel de estilos)
3. Activá el estado deseado

> Útil para ver menús desplegables, validación de formularios o botones en hover sin necesidad de mover el mouse.

---

## 🧩 Editar texto en vivo

Podés modificar el contenido visible de cualquier sitio web:

1. Seleccioná un elemento desde el panel DOM
2. Clic derecho → "Editar texto" o "Editar como HTML"
3. Cambiá el contenido y presioná `Enter`

> ⚠️ Los cambios son solo locales (se pierden al recargar), pero perfectos para maquetar, presentar o bromear.

---

## 🧪 Ejecutar JavaScript directo desde consola

¿Querés ver si una función funciona? ¿Probar cómo responde un botón? Ejecutalo al instante:

```js
document.querySelector("button").click();
```

O usá funciones de consola como:

```js
console.table(document.querySelectorAll("img"));
```

> 💡 Con `$_` podés acceder al último resultado retornado en la consola.

---

## 🔒 Simular condiciones reales de red

Desde la pestaña Network:

- Seleccioná `No throttling` y cambiá a `Slow 3G`
- Activá `Offline` para simular caída total
- Usá Lighthouse para ver rendimiento bajo estrés

---

## 🧠 Otros trucos que no sabías que necesitabas

- `document.designMode = "on"` → Te permite **editar toda la página como si fuera un Word**.
- `copy(objeto)` → Copia datos al portapapeles desde la consola.
- `$0` → Referencia al último elemento inspeccionado en el DOM.
- `monitor(funcion)` → Te avisa cada vez que se ejecuta una función (solo en Chrome).
- `Ctrl + Shift + P` → Abre la **Command Palette**, un buscador con funciones ocultas como “Show rendering”, “Disable cache”, “Capture node screenshot”, etc.

---

## 🧰 Herramientas extra útiles

- **Lighthouse** → para auditar rendimiento, SEO, accesibilidad y mejores prácticas.
- **Rendering tab** (`More tools → Rendering`) → simula daltonismo, force repaint, ver FPS, etc.
- **Animations** → inspecciona y controla animaciones CSS en tiempo real.
- **Coverage** → identifica CSS y JS no utilizados (ideal para limpiar código).
- **CSS Overview** (experimental) → te da un resumen visual de todos los colores, fuentes, contrastes y más.

---

## 🎯 ¿Por qué aprender estos trucos?

Porque dominar el inspector no es solo saber dónde hacer clic. Es **tener control total sobre el comportamiento visual y funcional de una página**, y usarlo como una herramienta de diagnóstico, diseño y desarrollo continuo.

> 🧙 El DevTools no es solo para devs. Es el grimorio interactivo del frontend moderno.

---
