const initState = {
  state: "firstreducer",
};

export default function secondReducer(state = {acount:'2122'}, action) {
  switch (action.type) {
    case "second":
      return {
        ...state,
        firstreducer: action.value,
      };
      default:
          return state
  }
}
