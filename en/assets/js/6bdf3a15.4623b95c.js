"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[90684],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||c;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"Taro.createBLEConnection(OBJECT)",sidebar_label:"createBLEConnection"},a=void 0,l={unversionedId:"apis/device/ble/createBLEConnection",id:"version-1.x/apis/device/ble/createBLEConnection",title:"Taro.createBLEConnection(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.createBLEConnection\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/createBLEConnection.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/createBLEConnection",permalink:"/taro-docs/en/docs/1.x/apis/device/ble/createBLEConnection",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-1.x/apis/device/ble/createBLEConnection.md",tags:[],version:"1.x",frontMatter:{title:"Taro.createBLEConnection(OBJECT)",sidebar_label:"createBLEConnection"},sidebar:"version-1.x/API",previous:{title:"closeBLEConnection",permalink:"/taro-docs/en/docs/1.x/apis/device/ble/closeBLEConnection"},next:{title:"getBLEDeviceCharacteristics",permalink:"/taro-docs/en/docs/1.x/apis/device/ble/getBLEDeviceCharacteristics"}},s={},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:p};function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.createBLEConnection.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"wx.createBLEConnection")),"\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,r.kt)("h2",o({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.createBLEConnection(params).then(...)\n")))}f.isMDXComponent=!0}}]);