"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15211],{79874:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(93106);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),c=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),b=c(r),m=n,d=b["".concat(p,".").concat(m)]||b[m]||s[m]||o;return r?a.createElement(d,l(l({ref:e},u),{},{components:r})):a.createElement(d,l({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},91379:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},n.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const l={title:"Taro.showTabBar(option)",sidebar_label:"showTabBar"},i=void 0,p={unversionedId:"apis/ui/tab-bar/showTabBar",id:"apis/ui/tab-bar/showTabBar",title:"Taro.showTabBar(option)",description:"\u663e\u793a tabBar",source:"@site/docs/apis/ui/tab-bar/showTabBar.md",sourceDirName:"apis/ui/tab-bar",slug:"/apis/ui/tab-bar/showTabBar",permalink:"/taro-docs/docs/next/apis/ui/tab-bar/showTabBar",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/apis/ui/tab-bar/showTabBar.md",tags:[],version:"current",frontMatter:{title:"Taro.showTabBar(option)",sidebar_label:"showTabBar"},sidebar:"API",previous:{title:"showTabBarRedDot",permalink:"/taro-docs/docs/next/apis/ui/tab-bar/showTabBarRedDot"},next:{title:"setTabBarStyle",permalink:"/taro-docs/docs/next/apis/ui/tab-bar/setTabBarStyle"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3}],s={toc:u};function b(t){var{components:e}=t,l=o(t,["components"]);return(0,a.kt)("wrapper",n({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u663e\u793a tabBar"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(32998).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:r(67877).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:r(1228).Z,className:"icon_platform",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",n({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<TaroGeneral.CallbackResult>\n")),(0,a.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Option"))))),(0,a.kt)("h3",n({},{id:"option"}),"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"animation"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u662f\u5426\u9700\u8981\u52a8\u753b\u6548\u679c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"complete"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"fail"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"success"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(res: TaroGeneral.CallbackResult) => void")),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))))}b.isMDXComponent=!0},67877:function(t,e,r){e.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(t,e,r){e.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(t,e,r){e.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);