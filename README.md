# csscallbacks

[![npm package](https://img.shields.io/npm/v/csscallbacks.svg?style=flat-square)](https://www.npmjs.com/package/csscallbacks)
[![Build Status](https://img.shields.io/travis/blivesta/csscallbacks/master.svg?style=flat-square)](https://travis-ci.org/blivesta/csscallbacks)
[![Dependency Status](https://david-dm.org/blivesta/csscallbacks.svg?style=flat-square)](https://david-dm.org/blivesta/csscallbacks)


Callback function of Animation and Transition for css3 with jquery


## Install

### Download
-


### CDN

### Package managers
```bash
npm i csscallbacks
```

### Getting started

#### Link required files
```html
<!-- jquery -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.3/jquery.min.js"></script>

<!-- csscallbacks -->
<script src="./dist/js/jquery.csscallbacks.min.js"></script>

```

#### Transition end callback
```js
$(".hoge").csscallbacks('transitionEnd', function(){
	...
});
```
###Animation start callback
```js
$(".hoge").csscallbacks('animationStart', function(){
	...
});
```
###Animation end callback
```js
$(".hoge").csscallbacks('animationEnd', function(){
	...
});
```

##License
Released under the MIT license.
