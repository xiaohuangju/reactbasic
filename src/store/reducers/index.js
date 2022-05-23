import { combineReducers } from "redux";
const initState = {
  findlist: "默认值",
};

const finlist = (state = initState, action) => {
  switch (action.type) {
    case "findlist":
      return {
        ...state,
        findlist: action.value,
      };
    default:
      return state;
    //展开运算符，属性有的情况下会覆盖，没有的情况下保留
  }
};

let reducers = combineReducers({
  finlist,
});
export default reducers;
