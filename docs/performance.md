---
id: performance
title: Panel Performance (Rendimiento)
---

## ⏱ ¿Qué es el Panel Performance?

El panel **Performance** sirve para analizar cómo se comporta tu sitio en tiempo real: carga, ejecución de scripts, renderizado visual y consumo de recursos.

Permite **grabar una sesión** de navegación y luego visualizar cada detalle del proceso: desde cuánto tarda en cargarse un recurso, hasta qué funciones de JavaScript están bloqueando el hilo principal.

> 🎯 Es clave para identificar cuellos de botella, mejorar tiempos de carga y optimizar la experiencia del usuario.

---

## 📹 ¿Cómo se usa?

1. Abrí la pestaña **Performance** en DevTools.
2. Presioná el botón **"Record"** (ícono rojo).
3. Interactuá con la página (scroll, clics, navegación).
4. Detené la grabación → se genera un reporte completo del comportamiento de la página.

> 💡 También podés grabar desde un punto específico con `Ctrl + E`.

---

## 🧠 ¿Qué hay dentro del panel?

Una vez que grabás, el panel se divide en varias secciones visuales:

---

### 🧱 1. Overview (Resumen superior)

Una visión general de:

- 🕒 Tiempo total grabado
- 🧠 FPS (cuadros por segundo)
- 🔋 CPU: uso estimado del procesador
- 📦 Network: carga de recursos durante la sesión

> ⚠️ Si el FPS cae por debajo de 30, tu sitio no está funcionando de forma fluida.

---

### 🔥 2. Flame Chart (Main Thread)

Este es el **corazón del panel**: un gráfico que representa la ejecución de todo el código durante la sesión.

- Cada bloque horizontal es una función que se ejecutó.
- Mientras más larga y ancha, más tiempo consumió.
- Están apiladas según su relación: si una función llama a otra, se apila encima.

> 🔍 Al hacer clic sobre una función, ves cuánto tiempo tomó y dónde está definida.

---

### 🧵 3. Main Thread (Hilo principal)

Acá podés ver fases específicas del renderizado:

| Tarea                 | Qué hace                                                 |
|-----------------------|----------------------------------------------------------|
| `Recalculate Style`   | El navegador recalcula todos los estilos CSS             |
| `Layout`              | Calcula la posición y tamaño de cada elemento            |
| `Paint`               | Dibuja los píxeles en pantalla                           |
| `Composite Layers`    | Mezcla las capas de renderizado                         |
| `Parse HTML`          | Procesa el HTML recibido                                |
| `Function Call`       | Llama funciones JS personalizadas                        |
| `Evaluate Script`     | Ejecuta código JavaScript cargado                        |

> 🧠 Si algo toma demasiado en `Layout` o `Paint`, puede ser un signo de que el DOM está muy complejo o mal optimizado.

---

### 💡 4. Interacciones del usuario

En la parte inferior, se marcan eventos como:

- Clics
- Scrolls
- Input en formularios
- Cambios de visibilidad

Sirven para relacionar qué función JS responde a qué acción del usuario.

---

### 📊 5. Secciones extra del análisis

- **Screenshots**: si activás esta opción, se toma una captura de cada momento de la sesión.
- **Network requests**: lista de peticiones en paralelo a la ejecución de scripts.
- **Heap usage**: cuánto espacio de memoria se usó (si se activa).
- **Web Vitals** (LCP, FID, CLS): si usás Lighthouse o grabás desde ahí.

---

## 🛠 ¿Cómo interpretar la información?

- **Bloques largos en Flame Chart** = funciones que demoran mucho
- **Muchos `Recalculate Style`** = probablemente tenés demasiados cambios DOM/CSS
- **Layout repetitivo** = el DOM está cambiando en bucles o en cascada
- **Paint lento** = sombras, imágenes o filtros pesados
- **Composite Layer excesivo** = animaciones o transiciones mal optimizadas

---

## 🎯 ¿Qué podés mejorar gracias a este panel?

- Reducir tiempo de carga
- Minimizar ejecución de scripts innecesarios
- Mejorar rendimiento en móviles o CPUs lentas
- Identificar cuellos de botella en animaciones o transiciones
- Optimizar cargas asincrónicas y lazy load

---

## 🧪 Trucos pro

- Usá `Ctrl + Shift + P → Show Rendering` para ver FPS en vivo
- Activá **"Capture Layers"** para ver cómo se compone visualmente la página
- Usá **Performance Monitor** (desde More Tools) para ver FPS, JS heap y nodos DOM en tiempo real
- Compará sesiones para medir mejoras después de optimizar tu sitio

---

## 🧠 ¿Por qué usarlo?

Porque los problemas de rendimiento no se notan en tu máquina con fibra óptica… pero sí en un celular con 3G.

Este panel te da las herramientas para:

- Hacer que tu web vuele 🏎️
- Medir lo que realmente importa
- Optimizar con datos, no con corazonadas

> 🧙 Si el Inspector es magia, el Performance es alquimia: revela los secretos del rendimiento.

---

