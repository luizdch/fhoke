$(function() {

   $(document).on('scroll', function() {
      if($(document).scrollTop() > 1) {
         $('.siteHeader').addClass('js-state2')
      }
      else {
         $('.siteHeader').removeClass('js-state2')
      }
   })
   $('.siteNavOpenButton').on('click', function() {
      $('.siteNav').addClass('js-active js-slideLinks')
   })
   $('.siteNavCloseButton').on('click', function() {
      $('.siteNav').removeClass('js-active js-slideLinks')
   })

})
