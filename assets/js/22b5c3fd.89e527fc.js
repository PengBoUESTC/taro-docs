"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[43633],{79874:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(g,i(i({ref:e},u),{},{components:r})):n.createElement(g,i({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8409:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={title:"Taro.setNavigationBarColor(param)",sidebar_label:"setNavigationBarColor"},l=void 0,p={unversionedId:"apis/interface/navigationbar/setNavigationBarColor",id:"version-1.x/apis/interface/navigationbar/setNavigationBarColor",title:"Taro.setNavigationBarColor(param)",description:"\u8bbe\u7f6e\u9875\u9762\u5bfc\u822a\u6761\u989c\u8272\u3002",source:"@site/versioned_docs/version-1.x/apis/interface/navigationbar/setNavigationBarColor.md",sourceDirName:"apis/interface/navigationbar",slug:"/apis/interface/navigationbar/setNavigationBarColor",permalink:"/taro-docs/docs/1.x/apis/interface/navigationbar/setNavigationBarColor",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-1.x/apis/interface/navigationbar/setNavigationBarColor.md",tags:[],version:"1.x",frontMatter:{title:"Taro.setNavigationBarColor(param)",sidebar_label:"setNavigationBarColor"},sidebar:"version-1.x/API",previous:{title:"hideNavigationBarLoading",permalink:"/taro-docs/docs/1.x/apis/interface/navigationbar/hideNavigationBarLoading"},next:{title:"pageScrollTo",permalink:"/taro-docs/docs/1.x/apis/interface/pagescroll/pageScrollTo"}},c={},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"object param",id:"object-param",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],s={toc:u};function m(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8bbe\u7f6e\u9875\u9762\u5bfc\u822a\u6761\u989c\u8272\u3002"),(0,n.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.setNavigationBarColor.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"wx.setNavigationBarColor")),"\uff0c\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,n.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",a({},{id:"object-param"}),"object param"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"frontColor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u524d\u666f\u989c\u8272\u503c\uff0c\u5305\u62ec\u6309\u94ae\u3001\u6807\u9898\u3001\u72b6\u6001\u680f\u7684\u989c\u8272\uff0c\u4ec5\u652f\u6301 #ffffff \u548c #000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"backgroundColor"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"string")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u80cc\u666f\u989c\u8272\u503c\uff0c\u6709\u6548\u503c\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"animation"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"Object")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u52a8\u753b\u6548\u679c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[success]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[fail]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"[complete]"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"function")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,n.kt)("p",null,"\u6ce8\uff1ah5\u7aef\u4f7f\u7528 meta \u6807\u7b7e\u7684 theme-color \u5c5e\u6027\u5b9e\u73b0\uff0c\u6240\u4ee5\u4ec5\u652f\u6301 backgroundColor \u53c2\u6570\u3002"),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.setNavigationBarColor(params).then(...)\n")),(0,n.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.setNavigationBarColor"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u4e0d\u652f\u6301 animation \u53c2\u6570)")))))}m.isMDXComponent=!0}}]);