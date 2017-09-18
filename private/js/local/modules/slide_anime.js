$(function() {

   function setIntroductionSectionSlideAnime() {
      media('md-lg', function() {
         $('.introductionSection .textContainer p').eq(1).c_event('bottomAtWindowBottom', function() {
            $(this).parent().addClass('js-slide')
         }, true)
      })
      media('sm', function() {
         $('.introductionSection .mediumTitle').c_event('bottomAtWindowBottom', function() {
            $(this).parent().addClass('js-slide')
         }, true)
      })
   }
   setIntroductionSectionSlideAnime()

   $('.ourExpertise .slideAnime').c_event('bottomAtWindowBottom', function() {
      $(this).addClass('js-slide')
   }, true)

   function setWorkGridSlideAnime() {
      media('md-lg', function() {
         $('.workGrid .imgContainer').c_event('bottomAtWindowBottom', function() {
            $(this).addClass('js-slide')
         }, true)
      })
      media('sm', function() {
         $('.workGrid .imgContainer').c_event('topAtWindowBottom', function() {
            $(this).addClass('js-slide')
         }, true)
      })
   }
   setWorkGridSlideAnime()

})
