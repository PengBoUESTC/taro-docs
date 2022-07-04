"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[39052],{79874:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,s(s({ref:n},l),{},{components:t})):r.createElement(k,s({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4584:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Use Redux"},i=void 0,c={unversionedId:"redux",id:"version-3.x/redux",title:"Use Redux",description:"You can freedomly use Redux which is a very popular  tool in React community to solve data management problems for complex projects.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/redux.md",sourceDirName:".",slug:"/redux",permalink:"/taro-docs/en/docs/redux",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/redux.md",tags:[],version:"3.x",frontMatter:{title:"Use Redux"},sidebar:"docs",previous:{title:"Community Quality Material",permalink:"/taro-docs/en/docs/treasures"},next:{title:"Vue2 Vuex",permalink:"/taro-docs/en/docs/vuex"}},p={},l=[{value:"Hooks",id:"hooks",level:2},{value:"Use Hooks in Redux",id:"use-hooks-in-redux",level:3},{value:"<code>useSelector</code>",id:"useselector",level:3},{value:"Use Case",id:"use-case",level:4},{value:"Advanced Usage",id:"advanced-usage",level:4},{value:"<code>useDispatch</code>",id:"usedispatch",level:3},{value:"Use Case",id:"use-case-1",level:4},{value:"<code>useStore</code>",id:"usestore",level:3},{value:"Use case",id:"use-case-2",level:4}],u={toc:l};function d(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can freedomly use ",(0,r.kt)("a",o({parentName:"p"},{href:"https://redux.js.org/"}),"Redux")," which is a very popular  tool in ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," community to solve data management problems for complex projects."),(0,r.kt)("p",null,"First please install ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-thunk")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-logger")," and so on ,such as  ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," middleware which you need."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"$ yarn add redux react-redux redux-thunk redux-logger\n# or use npm\n$ npm install --save redux react-redux redux-thunk redux-logger\n")),(0,r.kt)("p",null,"Then you can create a new directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," under the project ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory, and add an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file under the directory to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),", set up the middleware of ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," according to your preferences. As in the following example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"in the following example redux-thunk")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-logger")," these two middleware."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'}),"import { createStore, applyMiddleware, compose } from 'redux'\nimport thunkMiddleware from 'redux-thunk'\nimport rootReducer from '../reducers'\n\nconst composeEnhancers =\n  typeof window === 'object' &&\n  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   \n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n      // Specify extension\u2019s options like name, actionsBlacklist, actionsCreators, serialize...\n    }) : compose\n\nconst middlewares = [\n  thunkMiddleware\n]\n\nif (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {\n  middlewares.push(require('redux-logger').createLogger())\n}\n\nconst enhancer = composeEnhancers(\n  applyMiddleware(...middlewares),\n  // other store enhancers if any\n)\n\nexport default function configStore () {\n  const store = createStore(rootReducer, enhancer)\n  return store\n}\n")),(0,r.kt)("p",null,"Next, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," component provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," to connect the previously written ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," to the application, in the project entry file ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/app.js"',title:'"src/app.js"'}),"import React, { Component } from 'react'\nimport { Provider } from 'react-redux'\n\nimport configStore from './store'\n\nimport './app.css'\n\nconst store = configStore()\n\nclass App extends Component {\n  componentDidMount () {}\n\n  componentDidShow () {}\n\n  componentDidHide () {}\n\n  componentDidCatchError () {}\n\n  // The render() function has no practical effect in the App class.\n  // Please don't modify the function!\n  render () {\n    return (\n      <Provider store={store}>\n        {this.props.children}\n      </Provider>\n    )\n  }\n}\n\nexport default App\n\n")),(0,r.kt)("p",null,"Then you can start use it. As recommended by ",(0,r.kt)("inlineCode",{parentName:"p"},"redux"),", you can add"),(0,r.kt)("p",null,"-",(0,r.kt)("inlineCode",{parentName:"p"},"constants")," directory, used to store all ",(0,r.kt)("inlineCode",{parentName:"p"},"action type")," constants\n-",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," directory, used to store all ",(0,r.kt)("inlineCode",{parentName:"p"},"actions"),"\n-",(0,r.kt)("inlineCode",{parentName:"p"},"reducers")," directory, used to store all ",(0,r.kt)("inlineCode",{parentName:"p"},"reducers")),(0,r.kt)("p",null,"For example, If we want to develop a simple counter function just contains add and subtract."),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"action type")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/constants/counter.js"',title:'"src/constants/counter.js"'}),"export const ADD = 'ADD'\nexport const MINUS = 'MINUS'\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," function"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/reducers/counter.js"',title:'"src/reducers/counter.js"'}),"import { ADD, MINUS } from '../constants/counter'\n\nconst INITIAL_STATE = {\n  num: 0\n}\n\nexport default function counter (state = INITIAL_STATE, action) {\n  switch (action.type) {\n    case ADD:\n      return {\n        ...state,\n        num: state.num + 1\n      }\n    case MINUS:\n      return {\n        ...state,\n        num: state.num - 1\n      }\n    default:\n      return state\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/reducers/index.js"',title:'"src/reducers/index.js"'}),"import { combineReducers } from 'redux'\nimport counter from './counter'\n\nexport default combineReducers({\n  counter\n})\n\n")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," "),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/actions/counter.js"',title:'"src/actions/counter.js"'}),"import {\n  ADD,\n  MINUS\n} from '../constants/counter'\n\nexport const add = () => {\n  return {\n    type: ADD\n  }\n}\nexport const minus = () => {\n  return {\n    type: MINUS\n  }\n}\n\n// Asynchronous action\nexport function asyncAdd () {\n  return dispatch => {\n    setTimeout(() => {\n      dispatch(add())\n    }, 2000)\n  }\n}\n\n")),(0,r.kt)("p",null,"Finally,  we can use it in the page (or component).The ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," method provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," will commect ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," with our page."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx",metastring:'title="src/pages/index/index.js"',title:'"src/pages/index/index.js"'}),"import React, { Component } from 'react'\nimport { connect } from 'react-redux'\nimport { View, Button, Text } from '@tarojs/components'\n\nimport { add, minus, asyncAdd } from '../../actions/counter'\n\nimport './index.css'\n\n\n@connect(({ counter }) => ({\n  counter\n}), (dispatch) => ({\n  add () {\n    dispatch(add())\n  },\n  dec () {\n    dispatch(minus())\n  },\n  asyncAdd () {\n    dispatch(asyncAdd())\n  }\n}))\nclass Index extends Component {\n  componentWillReceiveProps (nextProps) {\n    console.log(this.props, nextProps)\n  }\n\n  componentWillUnmount () { }\n\n  componentDidShow () { }\n\n  componentDidHide () { }\n\n  render () {\n    return (\n      <View className='index'>\n        <Button className='add_btn' onClick={this.props.add}>+</Button>\n        <Button className='dec_btn' onClick={this.props.dec}>-</Button>\n        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>\n        <View><Text>{this.props.counter.num}</Text></View>\n        <View><Text>Hello, World</Text></View>\n      </View>\n    )\n  }\n}\n\nexport default Index\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"connect")," method will receive two parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapStateToProps"),", function type, accepts the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," as a parameter, which is used to map ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," to component ",(0,r.kt)("inlineCode",{parentName:"li"},"props"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mapDispatchToProps"),", function type, receive the ",(0,r.kt)("inlineCode",{parentName:"li"},"dispatch()")," method and return the callback function expected to be injected into the ",(0,r.kt)("inlineCode",{parentName:"li"},"props")," of the display component. ")),(0,r.kt)("h2",o({},{id:"hooks"}),"Hooks"),(0,r.kt)("h3",o({},{id:"use-hooks-in-redux"}),"Use Hooks in Redux"),(0,r.kt)("p",null,"The basic setting of using hooks is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),". You need to set up your ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," and put your application in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," component.\n\u4f7f\u7528 hooks \u7684\u57fa\u672c\u8bbe\u7f6e\u548c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," \u7684\u8bbe\u7f6e\u662f\u4e00\u6837\u7684, \u4f60\u9700\u8981\u8bbe\u7f6e\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"store"),", \u5e76\u628a\u4f60\u7684\u5e94\u7528\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," \u7ec4\u4ef6\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"const store = configreStore(rootReducer)\n\nclass App extends Components {\n    render () {\n        return (\n            <Provider store={store}>\n                <Index />\n            </Provider>\n        )\n    }\n}\n")),(0,r.kt)("p",null,"In this case, you can use Hooks API provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"redux")," in function component."),(0,r.kt)("h3",o({},{id:"useselector"}),(0,r.kt)("inlineCode",{parentName:"h3"},"useSelector")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-javascript"}),"const result : any = useSelector(selector : Function, equalityFn? : Function)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSelector")," allows you to use selector function to get data from a Redux Store."),(0,r.kt)("p",null,"The Selector funtion is roughly equivalent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps")," parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," function. It will be called every time the component renders. And it will also subscribe to the Redux store, which will be called when a Redux action is dispatched."),(0,r.kt)("p",null,"But ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelector")," is still somewhat different from ",(0,r.kt)("inlineCode",{parentName:"p"},"mapStateToProps"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlike ",(0,r.kt)("inlineCode",{parentName:"li"},"mapStateToProps")," which only returns objects, the Selector may return any value."),(0,r.kt)("li",{parentName:"ul"},"When an action is dispatched, ",(0,r.kt)("inlineCode",{parentName:"li"},"useSelector")," will make a shallow comparison of the return value before and after the selector. If they are different, the component will be forced to update."),(0,r.kt)("li",{parentName:"ul"},"The Selector function does not accept the ",(0,r.kt)("inlineCode",{parentName:"li"},"ownProps")," parameter. But selector can access the props passed down by functional components through closures")),(0,r.kt)("h4",o({},{id:"use-case"}),"Use Case"),(0,r.kt)("p",null,"Basic usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { useSelector } from 'react-redux'\n\nexport const CounterComponent = () => {\n  const counter = useSelector(state => state.counter)\n  return <View>{counter}</View>\n}\n")),(0,r.kt)("p",null,"Use the closure to decide how to select data:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"export const TodoListItem = props => {\n  const todo = useSelector(state => state.todos[props.id])\n  return <View>{todo.text}</View>\n}\n\n")),(0,r.kt)("h4",o({},{id:"advanced-usage"}),"Advanced Usage"),(0,r.kt)("p",null,"You could learn how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"reselect")," to cache selector from ",(0,r.kt)("a",o({parentName:"p"},{href:"https://react-redux.js.org/api/hooks#using-memoizing-selectors"}),"react-redux documentatio"),"."),(0,r.kt)("h3",o({},{id:"usedispatch"}),(0,r.kt)("inlineCode",{parentName:"h3"},"useDispatch")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-javascript"}),"const dispatch = useDispatch()\n")),(0,r.kt)("p",null,"This Hook will return a reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," of the Redux store. You can use it to dispatch actions."),(0,r.kt)("h4",o({},{id:"use-case-1"}),"Use Case"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { useDispatch } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n\n  return (\n    <View>\n      <Text>{value}</Text>\n      <Button onClick={() => dispatch({ type: 'increment-counter' })}>\n        Increment counter\n      </Button>\n    </View>\n  )\n}\n")),(0,r.kt)("p",null,"It's recommend to use ",(0,r.kt)("inlineCode",{parentName:"p"},"useCallback")," to cache the callback, when we use ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," to pass a callback to  child component. Because the component may be re-redered due to changes in references."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"// CounterComponent.js\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n  const incrementCounter = useCallback(\n    () => dispatch({ type: 'increment-counter' }),\n    [dispatch]\n  )\n\n  return (\n    <View>\n      <Text>{value}</Text>\n      <MyIncrementButton onIncrement={incrementCounter} />\n    </View>\n  )\n}\n\n// IncrementButton.js\nconst MyIncrementButton = ({ onIncrement }) => (\n  <Button onClick={onIncrement}>Increment counter</Button>\n)\n\nexport default Taro.memo(MyIncrementButton)\n")),(0,r.kt)("h3",o({},{id:"usestore"}),(0,r.kt)("inlineCode",{parentName:"h3"},"useStore")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const store = useStore()\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useStore")," returns a store reference, which is exactly the same as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," component reference."),(0,r.kt)("p",null,"This hook may not be used often, But ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelector")," is your first choice in most cases, If you need to replace reducers, you may use this API."),(0,r.kt)("h4",o({},{id:"use-case-2"}),"Use case"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { useStore } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const store = useStore()\n\n  // EXAMPLE ONLY! Do not do this in a real app.\n  // The component will not automatically update if the store state changes\n  return <div>{store.getState()}</div>\n}\n")))}d.isMDXComponent=!0}}]);