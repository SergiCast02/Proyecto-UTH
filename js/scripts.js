document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    const visibleItems = 2; // Número de elementos visibles a la vez
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * 100 / visibleItems;
      carousel.style.transition = 'transform 0.5s ease'; // Añade una transición suave
      carousel.style.transform = `translateX(${offset}%)`;
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? itemCount - visibleItems : currentIndex - 1;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex === itemCount - visibleItems) ? 0 : currentIndex + 1;
      updateCarousel();
    });
  
    updateCarousel();
  });
  
  