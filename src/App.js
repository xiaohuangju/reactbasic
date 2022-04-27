import logo from "./logo.svg";
import "./App.css";
import react, { useEffect } from "react";

import reducers from "./store/reducers";

import axios from "axios";
import config from "./config/env/index";
import { test } from "./service/home";
import { finlistfn } from "./store/action/index";
import store from "./store/index";

function App() {
  /*
  没有将axios进行封装时
  useEffect(() => {
     console.log(config,'config===')
    axios.post(
      `${config.apiHost}/comp/prot/fi`,
      {}
    );
  }, []);
  */

  //封装后的写法 test()

  useEffect(() => {
    //没有添加action
    // test().then((res)=>{

    //     store.dispatch({type:"findlist",value:res})
    // })
    // .catch((error)=>{
    // })

    console.log(store.getState(), "==");
  }, []);

  finlistfn(test, "findlist");
  console.log(store.getState(), "====");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{store.getState().finlist.findlist.msg}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
