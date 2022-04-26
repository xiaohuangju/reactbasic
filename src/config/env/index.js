import {getEnv} from './env'
let configurl = {
  sit: {
    apiHost: "https://0.0.2.3",
  },
  pre: {
    apiHost: "https://3.3.4.2",
  },
  pro: {
    apiHost: "https://2.3.4.5",
  },
  development: {
    apiHost: "http://10.0.8.226:8001",
  },
};
console.log(configurl[getEnv()],'环境变量地址')
export default configurl[getEnv()]
