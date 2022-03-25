"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99051],{79874:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return s}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),d=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return l.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),p=d(n),s=r,m=p["".concat(c,".").concat(s)]||p[s]||u[s]||a;return n?l.createElement(m,i(i({ref:e},k),{},{components:n})):l.createElement(m,i({ref:e},k))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42674:function(t,e,n){n.d(e,{Z:function(){return a}});var l=n(93106);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a({children:t,hidden:e,className:n}){return l.createElement("div",r({role:"tabpanel"},{hidden:e,className:n}),t)}},14186:function(t,e,n){n.d(e,{Z:function(){return k}});var l=n(93106),r=n(98456),a=n(16454),i=n(26679),o="tabItem_uJot";function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},c.apply(this,arguments)}function d(t){var e,n;const{lazy:r,block:d,defaultValue:k,values:u,groupId:p,className:s}=t,m=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=u?u:m.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),h=(0,a.lx)(g,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===k?k:null!==(y=null!=k?k:null===(e=m.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==y?y:null===(n=m[0])||void 0===n?void 0:n.props.value;if(null!==v&&!g.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,a.UB)(),[f,P]=(0,l.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,a.o5)();if(null!=p){const t=N[p];null!=t&&t!==f&&g.some((e=>e.value===t))&&P(t)}const C=t=>{const e=t.currentTarget,n=x.indexOf(e),l=g[n].value;l!==f&&(w(e),P(l),null!=p&&b(p,l))},T=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=x.indexOf(t.currentTarget)+1;e=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(t.currentTarget)-1;e=x[n]||x[x.length-1];break}}null==e||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},s)},g.map((({value:t,label:e,attributes:n})=>l.createElement("li",c({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:t=>x.push(t),onKeyDown:T,onFocus:C,onClick:C},n,{className:(0,i.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":f===t})}),null!=e?e:t)))),r?(0,l.cloneElement)(m.filter((t=>t.props.value===f))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},m.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==f})))))}function k(t){const e=(0,r.Z)();return l.createElement(d,c({key:String(e)},t))}},86082:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return k},toc:function(){return p}});n(93106);var l=n(79874),r=n(14186),a=n(42674);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const c={title:"Picker",sidebar_label:"Picker"},d=void 0,k={unversionedId:"components/forms/picker",id:"version-3.x/components/forms/picker",title:"Picker",description:"The scroll picker that pops up from the lower part.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/forms/picker.md",sourceDirName:"components/forms",slug:"/components/forms/picker",permalink:"/taro-docs/en/docs/components/forms/picker",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/components/forms/picker.md",tags:[],version:"3.x",frontMatter:{title:"Picker",sidebar_label:"Picker"},sidebar:"components",previous:{title:"Label",permalink:"/taro-docs/en/docs/components/forms/label"},next:{title:"PickerView",permalink:"/taro-docs/en/docs/components/forms/picker-view"}},u={},p=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"PickerStandardProps",id:"pickerstandardprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"mode",id:"mode",level:3},{value:"PickerSelectorProps",id:"pickerselectorprops",level:2},{value:"Property Support",id:"property-support-1",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",level:3},{value:"PickerMultiSelectorProps",id:"pickermultiselectorprops",level:2},{value:"Property Support",id:"property-support-2",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail-1",level:3},{value:"onColumnChangeEvnetDetail",id:"oncolumnchangeevnetdetail",level:3},{value:"PickerTimeProps",id:"pickertimeprops",level:2},{value:"Property Support",id:"property-support-3",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail-2",level:3},{value:"PickerDateProps",id:"pickerdateprops",level:2},{value:"Property Support",id:"property-support-4",level:3},{value:"fields",id:"fields",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail-3",level:3},{value:"PickerRegionProps",id:"pickerregionprops",level:2},{value:"Property Support",id:"property-support-5",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail-4",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:p};function m(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",i({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The scroll picker that pops up from the lower part."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/picker.html"}),"Reference"))),(0,l.kt)("h2",i({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<PickerSelectorProps | PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps>\n")),(0,l.kt)("h2",i({},{id:"examples"}),"Examples"),(0,l.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"export default class PagePicker extends Component {\n  state = {\n    selector: ['United States', 'China', 'Brazil', 'Japan'],\n    selectorChecked: 'United States',\n    timeSel: '12:01',\n    dateSel: '2018-04-22'\n  }\n\n  onChange = e => {\n    this.setState({\n      selectorChecked: this.state.selector[e.detail.value]\n    })\n  }\n\n  onTimeChange = e => {\n    this.setState({\n      timeSel: e.detail.value\n    })\n  }\n  onDateChange = e => {\n    this.setState({\n      dateSel: e.detail.value\n    })\n  }\n\n  render () {\n    return (\n      <View className='container'>\n        <View className='page-body'>\n          <View className='page-section'>\n            <Text>Province, city, and district picker</Text>\n            <View>\n              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>\n                <View className='picker'>\n                  Currently selected: {this.state.selectorChecked}\n                </View>\n              </Picker>\n            </View>\n          </View>\n          <View className='page-section'>\n            <Text>Time picker</Text>\n            <View>\n              <Picker mode='time' onChange={this.onTimeChange}>\n                <View className='picker'>\n                  Currently selected: {this.state.timeSel}\n                </View>\n              </Picker>\n            </View>\n          </View>\n          <View className='page-section'>\n            <Text>Date picker</Text>\n            <View>\n              <Picker mode='date' onChange={this.onDateChange}>\n                <View className='picker'>\n                  Currently selected: {this.state.dateSel}\n                </View>\n              </Picker>\n            </View>\n          </View>\n        </View>\n      </View>\n    )\n  }\n}\n"))),(0,l.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="page-body">\n    <view class="page-section">\n      <text>Province, city, and district picker</text>\n      <view>\n        <picker mode="selector" :range="selector" @change="onChange">\n          <view class="picker">\n            Currently selected: {{selectorChecked}}\n          </view>\n        </picker>\n      </view>\n    </view>\n    <view class="page-section">\n      <text>Time picker</text>\n      <view>\n        <picker mode="time" @change="onTimeChange">\n          <view class="picker">\n            Currently selected: {{timeSel}}\n          </view>\n        </picker>\n      </view>\n    </view>\n    <view class="page-section">\n      <text>Date picker</text>\n      <view>\n        <picker mode="date" @change="onDateChange">\n          <view class="picker">\n            Currently selected: {{dateSel}}\n          </view>\n        </picker>\n      </view>\n    </view>\n  </view>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        selector: [\'United States\', \'China\', \'Brazil\', \'Japan\'],\n        selectorChecked: \'United States\',\n        timeSel: \'12:01\',\n        dateSel: \'2018-04-22\'\n      }\n    },\n    methods: {\n      onChange: function(e) {\n        this.selectorChecked = this.selector[e.detail.value]\n      },\n\n      onTimeChange: function(e) {\n        this.timeSel = e.detail.value\n      },\n\n      onDateChange: function(e) {\n        this.dateSel = e.detail.value\n      }\n    }\n  }\n<\/script>\n\n')))),(0,l.kt)("h2",i({},{id:"pickerstandardprops"}),"PickerStandardProps"),(0,l.kt)("p",null,"Selector General Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"selector" | "multiSelector" | "time" | "date" | "region"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"selector"')),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The type of the picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to disable the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onCancel"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when selection is canceled")))),(0,l.kt)("h3",i({},{id:"property-support"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerStandardProps.mode"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerStandardProps.disabled"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerStandardProps.onCancel"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",i({},{id:"mode"}),"mode"),(0,l.kt)("p",null,"Valid values of mode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"selector"),(0,l.kt)("td",null,"Common picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"multiSelector"),(0,l.kt)("td",null,"Multi-column picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"time"),(0,l.kt)("td",null,"Time picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"date"),(0,l.kt)("td",null,"Date picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"region"),(0,l.kt)("td",null,"Province, city, and district picker")))),(0,l.kt)("h2",i({},{id:"pickerselectorprops"}),"PickerSelectorProps"),(0,l.kt)("p",null,"Common picker: mode = selector"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"selector"')),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The type of the picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"range"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[] | number[] | Object[]")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Valid when the mode is selector or multiSelector.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"rangeKey"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the key value of the object as the content to be displayed on the picker when range is an object array.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Indicates the sequence number (starting from 0 in the subscript) of the item selected in range.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"A change event is triggered when value is changed. event.detail = ","{value}")))),(0,l.kt)("h3",i({},{id:"property-support-1"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerSelectorProps.range"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerSelectorProps.rangeKey"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerSelectorProps.value"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerSelectorProps.onChange"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",i({},{id:"onchangeeventdetail"}),"onChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | number")),(0,l.kt)("td",null,"Indicates the subscript of the changed value")))),(0,l.kt)("h2",i({},{id:"pickermultiselectorprops"}),"PickerMultiSelectorProps"),(0,l.kt)("p",null,"Multi-column picker: mode = multiSelector"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"multiSelector"')),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The type of the picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"range"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[][] | number[][] | Object[][]")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Valid when the mode is selector or multiSelector.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"rangeKey"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies the key value of the object as the content to be displayed on the picker when range is an object array.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[] | number[] | Object[]")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Indicates the sequence number (starting from 0 in the subscript) of the item selected in range.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"A change event is triggered when value is changed. event.detail = ","{value}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onColumnChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onColumnChangeEvnetDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when the column changes.")))),(0,l.kt)("h3",i({},{id:"property-support-2"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.range"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.rangeKey"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.value"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.onChange"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerMultiSelectorProps.onColumnChange"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",i({},{id:"onchangeeventdetail-1"}),"onChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number[]")),(0,l.kt)("td",null,"Indicates the subscript of the changed value")))),(0,l.kt)("h3",i({},{id:"oncolumnchangeevnetdetail"}),"onColumnChangeEvnetDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"column"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Indicates which column was changed (subscripts start from 0)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Indicates the subscript of the changed value")))),(0,l.kt)("h2",i({},{id:"pickertimeprops"}),"PickerTimeProps"),(0,l.kt)("p",null,"Time picker: mode = time"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"time"')),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The type of the picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,'The selected time, in the form of "hh:mm".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"start"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'The start of the valid time range, in the form of "hh:mm".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"end"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'The end of the valid time range, in the form of "hh:mm".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"A change event triggered when the value is changed. event.detail = ","{value}")))),(0,l.kt)("h3",i({},{id:"property-support-3"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerTimeProps.value"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerTimeProps.start"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerTimeProps.end"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerTimeProps.onChange"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",i({},{id:"onchangeeventdetail-2"}),"onChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Indicates the selected time")))),(0,l.kt)("h2",i({},{id:"pickerdateprops"}),"PickerDateProps"),(0,l.kt)("p",null,"Date picker: mode = date"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"date"')),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The type of the picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,'The selected date, in the form of "YYYY-MM-DD". ')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"start"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'The start of the valid date range, in the form of "YYYY-MM-DD".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"end"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'The end of the valid date range, in the form of "YYYY-MM-DD".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fields"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"year" | "month" | "day"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"day"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'The granularity of the picker. Valid values include "year", "month", and "day".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"vA change event triggered when the value is changed. event.detail = ","{value}")))),(0,l.kt)("h3",i({},{id:"property-support-4"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerDateProps.value"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerDateProps.start"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerDateProps.end"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerDateProps.fields"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerDateProps.onChange"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",i({},{id:"fields"}),"fields"),(0,l.kt)("p",null,"Valid values of fields"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"year"),(0,l.kt)("td",null,"The granularity of the picker is year.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"month"),(0,l.kt)("td",null,"The granularity of the picker is month.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"day"),(0,l.kt)("td",null,"The granularity of the picker is day.")))),(0,l.kt)("h3",i({},{id:"onchangeeventdetail-3"}),"onChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Indicates the selected date")))),(0,l.kt)("h2",i({},{id:"pickerregionprops"}),"PickerRegionProps"),(0,l.kt)("p",null,"Province, city, and district picker: mode = region"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"region"')),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The type of the picker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The selected province, city, and district. The first value in each column is selected by default.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"customItem"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies a custom item to be added to the top of each column.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"A change event triggered when the value is changed, event.detail = ","{value, code, postcode}",". The code field refers to the statistical zoning code, and the postcode field refers to the post code.")))),(0,l.kt)("h3",i({},{id:"property-support-5"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerRegionProps.value"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerRegionProps.customItem"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"PickerRegionProps.onChange"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,l.kt)("h3",i({},{id:"onchangeeventdetail-4"}),"onChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"value"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Indicates the selected province and city")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"code"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Zone Codes for Statistics")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"postcode"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Postal Code")))),(0,l.kt)("h2",i({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"Picker"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);