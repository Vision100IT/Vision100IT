webpackJsonp([4],{634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n.n(r),a=n(663),i=n.n(a),l=n(852),s=n(853),u=n(698),c=n(651),d=n(658),f=n(872),v=n(871),p=n(265),m=n(929),_=n.n(m),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),h={get context(){return n(850)},get posts(){return this.context.keys().sort().reverse()},post:function(e){return this.context(this.posts.find(function(t){return t===e}))},postId:function(e){var t=this.posts[e].split(".");return t.shift(),t.pop(),t.join(".")},page:function(e){var t=this,n=e.trim,r=void 0===n?0:n,o=e.page,a=void 0===o?0:o,l=e.size,s=void 0===l?0:l,u=a*s,c=u+s;return this.posts.slice(u,c).map(this.context).map(i.a).map(function(e,n){var o=t.postId([n+u]),a=r?e.body.slice(0,r)+"... [View more](/blog"+o+")":e.body;return Object.assign(e,{url:"/blog"+o,body:a,key:n})})}},b=y(u.a,{mini:!0}),P=y(s.a,{name:"Elvanto",background:"#323232",image:"./elvanto.png",imagePadding:"10px",link:"/elvanto"},void 0,"Have you got started with Elvanto yet?"),k=y(s.a,{name:"Registration",background:"white",image:"./soul.jpeg",imagePadding:"10px",link:"/registration"},void 0,"Have a church event soon? Check out the V100IT registration module"),w=y(s.a,{name:"Podcasting",background:"#171717",image:"./podcasting.png",imagePadding:"75px",link:"/podcasting"},void 0,"Get on board with podcasting your sermons"),N=y(s.a,{name:"Designers",background:"white",image:"./close-image.jpeg"},void 0,"Thinking of a refresh? Read our recommendations - ",y("em",{},void 0,"coming soon...")),j=function(e){var t=Number(e.match.params.page)||0,n=t+1,r=t-1,a=h.page({trim:500,page:t,size:5}),i=void 0,s=void 0;5===a.length&&(i="/client/"+n),0===r&&(s="/client"),r>0&&(s="/client/"+r);var u=a.shift();return y(c.a,{headerSize:"mini"},void 0,b,y("main",{role:"main"},void 0,y("div",{className:"alerts hidden"},void 0,p.a.banners.map(function(e,t){return y(l.a,{type:e.type},t,y("p",{},void 0,e.text))})),y("div",{className:_.a.cards},void 0,P,k,w,N),y("div",{className:"client-wrapper"},void 0,u&&y("section",{className:"pinned-post"},void 0,o.a.createElement(f.a,g({url:u.url},u.attributes),y(d.a,{},void 0,u.body))),y("section",{className:"posts"},void 0,a.map(function(e,t){return o.a.createElement(f.a,g({key:t,url:e.url},e.attributes),y(d.a,{},void 0,e.body))})),y(v.a,{previous:i,next:s}))))};t.default=j},852:function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(904)),a=n.n(o),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),l=function(e){return i("div",{className:a.a[e.type]},void 0,e.children)};t.a=l},853:function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(63)),a=n(906),i=n.n(a),l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),s=n(664),u=function(e){var t=e.background,n=e.imagePadding,r=e.link,a=e.image,u=e.name,c=e.children,d={backgroundColor:t},f={padding:n};return l("div",{className:i.a.card,style:d},void 0,l(o.d,{to:r||""},void 0,l("h2",{hidden:!0},void 0,u),l("img",{src:s(a),style:f}),l("p",{},void 0,c)))};u.defaultProps={link:""},t.a=u},871:function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(63)),a=n(876),i=n.n(a),l=n(877),s=n.n(l),u=n(919),c=n.n(u),d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),f=d(i.a,{}),v=d(s.a,{}),p=function(e){var t=e.previous,n=e.next;return d("nav",{role:"pagination",className:c.a.pagination},void 0,n&&d(o.d,{to:n},void 0,f," Next"),t&&d(o.d,{to:t},void 0,"Previous ",v))};t.a=p},872:function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(63)),a=n(650),i=n.n(a),l=n(921),s=n.n(l),u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),c=n(664),d=function(e){return u("section",{className:s.a.post},void 0,u("header",{className:s.a.header},void 0,u("h2",{className:s.a.title},void 0,u(o.d,{to:e.url},void 0,e.title)),u("p",{className:s.a.meta},void 0,u("span",{className:s.a.author},void 0,"By ",e.author.name),u("span",{className:s.a.date},void 0,i()(e.date).format("Do MMMM, YYYY")))),u("div",{className:s.a.body},void 0,u("div",{className:s.a.content},void 0,e.image&&u("img",{src:c(e.image.href),className:e.image.size,alt:e.image.alt}),e.children)))};t.a=d},876:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=r(a),l=n(169),s=r(l),u=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m26.5 12.1q0 0.3-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.2 0.2 0.5z"})))};t.default=u},877:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),i=r(a),l=n(169),s=r(l),u=function(e){return i.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),i.default.createElement("g",null,i.default.createElement("path",{d:"m26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z"})))};t.default=u},904:function(e,t){e.exports={warning:"Alert__warning___1bjrH",announcement:"Alert__announcement___2rbBL"}},906:function(e,t){e.exports={card:"Card__card___1WSln"}},919:function(e,t){e.exports={pagination:"Pagination__pagination___2HSx8"}},921:function(e,t){e.exports={post:"Post__post___OQe3l",meta:"Post__meta___-ArPX",author:"Post__author___8optR",date:"Post__date___3Kaol",category:"Post__category___1Mt1Y",content:"Post__content___1scm5",wide:"Post__wide___3Jqar",regular:"Post__regular___38Mec"}},929:function(e,t){e.exports={cards:"client__cards___JknuX"}}});