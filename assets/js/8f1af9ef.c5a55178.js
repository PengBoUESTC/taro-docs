"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12688],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,v=m["".concat(c,".").concat(h)]||m[h]||s[h]||l;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30752:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),a=n(4706),l="tabItem_DpXT";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},20714:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(93106),a=n(4706),l=n(78949),o=n(46275),i=n(59099),c=n(14376),p="tabList_Q_yt",u="tabItem_hclQ";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:h,groupId:v,className:d}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=h?h:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,o.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var g;const N=null===m?m:null!==(g=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==g?g:f[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[E,x]=(0,r.useState)(N),z=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=v){const e=y[v];null!=e&&e!==E&&k.some((t=>t.value===e))&&x(e)}const M=e=>{const t=e.currentTarget,n=z.indexOf(t),r=k[n].value;r!==E&&(T(t),x(r),null!=v&&w(v,String(r)))},O=e=>{let t=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{const r=z.indexOf(e.currentTarget)+1;var n;t=null!==(n=z[r])&&void 0!==n?n:z[0];break}case"ArrowLeft":{const n=z.indexOf(e.currentTarget)-1;var r;t=null!==(r=z[n])&&void 0!==r?r:z[z.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},d)},k.map((({value:e,label:t,attributes:n})=>r.createElement("li",s({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:e=>z.push(e),onKeyDown:O,onClick:M},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":E===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function h(e){const t=(0,l.Z)();return r.createElement(m,s({key:String(t)},e))}},42065:function(e,t,n){n.d(t,{gQ:function(){return o},hn:function(){return a},p6:function(){return l}});var r=n(93106);const a=()=>r.createElement("span",{className:"footer_link_connect_wrap"},r.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",r.createElement("span",{className:"wechat_qrcode_icon"},r.createElement("svg",{className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"https://www.w3.org/2000/svg","data-spm-anchor-id":"a313x.7781069.0.i0"},r.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:""}),r.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:""}),r.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:""}),r.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:""})))),r.createElement("span",{className:"footer_link_wechat_img inline"},r.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})));function l(){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),r.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),r.createElement("span",{style:{color:"#4fc08d"}},"Vue"))}function o(){return r.createElement("span",null,r.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},r.createElement("defs",null,r.createElement("style",null)),r.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),r.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),r.createElement("span",{style:{color:"#61dafb"}},"React"))}},64712:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return f}});var r=n(93106),a=n(79874),l=n(11288),o=n(30752),i=n(20714),c=n(42065);var p=function(){return(0,r.useEffect)((()=>{window.LRT&&window.LRT.register({zoneId:"1485579794201481218",debug:!1,positionId:"1485796590212263937",type:"img",containerId:"news",backupUrl:"https://img20.360buyimg.com/img/jfs/t1/220737/13/10934/81315/61dd7009Ead9f1ca0/81f28ce8f80dce8e.jpg",backupLink:"https://mp.weixin.qq.com/s/Hud405mLileIEzHX3Z-ueQ",onClick(e,{url:t}){window.open(t)}})}),[]),r.createElement("div",{id:"news",style:{width:"100%",height:"400px",cursor:"pointer"}})};function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const m={title:"Taro \u4ecb\u7ecd"},h=void 0,v={unversionedId:"README",id:"version-3.x/README",title:"Taro \u4ecb\u7ecd",description:"\u7b80\u4ecb",source:"@site/versioned_docs/version-3.x/README.mdx",sourceDirName:".",slug:"/",permalink:"/taro-docs/docs/",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/README.mdx",tags:[],version:"3.x",frontMatter:{title:"Taro \u4ecb\u7ecd"},sidebar:"docs",next:{title:"Taro \u7248\u672c\u8bf4\u660e",permalink:"/taro-docs/docs/version"}},d={},f=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u591a\u7aef\u8f6c\u6362\u652f\u6301",id:"\u591a\u7aef\u8f6c\u6362\u652f\u6301",level:3},{value:"\u6846\u67b6\u652f\u6301",id:"\u6846\u67b6\u652f\u6301",level:3},{value:"\u65b0\u95fb\u8d44\u8baf",id:"\u65b0\u95fb\u8d44\u8baf",level:2},{value:"Taro UI",id:"taro-ui",level:2},{value:"\u5b66\u4e60\u8d44\u6e90",id:"\u5b66\u4e60\u8d44\u6e90",level:2},{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",level:2}],k={toc:f};function b(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",u({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",u({},{id:"\u7b80\u4ecb"}),"\u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Taro")," \u662f\u4e00\u4e2a\u5f00\u653e\u5f0f\u8de8\u7aef\u8de8\u6846\u67b6\u89e3\u51b3\u65b9\u6848\uff0c\u652f\u6301\u4f7f\u7528 React/Vue/Nerv \u7b49\u6846\u67b6\u6765\u5f00\u53d1 ",(0,a.kt)("a",u({parentName:"p"},{href:"https://mp.weixin.qq.com/"}),"\u5fae\u4fe1")," / ",(0,a.kt)("a",u({parentName:"p"},{href:"https://mp.jd.com/?entrance=taro"}),"\u4eac\u4e1c")," / ",(0,a.kt)("a",u({parentName:"p"},{href:"https://smartprogram.baidu.com/"}),"\u767e\u5ea6")," / ",(0,a.kt)("a",u({parentName:"p"},{href:"https://mini.open.alipay.com/"}),"\u652f\u4ed8\u5b9d")," / ",(0,a.kt)("a",u({parentName:"p"},{href:"https://microapp.bytedance.com/"}),"\u5b57\u8282\u8df3\u52a8")," / ",(0,a.kt)("a",u({parentName:"p"},{href:"https://q.qq.com/"}),"QQ")," / ",(0,a.kt)("a",u({parentName:"p"},{href:"https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN"}),"\u98de\u4e66")," \u5c0f\u7a0b\u5e8f / H5 / RN \u7b49\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u73b0\u5982\u4eca\u5e02\u9762\u4e0a\u7aef\u7684\u5f62\u6001\u591a\u79cd\u591a\u6837\uff0cWeb\u3001React Native\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7b49\u5404\u79cd\u7aef\u5927\u884c\u5176\u9053\u3002\u5f53\u4e1a\u52a1\u8981\u6c42\u540c\u65f6\u5728\u4e0d\u540c\u7684\u7aef\u90fd\u8981\u6c42\u6709\u6240\u8868\u73b0\u7684\u65f6\u5019\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u7aef\u53bb\u7f16\u5199\u591a\u5957\u4ee3\u7801\u7684\u6210\u672c\u663e\u7136\u975e\u5e38\u9ad8\uff0c\u8fd9\u65f6\u5019\u53ea\u7f16\u5199\u4e00\u5957\u4ee3\u7801\u5c31\u80fd\u591f\u9002\u914d\u5230\u591a\u7aef\u7684\u80fd\u529b\u5c31\u663e\u5f97\u6781\u4e3a\u9700\u8981\u3002"),(0,a.kt)("h2",u({},{id:"\u7279\u6027"}),"\u7279\u6027"),(0,a.kt)("h3",u({},{id:"\u591a\u7aef\u8f6c\u6362\u652f\u6301"}),"\u591a\u7aef\u8f6c\u6362\u652f\u6301"),(0,a.kt)("p",null,"Taro 3 \u53ef\u4ee5\u652f\u6301\u8f6c\u6362\u5230 H5\u3001ReactNative \u4ee5\u53ca\u4efb\u610f\u5c0f\u7a0b\u5e8f\u5e73\u53f0\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\u5b98\u65b9\u652f\u6301\u8f6c\u6362\u7684\u5e73\u53f0\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/zh-CN/docs/Web?from=taro"}),"H5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://reactnative.dev/?from=taro"}),"ReactNative")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/?from=taro"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://mp.jd.com/?from=taro"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://smartprogram.baidu.com/developer/index.html?from=taro"}),"\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://opendocs.alipay.com/mini/developer/getting-started?from=taro"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/introduction/overview?from=taro"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://q.qq.com/wiki/develop/miniprogram/frame/?from=taro"}),"QQ \u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://open.dingtalk.com/document/org/develop-org-mini-programs?from=taro"}),"\u9489\u9489\u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/qywx-dev.html?from=taro"}),"\u4f01\u4e1a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://opendocs.alipay.com/iot/multi-platform/vcs0fv?from=taro"}),"\u652f\u4ed8\u5b9d IOT \u5c0f\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN?from=taro"}),"\u98de\u4e66\u5c0f\u7a0b\u5e8f"))),(0,a.kt)("h3",u({},{id:"\u6846\u67b6\u652f\u6301"}),"\u6846\u67b6\u652f\u6301"),(0,a.kt)("p",null,"\u5728 Taro 3 \u4e2d\u53ef\u4ee5\u4f7f\u7528\u5b8c\u6574\u7684 ",(0,a.kt)("strong",{parentName:"p"},"React / Vue / Vue3 / Nerv")," \u5f00\u53d1\u4f53\u9a8c\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"./react-overall"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"./vue-overall"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014Vue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"./vue3"}),"\u57fa\u7840\u6559\u7a0b\u2014\u2014Vue3"))),(0,a.kt)(i.Z,{defaultValue:"React",values:[{label:(0,a.kt)(c.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(c.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class Index extends Component {\n  state = {\n    msg: 'Hello World\uff01',\n  }\n\n  componentWillMount() {}\n\n  componentDidShow() {}\n\n  componentDidHide() {}\n\n  render() {\n    return (\n      <View className=\"index\">\n        <Text>{this.state.msg}</Text>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'}),"<template>\n  <view class=\"index\">\n    <text>{{msg}}</text>\n  </view>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        msg: 'Hello World\uff01',\n      }\n    },\n    created() {},\n    onShow() {},\n    onHide() {},\n  }\n<\/script>\n")))),(0,a.kt)("h2",u({},{id:"\u65b0\u95fb\u8d44\u8baf"}),"\u65b0\u95fb\u8d44\u8baf"),(0,a.kt)(p,{mdxType:"News"}),(0,a.kt)("h2",u({},{id:"taro-ui"}),"Taro UI"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Taro 3 \u53ea\u80fd\u914d\u5408\u4f7f\u7528 taro-ui@next \u7248\u672c"),(0,a.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u547d\u4ee4\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i taro-ui@next"))),(0,a.kt)("p",null,"\u4e00\u6b3e\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"Taro")," \u6846\u67b6\u5f00\u53d1\u7684\u591a\u7aef UI \u7ec4\u4ef6\u5e93\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"https://taro-ui.jd.com"}),"Taro UI")," \u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"Taro")," \u5f00\u53d1 UI \u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u5957\u7ec4\u4ef6\u53ef\u4ee5\u5728\u591a\u7aef\u9002\u914d\u8fd0\u884c\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"ReactNative")," \u7aef\u6682\u4e0d\u652f\u6301\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u53cb\u597d\u7684 API\uff0c\u53ef\u7075\u6d3b\u7684\u4f7f\u7528\u7ec4\u4ef6")),(0,a.kt)("h2",u({},{id:"\u5b66\u4e60\u8d44\u6e90"}),"\u5b66\u4e60\u8d44\u6e90"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/blog"}),"\u3010\u8d44\u8baf\u3011Taro \u56e2\u961f\u535a\u5ba2 ")),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/docs/guide"}),"\u3010\u6559\u7a0b\u30115 \u5206\u949f\u4e0a\u624b Taro \u5f00\u53d1")),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"https://mp.weixin.qq.com/s?__biz=MzU3NDkzMTI3MA==&mid=2247484205&idx=1&sn=935bb7a35c11c33563eeb7c3aaca3321&chksm=fd2bab04ca5c2212b4cd8aeb5858bd08517aeb31e20727b22d1eee00b394184e7e61359e7dd9&token=1180618535&lang=zh_CN#rd"}),"\u3010\u89c6\u9891\u30115 \u5206\u949f\u5feb\u901f\u4e0a\u624b Taro \u5f00\u53d1\u5c0f\u7a0b\u5e8f")),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d"}),"\u3010\u6398\u91d1\u5c0f\u518c\u3011Taro \u591a\u7aef\u5f00\u53d1\u5b9e\u73b0\u539f\u7406\u4e0e\u5b9e\u6218")),(0,a.kt)("p",null,"\u66f4\u591a\u7684\u8d44\u6e90\u8bf7\u70b9\u51fb\u67e5\u770b ",(0,a.kt)("a",u({parentName:"p"},{href:"/taro-docs/docs/composition"}),"\u66f4\u591a\u8d44\u6e90")," \uff0c\u5982\u679c\u60a8\u6709\u597d\u7684\u8d44\u6e90\u6216\u6559\u7a0b\u548c\u5927\u5bb6\u5206\u4eab\uff0c\u6b22\u8fce\u63d0\u4ea4\u8d44\u6e90\u5230 ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/NervJS/awesome-taro"}),"awesome-taro"),"\u3002"),(0,a.kt)("h2",u({},{id:"\u4f7f\u7528\u6848\u4f8b"}),"\u4f7f\u7528\u6848\u4f8b"),(0,a.kt)("p",null,"Taro \u5df2\u7ecf\u6295\u5165\u4e86\u6211\u4eec\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u4e1a\u754c\u4e5f\u5728\u5e7f\u6cdb\u5730\u4f7f\u7528 Taro \u5f00\u53d1\u591a\u7aef\u5e94\u7528\u3002"),(0,a.kt)(l.Z,{to:"/showcase",mdxType:"Link"},"\u67e5\u770b\u66f4\u591a\u7684\u6848\u4f8b\uff0c\u8bf7\u70b9\u51fb"),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/244"}),"\u6211\u4eec\u6b63\u5728\u5f81\u96c6\u66f4\u591a\u4f18\u79c0\u6848\u4f8b\uff0c\u6b22\u8fce\u70b9\u51fb\u63d0\u4ea4")),(0,a.kt)("p",null,(0,a.kt)("img",u({parentName:"p"},{src:"https://raw.githubusercontent.com/NervJS/taro-user-cases/master/user-cases.jpg",alt:"[](https://nervjs.github.io/taro-user-cases/)"}))))}b.isMDXComponent=!0}}]);