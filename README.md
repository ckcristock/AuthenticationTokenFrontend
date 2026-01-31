# Frontend - Sistema de Autenticación con Tokens y CRUD de Tareas

Aplicación Angular 21 que implementa autenticación con tokens JWT y un sistema CRUD de tareas consumiendo una API backend desarrollada en ASP.NET Core.

## 🎯 Características

### Funcionales

- ✅ Login con usuario y contraseña
- ✅ Emisión y almacenamiento de token JWT
- ✅ Módulo de tareas (CRUD completo)
- ✅ Protección de rutas con guards
- ✅ Cierre de sesión

### Técnicas

- ✅ Frontend desarrollado en Angular 21
- ✅ Consumo exclusivo del backend mediante HttpClient
- ✅ Interceptor HTTP para agregar Authorization Bearer
- ✅ Guards de rutas para protección
- ✅ Manejo centralizado de errores de autenticación
- ✅ Signals para gestión de estado reactivo
- ✅ Standalone components
- ✅ Reactive forms
- ✅ Lazy loading de rutas

## 📋 Requisitos Previos

- Node.js 18+ y npm
- Angular CLI 21+
- Backend ASP.NET Core ejecutándose (por defecto en `https://localhost:7000`)

## 🚀 Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/ckcristock/AuthenticationTokenFrontend.git
   cd AuthenticationTokenFrontend
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar la URL del backend**

   Edita el archivo `src/environments/environment.ts` y ajusta la URL del API:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'https://localhost:7000/api', // Ajusta según tu backend
   };
   ```

4. **Ejecutar la aplicación**

   ```bash
   npm start
   ```

   La aplicación estará disponible en `http://localhost:4200`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   ├── guards/
│   │   │   └── auth.guard.ts           # Guard para protección de rutas
│   │   ├── interceptors/
│   │   │   └── auth.interceptor.ts     # Interceptor para agregar token Bearer
│   │   ├── models/
│   │   │   ├── user.model.ts           # Interfaces de usuario y login
│   │   │   ├── task.model.ts           # Interfaces de tareas
│   │   │   └── api-response.model.ts   # Interfaz para respuestas del API
│   │   └── services/
│   │       ├── auth.service.ts         # Servicio de autenticación
│   │       ├── task.service.ts         # Servicio de tareas (CRUD)
│   │       └── error-handler.service.ts # Manejo centralizado de errores
│   ├── features/
│   │   ├── auth/
│   │   │   ├── login.component.ts      # Componente de login
│   │   │   ├── login.component.html
│   │   │   └── login.component.scss
│   │   └── tasks/
│   │       ├── task-list.component.ts  # Lista de tareas
│   │       ├── task-list.component.html
│   │       ├── task-list.component.scss
│   │       ├── task-form.component.ts  # Formulario crear/editar
│   │       ├── task-form.component.html
│   │       └── task-form.component.scss
│   ├── app.config.ts                   # Configuración de la aplicación
│   ├── app.routes.ts                   # Definición de rutas
│   └── app.ts                          # Componente raíz
└── environments/
    ├── environment.ts                  # Configuración desarrollo
    └── environment.prod.ts             # Configuración producción
```

## 🔐 Flujo de Autenticación

1. **Login**: El usuario ingresa credenciales en `/login`
2. **Token**: El backend valida y retorna un JWT
3. **Almacenamiento**: El token se guarda en `localStorage`
4. **Interceptor**: Todas las peticiones HTTP incluyen `Authorization: Bearer <token>`
5. **Guards**: Las rutas protegidas verifican la autenticación
6. **Logout**: Se limpian los datos y se redirige al login

## 📝 API Endpoints Consumidos

### Autenticación

- `POST /api/auth/login` - Iniciar sesión

### Tareas (protegidas con token)

- `GET /api/tasks` - Obtener todas las tareas
- `GET /api/tasks/:id` - Obtener una tarea específica
- `POST /api/tasks` - Crear nueva tarea
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea

## 🎨 Características de UI

- Diseño responsivo
- Validación de formularios en tiempo real
- Mensajes de error claros
- Estados de carga
- Confirmaciones para acciones destructivas
- Interfaz intuitiva y accesible

## 🔧 Configuración Adicional

### Cambiar puerto de desarrollo

Edita `angular.json` o ejecuta:

```bash
ng serve --port 4300
```

### Build para producción

```bash
npm run build
```

Los archivos se generarán en `dist/`

## 🧪 Pruebas

Ejecutar tests:

```bash
npm test
```

## 📦 Tecnologías Utilizadas

- **Angular 21**: Framework principal
- **TypeScript 5.9**: Lenguaje de programación
- **RxJS 7.8**: Programación reactiva
- **Angular Router**: Navegación y protección de rutas
- **Angular Forms**: Formularios reactivos
- **HttpClient**: Consumo de API REST

## 🔒 Seguridad Implementada

1. **Interceptor HTTP**: Inyección automática del token en todas las peticiones
2. **Guards**: Protección de rutas que requieren autenticación
3. **Manejo de errores 401**: Redirección automática al login si el token expira
4. **Validación de formularios**: Prevención de datos inválidos
5. **Almacenamiento seguro**: Token en localStorage con verificación SSR

## 👨‍💻 Desarrollo

### Comandos útiles

- `npm start` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm test` - Ejecutar tests
- `npm run watch` - Build en modo watch

### Convenciones de código

- Uso de signals para estado reactivo
- Standalone components sin NgModules
- Función `inject()` en lugar de inyección en constructor
- Reactive forms con validación
- Control flow syntax (`@if`, `@for`)
- Lazy loading de componentes

## 📄 Licencia

Este proyecto es parte de una actividad académica.

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
