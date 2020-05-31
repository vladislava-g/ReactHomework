import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componets/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {todoList} from './reducers/todoReducer'

let store = createStore(todoList)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
