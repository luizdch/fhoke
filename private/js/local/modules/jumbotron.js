$(function() {

   function setJumbotronHeight() {
      $('.jumbotron').outerHeight($(window).outerHeight())
   }

   setJumbotronHeight()

   var width = $(window).outerWidth()

   $(window).on('resize', function() {
      if($(window).outerWidth() != width) {
         setJumbotronHeight()
         setTimeout(function() {
            width = $(window).outerWidth()
         }, 100)
      }
   })

   $('.mouseIndicator').on('click', function() {
      $('html, body').animate({
         scrollTop: $('.introductionSection').c_top() - $('.siteHeader').outerHeight()
      }, 1000)
   })

});
