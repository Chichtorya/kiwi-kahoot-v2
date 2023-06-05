import { createStore, applyMiddleware } from 'redux';
import reducer from './Ducks/Reducer';
import promiseMiddleware from 'redux-promise-middleware';


const store = createStore(reducer);

export default store;
// export default createStore(reducer, applyMiddleware(promiseMiddleware()));