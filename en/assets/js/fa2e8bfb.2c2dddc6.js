"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23462],{79874:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(93106);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||p;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82648:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});t(93106);var r=t(79874);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={title:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"},l=void 0,i={unversionedId:"miniprogram-plugin",id:"version-2.x/miniprogram-plugin",title:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",description:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",source:"@site/versioned_docs/version-2.x/miniprogram-plugin.md",sourceDirName:".",slug:"/miniprogram-plugin",permalink:"/taro-docs/en/docs/2.x/miniprogram-plugin",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-2.x/miniprogram-plugin.md",tags:[],version:"2.x",frontMatter:{title:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"},sidebar:"version-2.x/docs",previous:{title:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u6a21\u677f",permalink:"/taro-docs/en/docs/2.x/wxcloudbase"},next:{title:"\u5feb\u5e94\u7528\u7aef\u5f00\u53d1\u6d41\u7a0b",permalink:"/taro-docs/en/docs/2.x/quick-app"}},s={},u=[{value:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",level:2},{value:"\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248",id:"\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248",level:3},{value:"\u4fee\u6539 appid",id:"\u4fee\u6539-appid",level:3},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:3},{value:"\u7f16\u8bd1\u9879\u76ee",id:"\u7f16\u8bd1\u9879\u76ee",level:3},{value:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee",id:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee",level:3},{value:"\u4f7f\u7528\u9875\u9762\u63d2\u4ef6",id:"\u4f7f\u7528\u9875\u9762\u63d2\u4ef6",level:3},{value:"\u4f7f\u7528\u7ec4\u4ef6\u63d2\u4ef6",id:"\u4f7f\u7528\u7ec4\u4ef6\u63d2\u4ef6",level:3},{value:"Taro v1.3+ \u7ec4\u4ef6\u63d2\u4ef6\u63a5\u53d7\u5916\u90e8 props \u7684\u95ee\u9898",id:"taro-v13-\u7ec4\u4ef6\u63d2\u4ef6\u63a5\u53d7\u5916\u90e8-props-\u7684\u95ee\u9898",level:3},{value:"\u4f7f\u7528\u63a5\u53e3\u63d2\u4ef6",id:"\u4f7f\u7528\u63a5\u53e3\u63d2\u4ef6",level:3},{value:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",id:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",level:2},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784-1",level:3},{value:"\u7f16\u8bd1\u9879\u76ee",id:"\u7f16\u8bd1\u9879\u76ee-1",level:3}],c={toc:u};function m(e){var{components:n}=e,t=p(e,["components"]);return(0,r.kt)("wrapper",a({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1\u6982\u8ff0")),(0,r.kt)("h3",a({},{id:"\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248"}),"\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248"),(0,r.kt)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5206\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u9875\u9762"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u63a5\u53e3"),"\u4e09\u79cd\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"taro init")," \u547d\u4ee4\uff0c\u7136\u540e\u9009\u62e9\u751f\u6210",(0,r.kt)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u6a21\u7248"),"\uff0c\u5373\u53ef\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u5305\u542b\u4e0a\u8ff0\u4e09\u79cd\u63d2\u4ef6\u7c7b\u578b\u7684 Taro \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u9879\u76ee\u3002"),(0,r.kt)("h3",a({},{id:"\u4fee\u6539-appid"}),"\u4fee\u6539 appid"),(0,r.kt)("p",null,"\u521b\u5efa\u5b8c\u6a21\u7248\u540e\uff0c\u9996\u5148\u9700\u8981\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"project.conf.json")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"appid")," \u5b57\u6bb5\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.js")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"prodiver")," \u5b57\u6bb5\u4e3a\u540c\u4e00 appid\u3002"),(0,r.kt)("h3",a({},{id:"\u9879\u76ee\u7ed3\u6784"}),"\u9879\u76ee\u7ed3\u6784"),(0,r.kt)("p",null,"\u63a8\u8350\u7684\u63d2\u4ef6\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u6700\u540e\u53d1\u5e03\u7684\u662f plugin \u6587\u4ef6\u5939\u5185\u7684\u5185\u5bb9\uff0c\u63d2\u4ef6\u7684\u6240\u6709\u5185\u5bb9\u53ca\u9664\u4e86 npm \u5305\u4ee5\u5916\u7684\u4f9d\u8d56\u90fd\u5e94\u5199\u5728 plugin \u6587\u4ef6\u5939\u5185\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages")," \u5185\u7684\u9875\u9762\u53ea\u662f\u7528\u4e8e\u8c03\u8bd5\u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"\u251c\u2500\u2500 config                 \u914d\u7f6e\u76ee\u5f55\n\u251c\u2500\u2500 src                    \u6e90\u7801\u76ee\u5f55\n|   \u251c\u2500\u2500 pages              \u8c03\u8bd5\u9875\u9762\u76ee\u5f55\uff0c\u7528\u4e8e\u8c03\u8bd5\u63d2\u4ef6\n|   |   \u2514\u2500\u2500 index          \n|   \u251c\u2500\u2500 plugin             \u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 doc            \u63d2\u4ef6\u6587\u6863\u76ee\u5f55\n|   |   \u251c\u2500\u2500 component      \u7ec4\u4ef6\u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 page           \u9875\u9762\u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 index.js       \u63a5\u53e3\u63d2\u4ef6\u6587\u4ef6\n|   |   \u2514\u2500\u2500 plugin.json    \u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\n|   \u251c\u2500\u2500 app.css            \u9879\u76ee\u603b\u901a\u7528\u6837\u5f0f\n|   \u2514\u2500\u2500 app.js             \u9879\u76ee\u5165\u53e3\u6587\u4ef6\n\u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 package.config.json\n")),(0,r.kt)("h3",a({},{id:"\u7f16\u8bd1\u9879\u76ee"}),"\u7f16\u8bd1\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bin"}),"taro build --plugin weapp\ntaro build --plugin weapp --watch\n")),(0,r.kt)("h3",a({},{id:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee"}),"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee"),(0,r.kt)("p",null,"\u5728\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u6dfb\u52a0 Taro \u63d2\u4ef6\u9879\u76ee\u6839\u76ee\u5f55\u3002"),(0,r.kt)("h3",a({},{id:"\u4f7f\u7528\u9875\u9762\u63d2\u4ef6"}),"\u4f7f\u7528\u9875\u9762\u63d2\u4ef6"),(0,r.kt)("p",null,"plugin.json \u7684 ",(0,r.kt)("strong",{parentName:"p"},"pages")," \u5b57\u6bb5\u52a0\u5165\u9875\u9762\u63d2\u4ef6\u8def\u5f84\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "pages": {\n    "list": "pages/list/list"\n  }\n}\n')),(0,r.kt)("p",null,"\u9875\u9762\u4f7f\u7528\u8def\u5f84\uff1a ",(0,r.kt)("strong",{parentName:"p"},"plugin://","[app.js \u4e2d\u6ce8\u518c\u7684\u63d2\u4ef6\u540d]","/","[plugin.json \u4e2d\u6ce8\u518c\u7684\u9875\u9762\u540d]")," \u8fdb\u884c\u8df3\u8f6c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"<Navigator url='plugin://myPlugin/list'>\n  Go to pages/list!\n</Navigator>\n")),(0,r.kt)("h3",a({},{id:"\u4f7f\u7528\u7ec4\u4ef6\u63d2\u4ef6"}),"\u4f7f\u7528\u7ec4\u4ef6\u63d2\u4ef6"),(0,r.kt)("p",null,"plugin.json \u7684 ",(0,r.kt)("strong",{parentName:"p"},"publicComponents")," \u5b57\u6bb5\u52a0\u5165\u7ec4\u4ef6\u63d2\u4ef6\u8def\u5f84\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "publicComponents": {\n    "avatar": "components/avatar/avatar"\n  }\n}\n')),(0,r.kt)("p",null,"\u5728\u9875\u9762\u914d\u7f6e config.usingComponents \u4e2d\u914d\u7f6e\u597d\u63d2\u4ef6\u540d\u548c\u63d2\u4ef6\u8def\u5f84\uff08",(0,r.kt)("strong",{parentName:"p"},"plugin://","[app.js \u4e2d\u6ce8\u518c\u7684\u63d2\u4ef6\u540d]","/","[plugin.json \u4e2d\u6ce8\u518c\u7684\u7ec4\u4ef6\u540d]"),"\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"export default class Index extends Component {\n  config = {\n    usingComponents: {\n      'avatar': 'plugin://myPlugin/avatar'\n    }\n  }\n}\n")),(0,r.kt)("h3",a({},{id:"taro-v13-\u7ec4\u4ef6\u63d2\u4ef6\u63a5\u53d7\u5916\u90e8-props-\u7684\u95ee\u9898"}),"Taro v1.3+ \u7ec4\u4ef6\u63d2\u4ef6\u63a5\u53d7\u5916\u90e8 props \u7684\u95ee\u9898"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/3176"}),"#3176")),(0,r.kt)("p",null,"Taro v1.3 \u5bf9 props \u7cfb\u7edf\u8fdb\u884c\u4e86\u6539\u9020\uff0c\u4f7f\u5f97\u4e0d\u80fd\u517c\u5bb9\u539f\u751f\u7ec4\u4ef6\u901a\u8fc7 properties \u4f20\u5165\u7684\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u76ee\u524d\u53ef\u4ee5\u901a\u8fc7\u628a\u6240\u6709\u9700\u8981\u4f20\u5165\u7ec4\u4ef6\u63d2\u4ef6\u7684 props\uff0c\u901a\u8fc7\u501f\u52a9 ",(0,r.kt)("inlineCode",{parentName:"p"},"extraProps")," \u5c5e\u6027\u6765\u89e3\u51b3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-js"}),"// \u5e38\u89c4 props \u4f20\u9012\n<Plugin title={this.state.name} desc={this.state.desc} />\n\n// \u5728\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6\u65f6\u9700\u8981\u6539\u9020\u6210\u4ee5\u4e0b\u5f62\u5f0f\uff1a\nconst extraProps = {\n  name: this.state.name,\n  desc: this.state.desc\n}\n<Plugin extraProps={extraProps} />\n")),(0,r.kt)("h3",a({},{id:"\u4f7f\u7528\u63a5\u53e3\u63d2\u4ef6"}),"\u4f7f\u7528\u63a5\u53e3\u63d2\u4ef6"),(0,r.kt)("p",null,"plugin.json \u7684 ",(0,r.kt)("strong",{parentName:"p"},"main")," \u5b57\u6bb5\u52a0\u5165\u63a5\u53e3\u63d2\u4ef6\u8def\u5f84\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "main": "index.js"\n}\n')),(0,r.kt)("p",null,"\u9875\u9762\u4e2d\u4f7f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"const myPluginInterface = Taro.requirePlugin('myPlugin')\n\nexport default class Index extends Component {\n  componentWillMount () {\n    myPluginInterface.sayHello()\n    const answer = myPluginInterface.answer\n    console.log('answer: ', answer)\n  }\n")),(0,r.kt)("h2",a({},{id:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.alipay.com/mini/isv/plugin-intro"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1\u6982\u8ff0")),(0,r.kt)("h3",a({},{id:"\u9879\u76ee\u7ed3\u6784-1"}),"\u9879\u76ee\u7ed3\u6784"),(0,r.kt)("p",null,"\u76ee\u524d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u53ea\u652f\u6301\u5f00\u53d1\u9875\u9762\u63d2\u4ef6\uff0c\u56e0\u6b64\u9879\u76ee\u7ed3\u6784\u548c\u666e\u901a Taro \u9879\u76ee\u7684\u4e00\u81f4\u3002\u53ea\u9700\u5728\u6e90\u7801\u76ee\u5f55\u4e0b\u518d\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.json")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin-mock.json")," \u4e24\u4e2a\u6587\u4ef6\u5373\u53ef\u3002"),(0,r.kt)("h3",a({},{id:"\u7f16\u8bd1\u9879\u76ee-1"}),"\u7f16\u8bd1\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bin"}),"taro build --plugin alipay\ntaro build --plugin alipay --watch\n")))}m.isMDXComponent=!0}}]);