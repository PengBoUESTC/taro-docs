"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[79889],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96907:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={title:"Taro.createCameraContext()",sidebar_label:"createCameraContext"},i=void 0,p={unversionedId:"apis/media/camera/createCameraContext",id:"apis/media/camera/createCameraContext",title:"Taro.createCameraContext()",description:"\u521b\u5efa camera \u4e0a\u4e0b\u6587 CameraContext \u5bf9\u8c61\u3002",source:"@site/docs/apis/media/camera/createCameraContext.md",sourceDirName:"apis/media/camera",slug:"/apis/media/camera/createCameraContext",permalink:"/taro-docs/docs/next/apis/media/camera/createCameraContext",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/apis/media/camera/createCameraContext.md",tags:[],version:"current",frontMatter:{title:"Taro.createCameraContext()",sidebar_label:"createCameraContext"},sidebar:"API",previous:{title:"RecorderManager",permalink:"/taro-docs/docs/next/apis/media/recorder/RecorderManager"},next:{title:"CameraContext",permalink:"/taro-docs/docs/next/apis/media/camera/CameraContext"}},l={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],m={toc:s};function u(e){var{components:t}=e,c=o(e,["components"]);return(0,n.kt)("wrapper",a({},m,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa camera \u4e0a\u4e0b\u6587 CameraContext \u5bf9\u8c61\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(32998).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(67877).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(1228).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => CameraContext\n")),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const cameraContext = Taro.createCameraContext()\n")))}u.isMDXComponent=!0},67877:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);