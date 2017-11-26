/**
 * Created by wuqiongke703 on 17/7/25.
 */
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import thunk from 'redux-thunk'
import {browserHistory}from 'react-router';
import * as reducers from '../reducers/rootreducer.jsx';


const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);
//export const history = browserHistory;

export default store;