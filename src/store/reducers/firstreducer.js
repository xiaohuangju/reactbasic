const initState={
    firstreducer:"firstreducer"
}

export default function firstReducer(state=initState,action){
      switch(action.type){
          case 'first':
              return{
                  ...state,
                  firstreducer:action.value
                }
      }

}