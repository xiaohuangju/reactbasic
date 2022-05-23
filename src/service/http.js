import axios from "axios";
import config from "../config/env/index";


//axios请求地址 
axios.defaults.baseURL = config.apiHost;
//请求的时长
axios.defaults.timeout = 3000 * 2;
//请求拦截
axios.interceptors.request.use(
     //请求前做的事情
     //可以给请求统一加上某个指定请求参数等等
  (config) => {
     
    console.log(config,'config');
/*
{
    "transitional": {
        "silentJSONParsing": true,
        "forcedJSONParsing": true,
        "clarifyTimeoutError": false
    },
    "transformRequest": [
        null
    ],
    "transformResponse": [
        null
    ],
    "timeout": 6000,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "headers": {
        "useId": "1",
        "Content-Type": "application/json"
    },
    "baseURL": "http://0.0.8.0:8000",
    "method": "post",
    "url": "/co/p/f",
    "data": "{}"
}
*/

    config.headers = {
      useId: "1",
      "content-type": "application/json",
    };


    return config;
  },
  //对请求错误做什么
  (error) => {
      return new Promise.reject(error)
  }
);







//响应拦截
axios.interceptors.response.use(
    //对响应数据做点什么
  (response) => {
    console.log(response,'response');

    /*
    {
    "data": {
        "code": 2,
        "msg": "业务ID必须大于0",
        "data": null
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "52",
        "content-type": "application/json"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 6000,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
            "useId": "1",
            "Content-Type": "application/json"
        },
        "baseURL": "http://0.0.0.:800",
        "method": "post",
        "url": "/comce/proct/f",
        "data": "{}"
    },
    "request": {}
}
    */
    if (response.status == 200) {
      return response.data;
    }
    
  },
  /*对响应错误做点什么*/
  (error) => {
      return new Promise.reject(error)
  }
);
export default axios;
