"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[18992],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,g=c["".concat(m,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66166:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const o={title:"Taro.getImageInfo(OBJECT)",sidebar_label:"getImageInfo"},i=void 0,m={unversionedId:"apis/multimedia/images/getImageInfo",id:"version-1.x/apis/multimedia/images/getImageInfo",title:"Taro.getImageInfo(OBJECT)",description:"\u83b7\u53d6\u56fe\u7247\u4fe1\u606f\u3002\u7f51\u7edc\u56fe\u7247\u9700\u5148\u914d\u7f6edownload\u57df\u540d\u624d\u80fd\u751f\u6548\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/images/getImageInfo.md",sourceDirName:"apis/multimedia/images",slug:"/apis/multimedia/images/getImageInfo",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/images/getImageInfo",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-1.x/apis/multimedia/images/getImageInfo.md",tags:[],version:"1.x",frontMatter:{title:"Taro.getImageInfo(OBJECT)",sidebar_label:"getImageInfo"},sidebar:"version-1.x/API",previous:{title:"previewImage",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/images/previewImage"},next:{title:"saveImageToPhotosAlbum",permalink:"/taro-docs/en/docs/1.x/apis/multimedia/images/saveImageToPhotosAlbum"}},p={},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"Promise &lt;object res&gt;",id:"promise-object-res",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],d={toc:u};function c(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6\u56fe\u7247\u4fe1\u606f\u3002\u7f51\u7edc\u56fe\u7247\u9700\u5148\u914d\u7f6edownload\u57df\u540d\u624d\u80fd\u751f\u6548\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.getImageInfo.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"wx.getImageInfo")),"\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"src"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u56fe\u7247\u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\u3001\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3001\u5b58\u50a8\u6587\u4ef6\u8def\u5f84\u3001\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"[success]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"function")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"[fail]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"function")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"[complete]"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"function")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),(0,r.kt)("h2",a({},{id:"\u8fd4\u56de\u503c"}),"\u8fd4\u56de\u503c"),(0,r.kt)("h3",a({},{id:"promise-object-res"}),"Promise ","<","object res",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"res.width"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u56fe\u7247\u539f\u59cb\u5bbd\u5ea6\uff0c\u5355\u4f4dpx\u3002\u4e0d\u8003\u8651\u65cb\u8f6c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"res.height"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u56fe\u7247\u539f\u59cb\u9ad8\u5ea6\uff0c\u5355\u4f4dpx\u3002\u4e0d\u8003\u8651\u65cb\u8f6c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"res.path"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u56fe\u7247\u7684\u672c\u5730\u8def\u5f84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"res.orientation"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"'","up","'")," / ",(0,r.kt)("code",null,"'","up-mirrored","'")," / ",(0,r.kt)("code",null,"'","down","'")," / ",(0,r.kt)("code",null,"'","down-mirrored","'")," / ",(0,r.kt)("code",null,"'","left-mirrored","'")," / ",(0,r.kt)("code",null,"'","right","'")," / ",(0,r.kt)("code",null,"'","right-mirrored","'")," / ",(0,r.kt)("code",null,"'","left","'")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u62cd\u7167\u65f6\u8bbe\u5907\u65b9\u5411\uff08h5\u5e73\u53f0\u4e0d\u652f\u6301\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"res.type"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u56fe\u7247\u683c\u5f0f")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.getImageInfo(params).then(...)\n")),(0,r.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.getImageInfo"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);