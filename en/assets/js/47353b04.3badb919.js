"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[10469],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(93106);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),v=l(r),f=i,d=v["".concat(s,".").concat(f)]||v[f]||u[f]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=v;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},666:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});r(93106);var n=r(79874);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const c={title:"Taro.getBLEDeviceServices(OBJECT)",sidebar_label:"getBLEDeviceServices"},a=void 0,s={unversionedId:"apis/device/ble/getBLEDeviceServices",id:"version-1.x/apis/device/ble/getBLEDeviceServices",title:"Taro.getBLEDeviceServices(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c wx.getBLEDeviceServices\uff0c\u652f\u6301 Promise \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-1.x/apis/device/ble/getBLEDeviceServices.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/getBLEDeviceServices",permalink:"/taro-docs/en/docs/1.x/apis/device/ble/getBLEDeviceServices",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-1.x/apis/device/ble/getBLEDeviceServices.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getBLEDeviceServices(OBJECT)",sidebar_label:"getBLEDeviceServices"},sidebar:"version-1.x/API",previous:{title:"getBLEDeviceCharacteristics",permalink:"/taro-docs/en/docs/1.x/apis/device/ble/getBLEDeviceCharacteristics"},next:{title:"notifyBLECharacteristicValueChange",permalink:"/taro-docs/en/docs/1.x/apis/device/ble/notifyBLECharacteristicValueChange"}},l={},p=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],u={toc:p};function v(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,n.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBLEDeviceServices.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"wx.getBLEDeviceServices")),"\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,n.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getBLEDeviceServices(params).then(...)\n")))}v.isMDXComponent=!0}}]);