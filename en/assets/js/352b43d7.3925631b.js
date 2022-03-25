"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[71468],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});n(93106);var a=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"Native Mini Program Project Using Taro"},p=void 0,s={unversionedId:"taro-in-miniapp",id:"taro-in-miniapp",title:"Native Mini Program Project Using Taro",description:"Partial use of Taro in native projects has been supported since 3.0.25.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/taro-in-miniapp.md",sourceDirName:".",slug:"/taro-in-miniapp",permalink:"/taro-docs/en/docs/next/taro-in-miniapp",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/taro-in-miniapp.md",tags:[],version:"current",frontMatter:{title:"Native Mini Program Project Using Taro"},sidebar:"docs",previous:{title:"Taro Uses Native Modules",permalink:"/taro-docs/en/docs/next/hybrid"},next:{title:"WeChat Mini Program Convert to Taro",permalink:"/taro-docs/en/docs/next/taroize"}},l={},c=[{value:"Sample Project:",id:"sample-project",level:4},{value:"Basic Hybrid Usage",id:"basic-hybrid-usage",level:2},{value:"App Entry",id:"app-entry",level:3},{value:"1. Packaged in mixed mode",id:"1-packaged-in-mixed-mode",level:4},{value:"2. Move the output directory of the Taro project to the native project",id:"2-move-the-output-directory-of-the-taro-project-to-the-native-project",level:4},{value:"3. Referencing the Taro entry file in the native project&#39;s app.js",id:"3-referencing-the-taro-entry-file-in-the-native-projects-appjs",level:4},{value:"Referencing JS files from native projects",id:"referencing-js-files-from-native-projects",level:3},{value:"Example",id:"example",level:4},{value:"Referencing native components of native projects",id:"referencing-native-components-of-native-projects",level:3},{value:"Example",id:"example-1",level:4},{value:"Subpackage some pages of the Taro project",id:"subpackage-some-pages-of-the-taro-project",level:2},{value:"Dependency Segmentation",id:"dependency-segmentation",level:3},{value:"Example",id:"example-2",level:4},{value:"Taro project as a complete subcontract",id:"taro-project-as-a-complete-subcontract",level:2},{value:"Using",id:"using",level:3},{value:"1. Installing and using the plugin",id:"1-installing-and-using-the-plugin",level:4},{value:"2. Packaged in mixed mode",id:"2-packaged-in-mixed-mode",level:4},{value:"3. Move the output directory of the Taro project to the native project",id:"3-move-the-output-directory-of-the-taro-project-to-the-native-project",level:4},{value:"4. Set the subcontract configuration for the native project",id:"4-set-the-subcontract-configuration-for-the-native-project",level:4},{value:"Splitting Taro projects into multiple subcontracts",id:"splitting-taro-projects-into-multiple-subcontracts",level:3},{value:"Compile Taro components as native custom components",id:"compile-taro-components-as-native-custom-components",level:2},{value:"Usage",id:"usage",level:3},{value:"1. Configuring Component Paths",id:"1-configuring-component-paths",level:4},{value:"2. Start compiling",id:"2-start-compiling",level:4},{value:"Pass props",id:"pass-props",level:3}],u={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Partial use of Taro in native projects has been supported since ",(0,a.kt)("inlineCode",{parentName:"p"},"3.0.25"),"."),(0,a.kt)("h4",o({},{id:"sample-project"}),"Sample Project:"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-blended"}),"taro-blended")),(0,a.kt)("h2",o({},{id:"basic-hybrid-usage"}),"Basic Hybrid Usage"),(0,a.kt)("h3",o({},{id:"app-entry"}),"App Entry"),(0,a.kt)("h4",o({},{id:"1-packaged-in-mixed-mode"}),"1. Packaged in mixed mode"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-blended")," argument when compiling the project to output mixed-mode code."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"taro build --type weapp --blended\ntaro build --type weapp --watch --blended\n")),(0,a.kt)("h4",o({},{id:"2-move-the-output-directory-of-the-taro-project-to-the-native-project"}),"2. Move the output directory of the Taro project to the native project"),(0,a.kt)("p",null,"It is possible to write a ",(0,a.kt)("strong",{parentName:"p"}," Taro plugin")," for automatic movement, see ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-blended/blob/master/taro-project/plugin-mv/index.js"}),"plugin-mv"),"\u3002"),(0,a.kt)("h4",o({},{id:"3-referencing-the-taro-entry-file-in-the-native-projects-appjs"}),"3. Referencing the Taro entry file in the native project's app.js"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="app.config.js"',title:'"app.config.js"'}),"// the entry file of the Taro project must be referenced\nconst taroApp = require('./taro/app.js').taroApp\n\nApp({\n  onShow () {\n    // Optionally, call the onShow lifecycle of the Taro project app\n    taroApp.onShow()\n  },\n\n  onHide () {\n    // Optionally, call the onHide lifecycle of the Taro project app\n    taroApp.onHide()\n  }\n})\n")),(0,a.kt)("h3",o({},{id:"referencing-js-files-from-native-projects"}),"Referencing JS files from native projects"),(0,a.kt)("p",null,"Sometimes we need to reference public js modules in the native project in the Taro project, such as the reported sdk, but Webpack packages these public modules together, resulting in two copies of the public module (one in the Taro product and one in the native project)."),(0,a.kt)("p",null,"To optimize package size, we want to not package into Taro products, but instead reference code directly from the native project, which can be done using Webpack's ",(0,a.kt)("a",o({parentName:"p"},{href:"https://webpack.js.org/configuration/externals/"}),"externals")," configuration."),(0,a.kt)("h4",o({},{id:"example"}),"Example"),(0,a.kt)("p",null,"Assume the following project structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),"\u251c\u2500\u2500 miniapp           Natvie Project\n|   \u2514\u2500\u2500 utils\n|       \u2514\u2500\u2500 util.js\n\u2514\u2500\u2500 taro-project      Taro Project\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 pages\n            \u2514\u2500\u2500 index this page need miniapp/utils/util.js\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure ",(0,a.kt)("inlineCode",{parentName:"li"},"alias")," to make it easier for ",(0,a.kt)("inlineCode",{parentName:"li"},"externals")," to filter out dependencies that don't need to be packaged."),(0,a.kt)("li",{parentName:"ol"},"Configure Webpack ",(0,a.kt)("inlineCode",{parentName:"li"},"externals")," to select the dependencies that do not need to be packaged and calculate the relative paths."),(0,a.kt)("li",{parentName:"ol"},"Set the environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"process.env.NODE_ENV")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"production")," for externals to take effect. (When no environment variable is set manually, the default environment variable is ",(0,a.kt)("inlineCode",{parentName:"li"},"development")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"watch")," mode, otherwise it is ",(0,a.kt)("inlineCode",{parentName:"li"},"production"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  alias: {\n    // The development environment directly references the dependencies under the native project for easy development\n    '@/utils': process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../utils') : path.resolve(__dirname, '../../miniapp/utils')\n  },\n  mini: {\n    webpackChain (chain) {\n      chain.merge({\n        externals: [\n          (context, request, callback) => {\n            const externalDirs = ['@/utils']\n            const externalDir = externalDirs.find(dir => request.startsWith(dir))\n\n            if (process.env.NODE_ENV === 'production' && externalDir) {\n              const externalDirPath = config.alias[externalDir]\n              const res = request.replace('@/utils', path.relative(context, externalDirPath))\n\n              return callback(null, `commonjs ${res}`)\n            }\n\n            callback()\n          },\n        ]\n      })\n    }\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="taro-project/src/pages/index/index.js"',title:'"taro-project/src/pages/index/index.js"'}),"import { logSomething } from '@/utils/util'\nlogSomething()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="webpack Packing results"',title:'"webpack',Packing:!0,'results"':!0}),'{\n  "./src/pages/index/index.jsx": (function(m, e, __webpack_require__) {\n    var _utils_util = __webpack_require__("@/utils/util");\n    // ...\n  }),\n  "@/utils/util": (function(module, exports) {\n    module.exports = require("../../../utils/util");\n  })\n}\n')),(0,a.kt)("h3",o({},{id:"referencing-native-components-of-native-projects"}),"Referencing native components of native projects"),(0,a.kt)("p",null,"Sometimes we need to reference a public custom component in a native project in a Taro project."),(0,a.kt)("p",null,"As with ",(0,a.kt)("a",o({parentName:"p"},{href:"./taro-in-miniapp#reference-native-project-js-file"}),"referencing the native project's js file"),", we want to resolve the component paths correctly in the development environment and reference the native project components directly in the production environment instead of repackaging them, which can be done using Taro's ",(0,a.kt)("a",o({parentName:"p"},{href:"./config-detail#alias"}),"alias")," configuration to achieve this."),(0,a.kt)("h4",o({},{id:"example-1"}),"Example"),(0,a.kt)("p",null,"Assume the following project structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),"\u251c\u2500\u2500 miniapp                 Natvie Project\n|   \u2514\u2500\u2500 components\n|       \u2514\u2500\u2500 title\n|           \u251c\u2500\u2500 index.js\n|           \u251c\u2500\u2500 index.wxml\n|           \u251c\u2500\u2500 index.wxss\n|           \u2514\u2500\u2500 index.json\n\u2514\u2500\u2500 taro-project           Taro Project\n    \u2514\u2500\u2500 src\n        \u251c\u2500\u2500 components     Copy the components from the native project so that the development environment can parse the components correctly\n        |   \u2514\u2500\u2500 title      \n        \u2514\u2500\u2500 pages\n            \u2514\u2500\u2500 index      You want to refer to miniapp/components/title in this page\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the components from the native project to the Taro project so that the development environment can resolve the components correctly."),(0,a.kt)("li",{parentName:"ol"},"Configure ",(0,a.kt)("inlineCode",{parentName:"li"},"alias")," correctly according to the development environment and production environment.")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  alias: {\n    '@/components': process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../components') : path.resolve(__dirname, '../../miniapp/components')\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="taro-project/src/pages/index/index.config.js"',title:'"taro-project/src/pages/index/index.config.js"'}),"export default {\n  usingComponents: {\n    title: '@/components/title/index'\n  }\n}\n")),(0,a.kt)("h2",o({},{id:"subpackage-some-pages-of-the-taro-project"}),"Subpackage some pages of the Taro project"),(0,a.kt)("p",null,"Subpackage ",(0,a.kt)("strong",{parentName:"p"},"some pages")," of the Taro project."),(0,a.kt)("h3",o({},{id:"dependency-segmentation"}),"Dependency Segmentation"),(0,a.kt)("p",null,"By default, Taro will package common dependencies shared by pages into ",(0,a.kt)("inlineCode",{parentName:"p"},"common.js")," and node_modules dependencies into ",(0,a.kt)("inlineCode",{parentName:"p"},"vendor.js"),"."),(0,a.kt)("p",null,"However, when subpackaging, we will want to package ",(0,a.kt)("strong",{parentName:"p"},"only dependencies that are common to the subpackage")," into the subpackage, rather than hitting ",(0,a.kt)("inlineCode",{parentName:"p"},"common.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"vendor.js")," in the main package. This requires us to subdivide the dependencies, which can be done with Webpack's ",(0,a.kt)("a",o({parentName:"p"},{href:"https://webpack.js.org/plugins/split-chunks-plugin/"}),"splitChunk")," and Taro's ","[addChunkPages]","(. /config-detail#miniaddchunkpages) to do this."),(0,a.kt)("h4",o({},{id:"example-2"}),"Example"),(0,a.kt)("p",null,"Assume the following project structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{}),"\u251c\u2500\u2500 dist\n|   |\u2500\u2500 common.js     Public Dependence\n|   |\u2500\u2500 vendors.js    node_modules Dependence\n|   \u2514\u2500\u2500 subPackages\n|       \u251c\u2500\u2500 foo\n|       \u251c\u2500\u2500 bar\n|       \u2514\u2500\u2500 common.js Only public dependencies used in subPackages subpackages\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 subPackages\n        \u251c\u2500\u2500 foo\n        \u2514\u2500\u2500 bar\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Webpack splitChunks")," to package the dependencies unique to only the ",(0,a.kt)("inlineCode",{parentName:"li"},"subpackages")," subpackage into ",(0,a.kt)("inlineCode",{parentName:"li"},"subpackages/common.js"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Taro addChunkPages")," configuration to add references to ",(0,a.kt)("inlineCode",{parentName:"li"},"subpackages/common.js")," in the headers of all pages in the subpackage.")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  mini: {\n    addChunkPages (pages) {\n      pages.set('subpackages/bar/index', ['subpackages/common']),\n      pages.set('subpackages/foo/index', ['subpackages/common'])\n    },\n    webpackChain (chain) {\n      chain.merge({\n        optimization: {\n          splitChunks: {\n            cacheGroups: {\n              subpackagesCommon: {\n                name: 'subpackages/common',\n                minChunks: 2,\n                test: (module, chunks) => {\n                  const isNoOnlySubpackRequired = chunks.find(chunk => !(/\\bsubpackages\\b/.test(chunk.name)))\n                  return !isNoOnlySubpackRequired\n                },\n                priority: 200\n              }\n            }\n          }\n        }\n      })\n    }\n  }\n}\n")),(0,a.kt)("h2",o({},{id:"taro-project-as-a-complete-subcontract"}),"Taro project as a complete subcontract"),(0,a.kt)("h3",o({},{id:"using"}),"Using"),(0,a.kt)("h4",o({},{id:"1-installing-and-using-the-plugin"}),"1. Installing and using the plugin"),(0,a.kt)("p",null,"Installing Plugins ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-plugin-indie"}),"@tarojs/plugin-indie")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"npm i @tarojs/plugin-indie --save-dev\n")),(0,a.kt)("p",null,"Using plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  plugins: [\n    '@tarojs/plugin-indie'\n  ]\n}\n")),(0,a.kt)("h4",o({},{id:"2-packaged-in-mixed-mode"}),"2. Packaged in mixed mode"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-blended")," argument when compiling the project to output mixed-mode code."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"taro build --type weapp --blended\ntaro build --type weapp --watch --blended\n")),(0,a.kt)("h4",o({},{id:"3-move-the-output-directory-of-the-taro-project-to-the-native-project"}),"3. Move the output directory of the Taro project to the native project"),(0,a.kt)("p",null,"It is possible to write a ",(0,a.kt)("strong",{parentName:"p"},"Taro plugin")," for automatic movement, see ",(0,a.kt)("a",o({parentName:"p"},{href:"https://github.com/NervJS/taro-blended/blob/master/taro-project/plugin-mv/index.js"}),"plugin-mv"),"\u3002"),(0,a.kt)("h4",o({},{id:"4-set-the-subcontract-configuration-for-the-native-project"}),"4. Set the subcontract configuration for the native project"),(0,a.kt)("h3",o({},{id:"splitting-taro-projects-into-multiple-subcontracts"}),"Splitting Taro projects into multiple subcontracts"),(0,a.kt)("p",null,"Suppose we have a Taro project with page A and page B. We need to add page A to one of the native project's subpackages, M, and page B to another subpackage, N. To do this, we first need to configure Webpack's ",(0,a.kt)("inlineCode",{parentName:"p"},"output.jsonpFunction")," to avoid conflicts with ",(0,a.kt)("inlineCode",{parentName:"p"},"chunkid"),"."),(0,a.kt)("p",null,"To do this, unlike normal typing ",(0,a.kt)("strong",{parentName:"p"},"a subpackage"),", you first need to configure Webpack's ",(0,a.kt)("inlineCode",{parentName:"p"},"output.jsonpFunction")," configuration to avoid ",(0,a.kt)("inlineCode",{parentName:"p"},"chunkid")," conflicts."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),'config = {\n  // ...\n  mini: {\n    webpackChain (chain) {\n      chain.merge({\n        output: {\n          // can be dynamically modified with npm script and environment variables\n          jsonpFunction: process.env.JSONP_NAME || "webpackJsonp"\n        }\n      })\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Then package the A and B pages separately using mixed mode, in the same way as ",(0,a.kt)("a",o({parentName:"p"},{href:"./taro-in-miniapp#taro-projects-as-a-complete-subpackage"}),"Taro project as a complete sub-package"),"."),(0,a.kt)("h2",o({},{id:"compile-taro-components-as-native-custom-components"}),"Compile Taro components as native custom components"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"v3.1.2+, only React is supported for now")),(0,a.kt)("p",null,"Taro supports compiling components into ",(0,a.kt)("strong",{parentName:"p"},"native mini program custom components")," for use in native projects."),(0,a.kt)("h3",o({},{id:"usage"}),"Usage"),(0,a.kt)("h4",o({},{id:"1-configuring-component-paths"}),"1. Configuring Component Paths"),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"app.config.js")," to add ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," configuration, pointing to the path of the component entry file."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="app.config.js"',title:'"app.config.js"'}),"export default {\n  // ...\n  components: [\n    'pages/index/index',\n    'components/picker/index'\n  ]\n}\n")),(0,a.kt)("h4",o({},{id:"2-start-compiling"}),"2. Start compiling"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"taro build native-components")," command with the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," to compile a custom component for the corresponding platform."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"taro build native-components --type [platform] [--watch]\n")),(0,a.kt)("h3",o({},{id:"pass-props"}),"Pass props"),(0,a.kt)("p",null,"When passing props to the native custom components compiled by Taro, they need to be passed uniformly via the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="page/index/index.js"',title:'"page/index/index.js"'}),"Page({\n  data: {\n    pickerProps: {\n      mode: 'format',\n      value: [0, 0, 0],\n      onInitial (value, index) {\n        console.log('onInitial')\n      }\n    }\n  }\n})\n")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-xml",metastring:'title="page/index/index.wxml"',title:'"page/index/index.wxml"'}),'\x3c!--index.wxml--\x3e\n<view>\n  <picker props="{{pickerProps}}"></picker>\n</view>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="Taro Component - Picker"',title:'"Taro',Component:!0,"-":!0,'Picker"':!0}),"function Picker ({ mode, value, onInitial }) {\n  return (\n    // ...\n  )\n}\n")))}d.isMDXComponent=!0}}]);