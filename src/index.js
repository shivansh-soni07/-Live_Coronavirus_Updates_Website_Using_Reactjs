import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import _footer from './footer'

import _home from './home'
import App from './App';
import {BrowserRouter as Router, Switch ,Route,Link} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import _about from './about';

ReactDOM.render(


  <React.StrictMode>
          <_home />
         <App />
           < _footer />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
