// Datos simulados para la tienda y contenidos
window.CROC_DATA = {
  products: [
    { id: 'kit-uno', name: 'Kit Principiante', price: 55, img: 'https://images.unsplash.com/photo-1581091014607-231ff0f9311d?q=80&w=1200&auto=format&fit=crop', password: 'KIT123', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'principiante' },
    { id: 'kit-sensor', name: 'Kit Sensores', price: 75, img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', password: 'SEN456', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'intermedio' },
    { id: 'kit-avanzado', name: 'Kit Avanzado', price: 82, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', password: 'ADV789', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'avanzado' },
    { id: 'kit-mini', name: 'Kit Mini', price: 20, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', password: 'MIN111', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'principiante' },
    { id: 'kit-arduino', name: 'Kit Arduino', price: 65, img: 'https://images.unsplash.com/photo-1581093588401-16ec4a6a7c9f?q=80&w=1200&auto=format&fit=crop', password: 'ARD222', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'intermedio' },
    { id: 'kit-robot', name: 'Kit Robot Completo', price: 120, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', password: 'ROB333', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', category: 'avanzado' }
  ],
  
  // Sistema de millas/puntos
  milesActions: {
    'video': { miles: 10, description: 'Ver video completo' },
    'guide': { miles: 15, description: 'Completar guía' },
    'project': { miles: 25, description: 'Subir proyecto' },
    'quiz': { miles: 20, description: 'Completar quiz' },
    'attendance': { miles: 5, description: 'Asistir a clase' }
  },
  
  // Recompensas disponibles
  rewards: [
    { id: 1, name: 'Sticker Pack', cost: 50, available: true, description: 'Pack de stickers temáticos' },
    { id: 2, name: 'Lápiz Personalizado', cost: 100, available: true, description: 'Lápiz con logo de Croccon' },
    { id: 3, name: 'Camiseta Croccon', cost: 200, available: true, description: 'Camiseta oficial de la academia' },
    { id: 4, name: 'Kit de Robótica', cost: 500, available: false, description: 'Kit básico de robótica' },
    { id: 5, name: 'Certificado Digital', cost: 300, available: true, description: 'Certificado de participación' },
    { id: 6, name: 'Libro de Programación', cost: 400, available: true, description: 'Libro de programación para niños' }
  ],
  
  // Cursos disponibles
  courses: [
    { id: 1, title: 'Introducción a la Robótica', description: 'Aprende los conceptos básicos', duration: '4 semanas', level: 'Principiante' },
    { id: 2, title: 'Programación Básica', description: 'Fundamentos de programación', duration: '6 semanas', level: 'Principiante' },
    { id: 3, title: 'Sensores y Actuadores', description: 'Trabaja con sensores', duration: '5 semanas', level: 'Intermedio' },
    { id: 4, title: 'Proyectos Avanzados', description: 'Proyectos complejos', duration: '8 semanas', level: 'Avanzado' }
  ]
};


