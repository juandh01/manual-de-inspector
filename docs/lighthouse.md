---
id: lighthouse
title: Auditoría con Lighthouse
---

## 💡 ¿Qué es Lighthouse?

**Lighthouse** es una herramienta de auditoría automatizada integrada en Chrome DevTools. Te permite evaluar una página web en cinco aspectos fundamentales:

- **Performance**
- **Accesibilidad**
- **Buenas prácticas**
- **SEO**
- **PWA (Progressive Web App)**

Es como tener un equipo de expertos que revisan tu sitio y te dicen qué mejorar, cómo hacerlo y por qué.

> 🚀 Ideal para desarrolladores, diseñadores y equipos que quieren mejorar calidad, velocidad y visibilidad en buscadores.

---

## 🧭 ¿Dónde está Lighthouse?

1. Abrí DevTools (`F12`)
2. Hacé clic en la pestaña **Lighthouse**
3. Si no aparece, abrí desde `More tools → Lighthouse`

---

## 📋 ¿Cómo generar un reporte?

1. Elegí si querés auditar **Mobile** o **Desktop**
2. Marcá las categorías que querés incluir (Performance, SEO, etc.)
3. Activá (opcional) la casilla “Simulate throttling” para probar como si fuese una red móvil real
4. Clic en **Analyze page load**
5. Esperá unos segundos… ¡y listo!

Se genera un reporte con puntajes y recomendaciones en cada área.

---

## 🧪 ¿Qué muestra cada sección?

### ⚡ Performance

Evalúa **velocidad de carga y renderizado**. Incluye métricas como:

- **First Contentful Paint (FCP)**: primer contenido visible
- **Largest Contentful Paint (LCP)**: carga del elemento principal
- **Time to Interactive (TTI)**: tiempo hasta que la página responde
- **Speed Index**: velocidad visual del contenido
- **Cumulative Layout Shift (CLS)**: estabilidad visual (¿se mueve el contenido?)

> 📉 Si tu puntaje es bajo acá, tu web se siente lenta o inestable.

---

### 🧱 Accesibilidad

Revisa si la página es usable por personas con discapacidades:

- Contraste de colores
- Uso de etiquetas `alt` en imágenes
- Roles ARIA
- Orden lógico de tabulación
- Presencia de `labels` y `landmarks`

> 🎯 Se complementa perfecto con el panel `Accessibility`.

---

### 📐 Best Practices

Evalúa estándares de desarrollo y seguridad:

- Uso de HTTPS
- Errores de JS en consola
- Recursos cargados desde dominios inseguros
- Buen uso de APIs modernas (WebP, lazy loading, etc.)
- No usar librerías desactualizadas o vulnerables

---

### 🔍 SEO

Mide **cómo se ve tu sitio ante los buscadores**:

- Presencia de etiquetas `title`, `meta description`, `hreflang`
- Uso de etiquetas semánticas (`main`, `nav`, `footer`, etc.)
- Mobile-friendly
- Accesibilidad para crawlers
- Estructura de encabezados (`h1`, `h2`, etc.)

> 🔍 No es un reemplazo de herramientas SEO pro, pero te da una base excelente.

---

### 📱 PWA (Progressive Web App)

Verifica si tu sitio cumple con las condiciones para ser instalado como app en dispositivos móviles:

- Tiene un `manifest.json`
- Usa HTTPS
- Registra un `service worker`
- Funciona offline o muestra fallback
- Es responsive

> ⚙️ Solo relevante si estás desarrollando una PWA o querés convertir tu web en una.

---

## 📈 ¿Qué hacer con los resultados?

Cada recomendación viene con:

- ✅ Una explicación de por qué es importante
- 📌 El elemento afectado
- 🛠 Una sugerencia concreta (¡muchas veces con enlaces para aprender más!)
- 📉 El impacto estimado

> Podés descargar el informe como `.html` o `.json` para compartir o registrar mejoras a lo largo del tiempo.

---

## 🧠 Tips Pro

- Generá reportes tanto en Desktop como en Mobile (las métricas cambian mucho).
- Corré Lighthouse en una ventana incógnita para evitar extensiones que alteren resultados.
- Activá “Simulated throttling” para condiciones reales de red.
- Automatizá auditorías con **lighthouse-ci** para integrarlas a tu flujo de trabajo.
- Compará reportes antes/después de cambios para medir el impacto real.

---

## 🎯 ¿Cuándo usar Lighthouse?

- Antes de lanzar un sitio
- Durante la optimización de performance
- Para mejorar tu puntaje en buscadores
- Como checklist para accesibilidad básica
- En entregas o revisiones técnicas

> 🧪 Si el Inspector es tu microscopio, Lighthouse es tu laboratorio completo.

---

## ✅ Conclusión

Lighthouse te da una visión completa de cómo está tu sitio web desde **el punto de vista del navegador, el usuario y Google**.

No solo te muestra lo que está mal: **te enseña cómo mejorarlo paso a paso**.

---

