(function($) {
  
  "use strict";

  $.fn.transitionEnd = function(callback){
    var end = "transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd MSTransitionEnd";
    return this.each(function() {
      var $this = $(this);
      $this.bind(end, function(){
        $this.unbind(end);
        return callback.call(this);
      });
    });
  };

  $.fn.animationEnd = function(callback){
    var end = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";
    return this.each(function() {
      var $this = $(this);
      $this.bind(end, function(){
        $this.unbind(end);
        return callback.call(this);
      });
    });
  };
  
})(jQuery);