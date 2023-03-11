import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import blueobject from './images/blueobject.png'
import yellowobject from './images/yellowobject.png'
import cubeobject from './images/cubeobject.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='toprightsmallcircle'></div>
    <div className='toprightbigcircle'></div>

    <div className='bottomleftbigcircle'></div>
    <div className='bottomleftsmallcircle'></div>

    <div className='blueobject' style={{ backgroundImage: `url(${blueobject})` }}></div>
    <div className='yellowobject' style={{ backgroundImage: `url(${yellowobject})` }}></div>
    <div className='cubeobject' style={{ backgroundImage: `url(${cubeobject})` }}></div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
