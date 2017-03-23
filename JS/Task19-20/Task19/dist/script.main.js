$(function() {

   //      Css scripts

   $('a').on('click', function(e) {
      e.preventDefault();
   });

   //    Navigation menu

   $('.nav__item').eq(0).css('background', '#248cec');

   $('.nav__item').on('click', function() {
      $('.nav__item').css('background', '0');
      $(this).css('background', '#248cec');
   });

   //    Slider

   $('.jcarousel ul').width( $('ul li img').width() * $('ul li img').length );

   $('.j-wrapper').on('mouseenter', function() {
      $('.jcarousel-pagination').addClass('jcarousel-pagination-visible');
   });

   $('.j-wrapper').on('mouseleave', function() {
      $('.jcarousel-pagination').removeClass('jcarousel-pagination-visible');
   });

   $('.jcarousel').jcarousel();

   /*          Pagination          */

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();

    /*         Services          */

    {
      let elem = $('<div class="caption-mask"><img src="dist/images/cross.png"></div>');

      elem.css('line-height', $('.services__img').css('height'));

      $('.services__figure').hover(function() {
         $(this).children('.services__caption').css('color', '#f4b60d');
         $(this).prepend(elem);
      }, function() {
         $(this).children('.services__caption').css('color', '#fff');
         $(this).children('.caption-mask').remove();
      });
   }

   /*          Banner Place         */

   $('.accordion__link').on('click', function() {

      if ( !$(this).hasClass('accordion__link--active') ) {

         $('.accordion__link').each( function() {
            if ( $(this).hasClass('accordion__link--active') ) {
               $(this)
                  .removeClass('accordion__link--active')
                  .children('.accordion__symbol').removeClass('accordion__symbol--active');

               $(this).siblings('.accordion__content').slideUp(300);
            }
         });

         $(this)
            .addClass('accordion__link--active')
            .children('.accordion__symbol').addClass('accordion__symbol--active');

         $(this).siblings('.accordion__content').slideDown(300);
      }
   });
});
