!function(){"use strict";var e,r,_,t,n,u,i,c,a,o={},p={};function __webpack_require__(e){var r=p[e];if(void 0!==r)return r.exports;var _=p[e]={exports:{}},t=!0;try{o[e].call(_.exports,_,_.exports,__webpack_require__),t=!1}finally{t&&delete p[e]}return _.exports}__webpack_require__.m=o,e=[],__webpack_require__.O=function(r,_,t,n){if(_){n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[_,t,n];return}for(var i=1/0,u=0;u<e.length;u++){for(var _=e[u][0],t=e[u][1],n=e[u][2],c=!0,a=0;a<_.length;a++)i>=n&&Object.keys(__webpack_require__.O).every(function(e){return __webpack_require__.O[e](_[a])})?_.splice(a--,1):(c=!1,n<i&&(i=n));if(c){e.splice(u--,1);var o=t()}}return o},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,{a:r}),r},_=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t||"object"==typeof e&&e&&(4&t&&e.__esModule||16&t&&"function"==typeof e.then))return e;var n=Object.create(null);__webpack_require__.r(n);var u={};r=r||[null,_({}),_([]),_(_)];for(var i=2&t&&e;"object"==typeof i&&!~r.indexOf(i);i=_(i))Object.getOwnPropertyNames(i).forEach(function(r){u[r]=function(){return e[r]}});return u.default=function(){return e},__webpack_require__.d(n,u),n},__webpack_require__.d=function(e,r){for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(r,_){return __webpack_require__.f[_](e,r),r},[]))},__webpack_require__.u=function(e){return"static/chunks/"+e+"."+({111:"1e790292b07be22e",264:"80a0ae10aa13d877",689:"23997745349d15af",696:"710a7bf40c903cce",748:"fd0a8d38af45ddb8",889:"7f7b86fa17373938",918:"776096438d4df1f3",951:"98ad1f44791165a7",996:"37634e6bb0767d2b"})[e]+".js"},__webpack_require__.miniCssF=function(e){return"static/css/ef46db3751d8e999.css"},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t={},n="_N_E:",__webpack_require__.l=function(e,r,_,u){if(t[e]){t[e].push(r);return}if(void 0!==_)for(var i,c,a=document.getElementsByTagName("script"),o=0;o<a.length;o++){var p=a[o];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+_){i=p;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,__webpack_require__.nc&&i.setAttribute("nonce",__webpack_require__.nc),i.setAttribute("data-webpack",n+_),i.src=__webpack_require__.tu(e)),t[e]=[r];var onScriptComplete=function(r,_){i.onerror=i.onload=null,clearTimeout(f);var n=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach(function(e){return e(_)}),r)return r(_)},f=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=onScriptComplete.bind(null,i.onerror),i.onload=onScriptComplete.bind(null,i.onload),c&&document.head.appendChild(i)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.tt=function(){return void 0===u&&(u={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(u=trustedTypes.createPolicy("nextjs#bundler",u))),u},__webpack_require__.tu=function(e){return __webpack_require__.tt().createScriptURL(e)},__webpack_require__.p="https://fastly.jsdelivr.net/gh/instaer/asset/nyt-game-hint/asset/_next/",i={272:0},__webpack_require__.f.j=function(e,r){var _=__webpack_require__.o(i,e)?i[e]:void 0;if(0!==_){if(_)r.push(_[2]);else if(272!=e){var t=new Promise(function(r,t){_=i[e]=[r,t]});r.push(_[2]=t);var n=__webpack_require__.p+__webpack_require__.u(e),u=Error();__webpack_require__.l(n,function(r){if(__webpack_require__.o(i,e)&&(0!==(_=i[e])&&(i[e]=void 0),_)){var t=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+n+")",u.name="ChunkLoadError",u.type=t,u.request=n,_[1](u)}},"chunk-"+e,e)}else i[e]=0}},__webpack_require__.O.j=function(e){return 0===i[e]},c=function(e,r){var _,t,n=r[0],u=r[1],c=r[2],a=0;if(n.some(function(e){return 0!==i[e]})){for(_ in u)__webpack_require__.o(u,_)&&(__webpack_require__.m[_]=u[_]);if(c)var o=c(__webpack_require__)}for(e&&e(r);a<n.length;a++)t=n[a],__webpack_require__.o(i,t)&&i[t]&&i[t][0](),i[t]=0;return __webpack_require__.O(o)},(a=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))}();