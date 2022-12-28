"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[51977],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30752:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),a=n(4706),o="tabItem_DpXT";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},20714:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(93106),a=n(4706),o=n(78949),l=n(46275),i=n(59099),c=n(14376),p="tabList_Q_yt",s="tabItem_hclQ";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=d?d:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,l.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var k;const y=null===m?m:null!==(k=null!=m?m:null===(t=v.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==k?k:v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,i.U)(),[O,P]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&g.some((t=>t.value===e))&&P(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==O&&(j(t),P(r),null!=f&&N(f,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[r])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var r;t=null!==(r=x[n])&&void 0!==r?r:x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},b)},g.map((({value:e,label:t,attributes:n})=>r.createElement("li",u({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:C,onClick:E},n,{className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,u({key:String(t)},e))}},67078:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});n(93106);var r=n(79874),a=n(20714),o=n(30752);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"RootPortal",sidebar_label:"RootPortal"},p=void 0,s={unversionedId:"components/viewContainer/root-portal",id:"components/viewContainer/root-portal",title:"RootPortal",description:"root-portal",source:"@site/docs/components/viewContainer/root-portal.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/root-portal",permalink:"/taro-docs/en/docs/next/components/viewContainer/root-portal",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/viewContainer/root-portal.md",tags:[],version:"current",frontMatter:{title:"RootPortal",sidebar_label:"RootPortal"},sidebar:"components",previous:{title:"PageContainer",permalink:"/taro-docs/en/docs/next/components/viewContainer/page-container"},next:{title:"ScrollView",permalink:"/taro-docs/en/docs/next/components/viewContainer/scroll-view"}},u={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"RootPortalProps",id:"rootportalprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],d={toc:m};function f(e){var{components:t}=e,c=i(e,["components"]);return(0,r.kt)("wrapper",l({},d,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"root-portal\n\u4f7f\u6574\u4e2a\u5b50\u6811\u4ece\u9875\u9762\u4e2d\u8131\u79bb\u51fa\u6765\uff0c\u7c7b\u4f3c\u4e8e\u5728 CSS \u4e2d\u4f7f\u7528 fixed position \u7684\u6548\u679c\u3002\u4e3b\u8981\u7528\u4e8e\u5236\u4f5c\u5f39\u7a97\u3001\u5f39\u51fa\u5c42\u7b49\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,r.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,r.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,r.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html"}),"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RootPortalProps>\n")),(0,r.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"import { useState } from 'react'\nimport { RootPortal, View, Button } from '@tarojs/components'\n\nexport default function RootPortalExample {\n  const [show, setShow] = useState(false)\n  const toggle = () => {\n    setShow(!show)\n  }\n  render () {\n    return (\n      <View>\n        <Button onClick={toggle}>\u663e\u793aroot-portal</Button>\n        {\n          show && (<RootPortal><View>content</View></RootPortal>)\n        }\n      </View>\n    )\n  }\n}\n")))),(0,r.kt)("h2",l({},{id:"rootportalprops"}),"RootPortalProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"enable"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"\u662f\u5426\u4ece\u9875\u9762\u4e2d\u8131\u79bb\u51fa\u6765")))),(0,r.kt)("h3",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"Harmony"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"RootPortalProps.enable"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))))))}f.isMDXComponent=!0},80068:function(e,t,n){t.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(e,t,n){t.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(e,t,n){t.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},88421:function(e,t,n){t.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);