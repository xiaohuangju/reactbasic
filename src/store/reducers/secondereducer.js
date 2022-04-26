const initState={
    state:"firstreducer"
}

export default function secondReducer(state=initState,action){
      switch(action.type){
          case 'second':
              return{
                  ...state,
                  firstreducer:action.value
                }
      }

}