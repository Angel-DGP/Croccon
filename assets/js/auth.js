// Sistema de autenticación simple con localStorage
window.Auth = {
  // Inicializar usuarios de prueba
  init: function() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Solo agregar usuarios de prueba si no existen
    if (users.length === 0) {
      const defaultUsers = [
        {
          id: '1',
          name: 'Administrador',
          email: 'admin@croccon.edu',
          username: 'admin@croccon.edu',
          password: 'admin123',
          role: 'admin',
          miles: 0
        },
        {
          id: '2',
          name: 'María González',
          email: 'estudiante@croccon.edu',
          username: 'estudiante@croccon.edu',
          password: 'estudiante123',
          role: 'estudiante',
          miles: 150
        },
        {
          id: '3',
          name: 'Carlos López',
          email: 'carlos@croccon.edu',
          username: 'carlos@croccon.edu',
          password: 'estudiante123',
          role: 'estudiante',
          miles: 75
        }
      ];
      
      localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
  },
  
  // Verificar si el usuario está autenticado
  isAuthenticated: function() {
    return localStorage.getItem('currentUser') !== null;
  },
  
  // Obtener usuario actual
  getCurrentUser: function() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  },
  
  // Cerrar sesión
  logout: function() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
  },
  
  // Verificar rol de administrador
  isAdmin: function() {
    const user = this.getCurrentUser();
    return user && user.role === 'admin';
  },
  
  // Verificar rol de estudiante
  isStudent: function() {
    const user = this.getCurrentUser();
    return user && user.role === 'estudiante';
  }
};

// Inicializar usuarios de prueba al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  window.Auth.init();
});
