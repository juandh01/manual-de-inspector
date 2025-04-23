---
id: almacenamiento
title: Panel de Aplicación (Storage)
---

## ⚙️ ¿Qué es el Panel de Aplicación?

El panel **Application** (o "Almacenamiento") te permite **inspeccionar, editar y eliminar** datos que una web guarda en el navegador del usuario.

Incluye tecnologías de almacenamiento como:

- 🍪 Cookies
- 🗄️ LocalStorage
- 🕒 SessionStorage
- 🧠 IndexedDB
- 🧾 Web SQL *(obsoleto, no recomendado)*
- 📦 Cache Storage (usado en PWAs)
- 🔧 Service Workers y Web Manifest (para apps web progresivas)

> 🔐 Es fundamental para depurar autenticaciones, verificar persistencia de datos y entender el comportamiento offline de las PWA.

---

## 🍪 Cookies

Las cookies son fragmentos de datos que el navegador guarda y que pueden ser leídas por el servidor o el frontend. Usadas para sesiones, tokens de autenticación, preferencias de usuario, etc.

### ¿Dónde verlas?

`Application → Storage → Cookies → [dominio]`

### ¿Qué podés ver?

- 🏷️ **Nombre**
- 📦 **Valor**
- 🌐 **Dominio**
- 📁 **Ruta (Path)**
- 🕒 **Fecha de expiración**
- 🔒 **Flags**: `Secure`, `HttpOnly`, `SameSite`

### 🛠 Podés:

- ✏️ Editar una cookie
- ❌ Borrarla individualmente
- 🧹 Borrar todas con el botón “Clear All Cookies”
- 📌 Filtrar por nombre o dominio

> ⚠️ Si una cookie tiene el flag `HttpOnly`, no la vas a poder ver ni modificar desde JavaScript, solo desde este panel.

---

## 🧠 LocalStorage vs SessionStorage

Ambos permiten almacenar pares **clave-valor** en el navegador. Son fáciles de usar desde JavaScript y útiles para guardar configuraciones, estados de UI, tokens, etc.

| Característica     | LocalStorage         | SessionStorage        |
|--------------------|----------------------|------------------------|
| Duración           | Hasta que el usuario lo borre | Solo hasta cerrar la pestaña |
| Alcance            | Todo el dominio      | Solo la pestaña actual |
| Capacidad aprox.   | ~5MB                 | ~5MB                   |
| Accesible con JS   | ✅ Sí                | ✅ Sí                  |

### ¿Dónde verlos?

`Application → Storage → LocalStorage / SessionStorage`

---

### ✍️ Ejemplo de uso en consola:

```js
// Guardar datos
localStorage.setItem("usuario", "Juan");
sessionStorage.setItem("modo", "oscuro");

// Leer datos
localStorage.getItem("usuario");        // "Juan"
sessionStorage.getItem("modo");         // "oscuro"

// Borrar datos
localStorage.removeItem("usuario");
sessionStorage.clear();
```

> 💡 Podés editar, agregar o eliminar estos datos también desde el panel, igual que si fueran celdas de Excel.

---

## 🧠 IndexedDB

Una base de datos en el navegador para guardar **grandes volúmenes de datos estructurados**, como objetos, listas, datos offline, etc. Funciona de forma **asíncrona** y se accede con JS.

### ¿Dónde verla?

`Application → Storage → IndexedDB`

### ¿Qué podés hacer?

- 📂 Ver bases de datos creadas por la app
- 🔎 Examinar claves y valores por objeto almacenado
- 🛠 Ver versiones, objetos, transacciones

> ⚠️ Más compleja que localStorage, pero ideal para apps web completas tipo Trello, Notion o Gmail offline.

---

## 🧾 Otros componentes útiles del panel Application

- **Cache Storage**: recursos guardados por Service Workers para trabajar sin conexión.
- **Background Services**: ver notificaciones push, sync, etc.
- **Web Manifest**: detalles de instalación de la app (nombre, ícono, tema, etc.)
- **Service Workers**: scripts que corren en segundo plano, ideales para apps offline.

---

## 🎁 Tips pro

- 🔄 Si cambiás algo desde la consola (por ejemplo, localStorage), refrescá el panel para ver el cambio.
- 🧪 Podés testear expiración de cookies modificando la fecha.
- 🚀 Borra datos por separado (cookies, almacenamiento, cache) o todo de una con "Clear site data".

---

## 🧠 ¿Por qué usarlo?

Porque el almacenamiento **define el estado del usuario**, la configuración y el acceso a funcionalidades críticas. Este panel es vital para:

- Depurar sesiones, autenticación y tokens
- Probar experiencias offline (PWA)
- Ver cómo se persisten configuraciones
- Manipular datos sin tocar el backend

> 👀 Si una app no funciona como esperás, probablemente la respuesta esté guardada en algún rincón de este panel.

---
