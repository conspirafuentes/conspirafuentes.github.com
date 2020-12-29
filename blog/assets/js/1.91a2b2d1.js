(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{396:function(t,n,e){t.exports=function(){"use strict";return function(t,n,e){var r=n.prototype;e.utc=function(t){return new n({date:t,utc:!0,args:arguments})},r.utc=function(t){var n=e(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),"minute"):n},r.local=function(){return e(this.toDate(),{locale:this.$L,utc:!1})};var i=r.parse;r.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),i.call(this,t)};var o=r.init;r.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else o.call(this)};var s=r.utcOffset;r.utcOffset=function(t,n){var e=this.$utils().u;if(e(t))return this.$u?0:e(this.$offset)?s.call(this):this.$offset;var r=Math.abs(t)<=16?60*t:t,i=this;if(n)return i.$offset=r,i.$u=0===t,i;if(0!==t){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(i=this.local().add(r+o,"minute")).$offset=r,i.$x.$localOffset=o}else i=this.utc();return i};var u=r.format;r.format=function(t){var n=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,n)},r.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},r.isUTC=function(){return!!this.$u},r.toISOString=function(){return this.toDate().toISOString()},r.toString=function(){return this.toDate().toUTCString()};var a=r.toDate;r.toDate=function(t){return"s"===t&&this.$offset?e(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():a.call(this)};var c=r.diff;r.diff=function(t,n,r){if(t&&this.$u===t.$u)return c.call(this,t,n,r);var i=this.local(),o=e(t).local();return c.call(i,o,n,r)}}}()},398:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return u}));var r=e(408),i=e.n(r),o={name:"ClockIcon",functional:!0,render:function(t,n){return t("svg",i()([{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},class:"feather feather-clock"},n.data]),[t("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),t("polyline",{attrs:{points:"12 6 12 12 16 14"}})])}},s={name:"NavigationIcon",functional:!0,render:function(t,n){return t("svg",i()([{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},class:"feather feather-navigation"},n.data]),[t("polygon",{attrs:{points:"3 11 22 2 13 21 11 13 3 11"}})])}},u={name:"TagIcon",functional:!0,render:function(t,n){return t("svg",i()([{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},class:"feather feather-tag"},n.data]),[t("path",{attrs:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}}),t("line",{attrs:{x1:"7",y1:"7",x2:"7",y2:"7"}})])}}},400:function(t,n,e){},401:function(t,n,e){},406:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return p}));e(14);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(3).then(e.t.bind(null,431,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(410),e(30)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(e(411),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),u=(e(412),e(86)),a=e.n(u),c=e(416),f=e.n(c),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return f()(this.$props,a.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},p=Object(i.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},408:function(t,n){var e=/^(attrs|props|on|nativeOn|class|style|hook)$/;function r(t,n){return function(){t&&t.apply(this,arguments),n&&n.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(t,n){var i,o,s,u,a;for(s in n)if(i=t[s],o=n[s],i&&e.test(s))if("class"===s&&("string"==typeof i&&(a=i,t[s]=i={},i[a]=!0),"string"==typeof o&&(a=o,n[s]=o={},o[a]=!0)),"on"===s||"nativeOn"===s||"hook"===s)for(u in o)i[u]=r(i[u],o[u]);else if(Array.isArray(i))t[s]=i.concat(o);else if(Array.isArray(o))t[s]=[i].concat(o);else for(u in o)i[u]=o[u];else t[s]=n[s];return t}),{})}},410:function(t,n,e){"use strict";e(400)},411:function(t,n,e){"use strict";e(401)},412:function(t,n,e){"use strict";var r=e(10),i=e(6),o=e(220),s=e(26),u=e(9),a=e(31),c=e(413),f=e(58),l=e(4),p=e(40),h=e(84).f,g=e(39).f,v=e(11).f,d=e(414).trim,m=i.Number,$=m.prototype,x="Number"==a(p($)),y=function(t){var n,e,r,i,o,s,u,a,c=f(t,!1);if("string"==typeof c&&c.length>2)if(43===(n=(c=d(c)).charCodeAt(0))||45===n){if(88===(e=c.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(s=(o=c.slice(2)).length,u=0;u<s;u++)if((a=o.charCodeAt(u))<48||a>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var b,_=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof _&&(x?l((function(){$.valueOf.call(e)})):"Number"!=a(e))?c(new m(y(n)),e,_):y(n)},w=r?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;w.length>O;O++)u(m,b=w[O])&&!u(_,b)&&v(_,b,g(m,b));_.prototype=$,$.constructor=_,s(i,"Number",_)}},413:function(t,n,e){var r=e(8),i=e(126);t.exports=function(t,n,e){var o,s;return i&&"function"==typeof(o=n.constructor)&&o!==e&&r(s=o.prototype)&&s!==e.prototype&&i(t,s),t}},414:function(t,n,e){var r=e(32),i="["+e(415)+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(s,"")),e}};t.exports={start:u(1),end:u(2),trim:u(3)}},415:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},416:function(t,n,e){var r=e(228),i=e(221),o=e(417),s=e(421);t.exports=function(t,n){if(null==t)return{};var e=r(s(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},417:function(t,n,e){var r=e(132),i=e(418),o=e(125);t.exports=function(t,n,e){for(var s=-1,u=n.length,a={};++s<u;){var c=n[s],f=r(t,c);e(f,c)&&i(a,o(c,t),f)}return a}},418:function(t,n,e){var r=e(419),i=e(125),o=e(130),s=e(82),u=e(59);t.exports=function(t,n,e,a){if(!s(t))return t;for(var c=-1,f=(n=i(n,t)).length,l=f-1,p=t;null!=p&&++c<f;){var h=u(n[c]),g=e;if("__proto__"===h||"constructor"===h||"prototype"===h)return t;if(c!=l){var v=p[h];void 0===(g=a?a(v,h,p):void 0)&&(g=s(v)?v:o(n[c+1])?[]:{})}r(p,h,g),p=p[h]}return t}},419:function(t,n,e){var r=e(420),i=e(129),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var s=t[n];o.call(t,n)&&i(s,e)&&(void 0!==e||n in t)||r(t,n,e)}},420:function(t,n,e){var r=e(229);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},421:function(t,n,e){var r=e(222),i=e(422),o=e(424);t.exports=function(t){return r(t,o,i)}},422:function(t,n,e){var r=e(128),i=e(423),o=e(223),s=e(224),u=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:s;t.exports=u},423:function(t,n,e){var r=e(227)(Object.getPrototypeOf,Object);t.exports=r},424:function(t,n,e){var r=e(225),i=e(425),o=e(131);t.exports=function(t){return o(t)?r(t,!0):i(t)}},425:function(t,n,e){var r=e(82),i=e(226),o=e(426),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var u in t)("constructor"!=u||!n&&s.call(t,u))&&e.push(u);return e}},426:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}}}]);