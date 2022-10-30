$(document).ready(function (){
 $(".gallery").slick({
  dots: true,
  infinite: true,
  responsive: [
   {
    breakpoint: 600,
    settings: {
     slidesToScroll: 2,
     slidesToShow: 2
    }
   }
  ],
  slidesToScroll: 4,
  slidesToShow: 4
 });
});
