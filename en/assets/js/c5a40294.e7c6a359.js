"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[6527],{79874:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,c(c({ref:t},l),{},{components:n})):r.createElement(b,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Taro.canIUse(schema)",sidebar_label:"canIUse"},i=void 0,p={unversionedId:"apis/base/canIUse",id:"apis/base/canIUse",title:"Taro.canIUse(schema)",description:"Determines whether the APIs, callbacks, parameters, and components of the Mini Program are available in the current version.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/canIUse.md",sourceDirName:"apis/base",slug:"/apis/base/canIUse",permalink:"/taro-docs/en/docs/next/apis/base/canIUse",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/apis/base/canIUse.md",tags:[],version:"current",frontMatter:{title:"Taro.canIUse(schema)",sidebar_label:"canIUse"},sidebar:"API",previous:{title:"env",permalink:"/taro-docs/en/docs/next/apis/base/env"},next:{title:"canIUseWebp",permalink:"/taro-docs/en/docs/next/apis/base/canIUseWebp"}},s={},l=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],u={toc:l};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Determines whether the APIs, callbacks, parameters, and components of the Mini Program are available in the current version."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/wx.canIUse.html"}),"Reference"))),(0,r.kt)("h2",a({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(schema: string) => boolean\n")),(0,r.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,r.kt)("p",null,"The API is called using the ",(0,r.kt)("inlineCode",{parentName:"p"},"${API}.${method}.${param}.${options}")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"${component}.${attribute}.${option}")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters Description"),"  "),(0,r.kt)("p",null,"-"," ",(0,r.kt)("inlineCode",{parentName:"p"},"${API}"),": API name\n","-"," ",(0,r.kt)("inlineCode",{parentName:"p"},"${method}"),": Call method. Available values: return, success, object, and callback.\n","-"," ",(0,r.kt)("inlineCode",{parentName:"p"},"${param}"),": Parameter or return value\n","-"," ",(0,r.kt)("inlineCode",{parentName:"p"},"${option}"),": Available values for the parameter\n","-"," ",(0,r.kt)("inlineCode",{parentName:"p"},"${component}"),": Component name\n","-"," ",(0,r.kt)("inlineCode",{parentName:"p"},"${attribute}"),": Component attribute\n","-"," ",(0,r.kt)("inlineCode",{parentName:"p"},"${option}"),": Available values for the component attribute"),(0,r.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"Taro.canIUse('openBluetoothAdapter')\nTaro.canIUse('getSystemInfoSync.return.screenWidth')\nTaro.canIUse('getSystemInfo.success.screenWidth')\nTaro.canIUse('showToast.object.image')\nTaro.canIUse('onCompassChange.callback.direction')\nTaro.canIUse('request.object.method.GET')\nTaro.canIUse('live-player')\nTaro.canIUse('text.selectable')\nTaro.canIUse('button.open-type.contact')\n")),(0,r.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.canIUse"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);