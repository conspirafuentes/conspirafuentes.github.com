(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{398:function(t,e,n){},400:function(t,e,n){},401:function(t,e,n){},407:function(t,e,n){},408:function(t,e,n){},413:function(t,e,n){"use strict";n(398)},415:function(t,e,n){"use strict";n(400)},416:function(t,e,n){"use strict";n(401)},439:function(t,e,n){"use strict";n(407)},440:function(t,e,n){"use strict";n(408)},444:function(t,e,n){"use strict";n.r(e);n(81);var r=n(84),a=n.n(r),o=n(412),i=n.n(o),s=n(399),c={name:"PostTag",props:{tag:{type:String,required:!0}}},u=(n(413),n(30)),m=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"post-tag"},[e("router-link",{attrs:{to:"/tag/"+this.tag}},[e("span",[this._v(this._s(this.tag))])])],1)}),[],!1,null,"36165b9c",null).exports;a.a.extend(i.a);var l={name:"PostMeta",components:{NavigationIcon:s.b,ClockIcon:s.a,PostTag:m},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return a.a.utc(this.date).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},d=(n(415),Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()],1):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])],1):t._e(),t._v(" "),t.tags?n("span",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports),h=(n(220),{name:"Comment",components:{Comment:p},props:{comment:Object,isEven:Boolean},computed:{author:function(){var t=this.comment;return t&&t.author||""},author_link:function(){var t=this.comment;return t&&t.author_link||""},score:function(){var t=this.comment;return t&&t.score||""},permalink:function(){var t=this.comment;return t&&t.permalink||""},subreddit:function(){var t=this.comment;return t&&t.subreddit||""},created:function(){var t=this.comment;return t&&t.created||""},body_html:function(){var t=this.comment;return t&&t.body_html||""},thread:function(){var t=this.comment;return t&&t.thread||""},replies:function(){var t=this.comment;return t&&t.replies||""}}}),p=(n(416),Object(u.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{class:{evenDepth:t.isEven}},[n("aside",[n("span",[n("a",{attrs:{href:t.author_link,target:"_blank"}},[t._v("\n        "+t._s(t.author)+"\n      ")])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.score,expression:"score"}]},[n("b",[t._v("\n        "+t._s(t.score)+"\n        puntos\n      ")])]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.permalink,expression:"permalink"}]},[n("a",{attrs:{href:t.permalink}},[t._v("\n        "+t._s(t.subreddit)+"\n      ")])]),t._v(" "),n("span",[t._v("\n      "+t._s(t.created)+"\n    ")])]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.body_html)}}),t._v(" "),n("aside",{staticClass:"links"},[n("span",[n("a",{attrs:{href:t.thread,target:"_blank"}},[t._v("\n        ver en reddit\n      ")])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.replies,expression:"replies"}]},t._l(t.replies,(function(e){return n("div",{staticClass:"children"},[n("Comment",{attrs:{comment:e,isEven:!t.isEven}})],1)})),0)])}),[],!1,null,"24204c48",null).exports),f=(n(58),n(25),n(127),n(39),n(126),n(83),n(417),n(420)),v=n.n(f),_=n(421),g=n.n(_);function b(t){if(!t)return!1;var e=document.createElement("textarea");return e.innerHTML=t,e.value}function w(t){var e=(new Date).getTime()/1e3;if(!t||t>e)return!1;var n=e-t,r=Math.floor(n/60),a=Math.floor(r/60),o=Math.floor(a/24);return 1===o?"1 day ago":o>0?o+" days ago":1===a?"1 hour ago":a>0?a+" hours ago":1===r?"1 minute ago":r>0?r+" minutes ago":"a few seconds ago"}function y(t){if(!t)throw new Error("No spec object has been specified");if(!t.submitUrl)throw new Error("submitUrl isnt defined");if(!t.dataFmt)throw new Error("dataFmt method isnt defined");if(!t.commentFmt)throw new Error("commentFmt method isnt defined");if(!t.threadFmt)throw new Error("threadFmt method isnt defined");0===t.limit&&(t.limit=null);var e={},n={};function r(t,e){if(!t)throw new Error("No URL has been specified");n[t]?e(null,n[t]):g.a.get(t).then((function(r){n[t]=r.data,e(null,r.data)})).catch((function(t){console.log("e",t),e()}))}function a(e,n){var a=e.hits.filter((function(t){return!!t.num_comments}));v.a.map(a.slice(0,10),(function(e,n){var a=e.id,o=e.subreddit;if("undefined"===a)throw new Error("No ID specified");r(function(e){var n=e.sub,r=e.id;return n&&r?t.base+"/r/"+n+"/comments/"+r+".json":!(n||!r)&&t.base+r}({sub:o,id:a}),n)}),n)}function o(e,n){n(null,e.map((function(e){var n=t.threadFmt(e),r=n.children.reduce((function(e,r){return r.author&&e.push(function e(n){var r=n.comment,a=n.op,o=n.depth||0,i=t.commentFmt(r);if(i.depth=o,i.subreddit=a.subreddit,a.permalink&&(i.permalink=t.base+a.permalink,i.thread=t.base+a.permalink+r.id),r.children&&r.children.length>0){var s=o+1;i.hasReplies=!0,i.replies=r.children.reduce((function(t,n){return n.author&&t.push(e({comment:n,op:a,depth:s})),t}),[]),i.loadMore=i.replies.length>4}return i}({comment:r,op:n})),e}),[]);return{op:n,comments:r}})))}function i(e,n){var r=function t(n,r,a){if(a>e.length-1)return{score:n,threads:e.length,comments:r,multiple:function(){return this.threads>1}};var o=e[a];return t(n+=o.op.points,r.concat(o.comments),a+1)}(0,[],0),a=r.comments.sort((function(t,e){return e.score-t.score})),o=t.limit||a.length;r.comments=a.slice(0,o),r.next=a.slice(o),r.hasMore=!!r.next.length,n(null,r)}return e.submitUrl=t.submitUrl,e.hasComments=function(e){v.a.waterfall([v.a.apply(r,t.query),t.dataFmt],(function(t,n){if(t)throw new Error(t);var r=n.hits.filter((function(t){return!!t.num_comments}));e(null,!!r.length)}))},e.getComments=function(e){v.a.waterfall([v.a.apply(r,t.query),t.dataFmt,a,o,i],e)},e}var k="https://farsantes.github.io",C={name:"Comments",components:{Comment:p},data:function(){return{data:null}},computed:{comments:function(){var t=this.data;return t&&t.comments||[]},score:function(){var t=this.data;return t&&t.score||""},threads:function(){var t=this.data;return t&&t.threads||""},openRedditLink:function(){var t=this.comments;return t&&t.length?t[0].permalink:""}},mounted:function(){var t=this,e=function(t){if(!t)throw new Error("The Reddit constructor requires a spec object");var e=t.url,n=t.limit,r={base:"https://www.reddit.com",searchQs:"/search.json?q="};return r.query=r.base+r.searchQs+e,r.submitUrl="https://www.reddit.com/submit",r.limit=n,r.dataFmt=function(t,e){!t.data&&Array.isArray(t)&&(t=t[0]),t.data||console.log("!response.data",t),t.hits=t.data.children.map((function(t){return t=t.data})),e(null,t)},r.commentFmt=function(t){return{author:t.author,author_link:"https://www.reddit.com/user/"+t.author,body_html:b(t.body_html),created:w(t.created_utc),id:t.id,score:t.score,replies:null,hasReplies:!1,isEven:function(){return this.depth%2==0},lowScore:function(){return this.score<0}}},r.threadFmt=function(t){var e=t[0].data.children[0].data;return e.points=e.score,e.children=t[1].data.children.map((function(t){return function t(e){return e.points=e.score,e.replies&&(e.children=e.replies.data.children.map((function(e){return(e=e.data).replies&&(e.children=t(e)),e}))),e}(t=t.data)})),e},y(r)}({url:k+location.pathname});console.log("embedd",e),e.getComments((function(e,n){console.log("err",e),console.log("data",n),n&&(t.data=n)}))},methods:{firstComment:function(){var t=k+location.pathname,e=document.querySelector("title").innerText,n="https://reddit.com/r/Conspiraciones/submit?url=".concat(t,"&title=").concat(e);window.open(n)},openReddit:function(){var t=this.openRedditLink;window.open(t)}}},E=(n(439),{components:{PostMeta:d,Comments:Object(u.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"buttons"},[n("div",{staticStyle:{cursor:"pointer"},on:{click:t.openReddit}},[n("img",{attrs:{src:"//i.imgur.com/I3JS7Ew.gif"}}),t._v("\n      Reddit\n    ")])]),t._v(" "),n("div",{staticClass:"info"},[t.comments.length?t._e():n("a",{staticClass:"no-comments",attrs:{target:"_blank",href:"#"},on:{click:t.firstComment}},[n("h3",[t._v("Postéalo en reddit para poder comentar!")])])]),t._v(" "),n("div",{staticClass:"comments"},t._l(t.comments,(function(t){return n("div",[n("Comment",{attrs:{comment:t}})],1)})),0)])}),[],!1,null,null,null).exports}}),x=(n(440),Object(u.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("PostMeta",{attrs:{tags:t.$frontmatter.tags,author:t.$frontmatter.author,date:t.$frontmatter.date,location:t.$frontmatter.location}}),t._v(" "),n("header",[n("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")])]),t._v(" "),t.$frontmatter.image?n("img",{attrs:{src:t.$withBase(t.$frontmatter.image),onerror:"this.style.display='none'"}}):t._e(),t._v(" "),n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("v-divider"),t._v(" "),n("br"),t._v(" "),n("Comments"),t._v(" "),n("v-divider",{staticStyle:{"margin-top":"30px","margin-bottom":"5px"}}),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){return t.$router.back()}}},[n("v-icon",{staticStyle:{"margin-top":"-3px","margin-right":"5px"},attrs:{small:""}},[t._v("\n        mdi-arrow-left\n      ")]),t._v("\n      volver\n    ")],1)],1)])}),[],!1,null,null,null));e.default=x.exports}}]);