import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';


const store = createStore(reducer, {}, applyMiddleware(ReduxThunk, logger));


export default store;
