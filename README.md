# Croccon Academia de Robótica

Plataforma web educativa para la gestión de estudiantes, cursos, logros gamificados, tienda de kits y contenido exclusivo.

## 🚀 Características Principales

- **Sistema de Autenticación**: Roles de administrador y estudiante
- **Sistema de Millas/Puntos**: Gamificación con recompensas canjeables
- **Tienda de Kits**: Productos con contenido protegido por contraseña
- **Galería de Proyectos**: Visualización de trabajos estudiantiles
- **Panel de Administración**: Gestión completa de estudiantes y contenidos
- **Dashboard Estudiantil**: Seguimiento de progreso y logros
- **Formulario de Contacto**: Comunicación con docentes
- **Diseño Responsive**: Compatible con móviles, tablets y PCs

## 📁 Estructura del Proyecto

```
Croccon/
├── index.html              # Página principal
├── tienda.html             # Tienda de kits
├── galeria.html            # Galería de proyectos
├── contacto.html           # Formulario de contacto
├── login.html              # Inicio de sesión
├── dashboard.html          # Panel del estudiante
├── admin.html              # Panel de administración
├── kit.html                # Página de kit protegido
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos principales
│   ├── js/
│   │   ├── app.js          # Lógica principal
│   │   ├── auth.js         # Sistema de autenticación
│   │   └── data.js         # Datos simulados
│   └── img/                # Imágenes (vacío)
└── README.md
```

## 🛠️ Instalación y Ejecución

### Requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor web local (opcional, para desarrollo)

### Ejecución Local

1. **Opción 1: Servidor Local**
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

2. **Opción 2: Abrir Directamente**
   - Simplemente abre `index.html` en tu navegador
   - Algunas funciones pueden estar limitadas por políticas CORS

### Acceso
- **URL Local**: `http://localhost:8000` (con servidor)
- **Archivo Directo**: Abre `index.html` en el navegador

## 👥 Credenciales de Prueba

### Administrador
- **Email**: `admin@croccon.edu`
- **Contraseña**: `admin123`
- **Acceso**: Panel de administración completo

### Estudiante
- **Email**: `estudiante@croccon.edu`
- **Contraseña**: `estudiante123`
- **Acceso**: Dashboard estudiantil

### Estudiante Adicional
- **Email**: `carlos@croccon.edu`
- **Contraseña**: `estudiante123`
- **Acceso**: Dashboard estudiantil

## 🎮 Funcionalidades por Rol

### 👨‍💼 Administrador
- ✅ Gestión de estudiantes (agregar, editar, exportar)
- ✅ Subida de contenido (videos, guías, reportes)
- ✅ Gestión de canjes de puntos
- ✅ Visualización de mensajes de contacto
- ✅ Reportes y estadísticas
- ✅ Gestión de la tienda

### 👨‍🎓 Estudiante
- ✅ Dashboard personal con estadísticas
- ✅ Sistema de millas por actividades
- ✅ Canje de puntos por recompensas
- ✅ Visualización de cursos
- ✅ Acceso a contenido exclusivo de kits
- ✅ Galería de proyectos

## 🏪 Tienda de Kits

### Kits Disponibles
1. **Kit Principiante** - $55 (Contraseña: `KIT123`)
2. **Kit Sensores** - $75 (Contraseña: `SEN456`)
3. **Kit Avanzado** - $82 (Contraseña: `ADV789`)
4. **Kit Mini** - $20 (Contraseña: `MIN111`)
5. **Kit Arduino** - $65 (Contraseña: `ARD222`)
6. **Kit Robot Completo** - $120 (Contraseña: `ROB333`)

### Contenido Exclusivo
- Videos tutoriales paso a paso
- Guías de montaje detalladas
- Código de programación
- Diagramas de conexión

## 🎯 Sistema de Millas

### Acciones que Otorgan Millas
- **Ver video completo**: 10 millas
- **Completar guía**: 15 millas
- **Subir proyecto**: 25 millas
- **Completar quiz**: 20 millas
- **Asistir a clase**: 5 millas

### Recompensas Disponibles
- **Sticker Pack**: 50 millas
- **Lápiz Personalizado**: 100 millas
- **Camiseta Croccon**: 200 millas
- **Certificado Digital**: 300 millas
- **Libro de Programación**: 400 millas
- **Kit de Robótica**: 500 millas (no disponible)

## 📱 Diseño Responsive

El sitio está optimizado para:
- **Desktop**: 1200px+ (diseño completo)
- **Tablet**: 768px - 1199px (adaptación de grillas)
- **Mobile**: < 768px (navegación simplificada)

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Grid y Flexbox
- **JavaScript ES6+**: Lógica de la aplicación
- **LocalStorage**: Persistencia de datos local
- **Google Fonts**: Tipografía Poppins

## 📊 Almacenamiento Local

El sistema utiliza `localStorage` para:
- **Usuarios**: Credenciales y perfiles
- **Datos de Usuario**: Millas, progreso, historial
- **Contenido**: Videos, guías, reportes
- **Mensajes**: Formulario de contacto
- **Canjes**: Historial de recompensas

## 🚀 Funcionalidades Implementadas

### ✅ Completadas
- [x] Landing page con diseño del mockup
- [x] Sistema de autenticación con roles
- [x] Dashboard estudiantil con millas
- [x] Panel de administración completo
- [x] Tienda de kits con contenido protegido
- [x] Galería de proyectos
- [x] Formulario de contacto
- [x] Sistema de canje de puntos
- [x] Diseño responsive
- [x] Navegación entre páginas

### 🔄 Simuladas
- Subida de archivos (se simula con formularios)
- Envío de emails (se almacena en localStorage)
- Procesamiento de pagos (se simula la compra)
- Notificaciones push (se usan alerts)

## 🎨 Paleta de Colores

- **Primario**: #222 (Negro suave)
- **Secundario**: #708d81 (Verde neutro)
- **Fondo**: #f7f7f7 (Gris muy claro)
- **Texto**: #1d1d1f (Negro)
- **Acentos**: #6c757d (Gris medio)

## 📝 Notas de Desarrollo

- Todos los datos se almacenan en `localStorage`
- No se requiere base de datos externa
- Compatible con navegadores modernos
- Código modular y documentado
- Fácil de mantener y extender

## 🤝 Contribución

Para contribuir al proyecto:
1. Fork del repositorio
2. Crear rama de feature
3. Implementar cambios
4. Crear pull request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

---

**Croccon Academia de Robótica** - Desarrollado con ❤️ para la educación en robótica
