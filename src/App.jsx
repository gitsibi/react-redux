/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LikeCounter from './components/LikeCounter'
import { reducer } from './components/Reducer';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <LikeCounter />
  </Provider>
);

export default App;
