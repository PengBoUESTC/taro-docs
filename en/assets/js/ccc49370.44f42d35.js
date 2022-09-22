"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46103],{16873:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(93106),a=n(4706),l=n(30730),o=n(70233),i=n(29753),c=n(7442),s=n(35699),u=n(53572),m=n(37560);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function d(e){const{nextItem:t,prevItem:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(m.Z,f({},n,{subLabel:r.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(m.Z,f({},t,{subLabel:r.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function p(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:a,date:o,tags:c,authors:s,frontMatter:u}=t,{keywords:m}=u;var f;const d=null!==(f=e.image)&&void 0!==f?f:u.image;return r.createElement(l.d,{title:n,description:a,keywords:m,image:d},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&r.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&r.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(97771);function g({sidebar:e,children:t}){const{metadata:n,toc:a}=(0,i.C)(),{nextItem:l,prevItem:o,frontMatter:u}=n,{hide_table_of_contents:m,toc_min_heading_level:f,toc_max_heading_level:p}=u;return r.createElement(c.Z,{sidebar:e,toc:!m&&a.length>0?r.createElement(v.Z,{toc:a,minHeadingLevel:f,maxHeadingLevel:p}):void 0},r.createElement(s.Z,null,t),(l||o)&&r.createElement(d,{nextItem:l,prevItem:o}))}function b(e){const t=e.content;return r.createElement(i.n,{content:e.content,isBlogPostPage:!0},r.createElement(l.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},r.createElement(p,null),r.createElement(g,{sidebar:e.sidebar},r.createElement(t,null))))}},97771:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(93106),a=n(4706),l=n(86656),o="tableOfContents_CE4d";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e){var{className:t}=e,n=c(e,["className"]);return r.createElement("div",{className:(0,a.Z)(o,"thin-scrollbar",t)},r.createElement(l.Z,i({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},86656:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(93106),a=n(79218);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e){const t=e.map((e=>o({},e,{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n}=e,a=i(e,["parentIndex"]);n>=0?t[n].children.push(a):r.push(a)})),r}function s({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[o({},e,{children:r})]:r}))}function u(e){const t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,{anchorTopOffset:t}){const n=e.find((e=>u(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(n))?n:null!==(r=e[e.indexOf(n)-1])&&void 0!==r?r:null;var r}var a;return null!==(a=e[e.length-1])&&void 0!==a?a:null}function f(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=f();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=m(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function p({toc:e,className:t,linkClassName:n,isChild:a}){return e.length?r.createElement("ul",{className:a?void 0:t},e.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(p,{isChild:!0,toc:e.children,className:t,linkClassName:n}))))):null}var v=r.memo(p);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e){var{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:u}=e,m=b(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const f=(0,a.L)(),p=null!=i?i:f.tableOfContents.minHeadingLevel,h=null!=u?u:f.tableOfContents.maxHeadingLevel,y=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,r.useMemo)((()=>s({toc:c(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return d((0,r.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:h}}),[l,o,p,h])),r.createElement(v,g({toc:y,className:n,linkClassName:l},m))}}}]);