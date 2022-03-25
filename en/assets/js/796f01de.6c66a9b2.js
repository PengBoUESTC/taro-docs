"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[61876],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),k=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=k(t.components);return l.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=k(n),m=r,s=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return n?l.createElement(s,o(o({ref:e},c),{},{components:n})):l.createElement(s,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var k=2;k<a;k++)o[k]=n[k];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57853:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={title:"MovableView",sidebar_label:"MovableView"},i=void 0,d={unversionedId:"components/viewContainer/movable-view",id:"version-2.x/components/viewContainer/movable-view",title:"MovableView",description:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8\u3002movable-view \u5fc5\u987b\u5728 movable-area \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u76f4\u63a5\u5b50\u8282\u70b9\uff0c\u5426\u5219\u4e0d\u80fd\u79fb\u52a8\u3002",source:"@site/versioned_docs/version-2.x/components/viewContainer/movable-view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/movable-view",permalink:"/taro-docs/en/docs/2.x/components/viewContainer/movable-view",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-2.x/components/viewContainer/movable-view.md",tags:[],version:"2.x",frontMatter:{title:"MovableView",sidebar_label:"MovableView"},sidebar:"version-2.x/components",previous:{title:"Swiper",permalink:"/taro-docs/en/docs/2.x/components/viewContainer/swiper"},next:{title:"CoverView",permalink:"/taro-docs/en/docs/2.x/components/viewContainer/cover-view"}},k={},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"MovableViewProps",id:"movableviewprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3},{value:"TChangeSource",id:"tchangesource",level:3},{value:"onChangeEventDeatil",id:"onchangeeventdeatil",level:3},{value:"onScaleEventDeatil",id:"onscaleeventdeatil",level:3},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",level:2}],u={toc:c};function p(t){var{components:e}=t,n=a(t,["components"]);return(0,l.kt)("wrapper",r({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8\u3002movable-view \u5fc5\u987b\u5728 movable-area \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u76f4\u63a5\u5b50\u8282\u70b9\uff0c\u5426\u5219\u4e0d\u80fd\u79fb\u52a8\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"}),"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",r({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MovableViewProps>\n")),(0,l.kt)("h2",r({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>\n      </MovableArea>\n    )\n  }\n}\n")),(0,l.kt)("h2",r({},{id:"movableviewprops"}),"MovableViewProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"direction"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"all" | "vertical" | "horizontal" | "none"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"none")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"movable-view \u7684\u79fb\u52a8\u65b9\u5411\uff0c\u5c5e\u6027\u503c\u6709",(0,l.kt)("code",null,"all"),"\u3001",(0,l.kt)("code",null,"vertical"),"\u3001",(0,l.kt)("code",null,"horizontal"),"\u3001",(0,l.kt)("code",null,"none"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"inertia"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"movable-view \u662f\u5426\u5e26\u6709\u60ef\u6027")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"outOfBounds"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8d85\u8fc7\u53ef\u79fb\u52a8\u533a\u57df\u540e\uff0cmovable-view \u662f\u5426\u8fd8\u53ef\u4ee5\u79fb\u52a8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"x"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5b9a\u4e49 x \u8f74\u65b9\u5411\u7684\u504f\u79fb\uff0c\u5982\u679c x \u7684\u503c\u4e0d\u5728\u53ef\u79fb\u52a8\u8303\u56f4\u5185\uff0c\u4f1a\u81ea\u52a8\u79fb\u52a8\u5230\u53ef\u79fb\u52a8\u8303\u56f4\uff1b\u6539\u53d8 x \u7684\u503c\u4f1a\u89e6\u53d1\u52a8\u753b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"y"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | number")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5b9a\u4e49 y \u8f74\u65b9\u5411\u7684\u504f\u79fb\uff0c\u5982\u679c y \u7684\u503c\u4e0d\u5728\u53ef\u79fb\u52a8\u8303\u56f4\u5185\uff0c\u4f1a\u81ea\u52a8\u79fb\u52a8\u5230\u53ef\u79fb\u52a8\u8303\u56f4\uff1b\u6539\u53d8 y \u7684\u503c\u4f1a\u89e6\u53d1\u52a8\u753b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"damping"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"20")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u963b\u5c3c\u7cfb\u6570\uff0c\u7528\u4e8e\u63a7\u5236x\u6216y\u6539\u53d8\u65f6\u7684\u52a8\u753b\u548c\u8fc7\u754c\u56de\u5f39\u7684\u52a8\u753b\uff0c\u503c\u8d8a\u5927\u79fb\u52a8\u8d8a\u5feb")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"friction"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"2")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6469\u64e6\u7cfb\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u60ef\u6027\u6ed1\u52a8\u7684\u52a8\u753b\uff0c\u503c\u8d8a\u5927\u6469\u64e6\u529b\u8d8a\u5927\uff0c\u6ed1\u52a8\u8d8a\u5feb\u505c\u6b62\uff1b\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5426\u5219\u4f1a\u88ab\u8bbe\u7f6e\u6210\u9ed8\u8ba4\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"disabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u7981\u7528")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scale"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u652f\u6301\u53cc\u6307\u7f29\u653e\uff0c\u9ed8\u8ba4\u7f29\u653e\u624b\u52bf\u751f\u6548\u533a\u57df\u662f\u5728 movable-view \u5185")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scaleMin"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0.5")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\u6700\u5c0f\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scaleMax"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"10")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\u6700\u5927\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scaleValue"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"1")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0.5 - 10")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"animation"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u4f7f\u7528\u52a8\u753b")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onChangeEventDeatil>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onScale"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onScaleEventDeatil>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7f29\u653e\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onHTouchMove"),(0,l.kt)("td",null,(0,l.kt)("code",null,"TouchEventFunction")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u521d\u6b21\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8\u4e3a\u6a2a\u5411\u7684\u79fb\u52a8\uff0c\u5982\u679c catch \u6b64\u4e8b\u4ef6\uff0c\u5219\u610f\u5473\u7740 touchmove \u4e8b\u4ef6\u4e5f\u88ab catch")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onVTouchMove"),(0,l.kt)("td",null,(0,l.kt)("code",null,"TouchEventFunction")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u521d\u6b21\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8\u4e3a\u7eb5\u5411\u7684\u79fb\u52a8\uff0c\u5982\u679c catch \u6b64\u4e8b\u4ef6\uff0c\u5219\u610f\u5473\u7740 touchmove \u4e8b\u4ef6\u4e5f\u88ab catch")))),(0,l.kt)("h3",r({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.direction"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.inertia"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.outOfBounds"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.x"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.y"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.damping"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.friction"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.disabled"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.scale"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleMin"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleMax"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.scaleValue"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.animation"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.onChange"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.onScale"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.onHTouchMove"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableViewProps.onVTouchMove"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",r({},{id:"tchangesource"}),"TChangeSource"),(0,l.kt)("p",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"touch"),(0,l.kt)("td",null,"\u62d6\u52a8")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"touch-out-of-bounds"),(0,l.kt)("td",null,"\u8d85\u51fa\u79fb\u52a8\u8303\u56f4")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"out-of-bounds"),(0,l.kt)("td",null,"\u8d85\u51fa\u79fb\u52a8\u8303\u56f4\u540e\u7684\u56de\u5f39")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"friction"),(0,l.kt)("td",null,"\u60ef\u6027")),(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null,"setData")))),(0,l.kt)("h3",r({},{id:"onchangeeventdeatil"}),"onChangeEventDeatil"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"x"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"X \u5750\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"y"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Y \u5750\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"source"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"" | "touch" | "touch-out-of-bounds" | "out-of-bounds" | "friction"')),(0,l.kt)("td",null,"\u89e6\u53d1\u4e8b\u4ef6")))),(0,l.kt)("h3",r({},{id:"onscaleeventdeatil"}),"onScaleEventDeatil"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"x"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"X \u5750\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"y"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Y \u5750\u6807")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"scale"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u7f29\u653e\u6bd4\u4f8b")))),(0,l.kt)("h2",r({},{id:"api-\u652f\u6301\u5ea6-1"}),"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"MovableView"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);