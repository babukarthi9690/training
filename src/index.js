import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import {Appkl, Appk2} from './App';
import LoginFun from './Pages/Login';
import SignUPFun from './Pages/signup';
import AboutusFun from './Pages/aboutus';
import reportWebVitals from './reportWebVitals';

export default function Training() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aboutus" element={<AboutusFun />} /> 
        <Route path="/signup" element={<SignUPFun />} /> 
        <Route path="/" element={<LoginFun />} />
      </Routes>
    </BrowserRouter>
    // <div>Hi</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Training />
  </React.StrictMode>
);
reportWebVitals();
