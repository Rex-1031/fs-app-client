import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {applyMiddleware, compose, createStore } from 'redux';

import Thunk from 'redux-thunk'
import reducer from './reducers/index'
import './index.css'

const store = createStore(reducer, compose(applyMiddleware(Thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>
);
