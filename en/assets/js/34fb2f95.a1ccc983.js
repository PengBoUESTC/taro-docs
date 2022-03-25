"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[97794],{79874:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return k}});var n=l(93106);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(l),k=r,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return l?n.createElement(m,o(o({ref:t},c),{},{components:l})):n.createElement(m,o({ref:t},c))}));function k(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},21489:function(e,t,l){l.r(t),l.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});l(93106);var n=l(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}const o={title:"Taro.chooseMessageFile(option)",sidebar_label:"chooseMessageFile"},i=void 0,s={unversionedId:"apis/media/image/chooseMessageFile",id:"apis/media/image/chooseMessageFile",title:"Taro.chooseMessageFile(option)",description:"Selects a file from a client session.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/media/image/chooseMessageFile.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/chooseMessageFile",permalink:"/taro-docs/en/docs/next/apis/media/image/chooseMessageFile",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/apis/media/image/chooseMessageFile.md",tags:[],version:"current",frontMatter:{title:"Taro.chooseMessageFile(option)",sidebar_label:"chooseMessageFile"},sidebar:"API",previous:{title:"compressImage",permalink:"/taro-docs/en/docs/next/apis/media/image/compressImage"},next:{title:"chooseImage",permalink:"/taro-docs/en/docs/next/apis/media/image/chooseImage"}},u={},c=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"ChooseFile",id:"choosefile",level:3},{value:"selectType",id:"selecttype",level:3},{value:"selectedType",id:"selectedtype",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],d={toc:c};function p(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)("wrapper",r({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Selects a file from a client session."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.chooseMessageFile.html"}),"Reference"))),(0,n.kt)("h2",r({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",r({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"count"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"The maximum number of files that can be selected. 0-100 is allowed")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"extension"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string[]")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"Filtered by the file extension name. It takes effect only when type==file. The strings within it cannot be empty. Filtering is not performed by default.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"type"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"all" | "video" | "image" | "file"')),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The selected file type")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"tempFiles"),(0,n.kt)("td",null,(0,n.kt)("code",null,"ChooseFile[]")),(0,n.kt)("td",null,"Returns an array of local temporary file objects for the selected files")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",r({},{id:"choosefile"}),"ChooseFile"),(0,n.kt)("p",null,"res.tempFiles is composed as follows"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"name"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The selected file name")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"path"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"The path to the local temporary file")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"size"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"The size of a local temporary file, in bytes")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"time"),(0,n.kt)("td",null,(0,n.kt)("code",null,"number")),(0,n.kt)("td",null,"Time when the session of the selected file is sent. It is a Unix timestamp and not supported in WeChat DevTools.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"type"),(0,n.kt)("td",null,(0,n.kt)("code",null,'"video" | "image" | "file"')),(0,n.kt)("td",null,"The selected file type")))),(0,n.kt)("h3",r({},{id:"selecttype"}),"selectType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"all"),(0,n.kt)("td",null,"All the files can be selected.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"video"),(0,n.kt)("td",null,"Only video files can be selected.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"image"),(0,n.kt)("td",null,"Only image files can be selected.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"file"),(0,n.kt)("td",null,"Files except images and videos can be selected.")))),(0,n.kt)("h3",r({},{id:"selectedtype"}),"selectedType"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"video"),(0,n.kt)("td",null,"A video file is selected.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"image"),(0,n.kt)("td",null,"An image file is selected.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"file"),(0,n.kt)("td",null,"A file except images and videos is selected.")))),(0,n.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.chooseMessageFile({\n  count: 10,\n  type: 'image',\n  success: function (res) {\n    // tempFilePath can be used as the src property of the img tag to display images.\n    const tempFilePaths = res.tempFilePaths\n  }\n})\n")),(0,n.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.chooseMessageFile"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);