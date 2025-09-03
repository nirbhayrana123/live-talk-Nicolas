



$(document).ready(function(){
    $('.slick-slider').slick({
      slidesToShow: 4,   // ek row me 4 card
      slidesToScroll: 1,
      dots: true,        // neeche dots chahiye
      arrows: false,     // arrow hide
      infinite: true,
      responsive: [
        {
          breakpoint: 1200, // tablet
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767, // mobile
          settings: {
            slidesToShow: 2
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
prevArrow: `<button type="button" class="slick-prev">
        <svg width="35" height="63" viewBox="0 0 35 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12007 28.6705L28.3733 1.1318C29.9598 -0.377267 32.3865 -0.377267 33.8799 1.1318C35.3734 2.64087 35.3734 5.09302 33.8799 6.69613L9.33322 31.5L33.8799 56.3039C35.3734 57.8129 35.3734 60.3591 33.8799 61.8682C32.3865 63.3773 29.9598 63.3773 28.3733 61.8682L1.12007 34.235C-0.373355 32.7259 -0.373355 30.2738 1.12007 28.6706V28.6705Z" fill="#4CBBEC"/>
        </svg>
      </button>`,
      nextArrow: `<button type="button" class="slick-next">
        <svg style="transform: rotate(180deg);" width="35" height="63" viewBox="0 0 35 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12007 28.6705L28.3733 1.1318C29.9598 -0.377267 32.3865 -0.377267 33.8799 1.1318C35.3734 2.64087 35.3734 5.09302 33.8799 6.69613L9.33322 31.5L33.8799 56.3039C35.3734 57.8129 35.3734 60.3591 33.8799 61.8682C32.3865 63.3773 29.9598 63.3773 28.3733 61.8682L1.12007 34.235C-0.373355 32.7259 -0.373355 30.2738 1.12007 28.6706V28.6705Z" fill="#4CBBEC"/>
        </svg>
      </button>`,

  responsive: [
    {
      breakpoint: 1200,
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
        slidesToShow: 2
      }
    }
  ]
});











  });