!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var o=r(t(1)),i=r(t(2));function r(e){return e&&e.__esModule?e:{default:e}}new o.default,new i.default},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.beliefImage=document.querySelector(".belief__image--img"),this.beliefImage2=document.querySelector(".belief__image--img-2"),this.line2=document.querySelector(".line-2"),this.goldBox=document.querySelector(".gold-box"),this.event()}return o(e,[{key:"event",value:function(){var e=this;window.addEventListener("scroll",function(){e.revealScroll()})}},{key:"revealScroll",value:function(){var e=window.pageYOffset;e>document.querySelector(".section-belief").offsetTop-window.innerHeight/2.8&&this.beliefImage.classList.add("belief__image--img--is-showing"),e>document.querySelector(".section-belief--2").offsetTop-window.innerHeight/2.8&&this.beliefImage2.classList.add("belief__image--img-2--is-showing"),e>document.querySelector(".section-quote").offsetTop&&this.line2.classList.add("line-2--is-showing"),e>document.querySelector(".section-belief--2").offsetTop-window.innerHeight/2.8&&this.goldBox.classList.add("gold-box--is-showing")}}]),e}();n.default=i},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.navIconBox=document.querySelector(".navigation__icon-box"),this.navIconBar1=document.querySelector(".navigation__icon-bar-1"),this.navIconBar2=document.querySelector(".navigation__icon-bar-2"),this.navNav=document.querySelector(".navigation__nav"),this.navMenu=document.querySelector(".navigation__menu"),this.event()}return o(e,[{key:"event",value:function(){var e=this;this.navIconBox.addEventListener("click",function(){e.navToggle()})}},{key:"navToggle",value:function(){this.navIconBar1.classList.toggle("navigation__icon-bar-1--close-x"),this.navIconBar2.classList.toggle("navigation__icon-bar-2--close-x"),this.navNav.classList.toggle("navigation__nav--is-showing"),this.navNav.classList.contains("navigation__nav--is-showing")?this.navMenu.textContent="Close":this.navMenu.textContent="Menu"}}]),e}();n.default=i}]);