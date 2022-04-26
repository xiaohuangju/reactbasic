import { combineReducers } from "redux";
import firstReducer from "./firstreducer";
import secondReducer from "./secondereducer";
const initState = {
  findlist: "默认值",
};

const finlist = (state = initState, action) => {
  console.log(action, "查看dispatch的值");
  switch (action.type) {
    case "findlist":
      return {
        ...state,
        findlist: action.value,
      };
    //展开运算符，属性有的情况下会覆盖，没有的情况下保留
  }
};
let reducers=combineReducers({firstReducer, secondReducer,finlist})
export default reducers;
