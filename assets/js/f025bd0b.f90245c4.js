"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85693],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98852:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"\u8d21\u732e\u6307\u5357"},s=void 0,i={unversionedId:"CONTRIBUTING",id:"version-3.x/CONTRIBUTING",title:"\u8d21\u732e\u6307\u5357",description:"\u6b63\u5982\u6211\u4eec\u5728\u300a\u7ed9\u5f00\u53d1\u8005\u7684\u4fe1\u300b \u4e2d\u6240\u5199\u7684\uff0c\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005\u4e3a Taro \u793e\u533a\u505a\u51fa\u8d21\u732e\u3002",source:"@site/versioned_docs/version-3.x/CONTRIBUTING.md",sourceDirName:".",slug:"/CONTRIBUTING",permalink:"/taro-docs/docs/CONTRIBUTING",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/CONTRIBUTING.md",tags:[],version:"3.x",frontMatter:{title:"\u8d21\u732e\u6307\u5357"},sidebar:"docs",previous:{title:"\u7ed9\u5f00\u53d1\u8005\u7684\u4fe1",permalink:"/taro-docs/docs/join-in"},next:{title:"Taro \u4ed3\u5e93\u6982\u89c8",permalink:"/taro-docs/docs/codebase-overview"}},p={},u=[{value:"\u8d21\u732e\u5f62\u5f0f",id:"\u8d21\u732e\u5f62\u5f0f",level:2},{value:"\u53c2\u4e0e\u8ba8\u8bba",id:"\u53c2\u4e0e\u8ba8\u8bba",level:3},{value:"Bug \u53cd\u9988",id:"bug-\u53cd\u9988",level:3},{value:"Feature Request",id:"feature-request",level:3},{value:"\u4fee\u6539\u6587\u6863",id:"\u4fee\u6539\u6587\u6863",level:3},{value:"1. \u4e0b\u8f7d Taro \u4ed3\u5e93",id:"1-\u4e0b\u8f7d-taro-\u4ed3\u5e93",level:4},{value:"2. \u5207\u6362\u5230 docs \u5206\u652f",id:"2-\u5207\u6362\u5230-docs-\u5206\u652f",level:4},{value:"3. \u7f16\u8bd1\u9884\u89c8",id:"3-\u7f16\u8bd1\u9884\u89c8",level:4},{value:"4. \u4fee\u6539\u3001\u65b0\u589e\u5bf9\u5e94\u6587\u6863",id:"4-\u4fee\u6539\u65b0\u589e\u5bf9\u5e94\u6587\u6863",level:4},{value:"4.1 \u4fee\u6539\u6587\u6863",id:"41-\u4fee\u6539\u6587\u6863",level:5},{value:"4.2 \u65b0\u589e\u6587\u6863",id:"42-\u65b0\u589e\u6587\u6863",level:5},{value:"\u65b0\u60f3\u6cd5",id:"\u65b0\u60f3\u6cd5",level:3},{value:"\u63d0\u4ea4\u4ee3\u7801",id:"\u63d0\u4ea4\u4ee3\u7801",level:3},{value:"\u5de5\u5177\u5206\u4eab",id:"\u5de5\u5177\u5206\u4eab",level:3},{value:"\u6848\u4f8b\u5206\u4eab",id:"\u6848\u4f8b\u5206\u4eab",level:3},{value:"\u6587\u7ae0\u6295\u7a3f",id:"\u6587\u7ae0\u6295\u7a3f",level:3},{value:"Credits",id:"credits",level:2}],c={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6b63\u5982\u6211\u4eec\u5728",(0,n.kt)("a",a({parentName:"p"},{href:"./join-in"}),"\u300a\u7ed9\u5f00\u53d1\u8005\u7684\u4fe1\u300b")," \u4e2d\u6240\u5199\u7684\uff0c\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005\u4e3a Taro \u793e\u533a\u505a\u51fa\u8d21\u732e\u3002"),(0,n.kt)("p",null,"\u8d21\u732e\u4e4b\u524d\uff0c\u8bf7\u4f60\u82b1\u4e00\u4e9b\u65f6\u95f4\u9605\u8bfb\u4ee5\u4e0b\u5185\u5bb9\uff0c\u4fdd\u8bc1\u8d21\u732e\u662f\u7b26\u5408\u89c4\u8303\u5e76\u4e14\u80fd\u5e2e\u52a9\u5230\u793e\u533a\u3002"),(0,n.kt)("h2",a({},{id:"\u8d21\u732e\u5f62\u5f0f"}),"\u8d21\u732e\u5f62\u5f0f"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u201cTaro \u793e\u533a\u5982\u4f55\u8fd0\u4f5c\uff1f\u6211\u53ef\u4ee5\u600e\u6837\u53c2\u4e0e\uff1f\u201d")),(0,n.kt)("p",null,"Taro \u63a5\u53d7\u5404\u79cd\u5f62\u5f0f\u7684\u8d21\u732e\uff0c\u65e0\u8bba\u662f\u63d0\u4ea4\u4e00\u4e2a\u91cd\u5927\u6539\u52a8\uff0c\u8fd8\u662f\u53cd\u9988\u4e00\u4e2a\u95ee\u9898\u6216\u53c2\u52a0\u4e00\u6b21\u8ba8\u8bba\uff0c\u90fd\u80fd\u5f3a\u5316 Taro \u7684\u7f51\u7edc\u6548\u5e94\uff0c\u8ba9 Taro \u53d8\u5f97\u8d8a\u6765\u8d8a\u597d\u7528\u3002"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6574\u7406\u4e86 Taro \u793e\u533a\u65e5\u5e38\u8fd0\u8425\u4e2d\u5e38\u9047\u7684\u5404\u79cd\u7ec6\u5206\u60c5\u666f\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u4ece\u201c\u53c2\u4e0e\u8ba8\u8bba\u201d\u3001\u201c\u63d0\u51fa\u95ee\u9898\u201d\u5f00\u59cb\uff0c\u4e00\u6b65\u4e00\u6b65\u878d\u5165\u793e\u533a\uff0c\u548c Taro \u4e92\u76f8\u6210\u5c31\u3001\u5171\u540c\u6210\u957f\u3002"),(0,n.kt)("h3",a({},{id:"\u53c2\u4e0e\u8ba8\u8bba"}),"\u53c2\u4e0e\u8ba8\u8bba"),(0,n.kt)("p",null,"\u53ef\u4ee5\u5230 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/discussions"}),"Taro \u8bba\u575b")," \u7684\u5bf9\u5e94\u677f\u5757\u53c2\u4e0e\u8ba8\u8bba\u3002"),(0,n.kt)("p",null,"Taro Github \u4e0a\u4e0d\u65ad\u5730\u4ea7\u751f\u7740 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues"}),"Issues")," \u548c ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/pulls"}),"Pull Request"),"\uff0c\u4e5f\u975e\u5e38\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005 Review \u5e76\u53c2\u4e0e\u8ba8\u8bba\u3002"),(0,n.kt)("h3",a({},{id:"bug-\u53cd\u9988"}),"Bug \u53cd\u9988"),(0,n.kt)("p",null,"\u8bf7\u4f7f\u7528 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://issue.taro.zone/"}),"Issue \u751f\u6210\u5de5\u5177")," \u63d0\u4ea4 Bug \u53cd\u9988\uff0c\u5e76\u5728\u4e0a\u5c3d\u53ef\u80fd\u8be6\u7ec6\u5730\u63d0\u4f9b\u4e00\u5207\u5fc5\u8981\u4fe1\u606f\uff0c\u6700\u597d\u80fd\u9644\u4e0a\u4e00\u4e2a\u53ef\u590d\u73b0\u7684 Demo\u3002"),(0,n.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u4fe1\u606f\u63d0\u4f9b\u5f97\u8d8a\u5b8c\u6574\uff0c\u54cd\u5e94\u65f6\u95f4\u8d8a\u77ed"),"\u3002"),(0,n.kt)("h3",a({},{id:"feature-request"}),"Feature Request"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a Feature Request\uff0c\u8bf7\u5230",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/discussions/categories/feature-request"}),"\u8bba\u575b"),"\u65b0\u5efa\u4e00\u6761\u5e16\u5b50\u8fdb\u884c\u63cf\u8ff0\u3002"),(0,n.kt)("p",null,"Taro \u4f1a\u6536\u96c6\u91cd\u8981\u7684 Feature Requests\uff0c\u5728 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/6997"}),"\u300a\u6765\u4e3a Taro \u7684 Feature Request \u6295\u7968\u5427\uff01\u300b")," \u4e2d\u8fdb\u884c\u516c\u793a\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u6295\u7968\uff0c\u9700\u6c42\u5f3a\u70c8\u7684\u7279\u6027\u4f1a\u88ab",(0,n.kt)("strong",{parentName:"p"},"\u4f18\u5148\u652f\u6301"),"\u3002"),(0,n.kt)("h3",a({},{id:"\u4fee\u6539\u6587\u6863"}),"\u4fee\u6539\u6587\u6863"),(0,n.kt)("p",null,"\u6587\u6863\u662f\u5f00\u53d1\u8005\u4e0e\u6846\u67b6\u6c9f\u901a\u7684\u6865\u6881\uff0c\u4f46\u6587\u6863\u4e00\u76f4\u4ee5\u6765\u662f Taro \u7684\u5f31\u9879\u3002\u4e00\u65b9\u9762\u6211\u4eec\u4f1a\u4e0d\u65ad\u5b8c\u5584\u6587\u6863\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u5e0c\u671b\u793e\u533a\u80fd\u534f\u52a9\u6211\u4eec\u628a\u6587\u6863\u505a\u597d\u3002"),(0,n.kt)("p",null,"\u5f53\u9605\u8bfb\u65f6\u9047\u5230\u660e\u663e\u7684\u9519\u8bef\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u70b9\u51fb\u6bcf\u7bc7\u6587\u6863\u6700\u4e0b\u65b9\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit this page")," \u6309\u94ae\uff0c\u5373\u4f1a\u6253\u5f00 Github \u7684\u7f16\u8f91\u754c\u9762\u3002\u5f00\u53d1\u8005\u5bf9\u6587\u6863\u8fdb\u884c\u7f16\u8f91\u540e\uff0c\u5c31\u53ef\u4ee5\u63d0\u4ea4\u4e00\u4e2a Pull Request\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u662f\u8f83\u590d\u6742\u7684\u4fee\u6539\uff0c\u53ef\u4ee5\u6309\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,n.kt)("h4",a({},{id:"1-\u4e0b\u8f7d-taro-\u4ed3\u5e93"}),"1. \u4e0b\u8f7d Taro \u4ed3\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ git clone git@github.com:NervJS/taro.git\n")),(0,n.kt)("h4",a({},{id:"2-\u5207\u6362\u5230-docs-\u5206\u652f"}),"2. \u5207\u6362\u5230 docs \u5206\u652f"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ git checkout docs\n")),(0,n.kt)("h4",a({},{id:"3-\u7f16\u8bd1\u9884\u89c8"}),"3. \u7f16\u8bd1\u9884\u89c8"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"$ npm run start\n")),(0,n.kt)("h4",a({},{id:"4-\u4fee\u6539\u65b0\u589e\u5bf9\u5e94\u6587\u6863"}),"4. \u4fee\u6539\u3001\u65b0\u589e\u5bf9\u5e94\u6587\u6863"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"p"},"md")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"mdx")," \u540e\u7f00\uff0c\u8bed\u6cd5\u8be6\u89c1 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docusaurus.io/docs/next/markdown-features"}),"Docusaurus \u5b98\u7f51"))),(0,n.kt)("h5",a({},{id:"41-\u4fee\u6539\u6587\u6863"}),"4.1 \u4fee\u6539\u6587\u6863"),(0,n.kt)("p",null,"\u8fdb\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," \u76ee\u5f55\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u3002\uff08\u5fc5\u987b\uff0c\u5bf9\u5e94",(0,n.kt)("strong",{parentName:"p"},"\u4e0b\u4e2a\u7248\u672c"),"\u7684\u76f8\u5173\u6587\u6863\uff09"),(0,n.kt)("p",null,"\u8fdb\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-3.x")," \u76ee\u5f55\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u8fdb\u884c\u7f16\u8f91\u3002\uff08\u53ef\u9009\uff0c\u5bf9\u5e94",(0,n.kt)("strong",{parentName:"p"},"3.x \u7248\u672c"),"\u7684\u76f8\u5173\u6587\u6863\u3002\u4e0d\u4fee\u6539\u5219\u9700\u8981\u7b49\u5f85 Taro \u56e2\u961f\u66f4\u65b0\u6587\u6863\u7248\u672c\u540e\uff0c\u624d\u4f1a\u540c\u6b65\u5230\u6587\u6863\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"3.x")," \u7248\u672c\uff09"),(0,n.kt)("h5",a({},{id:"42-\u65b0\u589e\u6587\u6863"}),"4.2 \u65b0\u589e\u6587\u6863"),(0,n.kt)("p",null,"\u65b0\u589e\u6587\u6863\u548c\u4fee\u6539\u6587\u6863\u7c7b\u4f3c\uff0c\u9996\u5148\u5206\u522b\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-3.x")," \u76ee\u5f55\u65b0\u589e\u4e00\u4e2a\u6587\u4ef6\u3002\u7136\u540e\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"sidebars.js")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"versioned_sidebars/version-3.x-sidebars.json")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e0a\u8ff0\u65b0\u589e\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,n.kt)("h3",a({},{id:"\u65b0\u60f3\u6cd5"}),"\u65b0\u60f3\u6cd5"),(0,n.kt)("p",null,"\u65e0\u8bba\u662f Taro \u56e2\u961f\u5185\u90e8\u8fd8\u662f\u793e\u533a\u7b2c\u4e09\u65b9\u5f00\u53d1\u8005\uff0c\u5728\u4e3a Taro \u63d0\u4ea4\u4e00\u4e2a\u91cd\u5927\u7279\u6027\u65f6\uff0c\u90fd\u5fc5\u987b\u6309\u7167 Taro \u7684 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs"}),"RFC\uff08Request For Comment\uff09\u673a\u5236")," \u8fdb\u884c\u64cd\u4f5c\uff0c\u7ecf\u8fc7\u793e\u533a\u8ba8\u8bba\u5b8c\u5584\u540e\u518d\u8fdb\u884c\u4ee3\u7801\u7684\u63d0\u4ea4\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\u5982\u679c\u4f60\u5bf9 Taro \u7684\u53d1\u5c55\u6709\u65b0\u7684\u60f3\u6cd5\uff0c\u5982\u5b9e\u73b0\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\u3001\u62d3\u5c55\u65b0\u7684\u4f7f\u7528\u573a\u666f\u7b49\uff0c\u9700\u8981\u5148\u64b0\u5199\u5bf9\u5e94\u529f\u80fd\u7684 ",(0,n.kt)("strong",{parentName:"p"},"RFC")," \u6587\u6863\uff0cTaro \u56e2\u961f\u4f1a\u8fdb\u884c\u4e00\u7cfb\u5217\u63a8\u9001\uff0c\u5728\u793e\u533a\u5f81\u96c6\u610f\u89c1\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u8bbf\u95ee ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs"}),"taro-rfcs \u4ed3\u5e93"),"\u63d0\u4ea4 RFC \u6216\u8005\u67e5\u770b\u76f8\u5173\u7684 RFC\u3002")),(0,n.kt)("h3",a({},{id:"\u63d0\u4ea4\u4ee3\u7801"}),"\u63d0\u4ea4\u4ee3\u7801"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u201c\u6211\u53ef\u4ee5\u4ece\u54ea\u4e9b\u65b9\u5411\u5165\u624b\uff1f\u53c8\u5e94\u8be5\u600e\u4e48\u505a\uff1f\u201d")),(0,n.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4ece\u5904\u7406 Issues \u5165\u624b\uff0c",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/issues?q=label%3A%22good+first+issue%22+is%3Aissue+is%3Aopen"}),"\u8fd9\u91cc"),"\u4f1a\u5217\u51fa\u6240\u6709\u88ab\u6807\u8bb0\u4e3a ",(0,n.kt)("strong",{parentName:"p"},"Help Wanted")," \u7684 Issues\uff0c\u5e76\u4e14\u4f1a\u88ab\u5206\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"Easy"),"\u3001 ",(0,n.kt)("inlineCode",{parentName:"p"},"Medium"),"\u3001 ",(0,n.kt)("inlineCode",{parentName:"p"},"Hard")," \u4e09\u79cd\u96be\u6613\u7a0b\u5ea6\u3002"),(0,n.kt)("p",null,"\u9664\u4e86\u5e2e\u5fd9\u5904\u7406 Issues\uff0cTaro \u8fd8\u6709\u5f88\u591a\u65b9\u5411\u9700\u8981\u4eba\u529b\u8fdb\u884c\u5efa\u8bbe\u3002"),(0,n.kt)("p",null,"\u968f\u7740\u5bf9 Taro \u5185\u90e8\u8fd0\u884c\u673a\u5236\u7684\u719f\u6089\uff0c\u5f00\u53d1\u8005\u53ef\u80fd\u4f1a\u4ea7\u751f\u4e00\u4e9b\u65b0\u7684\u60f3\u6cd5\uff0c\u4f8b\u5982\u5e0c\u671b\u5f00\u53d1\u4e00\u4e9b\u65b0\u7684\u529f\u80fd\u7b49\u3002\u8fd9\u65f6\u9700\u8981\u5148\u7f16\u5199 RFC \u6587\u6863\uff0c\u5728\u793e\u533a\u8c08\u8bba\u5b8c\u5584\u540e\u518d\u5f00\u59cb\u7f16\u7801\u3002"),(0,n.kt)("p",null,"\u5728\u5f00\u53d1\u4e4b\u524d\u8bf7\u5148\u9605\u8bfb",(0,n.kt)("a",a({parentName:"p"},{href:"./codebase-overview"}),"\u300aTaro \u7684\u4ed3\u5e93\u6982\u89c8\u300b"),"\uff0c\u5b83\u4ecb\u7ecd\u4e86 Taro \u4ed3\u5e93\u6784\u6210\u3001\u5982\u4f55\u5f00\u53d1\u548c\u63d0\u4ea4\u89c4\u8303\u7b49\u4fe1\u606f\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u662f\u9996\u6b21\u63d0\u4ea4\u4ee3\u7801\uff0c\u53ef\u53c2\u8003\u6587\u7ae0\uff1a",(0,n.kt)("a",a({parentName:"p"},{href:"/blog/2022-01-19-how-to-join-Taro"}),"\u5982\u4f55\u53c2\u4e0e\u5927\u578b\u5f00\u6e90\u9879\u76ee-Taro \u5171\u5efa"),"\u3002"),(0,n.kt)("h3",a({},{id:"\u5de5\u5177\u5206\u4eab"}),"\u5de5\u5177\u5206\u4eab"),(0,n.kt)("p",null,"\u5728\u793e\u533a\u5206\u4eab\u4f60\u7684 \u201c\u8f6e\u5b50\u201d\uff08\u4f8b\u5982",(0,n.kt)("strong",{parentName:"p"},"SDK"),"\u3001",(0,n.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u3001",(0,n.kt)("strong",{parentName:"p"},"\u63d2\u4ef6"),"\u3001",(0,n.kt)("strong",{parentName:"p"},"UI \u5e93"),"\u3001",(0,n.kt)("strong",{parentName:"p"},"\u5f00\u6e90\u9879\u76ee"),"\u7b49\uff09\u3002  "),(0,n.kt)("p",null,"\u53ef\u4ee5\u63d0\u4ea4\u5230 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://taro-ext.jd.com"}),"Taro \u7269\u6599\u5e02\u573a"),"\u3001\u6587\u6863",(0,n.kt)("a",a({parentName:"p"},{href:"./treasures"}),"\u300a\u793e\u533a\u4f18\u8d28\u7269\u6599\u300b")," \u3001\u4ed3\u5e93 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/awesome-taro"}),"awesome-taro")," \u91cc\uff0c\u5e76\u63d0\u4f9b\u5b8c\u5584\u7684\u8bf4\u660e\u3002\u7136\u540e\u5728 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro/discussions/categories/%E7%94%9F%E6%80%81"}),"Taro \u8bba\u575b")," \u4e2d\u6dfb\u52a0\u4e00\u6761\u8ba8\u8bba\uff0c\u4e0e\u5f00\u53d1\u8005\u8fdb\u884c\u6c9f\u901a\u3002"),(0,n.kt)("p",null,"Taro \u56e2\u961f\u4f1a\u5b9a\u671f\u7504\u9009\u4f18\u79c0\u7684\u7269\u6599\u6c47\u96c6\u6210\u6587\uff0c\u5728 Taro \u793e\u533a\u548c\u5404\u5927\u6709\u5f71\u54cd\u529b\u7684\u524d\u7aef\u6e20\u9053\u8fdb\u884c\u63a8\u5e7f\u3002"),(0,n.kt)("h3",a({},{id:"\u6848\u4f8b\u5206\u4eab"}),"\u6848\u4f8b\u5206\u4eab"),(0,n.kt)("p",null,"\u5206\u4eab\u4f60\u7684\u6210\u529f\u6848\u4f8b\uff0c\u53ef\u4ee5\u63d0\u4ea4\u5230 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/NervJS/taro-user-cases"}),"taro-user-cases"),"\uff08\u53ea\u9700\u63d0\u4ea4\u5c0f\u7a0b\u5e8f\u7801\u3001\u4e8c\u7ef4\u7801\uff09\u3002"),(0,n.kt)("h3",a({},{id:"\u6587\u7ae0\u6295\u7a3f"}),"\u6587\u7ae0\u6295\u7a3f"),(0,n.kt)("p",null,"\u5206\u4eab\u4f60\u7684\u7ecf\u9a8c\uff08\u6559\u7a0b\u3001\u6587\u7ae0\u7b49\uff09\uff0c\u53ef\u4ee5\u7ed9\u300cTaro\u793e\u533a\u300d\u516c\u4f17\u53f7\u6295\u7a3f\u3002"),(0,n.kt)("h2",a({},{id:"credits"}),"Credits"),(0,n.kt)("p",null,"\u611f\u8c22\u4ee5\u4e0b\u6240\u6709\u7ed9 Taro \u8d21\u732e\u8fc7\u4ee3\u7801\u7684\u5f00\u53d1\u8005\uff1a"),(0,n.kt)("a",{href:"https://github.com/NervJS/taro/graphs/contributors"},(0,n.kt)("img",{src:"https://opencollective.com/taro/contributors.svg?width=890&avatarHeight=36&button=false"})))}d.isMDXComponent=!0}}]);