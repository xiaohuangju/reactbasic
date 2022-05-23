
import { createStore,applyMiddleware,combineReducers} from 'redux';
import ThunkMiddleware from 'redux-thunk'
import reducers from './reducers/index';
/*

combineReducers({})执行这个函数，会返回一个函数combination(statue,action)
执combineReducers({})时，会去Object.keys(reducers)获取里面的key值返回的是一个数组
然后通过判断传入的是不是一个函数 typeof ==Function ?
然后 在添加到一个新的对象

*/
const store = createStore(reducers,applyMiddleware(ThunkMiddleware))


/*store 上存在{

    dispatch
    getState
    subscribe
    replaceReducer
    observable
}
*/
export default store;

