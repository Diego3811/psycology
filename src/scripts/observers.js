export function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };
  
      //En initScrollAnimations()
document.querySelectorAll('.service-card').forEach(el => {
  el.style.animationPlayState = 'paused';
  animateObserver.observe(el);
});


    const animateObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          animateObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.style.animationPlayState = 'paused';
      animateObserver.observe(el);
    });
  }

