$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    dots: true,
    speed: 700,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  });

  // Cambiar la imagen de fondo del contenedor del carrusel al cambiar el producto visible
  $('.carousel').on('afterChange', function(event, slick, currentSlide){
    var currentSlideElement = $(slick.$slides[currentSlide]);
    var newBackground = currentSlideElement.data('bg');
    $('.carousel-background').css('background-image', 'url(images/' + newBackground + ')');
  });
});
