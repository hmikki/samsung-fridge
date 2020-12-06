!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://app.artibot.ai/",r(r.s=30)}({3:function(e,t){e.exports={marketingUrl:"https://artibot.ai",rootUrl:"https://app.artibot.ai",cdnUrl:"https://prod.artibotcdn.com",apiUrl:"https://api.artibot.ai",apiCdnUrl:"https://api-cdn.prod-aws.artibot.ai",hostedUrl:"https://my.artibot.ai",tenorApiKey:"6650DXV0CK85",stripeApiKey:"pk_live_jYT6dnqKekkLlAVoTb1iGxmE",auth:{cognitoRootUrl:"https://artibot-prod.auth.us-east-1.amazoncognito.com",clientId:"4sihnh3rfp1tsu68l1e6gnhupl",tokenName:"artibot_auth_token",refreshTokenName:"artibot_auth_refresh_token",tokenExpirationName:"artibot_auth_token_expires",challengeTokenName:"artibot_challenge_token"},google:{clientId:"328874677136-7j4qbjp5gpt7uot8979enrjpctkbgdvh.apps.googleusercontent.com"}}},30:function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),a=r(4),i=r(5);function c(e,t){var r=new window.XMLHttpRequest;r.open("GET",e,!0),r.onreadystatechange=function(){if(4===r.readyState){var e=function(e){var t;try{t=JSON.parse(e.responseText)}catch(r){t=e.responseText}return t}(r);if(r.status>=i.OK&&r.status<i.MULTIPLE_CHOICES)t(null,e);else{var n=new Error(e);t(n)}}},r.send()}var u=0,s={};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),e}var T=function(e){var t=e&&e.message?e.message:"Error loading ArtiBot";console.error(t)},b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(this,e),this.args=Object.keys(t).reduce((function(e,r){return{i:l(l({},e),{},{botId:t[r]}),p:l(l({},e),{},{preview:t[r]}),e:l(l({},e),{},{expanded:t[r]}),em:l(l({},e),{},{embedOptions:t[r]})}[r]||e}),{}),"embedOptions"in this.args&&(this.args.isEmbed=!0,this.args.embedOptions=Object.keys(this.args.embedOptions).reduce((function(e,r){return{id:l(l({},e),{},{id:t.em[r]}),w:l(l({},e),{},{width:t.em[r]}),h:l(l({},e),{},{height:t.em[r]}),sh:l(l({},e),{},{showHeader:t.em[r]}),tb:l(l({},e),{},{transparentBackground:t.em[r]})}[r]||e}),{}));try{window.localStorage.setItem("artibot_local_storage_access",!0)}catch(e){var r="Local storage access is not allowed. This is a problem with some browsers running private windows.";throw new Error(r)}(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?this.init():document.addEventListener("DOMContentLoaded",this.init.bind(this))}return f(e,[{key:"versionUrl",get:function(){var e=Object(a.b)().artibot_test_mode;return"".concat(o.a.apiUrl,"/api/bots/").concat(this.args.botId,"/version").concat(e?"?mode=".concat(e):"")}}]),f(e,[{key:"init",value:function(){var e=this;return c(this.versionUrl,(function(t,r){if(t)return T(t);if(e.args=l(l({},e.args),r),!e.args.preview&&!e.args.load)throw new Error("ArtiBot was told not to load.");return function(e,t,r){var n=t.callbackName||"_WidgetCB_".concat(u);u+=1,window[n]=function(e){return r(null,e)};var o=!1,a=document.createElement("script");function i(){o||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(o=!0,clearTimeout(s["JSONPTimeout".concat(n)]),delete window[n])}a.async=!0,a.type="text/javascript",a.setAttribute("data-cfasync","false"),a.onload=i,a.onreadystatechange=i;var c="".concat(e,"/").concat(n);c.indexOf("?")<0&&(c+="?_=_"),t.data&&(c+=Object.keys(t.data).reduce((function(e,r){return"&".concat(r,"=").concat(t.data[r])}),"")),window.location.search.indexOf("forcemobile")>=0&&(c+="&forceMobile=true"),a.src=c,document.getElementsByTagName("head")[0].appendChild(a),s["JSONPTimeout".concat(n)]=setTimeout((function(){return r(new Error("Widget failed to download"))}),2e4)}("".concat(o.a.cdnUrl,"/manifest"),{callbackName:"_ArtiBotLauncherCB_Manifest"},(function(t,r){var n=r.assets;return t?T(t):function(e,t){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.src=e;var n=!1;function o(){n||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(n=!0,t())}r.onload=o,r.onreadystatechange=o,r.onerror=function(){return t(new Error)},document.body.appendChild(r)}("".concat(o.a.cdnUrl).concat(n["launcher.js"]),(function(t){if(t)return T(t);window._artibotWidget&&delete window._artibotWidget;var r=window._artibotLauncherInitializer;return r?r.start(e.args):(console.error("ArtiBot failed to load"),null)}))}))}))}}]),e}();window.ArtiBot=b},4:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return(e||window.location.search).replace(/(^\?)/,"").split("&").map((function(e){return e.split("=")})).filter((function(e){return!!e[0]})).reduce((function(e,t){var r=t[1],n=parseFloat(r);return null==r&&(r=""),"true"===r.toLowerCase()?r=!0:"false"===r.toLowerCase()?r=!1:/^[0-9]$/gi.test(r)&&!Number.isNaN(n)?r=n%1==0?parseInt(r,10):n:r&&(r=decodeURIComponent(r)),o(o({},e),{},{[t[0]]:r})}),{})}function c(e){return Object.keys(e).map((function(t){return[t,void 0===e[t]||null===e[t]?"":e[t]].join("=")})).join("&")}r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}))},5:function(e,t){var r={};r[t.ACCEPTED=202]="Accepted",r[t.BAD_GATEWAY=502]="Bad Gateway",r[t.BAD_REQUEST=400]="Bad Request",r[t.CONFLICT=409]="Conflict",r[t.CONTINUE=100]="Continue",r[t.CREATED=201]="Created",r[t.EXPECTATION_FAILED=417]="Expectation Failed",r[t.FAILED_DEPENDENCY=424]="Failed Dependency",r[t.FORBIDDEN=403]="Forbidden",r[t.GATEWAY_TIMEOUT=504]="Gateway Timeout",r[t.GONE=410]="Gone",r[t.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP Version Not Supported",r[t.IM_A_TEAPOT=418]="I'm a teapot",r[t.INSUFFICIENT_SPACE_ON_RESOURCE=419]="Insufficient Space on Resource",r[t.INSUFFICIENT_STORAGE=507]="Insufficient Storage",r[t.INTERNAL_SERVER_ERROR=500]="Server Error",r[t.LENGTH_REQUIRED=411]="Length Required",r[t.LOCKED=423]="Locked",r[t.METHOD_FAILURE=420]="Method Failure",r[t.METHOD_NOT_ALLOWED=405]="Method Not Allowed",r[t.MOVED_PERMANENTLY=301]="Moved Permanently",r[t.MOVED_TEMPORARILY=302]="Moved Temporarily",r[t.MULTI_STATUS=207]="Multi-Status",r[t.MULTIPLE_CHOICES=300]="Multiple Choices",r[t.NETWORK_AUTHENTICATION_REQUIRED=511]="Network Authentication Required",r[t.NO_CONTENT=204]="No Content",r[t.NON_AUTHORITATIVE_INFORMATION=203]="Non Authoritative Information",r[t.NOT_ACCEPTABLE=406]="Not Acceptable",r[t.NOT_FOUND=404]="Not Found",r[t.NOT_IMPLEMENTED=501]="Not Implemented",r[t.NOT_MODIFIED=304]="Not Modified",r[t.OK=200]="OK",r[t.PARTIAL_CONTENT=206]="Partial Content",r[t.PAYMENT_REQUIRED=402]="Payment Required",r[t.PERMANENT_REDIRECT=308]="Permanent Redirect",r[t.PRECONDITION_FAILED=412]="Precondition Failed",r[t.PRECONDITION_REQUIRED=428]="Precondition Required",r[t.PROCESSING=102]="Processing",r[t.PROXY_AUTHENTICATION_REQUIRED=407]="Proxy Authentication Required",r[t.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="Request Header Fields Too Large",r[t.REQUEST_TIMEOUT=408]="Request Timeout",r[t.REQUEST_TOO_LONG=413]="Request Entity Too Large",r[t.REQUEST_URI_TOO_LONG=414]="Request-URI Too Long",r[t.REQUESTED_RANGE_NOT_SATISFIABLE=416]="Requested Range Not Satisfiable",r[t.RESET_CONTENT=205]="Reset Content",r[t.SEE_OTHER=303]="See Other",r[t.SERVICE_UNAVAILABLE=503]="Service Unavailable",r[t.SWITCHING_PROTOCOLS=101]="Switching Protocols",r[t.TEMPORARY_REDIRECT=307]="Temporary Redirect",r[t.TOO_MANY_REQUESTS=429]="Too Many Requests",r[t.UNAUTHORIZED=401]="Unauthorized",r[t.UNPROCESSABLE_ENTITY=422]="Unprocessable Entity",r[t.UNSUPPORTED_MEDIA_TYPE=415]="Unsupported Media Type",r[t.USE_PROXY=305]="Use Proxy",t.getStatusText=function(e){if(r.hasOwnProperty(e))return r[e];throw new Error("Status code does not exist: "+e)},t.getStatusCode=function(e){for(key in r)if(r[key]===e)return parseInt(key,10);throw new Error("Reason phrase does not exist: "+e)}}});