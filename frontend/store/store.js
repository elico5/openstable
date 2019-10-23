import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

export default (preState = {}) => {
    return createStore(rootReducer, preState, applyMiddleware(thunk));
};