"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16487],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83055:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},i=void 0,c={unversionedId:"apis/device/compass/onCompassChange",id:"version-1.x/apis/device/compass/onCompassChange",title:"Taro.onCompassChange(callback)",description:"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 wx.stopCompass \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-1.x/apis/device/compass/onCompassChange.md",sourceDirName:"apis/device/compass",slug:"/apis/device/compass/onCompassChange",permalink:"/taro-docs/docs/1.x/apis/device/compass/onCompassChange",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-1.x/apis/device/compass/onCompassChange.md",tags:[],version:"1.x",frontMatter:{title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},sidebar:"version-1.x/API",previous:{title:"setClipBoardData",permalink:"/taro-docs/docs/1.x/apis/device/clipboard/setClipboardData"},next:{title:"startCompass",permalink:"/taro-docs/docs/1.x/apis/device/compass/startCompass"}},p={},s=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"callback(res)",id:"callbackres",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"object res",id:"object-res",level:5},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",level:2}],u={toc:s};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 wx.stopCompass \u505c\u6b62\u76d1\u542c\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.onCompassChange.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"wx.onCompassChange")),"\u3002"),(0,r.kt)("h2",a({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",a({},{id:"callbackres"}),"callback(res)"),(0,r.kt)("h4",a({},{id:"\u53c2\u6570-1"}),"\u53c2\u6570"),(0,r.kt)("h5",a({},{id:"object-res"}),"object res"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"direction"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u9762\u5bf9\u7684\u65b9\u5411\u5ea6\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"accuracy"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("code",null,"'","high","'")," / ",(0,r.kt)("code",null,"'","medium","'")," / ",(0,r.kt)("code",null,"'","low","'")," / ",(0,r.kt)("code",null,"'","no-contact","'")," / ",(0,r.kt)("code",null,"'","unreliable","'")," / ",(0,r.kt)("code",null,"'","unknow","'")," / ",(0,r.kt)("code",null,"number")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7cbe\u5ea6")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7531\u4e8e\u5e73\u53f0\u5dee\u5f02\uff0caccuracy \u5728 iOS/Android \u7684\u503c\u4e0d\u540c\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iOS\uff1aaccuracy \u662f\u4e00\u4e2a number \u7c7b\u578b\u7684\u503c\uff0c\u8868\u793a\u76f8\u5bf9\u4e8e\u78c1\u5317\u6781\u7684\u504f\u5dee\u30020 \u8868\u793a\u8bbe\u5907\u6307\u5411\u78c1\u5317\uff0c90 \u8868\u793a\u6307\u5411\u4e1c\uff0c180 \u8868\u793a\u6307\u5411\u5357\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"),(0,r.kt)("li",{parentName:"ul"},"Android\uff1aaccuracy \u662f\u4e00\u4e2a string \u7c7b\u578b\u7684\u679a\u4e3e\u503c\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"high"),": \u9ad8\u7cbe\u5ea6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"medium"),": \u4e2d\u7b49\u7cbe\u5ea6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"low"),": \u4f4e\u7cbe\u5ea6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"no-contact"),": \u4e0d\u53ef\u4fe1\uff0c\u4f20\u611f\u5668\u5931\u53bb\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"unreliable"),": \u4e0d\u53ef\u4fe1\uff0c\u539f\u56e0\u672a\u77e5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"unknow ${value}"),": \u672a\u77e5\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c\uff0c\u5373\u8be5 Android \u7cfb\u7edf\u6b64\u65f6\u8fd4\u56de\u7684\u8868\u793a\u7cbe\u5ea6\u7684 value \u4e0d\u662f\u4e00\u4e2a\u6807\u51c6\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c")))),(0,r.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onCompassChange(res => {\n  console.log(res.direction)\n})\n")),(0,r.kt)("h2",a({},{id:"api\u652f\u6301\u5ea6"}),"API\u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.onCompassChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);