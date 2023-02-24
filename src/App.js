import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*------------- Components ---------------------- */
import { Home } from "./Components/page/Home/Home";
import { Supervisor } from './Components/page/Supervisor/Supervisor';

import './App.css';

function App() {

  return (
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login_Supervisor" element={<Supervisor />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
