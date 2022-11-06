import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import LandingPage from './Pages/landing';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/signup';
import AboutusPage from './Pages/aboutus';

import reportWebVitals from './reportWebVitals';

export default function Training(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Training />
  </React.StrictMode>
);
reportWebVitals();
