import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import App from './templates/useReducerContext';
// import { Home } from './templates/Home';
// import App from './templates/useReducer';
// import App from './templates/useContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <App /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
