#jquery.csscallbacks.js

[![Build Status](https://travis-ci.org/blivesta/csscallbacks.svg?branch=master)](https://travis-ci.org/blivesta/csscallbacks)

Callback function of Animation and Transition for css3

##Usage

###Link required files
```html
<!-- jquery -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<!-- csscallbacks -->
<script src="./dist/js/jquery.csscallbacks.min.js"></script>

```

###Transition callback
```js
$(".hoge").transitionEnd(function(){
	...
});
```
###Animation callback
```js
$(".hoge").animationEnd(function(){
	...
});
```

##License
Released under the MIT license.