
//ibg
function ibg(){

   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
   }
   });
   }
   
   ibg();

   //burger
   $('.wrapper').addClass('loaded');

   $('.icon-menu').click(function(event){
      $(this).toggleClass('active');
      $('.menu__body').toggleClass('active');
      $('body').toggleClass('lock');
   });


   document.getElementById("menu__about").onclick = function(){
      document.getElementById("about").scrollIntoView({behavior:"smooth"});
   }
   document.getElementById("menu__work").onclick = function(){
      document.getElementById("work").scrollIntoView({behavior:"smooth"});
   }
   document.getElementById("menu__shop").onclick = function(){
      document.getElementById("shop").scrollIntoView({behavior:"smooth"});
   }
   document.getElementById("menu__contact").onclick = function(){
      document.getElementById("footer").scrollIntoView({behavior:"smooth"});
   }


   //SLIDERS
   /*
   if($('.slider__body').length>0){
      $('.slider__body').slick({
         //autoplay: true,
         //infinite: false,
         dots: true,
         arrows: false,
         accessibility: false,
         slidesToShow: 1,
         autoplaySpeed: 3000,
         adaptiveHeight: true,
         nextArrow: '<button type="button" class="slick-next"></button>',
         prevArrow: '<button type="button" class="slick-prev"></button>',
         repsonsive: [{
            breakpoint: 768,
            settings: {}
         }]
      });
   } */
