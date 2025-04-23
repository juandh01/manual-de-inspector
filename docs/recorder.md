---
id: recorder
title: Panel Recorder (Flujos y Tests)
---

## 🎬 ¿Qué es el Panel Recorder?

El panel **Recorder** es una herramienta integrada en DevTools que permite:

- **Grabar flujos de interacción** con la página (como clics, inputs, navegación)
- **Reproducirlos paso a paso**
- **Exportarlos como código de pruebas automáticas** (Playwright, Puppeteer)

Ideal para crear **test de regresión visual**, documentar bugs o verificar que una funcionalidad crítica no se rompa con cambios.

> 🔍 Es como tener un grabador de macros para la web, pero enfocado en testing y automatización.

---

## 🧭 ¿Dónde se encuentra?

1. Abrí DevTools con `F12`
2. Menú `More tools → Recorder`
3. Se abre una interfaz dividida en tres partes:
   - 🎥 Grabación
   - ▶ Reproducción
   - 🧪 Exportación

---

## 🎥 ¿Cómo grabar un flujo?

1. Abrí el panel **Recorder**
2. Clic en **"Start new recording"**
3. Poné un nombre para el flujo (ej: `login-test`)
4. Interactuá normalmente con la página: clics, inputs, navegación
5. Clic en **"Stop"**

Se genera una lista de acciones como:

```text
click → selector: #login-btn
change → selector: input[name="email"]
navigation → to: /dashboard
```

> 🧠 Cada paso puede incluir detalles como el selector exacto, el valor ingresado, el timestamp y más.

---

## ▶ Reproducir la grabación

Una vez grabado el flujo:

- Podés **reproducirlo paso a paso**
- Ver si se comporta igual que durante la grabación original
- Observar si hay cambios inesperados (errores, redirecciones, inputs rotos)

Esto es útil para depurar bugs intermitentes o validar si algo sigue funcionando tras un cambio de código.

> ⚠️ La reproducción depende de que los elementos sigan existiendo y con los mismos selectores. Si cambió la estructura, puede fallar.

---

## 💾 Exportar como test automatizado

Una de las funciones más potentes del Recorder: **exportar el flujo como código**.

Actualmente podés exportar como:

- **Playwright script**
- **Puppeteer script**

Pasos:

1. Clic en `Export` → Elegí el formato deseado
2. Se genera un archivo `.js` con el código del test automatizado
3. Podés ejecutarlo en tu entorno de CI/CD o localmente

### Ejemplo de exportación Playwright:

```js
const { test, expect } = require('@playwright/test');

test('login flow', async ({ page }) => {
  await page.goto('https://tusitio.com');
  await page.click('#login-btn');
  await page.fill('input[name="email"]', 'usuario@test.com');
  await page.fill('input[name="password"]', '123456');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
```

> 💡 Ideal para armar suites de prueba rápidas sin escribir código desde cero.

---

## 🛠 Opciones útiles

- **Editar pasos** manualmente desde la grabación
- **Eliminar pasos** que no necesitás
- **Dividir flujos** en secciones (ej: login, navegación, logout)
- **Volver a grabar desde un punto específico**

También podés cambiar el orden, agregar “pausas” o notas para contextualizar cada paso.

---

## 🧠 ¿Cuándo usar Recorder?

- Para reproducir bugs de usuarios paso a paso
- Para documentar flujos clave de tu sitio (registro, compra, contacto)
- Para generar código base para pruebas automáticas
- Para testear regresiones sin herramientas externas
- Para grabar lo que hace un usuario antes de un error (en modo debug)

---

## 🎯 Ventajas

- No necesitás escribir código para empezar a testear
- Es parte nativa de DevTools, no hay que instalar nada
- Se integra fácilmente con Playwright
- Te ayuda a entender **cómo navega un usuario real**
- Es rápido, visual e intuitivo

---

## ⚠️ Limitaciones actuales

- Los flujos dependen de los selectores CSS (si cambian, fallan)
- No graba todos los estados visuales, solo interacciones base
- No detecta errores JS ni hace assertions automáticas (eso lo hacés al exportar)
- Aún no soporta todas las APIs interactivas (drag & drop, custom components complejos)

---

## 🧪 ¿Por qué usarlo?

Porque probar manualmente cada clic en cada cambio **es una pérdida de tiempo**. Recorder te permite:

- Probar tus flujos clave en segundos
- Ahorrar tiempo de QA
- Reducir errores en producción
- Tener pruebas vivas que reflejan flujos reales

> 🧪 No reemplaza un framework de testing, pero lo complementa y acelera tu trabajo.

---


