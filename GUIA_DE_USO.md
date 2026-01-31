# Guía de Uso - Frontend Autenticación y Tareas

Esta guía te ayudará a usar la aplicación paso a paso.

## 📋 Tabla de Contenidos

1. [Inicio de Sesión](#inicio-de-sesión)
2. [Gestión de Tareas](#gestión-de-tareas)
3. [Cierre de Sesión](#cierre-de-sesión)
4. [Solución de Problemas](#solución-de-problemas)

---

## 🔐 Inicio de Sesión

### Paso 1: Acceder al Login

1. Abre tu navegador en `http://localhost:4200`
2. Serás redirigido automáticamente a `/login` si no estás autenticado

### Paso 2: Ingresar Credenciales

1. Ingresa tu **nombre de usuario**
2. Ingresa tu **contraseña** (mínimo 6 caracteres)
3. Haz clic en **Iniciar Sesión**

### Credenciales de Prueba

Si tu backend tiene datos de prueba, puedes usar:

```
Usuario: admin
Contraseña: admin123
```

### ¿Qué pasa después del login?

- ✅ Se guarda el token JWT en `localStorage`
- ✅ Se redirige a `/tasks` (lista de tareas)
- ✅ Tu sesión permanece activa hasta que cierres sesión

---

## 📝 Gestión de Tareas

### Ver Todas las Tareas

Al iniciar sesión, verás automáticamente todas tus tareas organizadas en tarjetas que muestran:

- **Título** de la tarea
- **Descripción** de la tarea
- **Estado** (Completada/Pendiente)
- **Fecha de creación**
- **Acciones** (Editar/Eliminar)

### Crear una Nueva Tarea

1. En la página principal de tareas, haz clic en **+ Nueva Tarea**
2. Completa el formulario:
   - **Título**: Nombre descriptivo (máximo 100 caracteres)
   - **Descripción**: Detalles de la tarea (máximo 500 caracteres)
3. Haz clic en **Crear**
4. Serás redirigido a la lista con tu nueva tarea

**Ejemplo:**

```
Título: Completar documentación del proyecto
Descripción: Redactar el README y la guía de instalación para el repositorio
```

### Editar una Tarea

1. En la tarjeta de la tarea, haz clic en el icono **✏️ (Editar)**
2. Modifica los campos que desees:
   - Título
   - Descripción
3. Haz clic en **Actualizar**
4. Los cambios se reflejarán inmediatamente

### Marcar como Completada

1. En la tarjeta de la tarea, marca/desmarca el **checkbox**
2. El cambio se guarda automáticamente
3. Las tareas completadas se muestran con un estilo diferente (título tachado, opacidad reducida)

### Eliminar una Tarea

1. En la tarjeta de la tarea, haz clic en el icono **🗑️ (Eliminar)**
2. Confirma la eliminación en el diálogo que aparece
3. La tarea se eliminará permanentemente

---

## 👤 Cierre de Sesión

### Cómo Cerrar Sesión

1. En la página de tareas, busca tu nombre en la esquina superior derecha
2. Haz clic en el botón **Cerrar Sesión**
3. Serás redirigido al login
4. Tu token será eliminado de `localStorage`

---

## 🔧 Solución de Problemas

### Error: "No autorizado"

**Problema:** Tu sesión ha expirado o el token es inválido.

**Solución:**

1. Cierra sesión (si es posible)
2. Vuelve a iniciar sesión
3. Si persiste, verifica que el backend esté funcionando

### Error: "Error al cargar las tareas"

**Problema:** No se puede conectar con el backend.

**Solución:**

1. Verifica que el backend esté ejecutándose en `https://localhost:7000`
2. Revisa la consola del navegador (F12) para más detalles
3. Verifica la configuración en `src/environments/environment.ts`

### No puedo iniciar sesión

**Problema:** Credenciales incorrectas o backend no responde.

**Solución:**

1. Verifica que el backend esté ejecutándose
2. Revisa que las credenciales sean correctas
3. Verifica la consola del navegador para errores específicos
4. Revisa los logs del backend

### La página está en blanco

**Problema:** Error de compilación o carga del frontend.

**Solución:**

1. Abre la consola del navegador (F12)
2. Busca errores JavaScript
3. Reinicia el servidor de desarrollo: `npm start`
4. Limpia la caché del navegador (Ctrl + Shift + R)

### Los cambios no se guardan

**Problema:** Problemas de conexión con el backend.

**Solución:**

1. Verifica que el backend esté respondiendo
2. Revisa el token en `localStorage` (F12 > Application > Local Storage)
3. Revisa la consola del navegador para errores HTTP

---

## 💡 Consejos de Uso

### Mejores Prácticas

1. **Títulos descriptivos**: Usa títulos claros que identifiquen la tarea rápidamente
2. **Descripciones detalladas**: Incluye toda la información necesaria en la descripción
3. **Actualiza el estado**: Marca las tareas como completadas para llevar un mejor control
4. **Cierra sesión**: En equipos compartidos, siempre cierra tu sesión

### Atajos de Teclado

- **Tab**: Navegar entre campos del formulario
- **Enter**: Enviar formulario (cuando está en un campo)
- **Esc**: Cancelar (en algunos navegadores)

### Accesibilidad

La aplicación está diseñada para ser accesible:

- ✅ Navegación con teclado
- ✅ Etiquetas descriptivas
- ✅ Mensajes de error claros
- ✅ Contraste de colores adecuado

---

## 🎯 Flujo de Trabajo Recomendado

### Uso Diario

1. **Mañana**
   - Inicia sesión
   - Revisa tus tareas pendientes
   - Prioriza las más importantes

2. **Durante el día**
   - Crea nuevas tareas según surjan
   - Actualiza el estado de las tareas en progreso
   - Marca como completadas las terminadas

3. **Fin del día**
   - Revisa el progreso del día
   - Planifica las tareas del siguiente día
   - Cierra sesión

---

## 📱 Responsividad

La aplicación es totalmente responsiva y funciona en:

- 💻 Computadoras de escritorio
- 💻 Laptops
- 📱 Tablets
- 📱 Smartphones

---

## 🆘 Soporte

Si encuentras problemas no cubiertos en esta guía:

1. Revisa el [README.md](./README.md) para información técnica
2. Revisa el [API_CONTRACT.md](./API_CONTRACT.md) para detalles del backend
3. Consulta los logs del navegador y del backend
4. Contacta al equipo de desarrollo

---

## 📈 Funcionalidades Futuras (Roadmap)

Características planificadas para futuras versiones:

- [ ] Filtros de tareas (todas, completadas, pendientes)
- [ ] Búsqueda de tareas por título/descripción
- [ ] Ordenamiento (fecha, alfabético, estado)
- [ ] Categorías o etiquetas
- [ ] Fechas de vencimiento
- [ ] Prioridades
- [ ] Recordatorios
- [ ] Modo oscuro
- [ ] Exportar tareas (PDF, CSV)
- [ ] Tareas compartidas/colaborativas

---

¿Tienes sugerencias? ¡Compártelas con el equipo de desarrollo!
