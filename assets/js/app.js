(() => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Sistema de millas/puntos
  window.MilesSystem = {
    // Obtener millas del usuario actual
    getUserMiles: function() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (!currentUser) return 0;
      
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      return userData.miles || 0;
    },
    
    // Agregar millas al usuario actual
    addMiles: function(action, amount = null) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (!currentUser) return false;
      
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const currentMiles = userData.miles || 0;
      
      // Si no se especifica cantidad, usar la configuración por defecto
      if (amount === null) {
        const actionConfig = window.CROC_DATA?.milesActions?.[action];
        if (!actionConfig) return false;
        amount = actionConfig.miles;
      }
      
      userData.miles = currentMiles + amount;
      localStorage.setItem('userData', JSON.stringify(userData));
      
      // Registrar la acción
      this.logAction(action, amount);
      
      return true;
    },
    
    // Registrar acción en el historial
    logAction: function(action, miles) {
      const actionLog = JSON.parse(localStorage.getItem('actionLog') || '[]');
      actionLog.push({
        action: action,
        miles: miles,
        date: new Date().toLocaleString('es-ES'),
        userId: JSON.parse(localStorage.getItem('currentUser') || '{}').id
      });
      localStorage.setItem('actionLog', JSON.stringify(actionLog));
    },
    
    // Canjear recompensa
    redeemReward: function(rewardId) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (!currentUser) return false;
      
      const reward = window.CROC_DATA?.rewards?.find(r => r.id === rewardId);
      if (!reward || !reward.available) return false;
      
      const userData = JSON.parse(localStorage.getItem('userData') || '{}');
      const currentMiles = userData.miles || 0;
      
      if (currentMiles < reward.cost) return false;
      
      // Descontar millas
      userData.miles = currentMiles - reward.cost;
      localStorage.setItem('userData', JSON.stringify(userData));
      
      // Registrar canje
      const redemptions = JSON.parse(localStorage.getItem('redemptions') || '[]');
      redemptions.push({
        id: Date.now().toString(),
        rewardId: reward.id,
        rewardName: reward.name,
        cost: reward.cost,
        userId: currentUser.id,
        date: new Date().toLocaleString('es-ES'),
        status: 'pendiente'
      });
      localStorage.setItem('redemptions', JSON.stringify(redemptions));
      
      return true;
    }
  };

  // Render productos en home
  const productsWrap = $('#homeProducts');
  if (productsWrap && window.CROC_DATA) {
    const items = window.CROC_DATA.products.slice(0, 4)
      .map(p => `
        <article class="product-card">
          <img src="${p.img}" alt="${p.name}">
          <div class="info">
            <span>${p.name}</span>
            <span class="price">$${p.price}</span>
          </div>
          <a class="btn btn-sm buy" href="tienda.html#${p.id}">Comprar</a>
        </article>`)
      .join('');
    productsWrap.innerHTML = items;
  }

  // Newsletter
  const newsForm = $('#newsletterForm');
  if (newsForm) {
    newsForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = newsForm.querySelector('input')?.value || '';
      localStorage.setItem('newsletterEmail', email);
      alert('¡Gracias por suscribirte!');
      newsForm.reset();
    });
  }

  // Navegación móvil
  const navToggle = $('#navToggle');
  const mainNav = $('#mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      mainNav.classList.toggle('open');
    });
  }

  // Normalizar header según sesión/rol
  (function setupHeaderByRole(){
    const nav = $('#mainNav');
    const currentUserLocal = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!nav) return;

    // Asegurar enlaces base
    const ensureLink = (href, text) => {
      let a = Array.from(nav.querySelectorAll('a')).find(x => x.getAttribute('href') === href);
      if (!a) {
        a = document.createElement('a');
        a.href = href; a.textContent = text; nav.appendChild(a);
      } else {
        a.textContent = text;
      }
      return a;
    };

    // Quitar duplicados de dashboard/admin previos
    const removeIf = (href) => {
      const el = Array.from(nav.querySelectorAll('a')).find(x => x.getAttribute('href') === href);
      if (el) el.remove();
    };

    if (currentUserLocal) {
      // Reemplazar botón de login por logout
      const loginBtn = Array.from(nav.querySelectorAll('a,.btn')).find(x => x.textContent?.trim() === 'Ingresar');
      if (loginBtn) loginBtn.remove();

      // Insertar botón de salir al final si no existe (evitar duplicados)
      const existingLogout = nav.querySelector('button[data-action="logout"]');
      const existingLogoutBtn = nav.querySelector('button[onclick="logout()"]');
      if (!existingLogout && !existingLogoutBtn) {
        const btn = document.createElement('button');
        btn.className = 'btn btn-sm'; btn.dataset.action = 'logout'; btn.textContent = 'Cerrar Sesión';
        btn.addEventListener('click', () => { localStorage.removeItem('currentUser'); window.location.href = 'login.html'; });
        nav.appendChild(btn);
      }

      // Enlace por rol (ocultar Dashboard para estudiantes, mantener Admin para administradores)
      if (currentUserLocal.role === 'admin') {
        // Admin: header fijo con [Admin, Tienda, Galería, Contacto] + Cerrar Sesión
        // 1) Quitar Inicio y Dashboard si están
        removeIf('index.html');
        removeIf('dashboard.html');
        // 2) Asegurar enlaces requeridos
        const adminLink = ensureLink('admin.html','Admin');
        ensureLink('tienda.html','Tienda');
        ensureLink('galeria.html','Galería');
        ensureLink('contacto.html','Contacto');
        // 3) Reordenar: Admin primero
        if (nav.firstChild !== adminLink) {
          nav.insertBefore(adminLink, nav.firstChild);
        }
      } else {
        // Estudiante: sin Admin/Dashboard en header
        ensureLink('index.html','Inicio');
        removeIf('admin.html');
        removeIf('dashboard.html');
      }
    } else {
      // Usuario no autenticado: asegurar botón Ingresar
      if (!Array.from(nav.children).some(x => x.textContent?.trim() === 'Ingresar')) {
        const login = document.createElement('a');
        login.href = 'login.html'; login.className = 'btn btn-sm'; login.textContent = 'Ingresar';
        nav.appendChild(login);
      }
      // Quitar enlaces de rol
      removeIf('dashboard.html');
      removeIf('admin.html');
      const logoutBtn = nav.querySelector('button[data-action="logout"]');
      if (logoutBtn) logoutBtn.remove();
    }
  })();

  // Verificar autenticación en páginas protegidas
  const protectedPages = ['dashboard.html', 'admin.html', 'kit.html'];
  const currentPage = window.location.pathname.split('/').pop();
  
  if (protectedPages.includes(currentPage)) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!currentUser) {
      try { localStorage.setItem('redirectTo', window.location.href); } catch (e) {}
      window.location.href = 'login.html';
    } else if (currentPage === 'admin.html' && currentUser.role !== 'admin') {
      window.location.href = 'dashboard.html';
    }
  }

  // Mostrar información del usuario en la navegación (solo para estudiantes)
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  if (currentUser && currentUser.role === 'estudiante') {
    const nav = $('.topbar nav');
    if (nav) {
      const userInfo = document.createElement('span');
      userInfo.className = 'user-info';
      const milesHtml = `<span class="miles-badge" id="goDashboard" title="Ir a mi dashboard">${window.MilesSystem.getUserMiles()} millas</span>`;
      userInfo.innerHTML = `<button id="userSummary" class="user-summary">Hola, ${currentUser.name} ${milesHtml}</button>`;
      nav.insertBefore(userInfo, nav.firstChild);
      // Click en badge -> dashboard del usuario
      const userBtn = document.getElementById('userSummary');
      if (userBtn) {
        userBtn.addEventListener('click', () => {
          window.location.href = 'dashboard.html';
        });
      }
    }
  }
})();


