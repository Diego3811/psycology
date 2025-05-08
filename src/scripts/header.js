export function initHeader() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    const toggleMenu = () => {
      const isActive = navList.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isActive ? 'false' : 'true');
      navList.classList.toggle('active');
      menuToggle.classList.toggle('active');
    };
  
    const closeMenu = () => {
      navList.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    };
  
    // Event Listeners
    if (menuToggle && navList) {
      menuToggle.addEventListener('click', toggleMenu);
      
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) closeMenu();
      });
  
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
  
      // Tecla ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
    }
  }