---
id: memory
title: Panel Memory (Memoria y Heap)
---

## 📈 ¿Qué es el Panel Memory?

El panel **Memory** sirve para **analizar el uso de memoria** de una página web. Es ideal para detectar **fugas de memoria (memory leaks)**, ver cuánta memoria consumen tus objetos JavaScript, y entender cómo se comporta el heap del navegador con el tiempo.

> 🧠 Si tu sitio se vuelve más lento mientras lo usás, probablemente haya una fuga de memoria. Este panel te ayuda a encontrarla.

---

## 🧪 ¿Qué se puede analizar?

El panel ofrece **tres herramientas principales**, cada una para un tipo distinto de análisis:

| Herramienta             | ¿Para qué sirve?                                       |
|--------------------------|--------------------------------------------------------|
| **Heap Snapshot**        | Toma una “foto” del heap para ver qué objetos existen |
| **Allocation instrumentation** | Muestra qué función o script está creando más objetos     |
| **Allocation timeline** | Graba la asignación de memoria a lo largo del tiempo  |

Vamos una por una.

---

## 📸 1. Heap Snapshot

Un snapshot es una “foto congelada” de la memoria del navegador en un momento dado.

### ¿Qué muestra?

- Todos los objetos que existen en ese instante
- Su tipo (objeto, array, closure, string, etc.)
- Cuánto pesan en bytes
- Cuántas referencias entrantes/salientes tienen

### ¿Cómo tomarlo?

1. Ir a **Memory** → seleccionar `Heap snapshot`
2. Hacer clic en **Take snapshot**
3. Esperar unos segundos… se genera un árbol visual

### ¿Qué buscar?

- Objetos que no deberían seguir existiendo (ej: listeners o referencias a DOM eliminados)
- Objetos que crecen en cantidad con cada interacción
- Strings duplicados, arrays infinitos, closures que retienen demasiadas variables

> 🔍 Usá filtros como “Objects allocated between snapshots” para ver qué fue creciendo.

---

## 🔍 2. Allocation Instrumentation on Timeline

Este modo muestra **qué scripts están creando más objetos** y en qué momento.

### ¿Cómo usarlo?

1. Seleccioná `Allocation instrumentation on timeline`
2. Hacé clic en **Start**
3. Interactuá con tu página normalmente
4. Hacé clic en **Stop**
5. Aparecerá una línea de tiempo con picos de asignación de memoria

### ¿Qué muestra?

- Asignaciones por función o script
- Cuánto se asignó en cada intervalo de tiempo
- Qué objetos quedaron vivos después del GC (garbage collector)

> 🧠 Muy útil para detectar si una función “famosa” está creando objetos cada vez que la usás (y no los libera).

---

## 📊 3. Allocation Timeline

Una alternativa visual que graba la asignación de objetos durante un tiempo.

- Se ve un gráfico continuo del uso de memoria
- Podés hacer zoom y analizar secciones específicas
- Ideal para detectar crecimiento continuo = **leak** en progreso

---

## 💡 Tipos de memoria

El heap está dividido en secciones (en la pestaña “Summary” de snapshot):

- **Shallow size**: memoria usada directamente por ese objeto
- **Retained size**: memoria que se mantendría ocupada si ese objeto no se libera
- **Distance**: cuántos pasos hay desde el objeto raíz (`window`) hasta ese objeto
- **Dominators**: objetos que "retienen" otros en memoria

> 🧠 Si un objeto tiene `retained size` grande pero ya no se usa, probablemente es una fuga.

---

## 🛠 Cómo detectar fugas de memoria

1. Tomá un snapshot inicial
2. Interactuá con la web (abrí/cerrá modales, cargá datos)
3. Tomá otro snapshot
4. Compará → ¿hay objetos que siguen creciendo?
5. Repetí el proceso. Si ves crecimiento constante en objetos que *deberían desaparecer*, tenés una fuga.

> 📍 Tip: prestá atención a listeners, referencias al DOM que no se eliminan, arrays acumulativos y datos en closures.

---

## 🧰 Funciones útiles en consola

Desde la pestaña **Console**, podés ayudar al análisis con funciones como:

```js
performance.memory
// Muestra uso actual del heap

window.gc()
// Fuerza recolección de basura (solo si el flag --js-flags=--expose-gc está activo)

debug(fn)
// Pausa ejecución cada vez que se llama la función
```

---

## 🎁 Tips pro

- Activá `Record Allocation Stack` para ver qué función crea cada objeto
- Buscá objetos con `Detached` (nodos DOM huérfanos aún en memoria)
- Usá `Comparison` para comparar dos snapshots
- Ordená por `retained size` para encontrar sospechosos
- Exportá snapshots para análisis externo si tu sitio es grande

---

## 🧠 ¿Por qué usarlo?

Porque el navegador **no limpia todo por sí solo**, y si tu sitio crece en memoria, **tu experiencia se vuelve lenta, inestable y rota**.

Este panel te permite:

- Confirmar si hay leaks de memoria
- Encontrar su origen exacto
- Optimizar el uso del heap
- Mejorar la performance sostenida del sitio

> 💀 Las fugas no matan al principio… pero matan lento. Este panel te avisa antes del desastre.

---

