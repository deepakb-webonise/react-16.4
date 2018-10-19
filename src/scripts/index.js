
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import './../styles/index.sass';

const store = configureStore();

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root'),
);
