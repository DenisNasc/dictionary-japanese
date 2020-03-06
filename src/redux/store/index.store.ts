import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AppState} from '../reducers/app.reducer';

import rootReducer from '../reducers/index.reducer';

const store = createStore(rootReducer, composeWithDevTools());

export interface Store {
  app: AppState;
}

export default store;
