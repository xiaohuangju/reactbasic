import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
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
              
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
