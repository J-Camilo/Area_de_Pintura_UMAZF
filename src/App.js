import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react'

/*------------- Components ---------------------- */
import { Home } from "./Components/page/Home/Home";
import { Supervisor } from './Components/page/Supervisor/Supervisor';
import { Register_Supervisor } from './Components/page/Register_Supervisor/Register_Supervisor';
import './App.css';
import { Data } from './Components/page/Data/Data';





function App() {

  const valiLoginAdmin = localStorage.getItem("EmailValidAdmin");
  const valiLogin = localStorage.getItem("CodeVerifycation");
  // let navigate = useNavigate(); 
  // localStorage.setItem("CodeVerifycation", true)

  // /*--------------------------- encrypted password ------------------------------------*/
  


  /*---------------------- Login --------------------------------*/
  const [messagesLogin, setmessagesLogin] = useState("")
  const [alertUserLogin, setalertUserLogin] = useState(false)
  const [alertUserLoginPassword, setalertUserLoginPassword] = useState(false)
  const [alertHome, setalertHome] = useState(false)
  const [alertConexionLogin, setalertConexionLogin] = useState(false)
  const [userLogin, setuserLogin] = useState("")
  const [passwordUser, setpasswordUser] = useState("")




  /*---------------------- Finish Login --------------------------------*/









  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login_Supervisor/r/owncaso" element={valiLogin ? <Navigate replace to="/All-options/r/oWncaso2" /> : <Supervisor />} />
        <Route path="/Register_Supervisor/r/R3gcaso" element={<Register_Supervisor />} />
        <Route path="/All-options/r/oWncaso2" element={<Data />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
