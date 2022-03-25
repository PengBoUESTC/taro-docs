"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39851],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),c=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=c(t.components);return l.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),s=c(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||k[p]||o;return n?l.createElement(m,a(a({ref:e},d),{},{components:n})):l.createElement(m,a({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},80506:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return d}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const a={title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},u=void 0,i={unversionedId:"apis/media/video/chooseVideo",id:"version-2.x/apis/media/video/chooseVideo",title:"Taro.chooseVideo(option)",description:"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891\u3002",source:"@site/versioned_docs/version-2.x/apis/media/video/chooseVideo.md",sourceDirName:"apis/media/video",slug:"/apis/media/video/chooseVideo",permalink:"/taro-docs/en/docs/2.x/apis/media/video/chooseVideo",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-2.x/apis/media/video/chooseVideo.md",tags:[],version:"2.x",frontMatter:{title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},sidebar:"version-2.x/API",previous:{title:"createVideoContext",permalink:"/taro-docs/en/docs/2.x/apis/media/video/createVideoContext"},next:{title:"VideoContext",permalink:"/taro-docs/en/docs/2.x/apis/media/video/VideoContext"}},c={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"camera",id:"camera",level:3},{value:"sourceType",id:"sourcetype",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],k={toc:d};function s(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",r({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<void>\n")),(0,l.kt)("h2",r({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"camera"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"back" | "front"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u7684\u662f\u524d\u7f6e\u6216\u8005\u540e\u7f6e\u6444\u50cf\u5934\u3002\u90e8\u5206 Android \u624b\u673a\u4e0b\u7531\u4e8e\u7cfb\u7edf ROM \u4e0d\u652f\u6301\u65e0\u6cd5\u751f\u6548")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"compressed"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u538b\u7f29\u6240\u9009\u62e9\u7684\u89c6\u9891\u6587\u4ef6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"maxDuration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"sourceType"),(0,l.kt)("td",null,(0,l.kt)("code",null,'("album" | "camera")[]')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"height"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u8fd4\u56de\u9009\u5b9a\u89c6\u9891\u7684\u9ad8\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"size"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u6570\u636e\u91cf\u5927\u5c0f")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"tempFilePath"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"width"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u8fd4\u56de\u9009\u5b9a\u89c6\u9891\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,l.kt)("h3",r({},{id:"camera"}),"camera"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"back"),(0,l.kt)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u540e\u7f6e\u6444\u50cf\u5934")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"front"),(0,l.kt)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u524d\u7f6e\u6444\u50cf\u5934")))),(0,l.kt)("h3",r({},{id:"sourcetype"}),"sourceType"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"album"),(0,l.kt)("td",null,"\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"camera"),(0,l.kt)("td",null,"\u4f7f\u7528\u76f8\u673a\u62cd\u6444\u89c6\u9891")))),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseVideo({\n  sourceType: ['album','camera'],\n  maxDuration: 60,\n  camera: 'back',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.chooseVideo"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);