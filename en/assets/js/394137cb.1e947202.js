"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[24867],{79874:function(e,t,l){l.d(t,{Zo:function(){return d},kt:function(){return p}});var n=l(93106);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),k=c(l),p=r,m=k["".concat(i,".").concat(p)]||k[p]||s[p]||o;return l?n.createElement(m,a(a({ref:t},d),{},{components:l})):n.createElement(m,a({ref:t},d))}));function p(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=l.length,a=new Array(o);a[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<o;c++)a[c]=l[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},72095:function(e,t,l){l.r(t),l.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return d}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}const a={title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},u=void 0,i={unversionedId:"apis/media/video/chooseVideo",id:"version-3.x/apis/media/video/chooseVideo",title:"Taro.chooseVideo(option)",description:"Takes a video or selects a video from the mobile album.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/video/chooseVideo.md",sourceDirName:"apis/media/video",slug:"/apis/media/video/chooseVideo",permalink:"/taro-docs/en/docs/apis/media/video/chooseVideo",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/apis/media/video/chooseVideo.md",tags:[],version:"3.x",frontMatter:{title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},sidebar:"API",previous:{title:"compressVideo",permalink:"/taro-docs/en/docs/apis/media/video/compressVideo"},next:{title:"chooseMedia",permalink:"/taro-docs/en/docs/apis/media/video/chooseMedia"}},c={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"camera",id:"camera",level:3},{value:"sourceType",id:"sourcetype",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],s={toc:d};function k(e){var{components:t}=e,l=o(e,["components"]);return(0,n.kt)("wrapper",r({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Takes a video or selects a video from the mobile album."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/video/wx.chooseVideo.html"}),"Reference"))),(0,n.kt)("h2",r({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<void>\n")),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"camera"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"back" | "front"')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates the default camera to be enabled. On some Android phones, the setting cannot take effect because it is not supported in ROM.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"compressed"),(0,n.kt)("td",null,(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Indicates whether to compress the selected video file")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"maxDuration"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The maximum duration of a recorded video (in sec)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"sourceType"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("album" | "camera")[]')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The source of the video")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"duration"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Duration of the selected video")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"height"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Returns the height of the selected video")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"size"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Amount of data of the selected video")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFilePath"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Temporary file path of the selected video")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"width"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Returns the width of the selected video")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",r({},{id:"camera"}),"camera"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"back"),(0,n.kt)("td",null,"Enables the rear camera by default")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"front"),(0,n.kt)("td",null,"Enables the front camera by default")))),(0,n.kt)("h3",r({},{id:"sourcetype"}),"sourceType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"album"),(0,n.kt)("td",null,"Selects a video from the album")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"camera"),(0,n.kt)("td",null,"Takes a video with the camera")))),(0,n.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseVideo({\n  sourceType: ['album','camera'],\n  maxDuration: 60,\n  camera: 'back',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),(0,n.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.chooseVideo"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);