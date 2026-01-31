# 📦 INSTRUCCIONES PARA ENTREGA DEL PROYECTO

## Sistema de Autenticación con Token JWT + CRUD de Tareas

---

## 📋 ENTREGABLES

Según los requisitos del proyecto, debes entregar:

### 1. ✅ Repositorio del Frontend (Angular)

### 2. ✅ Repositorio del Backend (ASP.NET Core)

### 3. ✅ Scripts de Base de Datos (MySQL)

### 4. ✅ README con flujo de autenticación

---

## 🗂️ ESTRUCTURA DE ENTREGA

Puedes entregar de **dos formas**:

### **OPCIÓN A: Dos repositorios separados** (Recomendado)

```
📁 Entrega-Proyecto-Autenticacion/
├── 📁 frontend-angular/
│   └── (todo el contenido de AuthenticationTokenFrontend)
├── 📁 backend-dotnet/
│   └── (todo el contenido de AuthenticationTokenBackend)
└── 📄 LEEME.txt (con links a los repositorios)
```

### **OPCIÓN B: Monorepo organizado**

```
📁 Proyecto-Autenticacion-Token/
├── 📁 frontend/
│   ├── src/
│   ├── package.json
│   └── README.md
├── 📁 backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Program.cs
│   └── README.md
├── 📁 database/
│   ├── setup.sql
│   └── README.md
└── 📄 README.md (raíz - explicación general)
```

---

## 📝 CHECKLIST DE ENTREGA

Antes de entregar, verifica que incluyas:

### Frontend (Angular 21)

- [ ] Carpeta `src/` con todo el código
- [ ] `package.json` con dependencias
- [ ] `README.md` con instrucciones de instalación
- [ ] Carpeta `database/` con scripts SQL
- [ ] Archivos de configuración (`angular.json`, `tsconfig.json`)

### Backend (ASP.NET Core)

- [ ] Carpeta `Controllers/` con AuthController y TareasController
- [ ] Carpeta `Models/` con DTOs y entidades
- [ ] `Program.cs` configurado
- [ ] `appsettings.json` (sin contraseñas reales)
- [ ] Archivo `.csproj` con dependencias

### Base de Datos

- [ ] `setup.sql` - Script de creación completo
- [ ] Instrucciones de configuración en README

### Documentación

- [ ] README principal con:
  - [ ] Descripción del proyecto
  - [ ] Flujo de autenticación explicado
  - [ ] Instrucciones de instalación
  - [ ] Instrucciones de ejecución
  - [ ] Credenciales de prueba
  - [ ] Screenshots (opcional pero recomendado)

---

## 🚀 PASOS PARA PREPARAR LA ENTREGA

### 1️⃣ Preparar el Frontend

```bash
# Ubicarte en la carpeta del frontend
cd c:\Users\ckcristock\Documents\AuthenticationTokenFrontend

# Limpiar archivos temporales
rmdir /s /q node_modules
rmdir /s /q .angular
rmdir /s /q dist

# Verificar que el README esté actualizado
# (ya lo creamos con toda la información)
```

### 2️⃣ Preparar el Backend

```bash
# Ubicarte en la carpeta del backend
cd c:\Users\ckcristock\Documents\.net\AuthenticationTokenBackend

# Limpiar archivos de build
dotnet clean

# Verificar que appsettings.json no tenga contraseñas reales
# Reemplazar ConnectionString con placeholders
```

### 3️⃣ Crear archivo .gitignore (si usas Git)

**Para Frontend:**

```
node_modules/
.angular/
dist/
.env
*.log
```

**Para Backend:**

```
bin/
obj/
*.user
*.suo
appsettings.Development.json
```

### 4️⃣ Crear el archivo de scripts SQL

Ya está creado en: `database/setup.sql`

### 5️⃣ Crear README principal

Ya está actualizado con toda la información necesaria.

---

## 📤 FORMAS DE ENTREGA

### Opción 1: Repositorios Git (GitHub/GitLab)

1. Crear dos repositorios:
   - `proyecto-autenticacion-frontend`
   - `proyecto-autenticacion-backend`
2. Subir el código a cada repositorio
3. Entregar los enlaces de los repositorios

### Opción 2: Archivo comprimido

1. Crear carpeta con ambos proyectos
2. Comprimir en ZIP o RAR
3. Entregar el archivo comprimido

### Opción 3: Monorepo (carpeta única)

1. Crear estructura de monorepo
2. Incluir frontend + backend + database
3. Comprimir y entregar

---

## ✅ VERIFICACIÓN FINAL

Antes de entregar, ejecuta esta verificación:

### Frontend

- [ ] `npm install` funciona sin errores
- [ ] `npm start` inicia la aplicación
- [ ] Se puede acceder en http://localhost:4200
- [ ] El login funciona correctamente

### Backend

- [ ] `dotnet restore` funciona sin errores
- [ ] `dotnet run` inicia el servidor
- [ ] Se puede acceder en http://localhost:7000
- [ ] Los endpoints responden correctamente

### Base de Datos

- [ ] El script SQL se ejecuta sin errores
- [ ] Se crean las tablas correctamente
- [ ] Se insertan los datos de prueba

### Documentación

- [ ] README explica claramente cómo instalar
- [ ] README explica claramente cómo ejecutar
- [ ] Se incluyen las credenciales de prueba
- [ ] Se explica el flujo de autenticación

---

## 🔐 CREDENCIALES DE PRUEBA

Incluir en la documentación:

**Usuario de prueba:**

- Usuario: `testadmin`
- Contraseña: `admin123`

**Base de datos:**

- Servidor: `localhost`
- Puerto: `3306`
- Base de datos: `autenticacion_db`
- Usuario: `root` (o el que uses)
- Contraseña: (indicar que debe configurarse localmente)

---

## 📞 SOPORTE

Si el evaluador tiene problemas:

1. Verificar que tiene instalado:
   - Node.js 18+
   - .NET 8 SDK
   - MySQL 8+
2. Verificar que los puertos estén libres:
   - 4200 (Frontend)
   - 7000 (Backend)
   - 3306 (MySQL)
3. Revisar la documentación en README.md

---

## 🎯 RESUMEN RÁPIDO

**Para el evaluador:**

1. Ejecutar script SQL en MySQL
2. Configurar ConnectionString en backend
3. Ejecutar `dotnet run` en backend
4. Ejecutar `npm install` en frontend
5. Ejecutar `npm start` en frontend
6. Abrir http://localhost:4200
7. Login con testadmin / admin123
8. Probar CRUD de tareas

**Tiempo estimado de configuración:** 10-15 minutos

---

✅ **Proyecto listo para entrega**
