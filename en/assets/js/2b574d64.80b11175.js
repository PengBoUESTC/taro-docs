"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3674],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),k=l,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||o;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60764:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});n(93106);var r=n(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const a={title:"Taro.pageScrollTo(option)",sidebar_label:"pageScrollTo"},i=void 0,c={unversionedId:"apis/ui/scroll/pageScrollTo",id:"version-2.x/apis/ui/scroll/pageScrollTo",title:"Taro.pageScrollTo(option)",description:"\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\uff0c\u652f\u6301\u9009\u62e9\u5668\u548c\u6eda\u52a8\u8ddd\u79bb\u4e24\u79cd\u65b9\u5f0f\u5b9a\u4f4d",source:"@site/versioned_docs/version-2.x/apis/ui/scroll/pageScrollTo.md",sourceDirName:"apis/ui/scroll",slug:"/apis/ui/scroll/pageScrollTo",permalink:"/taro-docs/en/docs/2.x/apis/ui/scroll/pageScrollTo",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-2.x/apis/ui/scroll/pageScrollTo.md",tags:[],version:"2.x",frontMatter:{title:"Taro.pageScrollTo(option)",sidebar_label:"pageScrollTo"},sidebar:"version-2.x/API",previous:{title:"startPullDownRefresh",permalink:"/taro-docs/en/docs/2.x/apis/ui/pull-down-refresh/startPullDownRefresh"},next:{title:"createAnimation",permalink:"/taro-docs/en/docs/2.x/apis/ui/animation/createAnimation"}},u={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Option",id:"option",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],s={toc:p};function d(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",l({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\uff0c\u652f\u6301\u9009\u62e9\u5668\u548c\u6eda\u52a8\u8ddd\u79bb\u4e24\u79cd\u65b9\u5f0f\u5b9a\u4f4d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"selector \u8bed\u6cd5"),"\nselector\u7c7b\u4f3c\u4e8e CSS \u7684\u9009\u62e9\u5668\uff0c\u4f46\u4ec5\u652f\u6301\u4e0b\u5217\u8bed\u6cd5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ID\u9009\u62e9\u5668\uff1a#the-id"),(0,r.kt)("li",{parentName:"ul"},"class\u9009\u62e9\u5668\uff08\u53ef\u4ee5\u8fde\u7eed\u6307\u5b9a\u591a\u4e2a\uff09\uff1a.a-class.another-class"),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u5143\u7d20\u9009\u62e9\u5668\uff1a.the-parent > .the-child"),(0,r.kt)("li",{parentName:"ul"},"\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor .the-descendant"),(0,r.kt)("li",{parentName:"ul"},"\u8de8\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor >>> .the-descendant"),(0,r.kt)("li",{parentName:"ul"},"\u591a\u9009\u62e9\u5668\u7684\u5e76\u96c6\uff1a#a-node, .some-other-nodes")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,r.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,r.kt)("h3",l({},{id:"option"}),"Option"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u6eda\u52a8\u52a8\u753b\u7684\u65f6\u957f\uff0c\u5355\u4f4d ms")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"scrollTop"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u6eda\u52a8\u5230\u9875\u9762\u7684\u76ee\u6807\u4f4d\u7f6e\uff0c\u5355\u4f4d px")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"selector"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u9009\u62e9\u5668, css selector")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: CallbackResult) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,r.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.pageScrollTo({\n  scrollTop: 0,\n  duration: 300\n})\n")),(0,r.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.pageScrollTo"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);