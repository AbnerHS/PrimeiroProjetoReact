import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import { Home } from './templates/Home';
// import App from './templates/UseContext';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
