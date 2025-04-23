---
id: estilos-css
title: Panel de Estilos (CSS)
---

## 🎨 ¿Qué es el Panel de Estilos?

El panel de estilos del Inspector de Elementos permite visualizar, modificar y probar las reglas de **CSS** aplicadas a un elemento del DOM en tiempo real. Esto incluye propiedades heredadas, reglas sobrescritas, pseudoclases, media queries, y estilos en línea.

Es una de las herramientas más poderosas para depurar problemas visuales, experimentar con diseños o ajustar detalles sin necesidad de editar los archivos originales.

> 💡 Este panel refleja el resultado final del cascadeo: lo que realmente está afectando al elemento *en ese momento*, sin importar si fue escrito en un archivo `.css`, inyectado por JS o agregado como estilo en línea.

---

## 🧬 ¿Cómo se estructura este panel?

Cuando seleccionás un elemento en el DOM, el panel de estilos te muestra:

- 🎯 **Todas las reglas CSS aplicadas**, en orden de prioridad (cascade).
- ✅ **Propiedades activas** (las que están teniendo efecto) y ❌ **propiedades sobrescritas** (aparecen tachadas).
- 📄 **Nombre del archivo CSS** y el número de línea donde está definida la regla.
- 🧪 **Pseudoclases** como `:hover`, `:focus`, `:active`, que podés forzar manualmente.
- 🔠 **Reglas inline** si existen en el HTML (`style="..."`).
- 🧬 **Estilos heredados** de elementos padres.

> 🎯 El orden importa: el navegador evalúa las reglas según la especificidad y el origen (inline > ID > clase > etiqueta > heredado).

---

## ✍️ Modificar propiedades CSS en tiempo real

Podés hacer clic sobre cualquier propiedad CSS para:

- ✏️ Cambiar su valor (por ejemplo: `color: red` → `color: #00bcd4`)
- ➕ Añadir nuevas propiedades (al final del bloque)
- 🗑️ Eliminar una propiedad (desactivarla temporalmente con el checkbox)

Ejemplos de cambios comunes:

```css
background-color: #f4f4f4;
font-size: 18px;
border: 2px dashed red;
```

> ⚠️ Estos cambios son temporales y desaparecen al recargar la página.

---

## 🧪 Trabajar con pseudoclases

Podés simular el estado `:hover`, `:focus`, `:visited`, y `:active` sin mover el mouse o hacer clic:

1. Seleccioná un elemento.
2. Clic en el botón `:hov` que aparece arriba del panel de estilos.
3. Activá el estado deseado.

Esto es ideal para testear interacciones, menús, botones o animaciones que se activan solo al pasar el mouse o hacer foco.

---

## 🧠 ¿Qué más se puede hacer?

- 🎛 Cambiar entre unidades (`px`, `em`, `%`, `vh`, etc.) en caliente para ver diferencias de escala.
- 🌈 Usar el selector de color visual para propiedades como `background`, `color`, `border-color`.
- 📏 Ver las medidas del elemento directamente en el box model visual (en la pestaña “Layout”).
- 🔄 Aplicar animaciones y transiciones al vuelo para probar efectos.
- 💬 Ver comentarios o comentarios condicionales si el framework los inyecta (`/* Tailwind */`, `/*! important */`, etc.).

---

## 🔧 Tips ninja

- Podés copiar toda la regla CSS de un elemento clicando con botón derecho en el selector de clase → “Copiar regla”.
- Si usás frameworks como Bootstrap o Tailwind, podés ver en qué parte del stack de clases se está aplicando cada estilo.
- Podés combinar estilos directamente en consola con `document.querySelector('elemento').style`.

---

