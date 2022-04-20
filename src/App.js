import logo from "./logo.svg";
import "./App.css";
import react, { useEffect } from "react";


import axios from "axios";
import config from "./config/env/index";
import {test} from './service/home';



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


  //封装后的写法
  useEffect(()=>{
    test().then((res)=>{

    })
    .catch((error)=>{

    })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
