import {combineReducers} from 'redux';
import appReducer from './app.reducer';

const reducers = {app: appReducer};

const rootReducer = combineReducers(reducers);

export default rootReducer;
