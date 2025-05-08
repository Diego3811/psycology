document.querySelectorAll('.hero-cta').forEach(cta => {
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(cta.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });