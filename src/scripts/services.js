// src/scripts/services.js
export function initServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
      card.addEventListener('click', () => {
        // Ejemplo: Expandir tarjeta al hacer click
        card.classList.toggle('expanded');
      });
      
      // Efecto hover para dispositivos con mouse
      card.addEventListener('mouseenter', () => {
        if (window.matchMedia("(hover: hover)").matches) {
          card.style.transform = 'translateY(-5px)';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }