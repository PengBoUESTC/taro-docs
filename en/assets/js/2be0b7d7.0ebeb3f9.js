"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[66262],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"Taro.nextTick(callback)",sidebar_label:"nextTick"},i=void 0,l={unversionedId:"apis/ui/custom-component/nextTick",id:"apis/ui/custom-component/nextTick",title:"Taro.nextTick(callback)",description:"Defers some operations until the next time slice. (similar to setTimeout)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/ui/custom-component/nextTick.md",sourceDirName:"apis/ui/custom-component",slug:"/apis/ui/custom-component/nextTick",permalink:"/taro-docs/en/docs/next/apis/ui/custom-component/nextTick",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/apis/ui/custom-component/nextTick.md",tags:[],version:"current",frontMatter:{title:"Taro.nextTick(callback)",sidebar_label:"nextTick"},sidebar:"API",previous:{title:"setTopBarText",permalink:"/taro-docs/en/docs/next/apis/ui/sticky/setTopBarText"},next:{title:"getMenuButtonBoundingClientRect",permalink:"/taro-docs/en/docs/next/apis/ui/menu/getMenuButtonBoundingClientRect"}},s={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],p={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Defers some operations until the next time slice. (similar to setTimeout)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",null,"The APIs such as setData and triggerEvent in the custom component perform synchronous operations. When these APIs are continuously called, they are executed in a synchronous process, so if the logic is improper, an error may occur."),(0,r.kt)("p",null,"For example, when the parent component's setData triggers the triggerEvent of the child component, and the parent component performs setData again, during which the child component is unloaded via the wx:if statement, an error may occur. So for logic that does not need to be done in a synchronous process, you can use this API to defer some operations until the next time slice."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/custom-component/wx.nextTick.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"(callback: (...args: any[]) => any) => void\n")),(0,r.kt)("h2",o({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(...args: any[]) => any"))))),(0,r.kt)("h2",o({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"this.setData({ number: 1 }) // Executes directly in the current synchronous process.\nTaro.nextTick(() => {\n  this.setData({ number: 3 }) // After the current synchronous process ends, execute the operations in the next time slice.\n})\nthis.setData({ number: 2 }) // Executes directly in the current synchronous process.\n")),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Taro.nextTick"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);