$(function() {

   function setParallaxWorkerHeight() {
      $('.parallaxWorkerSection').outerHeight($(window).outerHeight() - $('.siteHeader').outerHeight())
   }

   setParallaxWorkerHeight()

   var width = $(window).outerWidth()

   $(window).on('resize', function() {
      if($(window).outerWidth() != width) {
         setParallaxWorkerHeight()
         setTimeout(function() {
            width = $(window).outerWidth()
         }, 100)
      }
   })

   $(document).on('scroll', function() {
      if($(document).scrollTop() + $(window).outerHeight() >= $('.parallaxWorkerSection').offset().top &&
         $(document).scrollTop() <= $('.parallaxWorkerSection').offset().top + $('.parallaxWorkerSection').outerHeight()) {
         $('.parallaxWorkerSection div').css('transform', 'translateY(' + (($(document).scrollTop() + $(window).outerHeight() - Math.ceil($('.parallaxWorkerSection').offset().top)) * 0.01 - 60) + '%)')
      }
   })

})
