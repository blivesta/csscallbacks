/*!
 * csscallbacks v0.1.1
 * Callback function of Animation and Transition for css3 with jquery.
 * https://github.com/blivesta/csscallbacks
 * License : MIT
 * Author : blivesta <enmt@blivesta.com> (http://blivesta.com/)
 */
;(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function ($) {

  'use strict';

  $.fn.csscallbacks = function(type, callback){

    var _animationStart = 'animationstart webkitAnimationStart oAnimationStart';
    var _animationEnd = 'animationend webkitAnimationEnd oAnimationEnd';
    var _transitionEnd = "transitionend webkitTransitionEnd oTransitionEnd";

    if(type === 'animationStart'){
      type = _animationStart;
    } else if(type === 'animationEnd'){
      type = _animationEnd;
    } else if(type === 'transitionEnd'){
      type = _transitionEnd;
    }

    return this.each(function(index) {
      var $this = $(this);
      $this.on(type, function(){
        $this.off(type);
        return callback.call(this);
      });
    });

  };

}));
