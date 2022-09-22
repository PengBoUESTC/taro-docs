"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[43803],{79874:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return s}});var a=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,o=c(t,["components","mdxType","originalType","parentName"]),k=m(n),s=r,u=k["".concat(p,".").concat(s)]||k[s]||d[s]||i;return n?a.createElement(u,l(l({ref:e},o),{},{components:n})):a.createElement(u,l({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92985:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(93106),r=n(4706),i="tabItem_hkNs";function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l.apply(this,arguments)}function c({children:t,hidden:e,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:e}),t)}},12959:function(t,e,n){n.d(e,{Z:function(){return s}});var a=n(93106),r=n(4706),i=n(57293),l=n(23744),c=n(76741),p=n(33696),m="tabList_HZIO",o="tabItem_bO0X";function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},d.apply(this,arguments)}function k(t){var e;const{lazy:n,block:i,defaultValue:k,values:s,groupId:u,className:g}=t,N=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=s?s:N.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),h=(0,l.l)(v,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var f;const y=null===k?k:null!==(f=null!=k?k:null===(e=N.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==f?f:N[0].props.value;if(null!==y&&!v.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,c.U)(),[P,C]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=u){const t=b[u];null!=t&&t!==P&&v.some((e=>e.value===t))&&C(t)}const V=t=>{const e=t.currentTarget,n=x.indexOf(e),a=v[n].value;a!==P&&(O(e),C(a),null!=u&&w(u,String(a)))},E=t=>{let e=null;switch(t.key){case"ArrowRight":{const a=x.indexOf(t.currentTarget)+1;var n;e=null!==(n=x[a])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(t.currentTarget)-1;var a;e=null!==(a=x[n])&&void 0!==a?a:x[x.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",m)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},v.map((({value:t,label:e,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:t=>x.push(t),onKeyDown:E,onFocus:V,onClick:V},n,{className:(0,r.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":P===t})}),null!=e?e:t)))),n?(0,a.cloneElement)(N.filter((t=>t.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==P})))))}function s(t){const e=(0,i.Z)();return a.createElement(k,d({key:String(e)},t))}},15170:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});n(93106);var a=n(79874),r=n(12959),i=n(92985);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"PickerView",sidebar_label:"PickerView"},m=void 0,o={unversionedId:"components/forms/picker-view",id:"version-3.x/components/forms/picker-view",title:"PickerView",description:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668",source:"@site/versioned_docs/version-3.x/components/forms/picker-view.md",sourceDirName:"components/forms",slug:"/components/forms/picker-view",permalink:"/taro-docs/docs/components/forms/picker-view",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/picker-view.md",tags:[],version:"3.x",frontMatter:{title:"PickerView",sidebar_label:"PickerView"},sidebar:"components",previous:{title:"Picker",permalink:"/taro-docs/docs/components/forms/picker"},next:{title:"Radio",permalink:"/taro-docs/docs/components/forms/radio"}},d={},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"PickerViewProps",id:"pickerviewprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",level:3}],s={toc:k};function u(t){var{components:e}=t,p=c(t,["components"]);return(0,a.kt)("wrapper",l({},s,p,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668\n\u5176\u4e2d\u53ea\u53ef\u653e\u7f6e picker-view-column \u7ec4\u4ef6\uff0c\u5176\u5b83\u8282\u70b9\u4e0d\u4f1a\u663e\u793a"),(0,a.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,a.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:n(88421).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:n(50154).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:n(88789).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:n(75629).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"H5",src:n(80068).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"React Native",src:n(96636).Z,className:"icon_platform",width:"25px"})," ",(0,a.kt)("img",{title:"Harmony",src:n(10532).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType<PickerViewProps>\n")),(0,a.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"export default class Picks extends Component {\n\n  constructor () {\n    super(...arguments)\n    const date = new Date()\n    const years = []\n    const months = []\n    const days = []\n    for (let i = 1990; i <= date.getFullYear(); i++) {\n      years.push(i)\n    }\n    for (let i = 1; i <= 12; i++) {\n      months.push(i)\n    }\n    for (let i = 1; i <= 31; i++) {\n      days.push(i)\n    }\n    this.state = {\n      years: years,\n      year: date.getFullYear(),\n      months: months,\n      month: 2,\n      days: days,\n      day: 2,\n      value: [9999, 1, 1]\n    }\n  }\n\n  onChange = e => {\n    const val = e.detail.value\n    this.setState({\n      year: this.state.years[val[0]],\n      month: this.state.months[val[1]],\n      day: this.state.days[val[2]],\n      value: val\n    })\n  }\n\n  render() {\n    return (\n      <View>\n        <View>{this.state.year}\u5e74{this.state.month}\u6708{this.state.day}\u65e5</View>\n        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>\n          <PickerViewColumn>\n            {this.state.years.map(item => {\n              return (\n                <View>{item}\u5e74</View>\n              );\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.months.map(item => {\n              return (\n                <View>{item}\u6708</View>\n              )\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.days.map(item => {\n              return (\n                <View>{item}\u65e5</View>\n              )\n            })}\n          </PickerViewColumn>\n        </PickerView>\n      </View>\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="taro-example">\n  <view>{{year}}\u5e74{{month}}\u6708{{day}}\u65e5</view>\n  <picker-view indicator-style="height: 30px;" style="width: 100%; height: 300px;" :value="value" @change="onChange">\n    <picker-view-column>\n      <view v-for="(item, index) in years" :key="index">{{item}}\u5e74</view>\n    </picker-view-column>\n    <picker-view-column>\n      <view v-for="(item, index) in months" :key="index">{{item}}\u6708</view>\n    </picker-view-column>\n    <picker-view-column>\n      <view v-for="(item, index) in days" :key="index">{{item}}\u65e5</view>\n    </picker-view-column>\n  </picker-view>\n</view>\n</template>\n\n<script>\n  export default {\n    name: "Index",\n    data() {\n      const date = new Date()\n      const years = []\n      const months = []\n      const days = []\n      for (let i = 1990; i <= date.getFullYear(); i++) {\n        years.push(i)\n      }\n      for (let i = 1; i <= 12; i++) {\n        months.push(i)\n      }\n      for (let i = 1; i <= 31; i++) {\n        days.push(i)\n      }\n      return {\n        years: years,\n        year: date.getFullYear(),\n        months: months,\n        month: 2,\n        days: days,\n        day: 2,\n        value: [3, 1, 1]\n      }\n    },\n\n    methods: {\n      onChange: function(e) {\n        const val = e.detail.value\n        console.log(val)\n        this.year = this.years[val[0]]\n        this.month = this.months[val[1]]\n        this.day = this.days[val[2]]\n      }\n    }\n  }\n<\/script>\n')))),(0,a.kt)("h2",l({},{id:"pickerviewprops"}),"PickerViewProps"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number[]")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u6570\u7ec4\u4e2d\u7684\u6570\u5b57\u4f9d\u6b21\u8868\u793a picker-view \u5185\u7684 picker-view-column \u9009\u62e9\u7684\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\uff0c\u6570\u5b57\u5927\u4e8e picker-view-column \u53ef\u9009\u9879\u957f\u5ea6\u65f6\uff0c\u9009\u62e9\u6700\u540e\u4e00\u9879\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indicatorStyle"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u6837\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"indicatorClass"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u7c7b\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"maskStyle"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8499\u5c42\u7684\u6837\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"maskClass"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u8499\u5c42\u7684\u7c7b\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"immediateChange"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u662f\u5426\u5728\u624b\u6307\u677e\u5f00\u65f6\u7acb\u5373\u89e6\u53d1 change \u4e8b\u4ef6\u3002\u82e5\u4e0d\u5f00\u542f\u5219\u4f1a\u5728\u6eda\u52a8\u52a8\u753b\u7ed3\u675f\u540e\u89e6\u53d1 change \u4e8b\u4ef6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onChange"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction<onChangeEventDetail>")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5f53\u6eda\u52a8\u9009\u62e9\uff0cvalue \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = {value: value}\uff1bvalue\u4e3a\u6570\u7ec4\uff0c\u8868\u793a picker-view \u5185\u7684 picker-view-column \u5f53\u524d\u9009\u62e9\u7684\u662f\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onPickStart"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5f53\u6eda\u52a8\u9009\u62e9\u5f00\u59cb\u65f6\u5019\u89e6\u53d1\u4e8b\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onPickEnd"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5f53\u6eda\u52a8\u9009\u62e9\u7ed3\u675f\u65f6\u5019\u89e6\u53d1\u4e8b\u4ef6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u9009\u62e9\u5668\u6807\u9898\uff0c\u5efa\u8bae\u6807\u9898\u63a7\u5236\u5728 12 \u4e2a\u4e2d\u6587\u6c49\u5b57\u957f\u5ea6\u5185\uff0c\u907f\u514d\u51fa\u73b0\u622a\u65ad\u73b0\u8c61, \u622a\u65ad\u90e8\u5206\u5c06\u4ee5 ... \u5f62\u5f0f\u5c55\u793a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"ariaLabel"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u65e0\u969c\u788d\u8bbf\u95ee\uff0c\uff08\u5c5e\u6027\uff09\u5143\u7d20\u7684\u989d\u5916\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onPickerStart"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5f53\u6eda\u52a8\u9009\u62e9\u5f00\u59cb\u65f6\u5019\u89e6\u53d1\u4e8b\u4ef6\u3002",(0,a.kt)("br",null),"\u7248\u672c\u8981\u6c42\uff1a \u57fa\u7840\u5e93\xa02.7.23\xa0\u53ca\u4ee5\u4e0a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"onPickerEnd"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u5426"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5f53\u6eda\u52a8\u9009\u62e9\u7ed3\u675f\u65f6\u5019\u89e6\u53d1\u4e8b\u4ef6\u3002",(0,a.kt)("br",null),"\u7248\u672c\u8981\u6c42\uff1a \u57fa\u7840\u5e93 2.7.23 \u53ca\u4ee5\u4e0a")))),(0,a.kt)("h3",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"QQ \u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"Harmony"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.value"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.indicatorStyle"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.indicatorClass"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.maskStyle"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.maskClass"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.immediateChange"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.onChange"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.onPickStart"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.onPickEnd"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.title"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.ariaLabel"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.onPickerStart"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"PickerViewProps.onPickerEnd"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))))),(0,a.kt)("h3",l({},{id:"onchangeeventdetail"}),"onChangeEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"value"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number[]"))))))}u.isMDXComponent=!0},88789:function(t,e,n){e.Z=n.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},80068:function(t,e,n){e.Z=n.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},10532:function(t,e,n){e.Z=n.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},96636:function(t,e,n){e.Z=n.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},50154:function(t,e,n){e.Z=n.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},75629:function(t,e,n){e.Z=n.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},88421:function(t,e,n){e.Z=n.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);