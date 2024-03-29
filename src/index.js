import React from 'react';
import ReactDOM from 'react-dom';
// $ and Popper are used by bootstrap, do not remove these imports
// even though they appear unnecessary
// import $ from 'jquery';
//import Popper from 'popper.js';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import bootstrap from 'bootstrap';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
