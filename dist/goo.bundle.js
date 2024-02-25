(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(t,e)||s(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){return Object.getOwnPropertyNames(Object(t)).reduce((function(n,r){var o=Object.getOwnPropertyDescriptor(Object(t),r),i=Object.getOwnPropertyDescriptor(Object(e),r);return Object.defineProperty(n,r,i||o)}),{})}function u(t){return"string"==typeof t}function p(t){return Array.isArray(t)}function f(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l(e);return void 0!==n.types?t=n.types:void 0!==n.split&&(t=n.split),void 0!==t&&(n.types=(u(t)||p(t)?String(t):"").split(",").map((function(t){return String(t).trim()})).filter((function(t){return/((line)|(word)|(char))/i.test(t)}))),(n.absolute||n.position)&&(n.absolute=n.absolute||/absolute/.test(e.position)),n}function d(t){var e=u(t)||p(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function h(t){return null!==t&&"object"==typeof t}function y(t){return h(t)&&/^(1|3|11)$/.test(t.nodeType)}function g(t){return p(t)?t:null==t?[]:function(t){return h(t)&&function(t){return"number"==typeof t&&t>-1&&t%1==0}(t.length)}(t)?Array.prototype.slice.call(t):[t]}function m(t){var e=t;return u(t)&&(e=/^(#[a-z]\w+)$/.test(t.trim())?document.getElementById(t.trim().slice(1)):document.querySelectorAll(t)),g(e).reduce((function(t,e){return[].concat(a(t),a(g(e).filter(y)))}),[])}!function(){function t(){for(var t=arguments.length,e=0;e<t;e++){var n=e<0||arguments.length<=e?void 0:arguments[e];1===n.nodeType||11===n.nodeType?this.appendChild(n):this.appendChild(document.createTextNode(String(n)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function n(){for(var t=this.parentNode,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n.length;if(t)for(o||t.removeChild(this);o--;){var i=n[o];"object"!=typeof i?i=this.ownerDocument.createTextNode(i):i.parentNode&&i.parentNode.removeChild(i),o?t.insertBefore(this.previousSibling,i):t.replaceChild(i,this)}}"undefined"!=typeof Element&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=n,DocumentFragment.prototype.replaceWith=n))}();var v=Object.entries,b="_splittype",w={},O=0;function C(t,e,n){if(!h(t))return console.warn("[data.set] owner is not an object"),null;var r=t[b]||(t[b]=++O),i=w[r]||(w[r]={});return void 0===n?e&&Object.getPrototypeOf(e)===Object.prototype&&(w[r]=o(o({},i),e)):void 0!==e&&(i[e]=n),n}function j(t,e){var n=h(t)?t[b]:null,r=n&&w[n]||{};return void 0===e?r:r[e]}function E(t){var e=t&&t[b];e&&(delete t[e],delete w[e])}var S="\\ud800-\\udfff",x="\\u0300-\\u036f\\ufe20-\\ufe23",A="\\u20d0-\\u20f0",k="\\ufe0e\\ufe0f",P="[".concat(S,"]"),T="[".concat(x).concat(A,"]"),W="\\ud83c[\\udffb-\\udfff]",D="(?:".concat(T,"|").concat(W,")"),N="[^".concat(S,"]"),L="(?:\\ud83c[\\udde6-\\uddff]){2}",R="[\\ud800-\\udbff][\\udc00-\\udfff]",B="\\u200d",F="".concat(D,"?"),I="[".concat(k,"]?"),M=I+F+"(?:"+B+"(?:"+[N,L,R].join("|")+")"+I+F+")*",H="(?:".concat(["".concat(N).concat(T,"?"),T,L,R,P].join("|"),"\n)"),z=RegExp("".concat(W,"(?=").concat(W,")|").concat(H).concat(M),"g"),V=RegExp("[".concat([B,S,x,A,k].join(""),"]"));function q(t){return V.test(t)}function G(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=null==(e=t)?"":String(e))&&u(t)&&!n&&q(t)?function(t){return q(t)?function(t){return t.match(z)||[]}(t):function(t){return t.split("")}(t)}(t):t.split(n)}function U(t,e){var n=document.createElement(t);return e?(Object.keys(e).forEach((function(t){var r=e[t],o=u(r)?r.trim():r;null!==o&&""!==o&&("children"===t?n.append.apply(n,a(g(o))):n.setAttribute(t,o))})),n):n}var X={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Y(t,e){var n=t.nodeType,r={words:[],chars:[]};if(!/(1|3|11)/.test(n))return r;if(3===n&&/\S/.test(t.nodeValue))return function(t,e){var n,r=d((e=l(X,e)).types),o=e.tagName,i=t.nodeValue,s=document.createDocumentFragment(),c=[];return/^\s/.test(i)&&s.append(" "),n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return(t?String(t):"").trim().replace(/\s+/g," ").split(e)}(i).reduce((function(t,n,i,l){var u,p;return r.chars&&(p=G(n).map((function(t){var n=U(o,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:t});return C(n,"isChar",!0),c=[].concat(a(c),[n]),n}))),r.words||r.lines?(C(u=U(o,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?p:n}),{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(u)):p.forEach((function(t){s.appendChild(t)})),i<l.length-1&&s.append(" "),r.words?t.concat(u):t}),[]),/\s$/.test(i)&&s.append(" "),t.replaceWith(s),{words:n,chars:c}}(t,e);var o=g(t.childNodes);if(o.length&&(C(t,"isSplit",!0),!j(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var i=t.nextSibling,s=t.previousSibling,c=t.textContent||"",u=i?i.textContent:" ",p=s?s.textContent:" ";C(t,{isWordEnd:/\s$/.test(c)||/^\s/.test(u),isWordStart:/^\s/.test(c)||/\s$/.test(p)})}return o.reduce((function(t,n){var r=Y(n,e),o=r.words,i=r.chars;return{words:[].concat(a(t.words),a(o)),chars:[].concat(a(t.chars),a(i))}}),r)}function _(t){j(t).isWord?(E(t),t.replaceWith.apply(t,a(t.childNodes))):g(t.children).forEach((function(t){return _(t)}))}function J(t,e,n){var r,o,a,s=d(e.types),c=e.tagName,l=t.getElementsByTagName("*"),u=[],p=[],f=null,h=[],y=t.parentElement,m=t.nextElementSibling,v=document.createDocumentFragment(),b=window.getComputedStyle(t),w=b.textAlign,O=.2*parseFloat(b.fontSize);return e.absolute&&(a={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},o=t.offsetWidth,r=t.offsetHeight,C(t,{cssWidth:t.style.width,cssHeight:t.style.height})),g(l).forEach((function(r){var o=r.parentElement===t,a=function(t,e,n,r){if(!n.absolute)return{top:e?t.offsetTop:null};var o=t.offsetParent,a=i(r,2),s=a[0],c=a[1],l=0,u=0;if(o&&o!==document.body){var p=o.getBoundingClientRect();l=p.x+s,u=p.y+c}var f=t.getBoundingClientRect(),d=f.width,h=f.height,y=f.x;return{width:d,height:h,top:f.y+c-u,left:y+s-l}}(r,o,e,n),c=a.width,l=a.height,d=a.top,h=a.left;/^br$/i.test(r.nodeName)||(s.lines&&o&&((null===f||d-f>=O)&&(f=d,u.push(p=[])),p.push(r)),e.absolute&&C(r,{top:d,left:h,width:c,height:l}))})),y&&y.removeChild(t),s.lines&&(h=u.map((function(t){var n=U(c,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(w,"; width: 100%;")});C(n,"isLine",!0);var r={height:0,top:1e4};return v.appendChild(n),t.forEach((function(t,e,o){var i=j(t),a=i.isWordEnd,s=i.top,c=i.height,l=o[e+1];r.height=Math.max(r.height,c),r.top=Math.min(r.top,s),n.appendChild(t),a&&j(l).isWordStart&&n.append(" ")})),e.absolute&&C(n,{height:r.height,top:r.top}),n})),s.words||_(v),t.replaceChildren(v)),e.absolute&&(t.style.width="".concat(t.style.width||o,"px"),t.style.height="".concat(r,"px"),g(l).forEach((function(t){var e=j(t),n=e.isLine,r=e.top,o=e.left,i=e.width,s=e.height,c=j(t.parentElement),l=!n&&c.isLine;t.style.top="".concat(l?r-c.top:r,"px"),t.style.left="".concat(n?a.left:o-(l?a.left:0),"px"),t.style.height="".concat(s,"px"),t.style.width="".concat(n?a.width:i,"px"),t.style.position="absolute"}))),y&&(m?y.insertBefore(t,m):y.appendChild(t)),h}var K=l(X,{}),Q=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isSplit=!1,this.settings=l(K,f(n)),this.elements=m(e),this.split()}return e(t,null,[{key:"clearData",value:function(){Object.keys(w).forEach((function(t){delete w[t]}))}},{key:"setDefaults",value:function(t){return K=l(K,f(t)),X}},{key:"revert",value:function(t){m(t).forEach((function(t){var e=j(t),n=e.isSplit,r=e.html,o=e.cssWidth,i=e.cssHeight;n&&(t.innerHTML=r,t.style.width=o||"",t.style.height=i||"",E(t))}))}},{key:"create",value:function(e,n){return new t(e,n)}},{key:"data",get:function(){return w}},{key:"defaults",get:function(){return K},set:function(t){K=l(K,f(t))}}]),e(t,[{key:"split",value:function(t){var e=this;this.revert(),this.elements.forEach((function(t){C(t,"html",t.innerHTML)})),this.lines=[],this.words=[],this.chars=[];var n=[window.pageXOffset,window.pageYOffset];void 0!==t&&(this.settings=l(this.settings,f(t)));var r=d(this.settings.types);r.none||(this.elements.forEach((function(t){C(t,"isRoot",!0);var n=Y(t,e.settings),r=n.words,o=n.chars;e.words=[].concat(a(e.words),a(r)),e.chars=[].concat(a(e.chars),a(o))})),this.elements.forEach((function(t){if(r.lines||e.settings.absolute){var o=J(t,e.settings,n);e.lines=[].concat(a(e.lines),a(o))}})),this.isSplit=!0,window.scrollTo(n[0],n[1]),v(w).forEach((function(t){var e=i(t,2),n=e[0],r=e[1],o=r.isRoot,a=r.isSplit;o&&a||(w[n]=null,delete w[n])})))}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}(),Z=function(){gsap.registerPlugin(ScrollTrigger);var t={};return{registerAnimation:function(e,n){t[e]=n},initAnimations:function(){$("[goo]").each((function(){var e=$(this),n=$(window).width(),r=e.attr("goo-disable"),o="true"===e.attr("goo-debug"),i=e.attr("goo"),a=e.attr("goo-type");if(!("mobile"===r&&n<=767||"tablet"===r&&n<=991)){"words"!==a&&"letters"!==a||new Q(e[0],{types:"words"===a?"words":"chars",tagName:"span"});var s={duration:e.data("goo-duration")/1e3||1,ease:e.data("goo-easing")||"power1.out",scrollTrigger:{trigger:e,start:e.attr("goo-start")||"top bottom",end:e.attr("goo-end")||"bottom top",toggleActions:e.attr("goo-actions")||"play pause resume reset",markers:o}};i in t&&a in t[i]&&t[i][a](e,s)}}))}}}();document.addEventListener("DOMContentLoaded",Z.initAnimations),window.Goo=Z})();