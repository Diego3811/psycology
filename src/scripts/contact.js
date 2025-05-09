// src/scripts/contact.js
export function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validación básica
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();
        
        if (!name || !email || !message) {
          showAlert('Por favor completa todos los campos requeridos', 'error');
          return;
        }
        
        if (!validateEmail(email)) {
          showAlert('Ingresa un correo electrónico válido', 'error');
          return;
        }
        
        // Simular envío
        showAlert('Mensaje enviado correctamente', 'success');
        form.reset();
      });
    }
  }
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `form-alert ${type}`;
    alert.textContent = message;
    
    const existingAlert = document.querySelector('.form-alert');
    if (existingAlert) existingAlert.remove();
    
    document.querySelector('.contact-form').prepend(alert);
    
    setTimeout(() => alert.remove(), 5000);
  }