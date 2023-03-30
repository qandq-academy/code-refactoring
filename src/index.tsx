import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from './version2-provider/App2';
import './index.css';
import App1 from './version1-initial/App';
import reportWebVitals from './reportWebVitals';
import App3 from './version3-data/App3';
import App4 from './version4-hoc/App4';
import App5 from './version5-encapsulation/App5';
import App6 from './version6-refactoring/App6';
import App7 from './version7-newDisplay/App7';
import App8 from './version8-generic/App8';
import App9 from './version9-ocp/App9';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App9 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
