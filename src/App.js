import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import reducers from "./store/reducers";
import axios from "axios";
import config from "./config/env/index";
import { test } from "./service/home";
import { connect, bindActionCreators } from "react-redux";
function App(props) {
  /*
  props除了父组件传下来的值外，还有mapStateToProps 传进来的值
  */
  console.log(props, "组件的属性");

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
  }, []);

  function onClickFn() {
    console.log(this, "查看this==");
  }
  const onClickFn2 = () => {
    console.log(this, "查看this箭头函数");
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <>
            <h1>{props.count}</h1>{" "}
            <button
              onClick={() => {
                onClickFn();
                onClickFn2();
                console.log(this, "点击查看this");
              }}
            >
              {"按钮"}
            </button>
          </>
        </header>
      </div>
    </>
  );
}

/*
第一个参数是整个store 的存储状态  这个只返回值与store.getState()是一样的，可是使用解构赋值，
 It should not be used to trigger asynchronous behavior like AJAX calls for data fetching,
  and the functions should not be declared as async.
  后面强烈建议使用selector 
第二个参数 ownProps is 自己的props,如 app组件传了属性  a={'存在props=='}，则这个参数中就会存在这个属性
*/
const mapStateToProps = (state, ownProps) => {
  console.log(state, "state", ownProps, "ownProps");
  let { finlist } = state; //解构赋值
  return {
    count: state.finlist.findlist,
  };
};
const mapDispatchToProps = (dispatch, action) => {
  // return bindActionCreators({
  //   increase: action.increase,
  // }, dispatch);
  // increase:(...arg)=>{console.log(arg)},
};
export default connect(mapStateToProps, null)(App);
