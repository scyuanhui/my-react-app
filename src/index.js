import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./App.css"
import reportWebVitals from './reportWebVitals';
// import svgContent from "!!raw-loader!./media/svg/symbol-defs.svg";
// document.querySelector("body").innerHTML += svgContent;
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
