import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Provider } from 'react-redux';
import store from './Redux/store.jsx';
import {  BrowserRouter as Router  } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <Router>
      <App />
    </Router>
  </Provider>,
)
