import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*------------- Components ---------------------- */
import { Home } from "./Components/page/Home/Home";
import { Supervisor } from './Components/page/Supervisor/Supervisor';
import { Register_Supervisor } from './Components/page/Register_Supervisor/Register_Supervisor';

import './App.css';

function App() {

  return (
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login_Supervisor" element={<Supervisor />} /> 
        <Route path="/Register_Supervisor" element={<Register_Supervisor />} /> 
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
