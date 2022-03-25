"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46270],{79874:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30669:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"RenderingContext",sidebar_label:"RenderingContext"},c=void 0,s={unversionedId:"apis/canvas/RenderingContext",id:"apis/canvas/RenderingContext",title:"RenderingContext",description:"Canvas \u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002",source:"@site/docs/apis/canvas/RenderingContext.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/RenderingContext",permalink:"/taro-docs/docs/next/apis/canvas/RenderingContext",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/apis/canvas/RenderingContext.md",tags:[],version:"current",frontMatter:{title:"RenderingContext",sidebar_label:"RenderingContext"},sidebar:"API",previous:{title:"Path2D",permalink:"/taro-docs/docs/next/apis/canvas/Path2D"},next:{title:"createMapContext",permalink:"/taro-docs/docs/next/apis/media/map/createMapContext"}},p={},l=[],u={toc:l};function f(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Canvas \u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Canvas.getContext('2d') \u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 CanvasRenderingContext2D \u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 ",(0,r.kt)("a",a({parentName:"li"},{href:"https://www.w3.org/TR/2dcontext/"}),"HTML Canvas 2D Context")," \u5b9a\u4e49\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Canvas.getContext('webgl') \u6216 OffscreenCanvas.getContext('webgl') \u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 WebGLRenderingContext \u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 ",(0,r.kt)("a",a({parentName:"li"},{href:"https://www.khronos.org/registry/webgl/specs/latest/1.0/"}),"WebGL 1.0")," \u5b9a\u4e49\u7684\u6240\u6709\u5c5e\u6027\u3001\u65b9\u6cd5\u3001\u5e38\u91cf\u3002")),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(32998).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(67877).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(1228).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/RenderingContext.html"}),"\u53c2\u8003\u6587\u6863"))))}f.isMDXComponent=!0},67877:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);