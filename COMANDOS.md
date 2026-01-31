# 🚀 Comandos Rápidos

Este archivo contiene comandos útiles para trabajar con el proyecto.

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Verificar versiones
node --version
npm --version
ng version
```

## 🏃 Desarrollo

```bash
# Iniciar servidor de desarrollo (puerto 4200)
npm start

# Iniciar en otro puerto
ng serve --port 4300

# Abrir automáticamente en el navegador
ng serve --open

# Modo verbose (ver más información)
ng serve --verbose
```

## 🔨 Build

```bash
# Build de desarrollo
ng build

# Build de producción
npm run build

# Build con modo watch
npm run watch

# Build con análisis de bundle
ng build --stats-json
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests con cobertura
npm test -- --coverage

# Tests en modo watch
npm test -- --watch
```

## 🔍 Análisis y Linting

```bash
# Ver configuración de Angular
ng config

# Actualizar Angular CLI
npm install -g @angular/cli@latest

# Limpiar caché de npm
npm cache clean --force
```

## 📝 Generación de Código

```bash
# Generar un nuevo componente
ng generate component features/nombre-componente

# Generar un servicio
ng generate service core/services/nombre-servicio

# Generar un guard
ng generate guard core/guards/nombre-guard

# Generar un interceptor
ng generate interceptor core/interceptors/nombre-interceptor

# Generar una interfaz
ng generate interface core/models/nombre-interface

# Ver ayuda de generación
ng generate --help
```

## 🌐 Servidor y Red

```bash
# Permitir acceso desde la red local
ng serve --host 0.0.0.0

# Cambiar puerto y abrir navegador
ng serve --port 4300 --open

# Usar HTTPS en desarrollo
ng serve --ssl
```

## 📊 Información del Proyecto

```bash
# Ver rutas configuradas
ng serve --verbose | grep route

# Ver tamaño del bundle
ng build --stats-json
# Luego analizar con webpack-bundle-analyzer
```

## 🔧 Troubleshooting

```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpiar caché de Angular
rm -rf .angular

# Verificar dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update

# Reparar permisos (si hay problemas)
npm cache verify
```

## 🐛 Debug

```bash
# Modo debug en Chrome
ng serve --source-map

# Ver configuración de TypeScript
cat tsconfig.json

# Ver configuración de Angular
cat angular.json
```

## 📤 Deploy

```bash
# Build optimizado para producción
npm run build

# Los archivos estarán en: dist/

# Probar build localmente con servidor simple
npx http-server dist/authentication-token-frontend/browser -p 8080
```

## 🔐 Variables de Entorno

```bash
# Build con configuración de producción
ng build --configuration production

# Build con configuración personalizada
ng build --configuration=staging
```

## 📋 Git Commands

```bash
# Estado del repositorio
git status

# Ver cambios
git diff

# Agregar todos los cambios
git add .

# Commit
git commit -m "feat: descripción del cambio"

# Push
git push origin main

# Pull
git pull origin main

# Crear nueva rama
git checkout -b feature/nombre-feature

# Ver ramas
git branch -a
```

## 🔄 Actualización de Angular

```bash
# Ver versión actual
ng version

# Actualizar Angular CLI globalmente
npm install -g @angular/cli@latest

# Actualizar proyecto
ng update @angular/cli @angular/core

# Ver actualizaciones disponibles
ng update
```

## 💾 Backup

```bash
# Exportar lista de dependencias
npm list --depth=0 > dependencies.txt

# Crear backup del proyecto (sin node_modules)
tar -czf backup-$(date +%Y%m%d).tar.gz --exclude=node_modules .
```

## 🎯 Scripts Personalizados

Puedes agregar estos scripts al `package.json`:

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "watch": "ng build --watch --configuration development",
    "dev": "ng serve --open",
    "prod": "ng build --configuration production",
    "analyze": "ng build --stats-json && webpack-bundle-analyzer dist/stats.json"
  }
}
```

## 📱 Acceso desde Dispositivos Móviles

```bash
# 1. Iniciar servidor con host 0.0.0.0
ng serve --host 0.0.0.0

# 2. Obtener IP local
# Windows:
ipconfig
# Linux/Mac:
ifconfig

# 3. Acceder desde móvil
# Ejemplo: http://192.168.1.100:4200
```

## 🔍 Inspección y Análisis

```bash
# Ver árbol de dependencias
npm list

# Ver solo dependencias de producción
npm list --prod

# Ver solo dependencias de desarrollo
npm list --dev

# Buscar paquetes desactualizados
npm outdated

# Ver vulnerabilidades
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix
```

## 💡 Tips Útiles

### Durante Desarrollo

- `Ctrl + C` para detener el servidor
- `Ctrl + Shift + R` para recarga forzada del navegador
- F12 para abrir DevTools

### Optimización

- Usa `--configuration production` para builds optimizados
- Revisa el tamaño del bundle regularmente
- Implementa lazy loading donde sea posible

### Debugging

- Usa `console.log()` para debug rápido
- Usa breakpoints en DevTools
- Revisa la pestaña Network para peticiones HTTP

---

**Nota:** Adapta los comandos según tu sistema operativo y configuración específica.
