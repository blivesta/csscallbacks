/*!
 * csscallbacks v0.0.1
 * http://blivesta.github.io/csscallbacks/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
(function($) {
  "use strict";
  $.fn.transitionEnd = function(callback) {
    var $this = $(this);
    var props = "transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd MSTransitionEnd";
    if ($this.length > 0) {
      $this.bind(props, function(event) {
        if ($.isFunction(callback)) {
          callback.call($this, event);
        }
      });
    }
    return $this;
  };
  $.fn.animationEnd = function(callback) {
    var $this = $(this);
    var props = "animationend webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd";
    if ($this.length > 0) {
      $this.bind(props, function(event) {
        if ($.isFunction(callback)) {
          callback.call($this, event);
        }
      });
    }
    return $this;
  };
})(jQuery);