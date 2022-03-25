"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59524],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,b=f["".concat(s,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92601:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"Taro.createIntersectionObserver(Object component, Object options)",sidebar_label:"createIntersectionObserver"},i=void 0,s={unversionedId:"apis/interface/wxml/createIntersectionObserver",id:"version-1.x/apis/interface/wxml/createIntersectionObserver",title:"Taro.createIntersectionObserver(Object component, Object options)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c\xa0wx.createIntersectionObserver\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/wxml/createIntersectionObserver.md",sourceDirName:"apis/interface/wxml",slug:"/apis/interface/wxml/createIntersectionObserver",permalink:"/taro-docs/en/docs/1.x/apis/interface/wxml/createIntersectionObserver",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-1.x/apis/interface/wxml/createIntersectionObserver.md",tags:[],version:"1.x",frontMatter:{title:"Taro.createIntersectionObserver(Object component, Object options)",sidebar_label:"createIntersectionObserver"}},l={},p=[{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],u={toc:p};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c\xa0",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"wx.createIntersectionObserver")),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import\xa0Taro\xa0from\xa0'@tarojs/taro'\n\nconst\xa0observer\xa0=\xa0Taro.createIntersectionObserver(this,\xa0{\xa0thresholds:\xa0[0],\xa0observeAll:\xa0true\xa0})\n")),(0,n.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\xa0API\xa0"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\xa0\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\xa0"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\xa0H5\xa0"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\xa0ReactNative\xa0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\xa0Taro.createIntersectionObserver\xa0"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\xa0\u2714\ufe0f\xa0"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\xa0\xa0"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\xa0\xa0")))))}f.isMDXComponent=!0}}]);