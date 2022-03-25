"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[93618],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(n),k=a,m=s["".concat(c,".").concat(k)]||s[k]||u[k]||l;return n?r.createElement(m,i(i({ref:e},p),{},{components:n})):r.createElement(m,i({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},42674:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(93106);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l({children:t,hidden:e,className:n}){return r.createElement("div",a({role:"tabpanel"},{hidden:e,className:n}),t)}},14186:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(93106),a=n(98456),l=n(16454),i=n(26679),o="tabItem_uJot";function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function d(t){var e,n;const{lazy:a,block:d,defaultValue:p,values:u,groupId:s,className:k}=t,m=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=u?u:m.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),N=(0,l.lx)(g,((t,e)=>t.value===e.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const h=null===p?p:null!==(v=null!=p?p:null===(e=m.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==v?v:null===(n=m[0])||void 0===n?void 0:n.props.value;if(null!==h&&!g.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,l.UB)(),[b,x]=(0,r.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=s){const t=f[s];null!=t&&t!==b&&g.some((e=>e.value===t))&&x(t)}const O=t=>{const e=t.currentTarget,n=w.indexOf(e),r=g[n].value;r!==b&&(P(e),x(r),null!=s&&y(s,r))},T=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=w.indexOf(t.currentTarget)+1;e=w[n]||w[0];break}case"ArrowLeft":{const n=w.indexOf(t.currentTarget)-1;e=w[n]||w[w.length-1];break}}null==e||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},k)},g.map((({value:t,label:e,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:t=>w.push(t),onKeyDown:T,onFocus:O,onClick:O},n,{className:(0,i.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":b===t})}),null!=e?e:t)))),a?(0,r.cloneElement)(m.filter((t=>t.props.value===b))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==b})))))}function p(t){const e=(0,a.Z)();return r.createElement(d,c({key:String(e)},t))}},23675:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});n(93106);var r=n(79874),a=n(14186),l=n(42674);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const c={title:"Slider",sidebar_label:"Slider"},d=void 0,p={unversionedId:"components/forms/slider",id:"version-3.x/components/forms/slider",title:"Slider",description:"A slider picker.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/forms/slider.md",sourceDirName:"components/forms",slug:"/components/forms/slider",permalink:"/taro-docs/en/docs/components/forms/slider",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/components/forms/slider.md",tags:[],version:"3.x",frontMatter:{title:"Slider",sidebar_label:"Slider"},sidebar:"components",previous:{title:"Radio",permalink:"/taro-docs/en/docs/components/forms/radio"},next:{title:"Switch",permalink:"/taro-docs/en/docs/components/forms/switch"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"SliderProps",id:"sliderprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",level:3},{value:"API Support",id:"api-support",level:2}],k={toc:s};function m(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",i({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A slider picker."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/slider.html"}),"Reference"))),(0,r.kt)("h2",i({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<SliderProps>\n")),(0,r.kt)("h2",i({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>sets step</Text>\n        <Slider step={1} value={50}/>\n        <Text>displays the current value</Text>\n        <Slider step={1} value={50} showValue/>\n        <Text>sets the minimum/maximum value</Text>\n        <Slider step={1} value={100} showValue min={50} max={200}/>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <text>sets step</text>\n    <slider step="1" value="50"/>\n    <text>displays the current value</text>\n    <slider step="1" value="50" :show-value="true" />\n    <text>sets the minimum/maximum value</text>\n    <slider step="1" value="100" :show-value="true" min="50" max="200"/>\n  </view>\n</template>\n')))),(0,r.kt)("h2",i({},{id:"sliderprops"}),"SliderProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"min"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The minimum value.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"max"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"100")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The maximum value.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"step"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"1")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The step. Its value must be greater than 0, and can be exactly divided by (max \u2013 min).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"disabled"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to disable the component.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The current value.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"color"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"#e9e9e9"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The color of the background bar (Use backgroundColor).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"selectedColor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"#1aad19"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The selected color (Use activeColor).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"activeColor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"#1aad19"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The selected color.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"backgroundColor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"#e9e9e9"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The color of the background bar.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"blockSize"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"28")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The size of the swiper. Its values range from 12 to 28.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"blockColor"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"#ffffff"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The color of the swiper.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"showValue"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to display the current value.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onChange"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The event triggered after the swiper is dragged.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onChanging"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The event triggered during dragging of the swiper.")))),(0,r.kt)("h3",i({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.min"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.max"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.step"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.disabled"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.value"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.color"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.selectedColor"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"})),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.activeColor"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.backgroundColor"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.blockSize"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.blockColor"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.showValue"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.onChange"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"SliderProps.onChanging"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,r.kt)("h3",i({},{id:"onchangeeventdetail"}),"onChangeEventDetail"),(0,r.kt)("h2",i({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"Slider"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);