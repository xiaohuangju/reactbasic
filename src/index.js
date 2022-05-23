import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App a={"存在props=="} />
    </Provider>
  </React.StrictMode>
);

/*
使用插件介绍
   1、cross-env(跨平台设置和使用环境变量的脚本)
     步骤一：npm install cross-env
     步骤二：修改package.json中 **号部分
              "scripts": {
                         "start": "react-scripts start",
                         "build": "react-scripts build",
                         "test": "react-scripts test",
                         "eject": "react-scripts eject",
                         "build:sit": "cross-env REACT_APP_ENV=sit npm run build",  **
                         "build:pre": "cross-env REACT_APP_ENV=pre npm run build",  **
                         "build:pro": "cross-env REACT_APP_ENV=pro npm run build",  **
                         "build:dev": "cross-env REACT_APP_ENV=dev npm run build"   **
                          },
     
     步骤三：环境变量，就涉及到请求封装 
             如：axios.defaults.baseUrl
             axios.interceprors.request.use(()=>{},()=>{})  
             axios.interceptors.response.use(()=>{},()=>{})

   2、避免eject 暴露webpack配置, react-app-rewired customize-cra  重写,定制webpack 

      步骤一： npm install react-app-rewired customize-cra --save-dev
               react-app-rewired 和 customize-cra 之间 
               This project relies on react-app-rewired. You'll need to install that in order for customize-cra to work.
      步骤二： 修改package.json中 **部分
                        "scripts": {
                         "start": "react-app-rewired start",  **
                         "build": "react-app-rewired build",  **
                         "test": "react-app-rewired test",    **
                         "eject": "react-app-rewired eject",  **
                         "build:sit": "cross-env REACT_APP_ENV=sit npm run build",
                         "build:pre": "cross-env REACT_APP_ENV=pre npm run build",
                         "build:pro": "cross-env REACT_APP_ENV=pro npm run build",
                         "build:dev": "cross-env REACT_APP_ENV=dev npm run build"
                          },
      步骤三：根目录创建 config.overrodes.js文件,
              使用require引入 customize-cra  
              引入 path
              引入 paths
              引入 UglifyJsPlugin 
   注： src/redux.js   源码  







   ## store 
   安装  redux react-redux
   支持异步 redux-thunk
     
   步骤一: 创建文件 store  index.js   创建子文件 reducer 
           在index.js中 引入redux
           import {createStore,applyMiddleware} from 'store';
           import ThunkMiddleware from 'redux-thunk';
           import reducers from ' ./reducers/index'
           const store=createStore(reducers,applyMiddleware(ThunkMiddleware))
   


       在reducer/index.js中创建reducer ，它是一个纯函数
       import {combineReducers} from 'redux';
       const initState={
         findlist:"默认值"
       }

       const findList=(state,action)=>{
         switch (action.type){
           case "findlist":
             return {...state,findlist:action.value}
         }
       }

       let reducers=combineReducers({
         findList
       })
  步骤二：import {Provider} from 'react-redux';
          在根组件中提供store
          <Provider store={store}>
          <App/>
          </Provider>


  步骤三： 使用connect 将组件与store进行关联
          如App组件
          import {connect} from 'react-redux';

         //mapStateToProps,mapDispatchToProps 是两个函数

          const  mapStateToProps=(state)=>{
            //这个state 是store里面所有的state
            let {finlist}=state;
            return {count:finlist.findlist}
            //这个count 会被加入到app组件的props中，给该组件使用
          }

          const mapDispatchToProps=(dispatch)=>{
            //这里还没搞明白

          }
          connect(mapStateToProps,mapDispatchToProps)(App)


              
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
