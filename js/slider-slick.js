$(document).ready(function() {

  $('.our-team__slider-box').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="icon-chevron-left our-team__icon-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="icon-chevron-right our-team__icon-chevron-right"></i></button>',
    responsive: [
        { 
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
          }
        },
        { 
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });

})

