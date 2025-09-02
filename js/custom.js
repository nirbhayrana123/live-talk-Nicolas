



$(document).ready(function(){
    $('.slick-slider').slick({
      slidesToShow: 4,   // ek row me 4 card
      slidesToScroll: 1,
      dots: true,        // neeche dots chahiye
      arrows: false,     // arrow hide
      infinite: true,
      responsive: [
        {
          breakpoint: 1024, // tablet
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600, // mobile
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });







$('.tag-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});











  });