# Contrato de API - Backend ASP.NET Core

Este documento describe los endpoints y el formato de datos que el frontend espera del backend.

## Base URL

```
https://localhost:7000/api
```

## Autenticación

### POST /api/auth/login

Inicia sesión y obtiene un token JWT.

**Request Body:**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response (200 OK):**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "usuario",
    "email": "usuario@ejemplo.com"
  }
}
```

**Response (401 Unauthorized):**

```json
{
  "message": "Credenciales inválidas"
}
```

## Tareas (Endpoints Protegidos)

Todos estos endpoints requieren el header:

```
Authorization: Bearer <token>
```

### GET /api/tasks

Obtiene todas las tareas del usuario autenticado.

**Response (200 OK):**

```json
[
  {
    "id": 1,
    "title": "Completar el proyecto",
    "description": "Finalizar la implementación del frontend",
    "completed": false,
    "createdAt": "2026-01-31T10:30:00Z",
    "userId": 1
  },
  {
    "id": 2,
    "title": "Revisar código",
    "description": "Hacer code review del módulo de auth",
    "completed": true,
    "createdAt": "2026-01-30T15:20:00Z",
    "userId": 1
  }
]
```

### GET /api/tasks/{id}

Obtiene una tarea específica por ID.

**Response (200 OK):**

```json
{
  "id": 1,
  "title": "Completar el proyecto",
  "description": "Finalizar la implementación del frontend",
  "completed": false,
  "createdAt": "2026-01-31T10:30:00Z",
  "userId": 1
}
```

**Response (404 Not Found):**

```json
{
  "message": "Tarea no encontrada"
}
```

### POST /api/tasks

Crea una nueva tarea.

**Request Body:**

```json
{
  "title": "Nueva tarea",
  "description": "Descripción de la tarea"
}
```

**Response (201 Created):**

```json
{
  "id": 3,
  "title": "Nueva tarea",
  "description": "Descripción de la tarea",
  "completed": false,
  "createdAt": "2026-01-31T12:00:00Z",
  "userId": 1
}
```

**Response (400 Bad Request):**

```json
{
  "message": "Los datos son inválidos"
}
```

### PUT /api/tasks/{id}

Actualiza una tarea existente.

**Request Body (actualización completa):**

```json
{
  "title": "Título actualizado",
  "description": "Descripción actualizada",
  "completed": true
}
```

**Request Body (actualización parcial - solo completar):**

```json
{
  "completed": true
}
```

**Response (200 OK):**

```json
{
  "id": 1,
  "title": "Título actualizado",
  "description": "Descripción actualizada",
  "completed": true,
  "createdAt": "2026-01-31T10:30:00Z",
  "userId": 1
}
```

### DELETE /api/tasks/{id}

Elimina una tarea.

**Response (204 No Content):**
Sin cuerpo de respuesta.

**Response (404 Not Found):**

```json
{
  "message": "Tarea no encontrada"
}
```

## Códigos de Estado HTTP

- `200 OK`: Operación exitosa
- `201 Created`: Recurso creado exitosamente
- `204 No Content`: Operación exitosa sin contenido de respuesta
- `400 Bad Request`: Datos de entrada inválidos
- `401 Unauthorized`: Token inválido o expirado
- `403 Forbidden`: Sin permisos para la operación
- `404 Not Found`: Recurso no encontrado
- `500 Internal Server Error`: Error del servidor

## Configuración CORS

El backend debe permitir CORS para el origen del frontend:

```
http://localhost:4200
```

Headers permitidos:

- Content-Type
- Authorization

Métodos permitidos:

- GET, POST, PUT, DELETE, OPTIONS

## Validaciones Esperadas

### Login

- `username`: Requerido
- `password`: Requerido, mínimo 6 caracteres

### Tareas

- `title`: Requerido, máximo 100 caracteres
- `description`: Requerido, máximo 500 caracteres
- `completed`: Booleano

## Formato de Fechas

Todas las fechas deben estar en formato ISO 8601:

```
2026-01-31T10:30:00Z
```

## Seguridad

1. **Tokens JWT**: Deben incluir el ID del usuario y tener una expiración
2. **Autorización**: Cada usuario solo puede acceder a sus propias tareas
3. **Validación**: Todos los datos de entrada deben ser validados
4. **HTTPS**: En producción debe usarse HTTPS

## Ejemplo de Implementación en C#

### Modelo de Usuario

```csharp
public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
}
```

### Modelo de Tarea

```csharp
public class Task
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public bool Completed { get; set; }
    public DateTime CreatedAt { get; set; }
    public int UserId { get; set; }
}
```

### DTOs

```csharp
public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}

public class LoginResponse
{
    public string Token { get; set; }
    public UserDto User { get; set; }
}

public class CreateTaskRequest
{
    public string Title { get; set; }
    public string Description { get; set; }
}

public class UpdateTaskRequest
{
    public string Title { get; set; }
    public string Description { get; set; }
    public bool? Completed { get; set; }
}
```
