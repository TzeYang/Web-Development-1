!function(t){var n={};function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(e,o,t){i.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(o,e){if(1&e&&(o=i(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)i.d(t,n,function(e){return o[e]}.bind(null,n));return t},i.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(o,"a",o),o},i.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},i.p="",i(i.s=0)}([function(e,o,t){"use strict";var n=c(t(1)),i=c(t(2)),r=c(t(3)),s=c(t(4));function c(e){return e&&e.__esModule?e:{default:e}}new n.default,new i.default,new r.default,new s.default},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}}(),i=function(){function t(){!function(e,o){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.comPhoto=document.querySelectorAll(".composition__photo"),this.comPhotoSpan=document.querySelector(".composition__photo-span"),this.desLine=document.querySelector(".line"),this.com2Photo=document.querySelectorAll(".composition-2__photo"),this.pressCoverage=document.querySelectorAll(".press-coverage"),this.event()}return n(t,[{key:"event",value:function(){var e=this;window.addEventListener("scroll",function(){e.revealScroll()})}},{key:"revealScroll",value:function(){var t=this,e=window.pageYOffset;e>document.querySelector(".section-featured").offsetTop-window.innerHeight/2.8&&this.comPhoto.forEach(function(e,o){setTimeout(function(){e.classList.add("composition__photo--is-showing"),t.comPhotoSpan.classList.add("composition__photo-span--is-showing")},150*(o+1.5))}),e>document.querySelector(".section-design-philosophy").offsetTop&&this.desLine.classList.add("line--is-showing"),e>document.querySelector(".section-quality").offsetTop-window.innerHeight/1.2&&this.com2Photo.forEach(function(e,o){setTimeout(function(){e.classList.add("composition-2__photo--is-showing")},150*(o+1))}),e>document.querySelector(".section-press").offsetTop-window.innerHeight/1.2&&this.pressCoverage.forEach(function(e,o){setTimeout(function(){e.classList.add("press-coverage--is-showing")},250*(o+1))})}}]),t}();o.default=i},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}}(),i=function(){function t(){!function(e,o){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.navIconBox=document.querySelector(".navigation__icon-box"),this.navIconBar1=document.querySelector(".navigation__icon-bar-1"),this.navIconBar2=document.querySelector(".navigation__icon-bar-2"),this.navNav=document.querySelector(".navigation__nav"),this.navMenu=document.querySelector(".navigation__menu"),this.event()}return n(t,[{key:"event",value:function(){var e=this;this.navIconBox.addEventListener("click",function(){e.navToggle()})}},{key:"navToggle",value:function(){this.navIconBar1.classList.toggle("navigation__icon-bar-1--close-x"),this.navIconBar2.classList.toggle("navigation__icon-bar-2--close-x"),this.navNav.classList.toggle("navigation__nav--is-showing"),this.navNav.classList.contains("navigation__nav--is-showing")?this.navMenu.textContent="Close":this.navMenu.textContent="Menu"}}]),t}();o.default=i},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}}(),i=function(){function t(){!function(e,o){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.arrowRight=document.querySelector(".number-box__arrow-right"),this.arrowLeft=document.querySelector(".number-box__arrow-left"),this.comP1=document.querySelector(".composition__photo--1"),this.comP2=document.querySelector(".composition__photo--1-2"),this.comP3=document.querySelector(".composition__photo--2"),this.comP4=document.querySelector(".composition__photo--2-2"),this.comP5=document.querySelector(".composition__photo--3"),this.comP6=document.querySelector(".composition__photo--3-2"),this.event()}return n(t,[{key:"event",value:function(){var e=this;this.arrowRight.addEventListener("click",function(){e.slideToggle()}),this.arrowLeft.addEventListener("click",function(){e.slideToggle2()})}},{key:"slideToggle",value:function(){this.comP1.classList.add("composition__photo--1-slide"),this.comP2.classList.add("composition__photo--1-2-slide"),this.comP3.classList.add("composition__photo--2-slide"),this.comP4.classList.add("composition__photo--2-2-slide"),this.comP5.classList.add("composition__photo--3-slide"),this.comP6.classList.add("composition__photo--3-2-slide")}},{key:"slideToggle2",value:function(){this.comP1.classList.remove("composition__photo--1-slide"),this.comP2.classList.remove("composition__photo--1-2-slide"),this.comP3.classList.remove("composition__photo--2-slide"),this.comP4.classList.remove("composition__photo--2-2-slide"),this.comP5.classList.remove("composition__photo--3-slide"),this.comP6.classList.remove("composition__photo--3-2-slide")}}]),t}();o.default=i},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,o,t){return o&&n(e.prototype,o),t&&n(e,t),e}}(),i=function(){function t(){!function(e,o){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.loadScreen=document.getElementById("load_screen"),this.loading=document.querySelector(".loading"),this.removeLoad()}return n(t,[{key:"removeLoad",value:function(){var e=this;window.addEventListener("load",function(){e.loading.classList.add("loading--is-showing"),setTimeout(function(){document.body.removeChild(e.loadScreen)},2e3)})}}]),t}();o.default=i}]);