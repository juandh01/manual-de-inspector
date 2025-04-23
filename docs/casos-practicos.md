---
id: casos-practicos
title: Casos Prácticos
---

## 🔐 ¿Por qué esta sección?

Saber usar el Inspector está genial. Pero saber **cuándo** y **cómo** usarlo para resolver un problema real es lo que realmente te convierte en alguien pro.

En esta sección vas a ver **problemas comunes** del día a día en desarrollo web, con una guía clara para resolverlos usando el Inspector paso a paso.

---

## 🧩 Caso 1: El botón no hace nada

### Problema:

Tenés un botón que debería enviar un formulario o realizar una acción, pero no pasa absolutamente nada cuando hacés clic.

### Solución con el Inspector:

1. Activá la selección visual con `Ctrl + Shift + C` y seleccioná el botón.
2. En el panel **Elements**, revisá:
   - ¿Está dentro del `<form>`?
   - ¿Tiene `disabled` o `aria-disabled="true"`?
   - ¿Tiene un `type="submit"` si está en un formulario?
3. En la pestaña **Event Listeners**, verificá si hay eventos `click` asociados.
4. Abrí la pestaña **Console** y hacé clic en el botón. ¿Se genera un error?
5. Si no hace nada, podés simularlo desde la consola:

```js
document.querySelector("button").click();
```

6. Si aún no funciona, buscá si el archivo JS está correctamente cargado en la pestaña **Network**.

---

## 🎯 Caso 2: El estilo no se aplica

### Problema:

Cambiaste el color de un botón en tu archivo CSS, pero no se refleja en el navegador.

### Solución con el Inspector:

1. Seleccioná el botón con `Ctrl + Shift + C`.
2. En la pestaña **Styles**, buscá la propiedad `color` o `background-color`.
3. Verificá si:
   - La regla está tachada (sobrescrita por otra con mayor especificidad).
   - El estilo viene de otro archivo o desde `inline`.
   - Hay un `!important` bloqueando la regla.
4. Probá el cambio directamente en el panel:

```css
background-color: red;
```

5. Si el estilo ni aparece, revisá si el archivo CSS se cargó correctamente en la pestaña **Network** (¿quizás un error 404?).

---

## 🧪 Caso 3: No se cargan los datos

### Problema:

Tenés una sección dinámica que debería mostrar datos desde una API... pero no aparece nada.

### Solución con el Inspector:

1. Abrí la pestaña **Network** y filtrá por `XHR` o `Fetch`.
2. Recargá la página. ¿Ves solicitudes a una URL tipo `/api/...`?
3. Hacé clic en una solicitud y verificá:
   - El código de estado HTTP (200, 404, 500…)
   - Si hay respuesta en JSON en la pestaña **Response**
4. Abrí la **Consola** para ver si hay errores de JS como:

```js
Uncaught TypeError: Cannot read property 'map' of undefined
```

5. Si todo parece bien pero no ves nada, inspeccioná el contenedor HTML con `Ctrl + Shift + C`:
   - ¿Está oculto con `display: none` o `visibility: hidden`?
   - ¿Está vacío?
   - ¿Está renderizando fuera del viewport?

---

## 🧩 Caso 4: La página se ve mal en celular

### Problema:

Tu sitio se ve perfecto en escritorio, pero se rompe todo al verlo desde el teléfono.

### Solución con el Inspector:

1. Abrí DevTools y activá el **modo responsive** con `Ctrl + Shift + M`.
2. Probá diferentes dispositivos desde el menú superior.
3. Revisá el panel **Styles**:
   - ¿Hay media queries que afecten el diseño?
   - ¿Se ocultan elementos con `display: none` en móviles?
4. Revisá dimensiones y scroll usando el panel **Layout**.
5. Ajustá estilos en tiempo real usando breakpoints como:

```css
@media (max-width: 768px) {
  .menu {
    flex-direction: column;
  }
}
```

---

## 🔧 Caso 5: El sitio carga lento

### Problema:

El sitio tarda demasiado en mostrar contenido o parece que algo “traba” la carga.

### Solución con el Inspector:

1. Abrí la pestaña **Network** y recargá la página.
2. Ordená por la columna **Time** para ver qué archivo tarda más.
3. Revisá el gráfico **Waterfall**: buscá archivos bloqueantes (JS/CSS grandes).
4. ¿Están todos los archivos cargando desde caché (`from disk cache`) o no?
5. Usá la pestaña **Performance** o corré una auditoría con **Lighthouse**.

---

## 🎁 Extra: Editar en vivo para mostrar un prototipo

Tenés que hacer una presentación, y querés mostrar cómo se vería una idea sin modificar el código real.

### Solución rápida:

1. Usá el panel **Elements** para cambiar textos, botones, títulos o imágenes.
2. Modificá estilos desde el panel **Styles** para cambiar colores o layout.
3. Usá la consola para inyectar contenido:

```js
document.querySelector(".precio").textContent = "$99.00";
```

> ✅ Perfecto para validar ideas con el equipo, el cliente o en clase.

---

## 🧠 ¿Por qué practicar así?

Porque saber inspeccionar no es lo mismo que saber **resolver**.

Estas prácticas te permiten:

- Desarrollar un ojo técnico rápido
- Resolver errores en segundos
- Diagnosticar sin adivinar
- Ser más ágil en reuniones, entregas o debugging en vivo

> 🧠 El Inspector no es solo para mirar... es para actuar.

---

