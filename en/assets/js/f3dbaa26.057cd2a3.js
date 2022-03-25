"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[93598],{79874:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42674:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(93106);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function l({children:t,hidden:e,className:n}){return r.createElement("div",a({role:"tabpanel"},{hidden:e,className:n}),t)}},14186:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(93106),a=n(98456),l=n(16454),o=n(26679),c="tabItem_uJot";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function s(t){var e,n;const{lazy:a,block:s,defaultValue:p,values:u,groupId:d,className:m}=t,k=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=u?u:k.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),f=(0,l.lx)(b,((t,e)=>t.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const v=null===p?p:null!==(h=null!=p?p:null===(e=k.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==h?h:null===(n=k[0])||void 0===n?void 0:n.props.value;if(null!==v&&!b.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,l.UB)(),[x,N]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=d){const t=g[d];null!=t&&t!==x&&b.some((e=>e.value===t))&&N(t)}const O=t=>{const e=t.currentTarget,n=T.indexOf(e),r=b[n].value;r!==x&&(w(e),N(r),null!=d&&y(d,r))},P=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=T.indexOf(t.currentTarget)+1;e=T[n]||T[0];break}case"ArrowLeft":{const n=T.indexOf(t.currentTarget)-1;e=T[n]||T[T.length-1];break}}null==e||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},m)},b.map((({value:t,label:e,attributes:n})=>r.createElement("li",i({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:t=>T.push(t),onKeyDown:P,onFocus:O,onClick:O},n,{className:(0,o.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":x===t})}),null!=e?e:t)))),a?(0,r.cloneElement)(k.filter((t=>t.props.value===x))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function p(t){const e=(0,a.Z)();return r.createElement(s,i({key:String(e)},t))}},51897:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});n(93106);var r=n(79874),a=n(14186),l=n(42674);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Text",sidebar_label:"Text"},s=void 0,p={unversionedId:"components/base/text",id:"version-3.x/components/base/text",title:"Text",description:"Text.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/base/text.md",sourceDirName:"components/base",slug:"/components/base/text",permalink:"/taro-docs/en/docs/components/base/text",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/components/base/text.md",tags:[],version:"3.x",frontMatter:{title:"Text",sidebar_label:"Text"},sidebar:"components",previous:{title:"Icon",permalink:"/taro-docs/en/docs/components/base/icon"},next:{title:"Progress",permalink:"/taro-docs/en/docs/components/base/progress"}},u={},d=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"TextProps",id:"textprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"TSpace",id:"tspace",level:3},{value:"API Support",id:"api-support",level:2}],m={toc:d};function k(t){var{components:e}=t,n=c(t,["components"]);return(0,r.kt)("wrapper",o({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Text."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/text.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<TextProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  state = {\n    contents: [],\n    contentsLen: 0\n  }\n\n  add = () => {\n    this.setState(prev => {\n      const cot = prev.contents.slice()\n      cot.push({ text: 'hello world' })\n      return {\n        contents: cot,\n        contentsLen: cot.length\n      }\n    })\n  }\n\n  remove = () => {\n    this.setState(prev => {\n      const cot = prev.contents.slice()\n      cot.pop()\n      return {\n        contents: cot,\n        contentsLen: cot.length\n      }\n    })\n  }\n\n  render () {\n    return (\n      <View className='container'>\n        {this.state.contents.map((item, index) => (\n          <Text key={index}>{item.text}</Text>\n        ))}\n        <Button className='btn-max-w button_style' plain type='default' onClick={this.add}>add line</Button>\n        <Button className='btn-max-w button_style' plain type='default' disabled={this.state.contentsLen ? false : true} onClick={this.remove}>remove line</Button>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="container">\n    <view v-for="(item, index) in contents">\n      <text>{{item.text}} line {{index + 1}}</text>\n    </view>\n    <button class="btn-max-w button_style" :plain="true" type="default" @tap="add">add line</button>\n    <button class="btn-max-w button_style" :plain="true" type="default" :disabled="contentsLen ? false : true" @tap="remove">remove line</button>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      contents: [],\n      contentsLen: 0\n    }\n  },\n  methods: {\n    add () {\n      const cot = this.contents.slice()\n      cot.push({ text: \'hello world\' })\n      this.contents = cot\n      this.contentsLen = cot.length\n    },\n\n    remove () {\n      const cot = this.contents.slice()\n      cot.pop()\n      this.contents = cot\n      this.contentsLen = cot.length\n    }\n  }\n}\n<\/script>\n')))),(0,r.kt)("h2",o({},{id:"textprops"}),"TextProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"selectable"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether the text is selectable")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"space"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"ensp" | "emsp" | "nbsp"')),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Displays consecutive spaces")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"decode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to decode component")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextProps.selectable"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextProps.space"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"TextProps.decode"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"tspace"}),"TSpace"),(0,r.kt)("p",null,"Valid values of space"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Value"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"ensp"),(0,r.kt)("td",null,"En space")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"emsp"),(0,r.kt)("td",null,"Em space")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"nbsp"),(0,r.kt)("td",null,"The size of the space is set according to the font setting")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Text"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);