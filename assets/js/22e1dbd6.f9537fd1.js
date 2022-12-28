"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46851],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(r),f=a,m=g["".concat(c,".").concat(f)]||g[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93575:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.getRealtimeLogManager()",sidebar_label:"getRealtimeLogManager"},l=void 0,c={unversionedId:"apis/base/debug/getRealtimeLogManager",id:"version-3.x/apis/base/debug/getRealtimeLogManager",title:"Taro.getRealtimeLogManager()",description:"\u83b7\u53d6\u5b9e\u65f6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-3.x/apis/base/debug/getRealtimeLogManager.md",sourceDirName:"apis/base/debug",slug:"/apis/base/debug/getRealtimeLogManager",permalink:"/taro-docs/docs/apis/base/debug/getRealtimeLogManager",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/base/debug/getRealtimeLogManager.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getRealtimeLogManager()",sidebar_label:"getRealtimeLogManager"},sidebar:"API",previous:{title:"setEnableDebug",permalink:"/taro-docs/docs/apis/base/debug/setEnableDebug"},next:{title:"getLogManager",permalink:"/taro-docs/docs/apis/base/debug/getLogManager"}},s={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:p};function g(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u83b7\u53d6\u5b9e\u65f6\u65e5\u5fd7\u7ba1\u7406\u5668\u5bf9\u8c61\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(88421).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => RealtimeLogManager\n")),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const logger = Taro.getRealtimeLogManager()\nlogger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])\nlogger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])\nlogger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])\n")))}g.isMDXComponent=!0},80068:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);