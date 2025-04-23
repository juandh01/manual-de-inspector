---
id: rendimiento
title: Rendimiento y Performance
---

## ⏱ ¿Qué es el Panel de Performance?

Este panel permite grabar y analizar el rendimiento de una página web: cuánto tarda en cargarse, qué scripts o procesos consumen más recursos y cómo se comporta el sitio desde que empieza a cargar hasta que está completamente listo.

También te permite detectar cuellos de botella, cargas bloqueantes, renderizados lentos y problemas con animaciones o interacciones.

---

## 🧭 ¿Dónde se encuentra?

1. Abrí el Inspector (`F12` o `Ctrl + Shift + I`)
2. Seleccioná la pestaña **"Performance"**
3. Hacé clic en el botón de grabar 🔴
4. Realizá acciones en la página (como cargar, desplazarte, interactuar)
5. Detené la grabación para analizar los resultados

---

## 🔬 ¿Qué analiza este panel?

- Carga inicial de la página (First Load)
- Tiempo hasta la primera pintura (First Paint / First Contentful Paint)
- Scripts ejecutados (JS)
- Eventos de entrada (clics, scrolls, input)
- Tiempo de CPU
- Frames por segundo (FPS)
- Ciclos de renderizado

> 📉 Toda esta información es clave para optimizar el tiempo de respuesta del sitio.

---

## 🧪 Cómo hacer una prueba

1. Abrí el panel **Performance**
2. Hacé clic en **"Start recording"**
3. Recargá la página o navegá normalmente
4. Detené la grabación tras 5-10 segundos
5. Explorá el análisis generado

Podrás ver:

- Timeline de eventos
- Scripts ejecutados
- Procesos que consumen más CPU
- Cargas lentas o tareas que bloquean

---

## 🧠 Conceptos clave

### 🎯 First Contentful Paint (FCP)

Es el momento en que el navegador muestra el **primer contenido visible** (texto, imagen, etc.)

### 📱 Time to Interactive (TTI)

Tiempo que tarda la página en ser completamente interactiva (cuando ya no hay scripts bloqueando la interacción del usuario)

### 🚫 Blocking Time

Es el tiempo en que el hilo principal del navegador (main thread) está ocupado y no puede responder a eventos.

### 🎬 FPS (Frames por segundo)

Mide la fluidez visual. Debe estar idealmente en **60 fps**. Bajos FPS indican animaciones trabadas o interacción lenta.

---

## 🔍 Analizar scripts lentos

Podés identificar qué funciones o scripts están consumiendo más tiempo. Esto es útil para:

- Detectar bucles innecesarios
- Animaciones pesadas
- Funciones que se ejecutan muchas veces
- Código mal optimizado

> 🔥 Si ves barras rojas en el timeline, probablemente hay algo que mejorar.

---

## ⚙️ Herramientas de soporte

Además del panel de Performance, podés usar:

- **Lighthouse** (pestaña Performance): análisis automático con puntuación
- **Coverage** (en pestaña Sources): muestra qué CSS/JS está realmente usado
- **Web Vitals**: plugin de Chrome que monitorea FCP, LCP, TTI en tiempo real

---

## 🧼 Tips para mejorar performance

- Minificá tus archivos JS y CSS
- Retrasá scripts no esenciales (`defer` o `async`)
- Usá `lazy loading` para imágenes
- Evitá `setInterval` excesivos
- Animá con `transform` y `opacity`, no `top` o `left`
- Serví recursos comprimidos (`.gz`, `.br`)
- Cargá fuentes personalizadas lo más tarde posible

---

## 🔍 Simular condiciones reales

Podés reducir la velocidad de red y CPU para simular usuarios con dispositivos de gama baja o mala conexión:

1. En la parte superior del panel, seleccioná:
   - **Network**: `Fast 3G`, `Slow 3G`, etc.
   - **CPU**: `4x slowdown`

Esto te ayuda a ver cómo se comporta tu sitio fuera de tu máquina rápida y con fibra óptica.

---

## 🎯 ¿Por qué es importante este panel?

Porque la velocidad de carga afecta directamente la experiencia del usuario, el posicionamiento en Google (SEO), y la conversión en sitios de venta.

Una página lenta espanta visitas. Un sitio optimizado retiene usuarios y genera confianza.

---


