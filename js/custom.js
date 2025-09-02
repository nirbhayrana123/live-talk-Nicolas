document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  const scrollAmount = 300; // Kitna scroll hoga ek click pe

  rightArrow.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  leftArrow.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

});



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
  });