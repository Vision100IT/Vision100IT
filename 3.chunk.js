webpackJsonp([3],{1019:function(e,t,r){"use strict";var o=r(1021),n=r(1020),a=r(830);e.exports={formats:a,parse:n,stringify:o}},1020:function(e,t,r){"use strict";var o=r(831),n=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},o=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),a=0;a<o.length;++a){var i,l,s=o[a],c=s.indexOf("]=")===-1?s.indexOf("="):s.indexOf("]=")+1;c===-1?(i=t.decoder(s),l=t.strictNullHandling?null:""):(i=t.decoder(s.slice(0,c)),l=t.decoder(s.slice(c+1))),n.call(r,i)?r[i]=[].concat(r[i]).concat(l):r[i]=l}return r},l=function(e,t,r){if(!e.length)return t;var o,n=e.shift();if("[]"===n)o=[],o=o.concat(l(e,t,r));else{o=r.plainObjects?Object.create(null):{};var a="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,i=parseInt(a,10);!isNaN(i)&&n!==a&&String(i)===a&&i>=0&&r.parseArrays&&i<=r.arrayLimit?(o=[],o[i]=l(e,t,r)):o[a]=l(e,t,r)}return o},s=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,s=a.exec(o),c=s?o.slice(0,s.index):o,u=[];if(c){if(!r.plainObjects&&n.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var d=0;null!==(s=i.exec(o))&&d<r.depth;){if(d+=1,!r.plainObjects&&n.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(s[1])}return s&&u.push("["+o.slice(s.index)+"]"),l(u,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=r.parseArrays!==!1,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof e?i(e,r):e,l=r.plainObjects?Object.create(null):{},c=Object.keys(n),u=0;u<c.length;++u){var d=c[u],f=s(d,n[d],r);l=o.merge(l,f,r)}return o.compact(l)}},1021:function(e,t,r){"use strict";var o=r(831),n=r(830),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,n,a,i,l,s,c,u,d,f,p){var v=t;if("function"==typeof s)v=s(r,v);else if(v instanceof Date)v=d(v);else if(null===v){if(a)return l&&!p?l(r):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||o.isBuffer(v)){if(l){return[f(p?r:l(r))+"="+f(l(v))]}return[f(r)+"="+f(String(v))]}var h=[];if(void 0===v)return h;var m;if(Array.isArray(s))m=s;else{var y=Object.keys(v);m=c?y.sort(c):y}for(var q=0;q<m.length;++q){var b=m[q];i&&null===v[b]||(h=Array.isArray(v)?h.concat(e(v[b],n(r,b),n,a,i,l,s,c,u,d,f,p)):h.concat(e(v[b],r+(u?"."+b:"["+b+"]"),n,a,i,l,s,c,u,d,f,p)))}return h};e.exports=function(e,t){var r=e,o=t||{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var i=void 0===o.delimiter?l.delimiter:o.delimiter,c="boolean"==typeof o.strictNullHandling?o.strictNullHandling:l.strictNullHandling,u="boolean"==typeof o.skipNulls?o.skipNulls:l.skipNulls,d="boolean"==typeof o.encode?o.encode:l.encode,f="function"==typeof o.encoder?o.encoder:l.encoder,p="function"==typeof o.sort?o.sort:null,v=void 0!==o.allowDots&&o.allowDots,h="function"==typeof o.serializeDate?o.serializeDate:l.serializeDate,m="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:l.encodeValuesOnly;if(void 0===o.format)o.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,o.format))throw new TypeError("Unknown format option provided.");var y,q,b=n.formatters[o.format];"function"==typeof o.filter?(q=o.filter,r=q("",r)):Array.isArray(o.filter)&&(q=o.filter,y=q);var g=[];if("object"!=typeof r||null===r)return"";var O;O=o.arrayFormat in a?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var w=a[O];y||(y=Object.keys(r)),p&&y.sort(p);for(var _=0;_<y.length;++_){var j=y[_];u&&null===r[j]||(g=g.concat(s(r[j],j,w,c,u,d?f:null,q,p,v,h,b,m)))}return g.join(i)}},638:function(e,t,r){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(2),l=r.n(i),s=r(660),c=r.n(s),u=r(63),d=r(1019),f=(r.n(d),r(879)),p=r.n(f),v=r(882),h=r.n(v),m=r(887),y=r.n(m),q=r(880),b=r.n(q),g=r(891),O=r.n(g),w=r(886),_=r.n(w),j=r(685),P=r(687),k=r(686),A=r(651),E=r(688),N=r(931),S=r.n(N),C=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var a=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&a)for(var l in a)void 0===r[l]&&(r[l]=a[l]);else r||(r=a||{});if(1===i)r.children=n;else if(i>1){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+3];r.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),R=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),x=C("h1",{},void 0,"Help + how to"),z=C("p",{},void 0,"Vision 100 IT are constantly updating and improving our documentation, and adding new documentation as new tools and procedures arise. If you notice anything is incomplete, or would like documentation on a particular topic, ",C(u.d,{to:"/feature"},void 0,"let us know!")),T=C("h2",{},void 0,"Vision 100 IT documentation"),I=C("ul",{},void 0,C("li",{},void 0,C(u.d,{to:"/documentation/suite"},void 0,"Suite of Tools")),C("li",{},void 0,"Client Charter Agreement - ",C("i",{},void 0,"coming soon")),C("li",{},void 0,C(u.d,{to:"/documentation/privacy"},void 0,"Privacy Policy")),C("li",{},void 0,C(u.d,{to:"/documentation/development"},void 0,"Website Development project outline"))),D=C("ul",{},void 0,C("li",{},void 0,C(u.d,{to:"/documentation/mailinglists"},void 0,"Mailing lists")),C("li",{},void 0,"Making the most of your new website - ",C("i",{},void 0,"coming soon")),C("li",{},void 0,C(u.d,{to:"/elvanto"},void 0,"Elvanto")),C("li",{},void 0,C(u.d,{to:"/sparkleshare"},void 0,"Sparkleshare")),C("li",{},void 0,C(u.d,{to:"/podcasting"},void 0,"Podcasting")),C("li",{},void 0,C(u.d,{to:"/registration"},void 0,"Event Registration tool"))),M=C("h2",{id:"maintenance"},void 0,"IT maintenance"),L=C("ul",{},void 0,C("li",{},void 0,"Website refresh recommendations - ",C("i",{},void 0,"coming soon")),C("li",{},void 0,C(u.d,{to:"/documentation/sparkleshare"},void 0,"Administrating Sparkleshare")),C("li",{},void 0,C(u.d,{to:"/documentation/checklist"},void 0,"Checklist for on-boarding and finishing with staff members"))),H=C("ul",{},void 0,C("li",{},void 0,C(u.d,{to:"/documentation/keepingkidssafe"},void 0,"Keeping Kids Safe on the Internet"))),B=C("h2",{},void 0,"Additional resources"),F=C("ul",{},void 0,C("li",{},void 0,C("a",{href:"https://www.elvanto.com/"},void 0,"Elvanto")),C("li",{},void 0,C("a",{href:"http://sparkleshare.org/"},void 0,"Sparkleshare")),C("li",{},void 0,C("a",{href:"https://www.drupal.org/"},void 0,"Drupal")),C("li",{},void 0,C("a",{href:"http://www.virtualchurchassist.com/"},void 0,"Virtual Church Assist"))),V=C("ul",{},void 0,C("li",{},void 0,C("a",{href:"https://www.youtube.com/watch?v=5FVw2A0TylA"},void 0,"Elvanto overview"))),W=function(e){function t(e){o(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),i=r.i(d.parse)(e.location.search.substr(1)),l=i.search;return a.state={searchResults:[],searchTerm:l},a.handleSearchSubmit=a.handleSearchSubmit.bind(a),a.handleCloseResult=a.handleCloseResult.bind(a),a.shouldComponentUpdate=c.a.shouldComponentUpdate.bind(a),a}return a(t,e),R(t,[{key:"shouldComponentUpdate",value:function(){}},{key:"componentDidMount",value:function(){this.state.searchTerm&&this.handleSearchSubmit(this.state.searchTerm)}},{key:"handleSearchSubmit",value:function(e){var t=this;this.props.searchIndex(e).then(function(r){return t.setState({searchTerm:e,searchResults:r})})}},{key:"handleCloseResult",value:function(e){e.preventDefault(),this.setState({searchResults:[]})}},{key:"render",value:function(){var e=void 0,t=this.state.searchResults;return t.length>0&&(e=C(k.a,{onResultClick:this.handleCloseModal,searchResults:t})),C(A.a,{},void 0,C("div",{className:S.a.overlay},void 0,C("div",{className:"site-wrapper site-wrapper-padding"},void 0,x,C("div",{className:S.a.searchWrapper},void 0,z,C(E.a,{size:"large",buttonClass:"btn-primary",placeholder:"Search all documents on V100IT...",onSearchSubmit:this.handleSearchSubmit}),C(P.a,{titleClass:S.a.title,containerClass:S.a.searchResults,onCloseResults:this.handleCloseResult,searchResults:this.state.searchResults},void 0,e)),T,C("div",{className:S.a.listWrapper},void 0,C("div",{className:S.a.listPanel},void 0,C("h3",{},void 0,C(p.a,{className:""+S.a.docIcons})," Getting started with Vision 100 IT"),I),C("div",{className:S.a.listPanel},void 0,C("h3",{},void 0,C(h.a,{className:""+S.a.docIcons})," Our Tools"),D)),M,C("div",{className:S.a.listWrapper},void 0,C("div",{className:S.a.listPanel},void 0,C("h3",{},void 0,C(y.a,{className:""+S.a.docIcons})," Keeping your systems up to date"),L),C("div",{className:S.a.listPanel},void 0,C("h3",{},void 0,C(_.a,{className:""+S.a.docIcons})," Articles + training night materials"),H)),B,C("div",{className:S.a.listWrapper},void 0,C("div",{className:S.a.listPanel},void 0,C("h3",{},void 0,C(b.a,{className:""+S.a.docIcons})," Recommended external links"),F),C("div",{className:S.a.listPanel},void 0,C("h3",{},void 0,C(O.a,{className:""+S.a.docIcons})," Recommended Videos"),V)))))}}]),t}(l.a.Component);t.default=r.i(j.a)(W)},830:function(e,t,r){"use strict";var o=String.prototype.replace;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,/%20/g,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},831:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var a=e;return Array.isArray(e)&&!Array.isArray(r)&&(a=t.arrayToObject(e,n)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,a){o.call(e,a)?e[a]&&"object"==typeof e[a]?e[a]=t.merge(e[a],r,n):e.push(r):e[a]=r}),e):Object.keys(r).reduce(function(e,o){var a=r[o];return Object.prototype.hasOwnProperty.call(e,o)?e[o]=t.merge(e[o],a,n):e[o]=a,e},a)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var a=t.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(o):a<128?r+=n[a]:a<2048?r+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?r+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(o)),r+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return r},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var o=r||[],n=o.indexOf(e);if(n!==-1)return o[n];if(o.push(e),Array.isArray(e)){for(var a=[],i=0;i<e.length;++i)e[i]&&"object"==typeof e[i]?a.push(t.compact(e[i],o)):void 0!==e[i]&&a.push(e[i]);return a}return Object.keys(e).forEach(function(r){e[r]=t.compact(e[r],o)}),e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},879:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(2),i=o(a),l=r(169),s=o(l),c=function(e){return i.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m38.1 10.7q0.9 1.2 0.4 2.9l-6.1 20.2q-0.5 1.4-1.8 2.4t-2.7 0.9h-20.6q-1.7 0-3.3-1.2t-2.2-2.9q-0.6-1.5-0.1-2.8 0-0.1 0.1-0.6t0.1-0.9q0-0.1-0.1-0.4t-0.1-0.5q0.1-0.2 0.2-0.4t0.4-0.6 0.4-0.5q0.5-0.8 1-2t0.6-2.1q0.1-0.2 0-0.6t0-0.7q0.1-0.2 0.4-0.6t0.4-0.5q0.5-0.8 0.9-2.1t0.6-2q0-0.2-0.1-0.7t0-0.6q0.1-0.3 0.5-0.7t0.5-0.5q0.4-0.6 1-1.9t0.6-2.1q0-0.2-0.1-0.6t0-0.6q0-0.2 0.2-0.4t0.4-0.5 0.4-0.5q0.1-0.2 0.3-0.6t0.4-0.8 0.3-0.8 0.5-0.7 0.5-0.6 0.9-0.2 1 0.1l0 0.1q0.8-0.2 1.1-0.2h17q1.7 0 2.6 1.2t0.4 2.9l-6.2 20.2q-0.8 2.7-1.6 3.5t-2.8 0.7h-19.4q-0.6 0-0.9 0.4-0.2 0.3 0 0.9 0.5 1.6 3.2 1.6h20.6q0.7 0 1.3-0.4t0.8-0.9l6.7-22q0.1-0.5 0.1-1.3 0.8 0.3 1.3 1z m-23.8 0q-0.1 0.3 0.1 0.5t0.4 0.2h13.6q0.3 0 0.6-0.2t0.3-0.5l0.5-1.4q0.1-0.3 0-0.5t-0.5-0.2h-13.6q-0.2 0-0.5 0.2t-0.4 0.5z m-1.8 5.7q-0.1 0.3 0 0.5t0.5 0.2h13.5q0.3 0 0.6-0.2t0.4-0.5l0.5-1.4q0-0.3-0.1-0.5t-0.4-0.2h-13.6q-0.3 0-0.6 0.2t-0.4 0.5z"})))};t.default=c},880:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(2),i=o(a),l=r(169),s=o(l),c=function(e){return i.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m34 27.1q0-0.8-0.6-1.5l-4.7-4.6q-0.6-0.6-1.5-0.6-0.9 0-1.6 0.7 0.1 0 0.4 0.4t0.5 0.5 0.3 0.4 0.3 0.6 0.1 0.6q0 0.9-0.6 1.5t-1.5 0.6q-0.4 0-0.6-0.1t-0.6-0.3-0.4-0.3-0.5-0.5-0.4-0.4q-0.8 0.7-0.8 1.6 0 0.9 0.7 1.6l4.6 4.6q0.6 0.6 1.5 0.6 0.9 0 1.5-0.6l3.3-3.3q0.6-0.6 0.6-1.5z m-15.7-15.7q0-0.9-0.6-1.5l-4.6-4.6q-0.6-0.7-1.5-0.7-0.9 0-1.6 0.6l-3.2 3.3q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.5l4.6 4.7q0.6 0.6 1.5 0.6 1 0 1.6-0.7 0-0.1-0.4-0.4t-0.5-0.5-0.3-0.4-0.3-0.6-0.1-0.6q0-0.9 0.7-1.5t1.5-0.7q0.3 0 0.6 0.1t0.6 0.3 0.4 0.3 0.5 0.5 0.4 0.4q0.7-0.7 0.7-1.6z m20 15.7q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9-2.7 0-4.6-1.9l-4.6-4.6q-1.8-1.9-1.8-4.6 0-2.7 1.9-4.6l-1.9-2q-1.9 2-4.7 2-2.7 0-4.5-1.9l-4.7-4.6q-1.8-1.9-1.8-4.6t1.9-4.5l3.2-3.3q1.9-1.8 4.6-1.8 2.7 0 4.5 1.9l4.6 4.6q1.9 1.8 1.9 4.5 0 2.8-2 4.7l2 1.9q1.9-1.9 4.6-1.9 2.7 0 4.6 1.8l4.6 4.7q1.9 1.9 1.9 4.5z"})))};t.default=c},882:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(2),i=o(a),l=r(169),s=o(l),c=function(e){return i.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m18.6 20q0-2.2-1.6-3.8t-3.7-1.5-3.8 1.5-1.5 3.8 1.5 3.8 3.8 1.5 3.7-1.5 1.6-3.8z m16 10.6q0-1-0.8-1.8t-1.9-0.8-1.9 0.8-0.8 1.8q0 1.1 0.8 1.9t1.9 0.8 1.9-0.8 0.8-1.9z m0-21.2q0-1.1-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9q0 1.1 0.8 1.8t1.9 0.8 1.9-0.8 0.8-1.8z m-8 8.7v3.9q0 0.2-0.2 0.4t-0.3 0.2l-3.2 0.5q-0.2 0.7-0.7 1.6 0.7 0.9 1.9 2.3 0.1 0.2 0.1 0.5 0 0.2-0.1 0.3-0.5 0.7-1.7 1.9t-1.7 1.2q-0.2 0-0.4-0.1l-2.4-1.9q-0.7 0.4-1.6 0.7-0.2 2.2-0.5 3.2-0.1 0.5-0.6 0.5h-3.8q-0.3 0-0.5-0.2t-0.2-0.3l-0.4-3.2q-0.7-0.2-1.6-0.7l-2.4 1.9q-0.2 0.1-0.5 0.1-0.2 0-0.4-0.1-3-2.8-3-3.3 0-0.2 0.2-0.4 0.2-0.3 0.8-1.1t1-1.3q-0.5-0.9-0.7-1.7l-3.2-0.5q-0.2 0-0.4-0.2t-0.1-0.4v-3.9q0-0.2 0.1-0.4t0.4-0.2l3.2-0.5q0.2-0.7 0.7-1.6-0.7-0.9-1.9-2.3-0.2-0.3-0.2-0.5 0-0.2 0.2-0.4 0.4-0.6 1.7-1.8t1.6-1.2q0.3 0 0.5 0.1l2.4 1.9q0.7-0.4 1.6-0.7 0.2-2.2 0.4-3.2 0.2-0.5 0.7-0.5h3.8q0.2 0 0.4 0.2t0.2 0.3l0.5 3.2q0.7 0.2 1.6 0.7l2.4-1.9q0.2-0.1 0.4-0.1 0.3 0 0.5 0.1 3 2.8 3 3.3 0 0.2-0.2 0.4-0.2 0.4-0.8 1.2t-1 1.2q0.5 1 0.7 1.7l3.2 0.5q0.2 0 0.3 0.2t0.2 0.4z m13.3 11.1v2.9q0 0.3-3.1 0.6-0.3 0.6-0.6 1.1 1 2.4 1 2.9 0 0.1-0.1 0.1-2.5 1.5-2.5 1.5-0.2 0-1-1t-1.1-1.4q-0.4 0-0.6 0t-0.6 0q-0.3 0.4-1.1 1.4t-1 1q0 0-2.5-1.5-0.1 0-0.1-0.1 0-0.5 1-2.9-0.3-0.5-0.6-1.1-3.1-0.3-3.1-0.6v-2.9q0-0.4 3.1-0.7 0.3-0.6 0.6-1-1-2.4-1-2.9 0-0.1 0.1-0.2 0 0 0.7-0.4t1.2-0.7 0.6-0.3q0.2 0 1 1t1.1 1.4q0.4-0.1 0.6-0.1t0.6 0.1q1.1-1.5 1.9-2.4l0.2 0q0 0 2.5 1.4 0.1 0.1 0.1 0.2 0 0.5-1.1 2.9 0.4 0.4 0.7 1 3.1 0.3 3.1 0.7z m0-21.3v2.9q0 0.4-3.1 0.7-0.3 0.5-0.6 1 1 2.4 1 2.9 0 0.1-0.1 0.2-2.5 1.4-2.5 1.4-0.2 0-1-0.9t-1.1-1.5q-0.4 0.1-0.6 0.1t-0.6-0.1q-0.3 0.5-1.1 1.5t-1 0.9q0 0-2.5-1.4-0.1-0.1-0.1-0.2 0-0.5 1-2.9-0.3-0.5-0.6-1-3.1-0.3-3.1-0.7v-2.9q0-0.3 3.1-0.6 0.3-0.6 0.6-1.1-1-2.4-1-2.9 0-0.1 0.1-0.1 0-0.1 0.7-0.4t1.2-0.7 0.6-0.4q0.2 0 1 1t1.1 1.4q0.4 0 0.6 0t0.6 0q1.1-1.5 1.9-2.3l0.2-0.1q0 0 2.5 1.5 0.1 0 0.1 0.1 0 0.5-1.1 2.9 0.4 0.5 0.7 1.1 3.1 0.3 3.1 0.6z"})))};t.default=c},886:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(2),i=o(a),l=r(169),s=o(l),c=function(e){return i.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m24.9 12.9q0 0.2-0.2 0.5t-0.5 0.2-0.5-0.2-0.2-0.5q0-1.1-1.2-1.6t-2.4-0.6q-0.3 0-0.5-0.2t-0.2-0.5 0.2-0.5 0.5-0.2q1.1 0 2.2 0.3t2 1.2 0.8 2.1z m3.6 0q0-1.6-0.8-3t-2-2.3-2.7-1.4-3.1-0.5-3 0.5-2.8 1.4-2 2.3-0.7 3q0 2.2 1.5 4 0.2 0.2 0.7 0.7t0.6 0.7q2.9 3.5 3.2 6.7h5.1q0.3-3.2 3.1-6.6 0.2-0.3 0.7-0.8t0.7-0.7q1.5-1.8 1.5-4z m2.9 0q0 3.4-2.3 5.9-1 1.1-1.7 2t-1.3 2.1-0.8 2.4q1.1 0.6 1.1 1.8 0 0.9-0.6 1.5 0.6 0.6 0.6 1.4 0 1.2-1 1.8 0.2 0.5 0.2 1.1 0 1-0.7 1.5t-1.7 0.6q-0.4 1-1.3 1.6t-2 0.5-1.9-0.5-1.4-1.6q-1 0-1.7-0.6t-0.7-1.5q0-0.6 0.3-1.1-1-0.6-1-1.8 0-0.8 0.6-1.4-0.6-0.6-0.6-1.5 0-1.2 1.1-1.8-0.1-1.1-0.8-2.4t-1.3-2.1-1.7-2q-2.3-2.5-2.3-5.9 0-2.3 1-4.2t2.6-3.1 3.7-2 4.1-0.7 4.2 0.7 3.7 2 2.6 3.1 1 4.2z"})))};t.default=c},887:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(2),i=o(a),l=r(169),s=o(l),c=function(e){return i.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m14.1 17.1h11.5v-4.2q0-2.4-1.7-4.1t-4-1.7-4.1 1.7-1.7 4.1v4.2z m18.6 2.2v12.8q0 0.9-0.6 1.6t-1.5 0.6h-21.5q-0.8 0-1.5-0.6t-0.6-1.6v-12.8q0-0.9 0.6-1.5t1.5-0.7h0.8v-4.2q0-4.1 2.9-7.1t7.1-2.9 7 2.9 3 7.1v4.2h0.7q0.9 0 1.5 0.7t0.6 1.5z"})))};t.default=c},891:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a=r(2),i=o(a),l=r(169),s=o(l),c=function(e){return i.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m40 7.9v24.2q0 1-0.9 1.4-0.3 0.1-0.5 0.1-0.6 0-1-0.5l-9-8.9v3.7q0 2.6-1.9 4.5t-4.6 1.9h-15.7q-2.6 0-4.5-1.9t-1.9-4.5v-15.8q0-2.6 1.9-4.5t4.5-1.9h15.7q2.7 0 4.6 1.9t1.9 4.5v3.7l9-8.9q0.4-0.5 1-0.5 0.2 0 0.5 0.1 0.9 0.4 0.9 1.4z"})))};t.default=c},931:function(e,t){e.exports={searchWrapper:"documentation__searchWrapper___13UHT",listWrapper:"documentation__listWrapper___Waij6",listPanel:"documentation__listPanel___3FUdT",docIcons:"documentation__docIcons___15ynP",overlay:"documentation__overlay___2CO2f",title:"documentation__title___1ybJg",searchResults:"documentation__searchResults___1BIr0"}}});