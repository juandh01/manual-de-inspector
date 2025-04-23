---
id: estructura-html
title: Panel de Elementos (DOM)
---

## 📐 ¿Qué es el DOM?

El **DOM (Document Object Model)** es una estructura jerárquica que representa el contenido HTML de una página como un árbol de nodos. Cada etiqueta (`<div>`, `<p>`, `<section>`, etc.) se convierte en un "nodo" que el navegador puede interpretar, manipular y renderizar.

> 🎯 El DOM no es el archivo HTML original. Es una **representación viva** que puede ser modificada dinámicamente por JavaScript o el mismo navegador.

Cuando abrís el panel de **Elementos** en DevTools, lo que ves es el **DOM actual**, es decir, el estado de la página en ese instante, con todos los cambios que hayan ocurrido desde que se cargó.

---

## 🔍 ¿Para qué se usa este panel?

Este panel es la puerta de entrada al esqueleto del sitio web. Permite:

- 🧬 Examinar la estructura del HTML y entender cómo se organiza la página.
- ✍️ Modificar contenido o atributos directamente, sin necesidad de actualizar el servidor.
- 🎨 Cambiar clases, IDs, estilos `inline`, atributos `data-*` y más.
- 🧱 Añadir, clonar o eliminar elementos para experimentar en tiempo real.
- 🕵️‍♂️ Detectar elementos ocultos, con errores de renderizado o con estilos conflictivos.
- 📏 Visualizar el **modelo de caja (box model)**: margen, borde, relleno y contenido.
- 🚧 Explorar cómo los frameworks (como React, Vue, Angular) estructuran sus componentes en el DOM.

---

## 🧩 Funciones principales

### 🖱 Seleccionar elementos visualmente

- Activá el **modo de selección visual** (`Ctrl + Shift + C` o clic en el ícono de cursor arriba a la izquierda).
- Pasá el mouse sobre cualquier parte de la página. Se resaltará con un recuadro azul y un tooltip con información clave (clases, dimensiones, etc.).
- Al hacer clic, te lleva automáticamente al nodo correspondiente en el DOM.

> 💡 Pro Tip: Si hay varios elementos superpuestos, usá las flechas del teclado para moverte entre ellos en el DOM.

---

### ✍️ Editar nodos directamente

1. Clic derecho sobre un `<h1>`, seleccioná “Editar como HTML”.
2. Cambiá el texto directamente:

   ```html
   <h1>Nuevo título en vivo</h1>
   ```

3. ¡Listo! Se actualiza automáticamente en la página (aunque el cambio se pierde al recargar).

También podés:

- Hacer doble clic sobre una clase o atributo para editarlo.
- Agregar nuevos elementos con “Agregar nodo”.
- Eliminar nodos con `Supr` o clic derecho → “Eliminar nodo”.

---

### 📦 Ver atributos y propiedades

Desde este panel podés ver y modificar:

- `class`
- `id`
- `href`, `src`, `alt`, `data-*`
- Atributos booleanos (`checked`, `disabled`, `readonly`)
- Estilos `inline` (`style="color: red"`)

> 🔎 También podés ver propiedades relacionadas con accesibilidad, como `role`, `aria-label`, `tabindex`, etc.

---

### 🧰 Usar el menú contextual

Cuando hacés clic derecho sobre un nodo, aparece un menú con varias funciones útiles:

- **Editar como HTML**
- **Copiar → Outer HTML / Selector / XPath**
- **Forzar pseudoclases** (`:hover`, `:focus`, etc.)
- **Desplegar todos los hijos**
- **Break on...** → agrega un breakpoint cuando se modifica ese nodo desde JS

> 🧠 "Break on" es muy útil para saber qué parte del script está tocando un nodo que cambia sin aviso.

---

### 🎯 Buscar elementos por selector

Usá el buscador (Ctrl + F dentro del panel de Elementos) para encontrar nodos por:

- Etiqueta: `h2`
- Clase: `.mi-clase`
- ID: `#header`
- Atributo: `[data-product-id="123"]`
- Combinado: `div#main .tarjeta > img[src$=".jpg"]`

> 🎯 Soporta los mismos selectores que CSS. ¡Podés usarlo como un ninja del front!

---

## 🧠 ¿Sabías que…?

- Al modificar un nodo y luego copiar el HTML, se lleva los cambios que hiciste.
- Podés arrastrar nodos para cambiar su orden en el DOM.
- Podés usar el panel “Accesibilidad” para ver cómo los lectores de pantalla interpretan tu página.
- Si usás frameworks modernos, verás comentarios tipo `<!-- react-text: 12 -->`: esos son fragmentos virtuales creados por la librería.

---