import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import { reducers } from './reducers';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage, 
}

const persistedReducer = persistReducer(persistConfig, reducers) 

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
const  persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
   
  </Provider>,
  document.getElementById('root')
);


