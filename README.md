# csscallbacks

[![npm package](https://img.shields.io/npm/v/csscallbacks.svg?style=flat-square)](https://www.npmjs.com/package/csscallbacks)
[![Build Status](https://img.shields.io/travis/blivesta/csscallbacks/master.svg?style=flat-square)](https://travis-ci.org/blivesta/csscallbacks)
[![Dependency Status](https://david-dm.org/blivesta/csscallbacks.svg?style=flat-square)](https://david-dm.org/blivesta/csscallbacks)


Callback function of Animation and Transition for css3 with jquery


## Install

### Download
- [csscallbacks](https://raw.githubusercontent.com/blivesta/csscallbacks/master/dist/csscallbacks.js)


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
<script src="./dist/csscallbacks.min.js"></script>

```

#### Transition End Callback
```js
$(".hoge").csscallbacks('transitionEnd', function(){
	...
});
```
#### Animation Start Callback
```js
$(".hoge").csscallbacks('animationStart', function(){
	...
});
```

#### Animation End Callback
```js
$(".hoge").csscallbacks('animationEnd', function(){
	...
});
```

## License
Released under the MIT license.
