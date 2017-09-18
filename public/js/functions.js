'use strict';

function media(type, callback) {

   var mediaTypes = {

      sm: '(max-width: 640px)',

      'sm-md': '(max-width: 1024px)',

      md: '(min-width: 641px) and (max-width: 1024px)',

      'md-lg': '(min-width: 641px)',

      lg: '(min-width: 1025px)'

   }

   var currentMedia

   for(var mediaType in mediaTypes) {

      if(mediaType === type) currentMedia = mediaTypes[mediaType]

   }

   if(window.matchMedia(currentMedia).matches) callback()

}



$.prototype.c_top = function() {

   if(this.get(0) === window) return $(document).scrollTop()

   return this.offset().top

}



$.prototype.c_center = function() {

   return this.c_top() + this.outerHeight() / 2

}



$.prototype.c_bottom = function() {

   return this.c_top() + this.outerHeight()

}


var luiz = 1

$.prototype.c_event = function(event, eventCallback, one) {

   var $subject = this

   var triggerDirectionIndicator = []
   $subject.each(function() {
      triggerDirectionIndicator.push('bottom')
   })

   var isTriggered = {
      topAtWindowTop: function($target, index, triggerDirection) {
         if(triggerDirectionIndicator[index] === 'bottom' && $(window).c_top() >= $target.c_top()) {
            triggerDirectionIndicator[index] = 'top'
            return true
         }
         else if(triggerDirectionIndicator[index] === 'top' && $(window).c_top() < $target.c_top()) {
            triggerDirectionIndicator[index] = 'bottom'
            return true
         }
      },
      topAtWindowBottom: function($target, index, triggerDirection) {
         if(triggerDirectionIndicator[index] === 'bottom' && $(window).c_bottom() >= $target.c_top()) {
            triggerDirectionIndicator[index] = 'top'
            return true
         }
         else if(triggerDirectionIndicator[index] === 'top' && $(window).c_bottom() < $target.c_top()) {
            triggerDirectionIndicator[index] = 'bottom'
            return true
         }
      },
      centerAtWindowCenter: function($target, index, triggerDirection) {
         if(triggerDirectionIndicator[index] === 'bottom' && $(window).c_center() >= $target.c_center()) {
            triggerDirectionIndicator[index] = 'top'
            return true
         }
         else if(triggerDirectionIndicator[index] === 'top' && $(window).c_center() < $target.c_center()) {
            triggerDirectionIndicator[index] = 'bottom'
            return true
         }
      },
      bottomAtWindowTop: function($target, index, triggerDirection) {
         if(triggerDirectionIndicator[index] === 'bottom' && $(window).c_top() >= $target.c_bottom()) {
            triggerDirectionIndicator[index] = 'top'
            return true
         }
         else if(triggerDirectionIndicator[index] === 'top' && $(window).c_top() < $target.c_bottom()) {
            triggerDirectionIndicator[index] = 'bottom'
            return true
         }
      },
      bottomAtWindowBottom: function($target, index, triggerDirection) {
         if(triggerDirectionIndicator[index] === 'bottom' && $(window).c_bottom() >= $target.c_bottom()) {
            triggerDirectionIndicator[index] = 'top'
            return true
         }
         else if(triggerDirectionIndicator[index] === 'top' && $(window).c_bottom() < $target.c_bottom()) {
            triggerDirectionIndicator[index] = 'bottom'
            return true
         }
      }
   }

   $subject.each(function(index) {
      one ? $(this).one(event, eventCallback) : $(this).on(event, eventCallback)
      isTriggered[event]($(this), index)
   })

   $(document).on('scroll', function() {
      $subject.each(function(index) {
         if(isTriggered[event]($(this), index)) $(this).trigger(event)
      })
   })

   return $subject

}


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

