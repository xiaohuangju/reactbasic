const initState = {
  firstreducer: "firstreducer",
};

export default function firstReducer(state = { acount1: "999" }, action) {
  switch (action.type) {
    case "first":
      return {
        ...state,
        firstreducer: action.value,
      };
      default:
          return state
  }
}
