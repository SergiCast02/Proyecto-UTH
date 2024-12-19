$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 2,
    infinite: true,
    dots: true,
    speed: 700,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 431,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  // Cambiar la imagen de fondo del contenedor del carrusel al cambiar el producto visible
  $('.carousel').on('afterChange', function(event, slick, currentSlide){
    var currentSlideElement = $(slick.$slides[currentSlide]);
    var newBackground = currentSlideElement.data('bg');
    $('.carousel-background').css('background-image', 'url(images/' + newBackground + ')');
  });

  // Establecer la imagen de fondo inicial al cargar la página
  var initialBackground = $('.carousel .carousel-item:first').data('bg');
  $('.carousel-background').css('background-image', 'url(images/' + initialBackground + ')');
});
