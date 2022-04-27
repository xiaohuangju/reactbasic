import { createStore,applyMiddleware,combineReducers} from 'redux';
import ThunkMiddleware from 'redux-thunk'
import reducers from './reducers/index';
// const reducers=combineReducers(reducer)
// console.log(applyMiddleware,'applyMiddlewareapplyMiddleware')

const store = createStore(reducers,applyMiddleware(ThunkMiddleware))
console.log(store,'11')
export default store;