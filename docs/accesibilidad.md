---
id: accesibilidad
title: Panel de Accesibilidad (A11Y)
---

## 🧱 ¿Qué es el Panel de Accesibilidad?

El panel de accesibilidad permite inspeccionar cómo los elementos HTML son interpretados por tecnologías de asistencia como lectores de pantalla, navegación por teclado, asistentes por voz o dispositivos adaptativos.

El objetivo es asegurar que una página web sea **usada, comprendida y navegada por cualquier persona**, incluyendo usuarios con discapacidades visuales, motrices, auditivas o cognitivas.

> ℹ️ A11Y es una forma abreviada de **"Accessibility"**: la "A", once letras en el medio, y la "Y".

---

## 🧭 ¿Dónde se encuentra?

Podés acceder desde DevTools siguiendo estos pasos:

- Abrí DevTools con `F12` o `Ctrl + Shift + I`
- Buscá la pestaña **"Accessibility"**  
  - Si no aparece, abrí el menú `More Tools → Accessibility`
- También podés usar herramientas complementarias como:
  - **Lighthouse** (integrada en Chrome)
  - **axe DevTools** (extensión muy popular)
  - **Screen Readers** como NVDA, VoiceOver o JAWS para pruebas reales

---

## 👀 ¿Qué podés analizar?

### 🔤 Nombre accesible (Accessible Name)

Es el texto que un lector de pantalla leería. Puede derivar de:

- Contenido visible (`<button>Guardar</button>`)
- Atributo `aria-label="Guardar"`
- Atributo `alt="Logo de la empresa"` en imágenes
- Etiquetas asociadas: `<label for="email">Correo</label>`

> ⚠️ Si un elemento interactivo no tiene nombre accesible, será invisible o confuso para el usuario asistido.

---

### 🧭 Rol semántico

Cada elemento debe tener un **rol accesible**, que puede ser:

- Nativo: `button`, `link`, `heading`, `list`, `dialog`
- Asignado: si usás un `div` como botón, agregá `role="button"`

> 🧠 El panel te muestra si el rol está correctamente asignado, faltante o incoherente con el comportamiento.

---

### 🦾 Estados y propiedades ARIA

Los atributos `aria-*` informan sobre el estado o propósito de los elementos:

- `aria-checked`, `aria-disabled`, `aria-expanded`, `aria-hidden`
- `tabindex="0"` → el elemento puede recibir foco
- `tabindex="-1"` → se salta del orden del teclado
- `required`, `readonly`, `placeholder` → claves en formularios

> 💡 Estas propiedades son esenciales para experiencias accesibles en componentes personalizados.

---

## 🌲 Árbol de accesibilidad

El navegador genera un árbol paralelo al DOM llamado **Accessibility Tree**. Este árbol es lo que interpretan los lectores de pantalla, y no siempre coincide con el DOM.

Desde el panel podés:

- Explorar qué elementos son *visibles* para asistentes
- Detectar nodos *ocultos* (`aria-hidden="true"`)
- Ver si hay *roles faltantes* o *nombres inexistentes*
- Corregir navegación por teclado o mal uso de foco

---

## 🛠 Diagnóstico de problemas comunes

### ❌ Elementos sin etiqueta visible

```html
<input type="text">
```

Este campo es inútil para un lector de pantalla si no está etiquetado. Solución:

```html
<label for="nombre">Nombre</label>
<input id="nombre" type="text">
```

O:

```html
<input type="text" aria-label="Nombre">
```

---

### ❌ `div` o `span` usados como botones sin rol ni foco

```html
<div onclick="enviar()">Enviar</div>
```

Este `div` no tiene rol ni responde al teclado. Corregido:

```html
<div role="button" tabindex="0" onclick="enviar()">Enviar</div>
```

> ⚠️ Mejor aún: usá un `<button>`, que ya incluye accesibilidad por defecto.

---

### ❌ Elementos ocultos sin marcar

```html
<div style="display: none;">Este texto no se ve</div>
```

Si el contenido está oculto visualmente pero es relevante para tecnologías asistivas, usá:

```html
<div style="display: none;" aria-hidden="false">Este texto sí se lee</div>
```

> ⚙️ Siempre indicá si un elemento debe ser visible para asistentes usando `aria-hidden="true/false"`

---

## 🎁 Tips pro

- Usá `tab` para navegar con teclado. Si no podés alcanzar un elemento, revisá `tabindex`.
- Verificá colores y contrastes con Lighthouse o herramientas como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Auditá la página con `Lighthouse` → sección de accesibilidad
- Usá `role="alert"` para mensajes automáticos importantes que deban ser leídos sin interacción

---

## 🧠 ¿Por qué usarlo?

Porque la accesibilidad **no es opcional**: es parte del diseño ético y legal de cualquier web profesional.

Te permite:

- Incluir a todos los usuarios, sin excluir por limitaciones físicas
- Cumplir normativas como WCAG y leyes de accesibilidad
- Mejorar la experiencia UX con foco, orden lógico y semántica

> 🌍 Si tu sitio no es accesible, no está terminado. La accesibilidad no es un bonus, es un derecho.

---
