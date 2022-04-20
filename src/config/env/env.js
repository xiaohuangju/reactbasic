let env = process.env.REACT_APP_ENV;
export function getEnv() {
  let envObj = {
    sit: "sit",
    pre: "pre",
    pro: "pro",
    dev: "development",
  };
  /*
  本地使用process.env.REACT_APP_ENV==undefined
  本地使用 process.env.NODE_ENV ==development
  */
  console.log(envObj[env] || envObj.dev,'获取process.env.REACT_APP_ENV变量');
  return envObj[env] || envObj.dev;
}
