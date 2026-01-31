-- =====================================================
-- SCRIPT DE BASE DE DATOS - Sistema de Autenticación
-- =====================================================
-- Proyecto: Autenticación con Token JWT + CRUD de Tareas
-- Base de datos: MySQL 8.0+
-- =====================================================

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS autenticacion_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE autenticacion_db;

-- =====================================================
-- TABLA: usuarios
-- =====================================================
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    token VARCHAR(500) NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_ultimo_login TIMESTAMP NULL,
    CONSTRAINT uk_usuario UNIQUE (usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: tareas
-- =====================================================
CREATE TABLE IF NOT EXISTS tareas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    completada TINYINT(1) DEFAULT 0,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    usuario_id INT NOT NULL,
    CONSTRAINT fk_tareas_usuario FOREIGN KEY (usuario_id) 
        REFERENCES usuarios(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    INDEX idx_usuario_id (usuario_id),
    INDEX idx_completada (completada),
    INDEX idx_fecha_creacion (fecha_creacion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- DATOS DE PRUEBA
-- =====================================================

-- Insertar usuario de prueba (password: admin123)
-- Hash generado con BCrypt.Net
INSERT INTO usuarios (usuario, contrasena) VALUES 
('testadmin', 'JavlGPq9JyTdtvBO6x2llnRI1+gxwIyPqQ');

-- Nota: Para crear más usuarios, usa el endpoint POST /api/auth/register
-- o genera el hash con BCrypt.Net.BCrypt.HashPassword("tu_contraseña")

-- Insertar tareas de ejemplo para el usuario testadmin (id=1)
INSERT INTO tareas (titulo, descripcion, completada, usuario_id) VALUES
('Aprender Marketing Digital', 'Marketing digital', 0, 1),
('Aprender .NET', 'Estudiar ASP.NET Core y Entity Framework', 0, 1),
('Practicar MySQL', 'Practicar consultas SQL avanzadas', 0, 1);

-- =====================================================
-- VERIFICACIÓN
-- =====================================================
SELECT 'Base de datos creada exitosamente' AS mensaje;
SELECT COUNT(*) AS total_usuarios FROM usuarios;
SELECT COUNT(*) AS total_tareas FROM tareas;
