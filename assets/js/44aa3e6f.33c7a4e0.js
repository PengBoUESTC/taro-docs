"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[41981],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=c(n),k=l,h=d["".concat(u,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(h,o(o({ref:e},s),{},{components:n})):r.createElement(h,o({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63278:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const o={title:"Taro.startSoterAuthentication(option)",sidebar_label:"startSoterAuthentication"},i=void 0,u={unversionedId:"apis/open-api/soter/startSoterAuthentication",id:"version-2.x/apis/open-api/soter/startSoterAuthentication",title:"Taro.startSoterAuthentication(option)",description:"\u5f00\u59cb SOTER \u751f\u7269\u8ba4\u8bc1\u3002\u9a8c\u8bc1\u6d41\u7a0b\u8bf7\u53c2\u8003\u8bf4\u660e\u3002",source:"@site/versioned_docs/version-2.x/apis/open-api/soter/startSoterAuthentication.md",sourceDirName:"apis/open-api/soter",slug:"/apis/open-api/soter/startSoterAuthentication",permalink:"/taro-docs/docs/2.x/apis/open-api/soter/startSoterAuthentication",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-2.x/apis/open-api/soter/startSoterAuthentication.md",tags:[],version:"2.x",frontMatter:{title:"Taro.startSoterAuthentication(option)",sidebar_label:"startSoterAuthentication"},sidebar:"version-2.x/API",previous:{title:"chooseInvoice",permalink:"/taro-docs/docs/2.x/apis/open-api/invoice/chooseInvoice"},next:{title:"checkIsSupportSoterAuthentication",permalink:"/taro-docs/docs/2.x/apis/open-api/soter/checkIsSupportSoterAuthentication"}},c={},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"requestAuthModes",id:"requestauthmodes",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:4},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:2}],p={toc:s};function d(t){var{components:e}=t,n=a(t,["components"]);return(0,r.kt)("wrapper",l({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5f00\u59cb SOTER \u751f\u7269\u8ba4\u8bc1\u3002\u9a8c\u8bc1\u6d41\u7a0b\u8bf7\u53c2\u8003",(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/bio-auth.html"}),"\u8bf4\u660e"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"resultJSON \u8bf4\u660e"),"\n\u6b64\u6570\u636e\u4e3a\u8bbe\u5907TEE\u4e2d\uff0c\u5c06\u4f20\u5165\u7684challenge\u548cTEE\u5185\u5176\u4ed6\u5b89\u5168\u4fe1\u606f\u7ec4\u6210\u7684\u6570\u636e\u8fdb\u884c\u7ec4\u88c5\u800c\u6765\u7684JSON\uff0c\u5bf9\u4e0b\u8ff0\u5b57\u6bb5\u7684\u89e3\u91ca\u5982\u4e0b\u8868\u3002\u4f8b\u5b50\u5982\u4e0b\uff1a\n| \u5b57\u6bb5\u540d | \u8bf4\u660e |\n|---|----|\n| raw | \u8c03\u7528\u8005\u4f20\u5165\u7684challenge |\n| fid | \uff08\u4ec5Android\u652f\u6301\uff09\u672c\u6b21\u751f\u7269\u8bc6\u522b\u8ba4\u8bc1\u7684\u751f\u7269\u4fe1\u606f\u7f16\u53f7\uff08\u5982\u6307\u7eb9\u8bc6\u522b\u5219\u662f\u6307\u7eb9\u4fe1\u606f\u5728\u672c\u8bbe\u5907\u5185\u90e8\u7f16\u53f7\uff09 |\n| counter | \u9632\u91cd\u653e\u7279\u5f81\u53c2\u6570 |\n| tee_n | TEE\u540d\u79f0\uff08\u5982\u9ad8\u901a\u6216\u8005trustonic\u7b49\uff09 |\n| tee_v | TEE\u7248\u672c\u53f7 |\n| fp_n | \u6307\u7eb9\u4ee5\u53ca\u76f8\u5173\u903b\u8f91\u6a21\u5757\u63d0\u4f9b\u5546\uff08\u5982FPC\u7b49\uff09 |\n| fp_v | \u6307\u7eb9\u4ee5\u53ca\u76f8\u5173\u6a21\u5757\u7248\u672c\u53f7 |\n| cpu_id | \u673a\u5668\u552f\u4e00\u8bc6\u522bID |\n| uid | \u6982\u5ff5\u540cAndroid\u7cfb\u7edf\u5b9a\u4e49uid\uff0c\u5373\u5e94\u7528\u7a0b\u5e8f\u7f16\u53f7 |"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,r.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",l({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"challenge"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u6311\u6218\u56e0\u5b50\u3002\u6311\u6218\u56e0\u5b50\u4e3a\u8c03\u7528\u8005\u4e3a\u6b64\u6b21\u751f\u7269\u9274\u6743\u51c6\u5907\u7684\u7528\u4e8e\u7b7e\u540d\u7684\u5b57\u7b26\u4e32\u5173\u952e\u8bc6\u522b\u4fe1\u606f\uff0c\u5c06\u4f5c\u4e3a ",(0,r.kt)("code",null,"resultJSON")," \u7684\u4e00\u90e8\u5206\uff0c\u4f9b\u8c03\u7528\u8005\u8bc6\u522b\u672c\u6b21\u8bf7\u6c42\u3002\u4f8b\u5982\uff1a\u5982\u679c\u573a\u666f\u4e3a\u8bf7\u6c42\u7528\u6237\u5bf9\u67d0\u8ba2\u5355\u8fdb\u884c\u6388\u6743\u786e\u8ba4\uff0c\u5219\u53ef\u4ee5\u5c06\u8ba2\u5355\u53f7\u586b\u5165\u6b64\u53c2\u6570\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"requestAuthModes"),(0,r.kt)("td",null,(0,r.kt)("code",null,'("fingerPrint" | "facial" | "speech")[]')),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u8bf7\u6c42\u4f7f\u7528\u7684\u53ef\u63a5\u53d7\u7684\u751f\u7269\u8ba4\u8bc1\u65b9\u5f0f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"authContent"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u9a8c\u8bc1\u63cf\u8ff0\uff0c\u5373\u8bc6\u522b\u8fc7\u7a0b\u4e2d\u663e\u793a\u5728\u754c\u9762\u4e0a\u7684\u5bf9\u8bdd\u6846\u63d0\u793a\u5185\u5bb9")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h3",l({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"authMode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u751f\u7269\u8ba4\u8bc1\u65b9\u5f0f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"\u9519\u8bef\u7801")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u9519\u8bef\u4fe1\u606f")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"resultJSON"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u5728\u8bbe\u5907\u5b89\u5168\u533a\u57df\uff08TEE\uff09\u5185\u83b7\u5f97\u7684\u672c\u673a\u5b89\u5168\u4fe1\u606f\uff08\u5982TEE\u540d\u79f0\u7248\u672c\u53f7\u7b49\u4ee5\u53ca\u9632\u91cd\u653e\u53c2\u6570\uff09\u4ee5\u53ca\u672c\u6b21\u8ba4\u8bc1\u4fe1\u606f\uff08\u4ec5Android\u652f\u6301\uff0c\u672c\u6b21\u8ba4\u8bc1\u7684\u6307\u7eb9ID\uff09\u3002\u5177\u4f53\u8bf4\u660e\u89c1\u4e0b\u6587")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"resultJSONSignature"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"\u7528SOTER\u5b89\u5168\u5bc6\u94a5\u5bf9 ",(0,r.kt)("code",null,"resultJSON")," \u7684\u7b7e\u540d(SHA256 with RSA/PSS, saltlen=20)")))),(0,r.kt)("h3",l({},{id:"requestauthmodes"}),"requestAuthModes"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"fingerPrint"),(0,r.kt)("td",null,"\u6307\u7eb9\u8bc6\u522b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"facial"),(0,r.kt)("td",null,"\u4eba\u8138\u8bc6\u522b")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"speech"),(0,r.kt)("td",null,"\u58f0\u7eb9\u8bc6\u522b",(0,r.kt)("br",null),"API \u652f\u6301\u5ea6: \u6682\u672a\u652f\u6301")))),(0,r.kt)("h4",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"requestAuthModes.speech"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.startSoterAuthentication({\n   requestAuthModes: ['fingerPrint'],\n   challenge: '123456',\n   authContent: '\u8bf7\u7528\u6307\u7eb9\u89e3\u9501',\n   success: function (res) { }\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-json"}),'{\n  "raw":"msg",\n  "fid":"2",\n  "counter":123,\n  "tee_n":"TEE Name",\n  "tee_v":"TEE Version",\n  "fp_n":"Fingerprint Sensor Name",\n  "fp_v":"Fingerprint Sensor Version",\n  "cpu_id":"CPU Id",\n  "uid":"21"\n}\n')),(0,r.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.startSoterAuthentication"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);