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
