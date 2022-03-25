"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51101],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96985:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={title:"Taro.getAccountInfoSync()",sidebar_label:"getAccountInfoSync"},i=void 0,c={unversionedId:"apis/open-api/account/getAccountInfoSync",id:"version-3.x/apis/open-api/account/getAccountInfoSync",title:"Taro.getAccountInfoSync()",description:"\u83b7\u53d6\u5f53\u524d\u5e10\u53f7\u4fe1\u606f",source:"@site/versioned_docs/version-3.x/apis/open-api/account/getAccountInfoSync.md",sourceDirName:"apis/open-api/account",slug:"/apis/open-api/account/getAccountInfoSync",permalink:"/taro-docs/docs/apis/open-api/account/getAccountInfoSync",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/apis/open-api/account/getAccountInfoSync.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getAccountInfoSync()",sidebar_label:"getAccountInfoSync"},sidebar:"API",previous:{title:"checkSession",permalink:"/taro-docs/docs/apis/open-api/login/checkSession"},next:{title:"getUserProfile",permalink:"/taro-docs/docs/apis/open-api/user-info/getUserProfile"}},p={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"AccountInfo",id:"accountinfo",level:3},{value:"MiniProgram",id:"miniprogram",level:3},{value:"Plugin",id:"plugin",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],s={toc:u};function m(t){var{components:e}=t,l=o(t,["components"]);return(0,r.kt)("wrapper",a({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u5e10\u53f7\u4fe1\u606f"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(32998).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(67877).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(1228).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => AccountInfo\n")),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"accountinfo"}),"AccountInfo"),(0,r.kt)("p",null,"\u5e10\u53f7\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"miniProgram"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"MiniProgram")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u5e10\u53f7\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"plugin"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Plugin")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09")))),(0,r.kt)("h3",a({},{id:"miniprogram"}),"MiniProgram"),(0,r.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u5e10\u53f7\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"appId"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f appId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"envVersion"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),'"develop" or "trial" or "release"'),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u7248\u672c",(0,r.kt)("br",null),"since: 2.10.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"version"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7ebf\u4e0a\u5c0f\u7a0b\u5e8f\u7248\u672c\u53f7",(0,r.kt)("br",null),"since: 2.10.2")))),(0,r.kt)("h3",a({},{id:"plugin"}),"Plugin"),(0,r.kt)("p",null,"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"appId"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63d2\u4ef6 appId")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"version"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u63d2\u4ef6\u7248\u672c\u53f7")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const accountInfo = Taro.getAccountInfoSync();\n\nconsole.log(accountInfo.miniProgram.appId) // \u5c0f\u7a0b\u5e8f appId\nconsole.log(accountInfo.plugin.appId) // \u63d2\u4ef6 appId\nconsole.log(accountInfo.plugin.version) // \u63d2\u4ef6\u7248\u672c\u53f7\uff0c 'a.b.c' \u8fd9\u6837\u7684\u5f62\u5f0f\n")))}m.isMDXComponent=!0},67877:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);