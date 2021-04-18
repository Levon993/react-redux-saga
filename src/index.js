import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import {compose, createStore,applyMiddleware} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {spamMiddleware} from "./redux/Middleware";
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/sagas";

const saga =createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(thunk,spamMiddleware,saga))
saga.run(sagaWatcher)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
