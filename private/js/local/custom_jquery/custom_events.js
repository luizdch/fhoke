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
