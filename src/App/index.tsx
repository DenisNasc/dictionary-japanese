import React from 'react';
import {Provider} from 'react-redux';
import Header from '../components/Header';
import Main from '../components/Main';

import store from '../redux/store/index.store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
