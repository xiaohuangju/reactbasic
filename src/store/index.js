import { createStore,applyMiddleware,combineReducers} from 'redux';
import reducer from './reducers/index';
// const reducers=combineReducers(reducer)
// console.log(applyMiddleware,'applyMiddlewareapplyMiddleware')

const store = createStore(reducer)
console.log(store,'11')
export default store;