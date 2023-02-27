import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import { useState } from 'react'

/*------------- Components ---------------------- */
import { Home } from "./Components/page/Home/Home";
import { Supervisor } from './Components/page/Supervisor/Supervisor';
import { Register_Supervisor } from './Components/page/Register_Supervisor/Register_Supervisor';
import { Admin } from '../src/Components/page/Admin/Admin';

import './App.css';

function App() {

  // let navigate = useNavigate();

  // /*--------------------------- encrypted password ------------------------------------*/
  // const bufferABase64 = buffer => btoa(String.fromCharCode(...new Uint8Array(buffer)));
  // const base64ABuffer = buffer => Uint8Array.from(atob(buffer), c => c.charCodeAt(0));
  // const LONGITUD_SAL = 16;
  // const LONGITUD_VECTOR_INICIALIZACION = LONGITUD_SAL;
  // const contraseñaEncriptar = "lfjdnd193016"
  // const contraseñaDesencriptar = "lfjdnd193016"

  // const derivacionDeClaveBasadaEnContraseña = async (contraseña, sal, iteraciones, longitud, hash, algoritmo = 'AES-CBC') => {
  //   const encoder = new TextEncoder();
  //   let keyMaterial = await window.crypto.subtle.importKey(
  //     'raw',
  //     encoder.encode(contraseña),
  //     { name: 'PBKDF2' },
  //     false,
  //     ['deriveKey']
  //   );
  //   return await window.crypto.subtle.deriveKey(
  //     {
  //       name: 'PBKDF2',
  //       salt: encoder.encode(sal),
  //       iterations: iteraciones,
  //       hash
  //     },
  //     keyMaterial,
  //     { name: algoritmo, length: longitud },
  //     false,
  //     ['encrypt', 'decrypt']
  //   );
  // }
  // const encriptar = async (contraseña, textoPlano) => {
  //   const encoder = new TextEncoder();
  //   const sal = window.crypto.getRandomValues(new Uint8Array(LONGITUD_SAL));
  //   const vectorInicializacion = window.crypto.getRandomValues(new Uint8Array(LONGITUD_VECTOR_INICIALIZACION));
  //   const bufferTextoPlano = encoder.encode(textoPlano);
  //   const clave = await derivacionDeClaveBasadaEnContraseña(contraseña, sal, 100000, 256, 'SHA-256');
  //   const encrypted = await window.crypto.subtle.encrypt(
  //     { name: "AES-CBC", iv: vectorInicializacion },
  //     clave,
  //     bufferTextoPlano
  //   );
  //   return bufferABase64([
  //     ...sal,
  //     ...vectorInicializacion,
  //     ...new Uint8Array(encrypted)
  //   ]);
  // };

  // const desencriptar = async (contraseña, encriptadoEnBase64) => {
  //   const decoder = new TextDecoder();
  //   const datosEncriptados = base64ABuffer(encriptadoEnBase64);
  //   const sal = datosEncriptados.slice(0, LONGITUD_SAL);
  //   const vectorInicializacion = datosEncriptados.slice(0 + LONGITUD_SAL, LONGITUD_SAL + LONGITUD_VECTOR_INICIALIZACION);
  //   const clave = await derivacionDeClaveBasadaEnContraseña(contraseña, sal, 100000, 256, 'SHA-256');
  //   const datosDesencriptadosComoBuffer = await window.crypto.subtle.decrypt(
  //     { name: "AES-CBC", iv: vectorInicializacion },
  //     clave,
  //     datosEncriptados.slice(LONGITUD_SAL + LONGITUD_VECTOR_INICIALIZACION)
  //   );
  //   return decoder.decode(datosDesencriptadosComoBuffer);
  // }

  /*---------------------- finish --------------------------------*/


  /*---------------------- Register --------------------------------*/

  // const [alertUser, setalertUser] = useState(false)
  // const [alertConexion, setalertConexion] = useState(false)
  // const [validUsername, setvalidUsername] = useState('');
  // const [messages, setmessages] = useState("")
  // const [validemail, setvalidemail] = useState('.@');
  // const [usernameRegister, setusernameRegister] = useState("")
  // const [passwordRegister, setpasswordRegister] = useState("")
  // const [confrimPasword, setconfrimPasword] = useState("")
  // const [emailRegister, setemailRegister] = useState("")
  // const onChangeusernameRegister = ({ currentTarget }) => setusernameRegister(currentTarget.value);
  // const onChangepasswordRegister = ({ currentTarget }) => setpasswordRegister(currentTarget.value);
  // const onChangeemailRegister = ({ currentTarget }) => setemailRegister(currentTarget.value.toLowerCase());
  // const onChangeconfrimPasword = ({ currentTarget }) => setconfrimPasword(currentTarget.value);

  // const postApi = async (e) => {
  //   e.preventDefault()

  //   const encriptado = await encriptar(contraseñaEncriptar, passwordRegister);

  //   if ((usernameRegister.indexOf('`') !== -1 || usernameRegister.indexOf('.') !== -1 || usernameRegister.indexOf('@') !== -1 || usernameRegister.indexOf('!') !== -1 || usernameRegister.indexOf('%') !== -1 || usernameRegister.indexOf('$') !== -1 || /\s/.test(usernameRegister)) || (emailRegister.indexOf('.') === -1 || emailRegister.indexOf('@') === -1 || /\s/.test(emailRegister))) {
  //     console.log("error");
  //   } else {
  //     axios.post('https://apiprojectmain.herokuapp.com/api/users', {
  //       "name": usernameRegister,
  //       "email": emailRegister,
  //       "password": encriptado
  //     })
  //       .then(function (response) {
  //         // handle success
  //         console.log(response.data);

  //         navigate('login')

  //         //response.data.map((data => console.log(data)));
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         setmessages(error.message)

  //       });
  //     setusernameRegister("")
  //     setpasswordRegister("")
  //     setconfrimPasword("")
  //     setemailRegister("")
  //     setmessages("")
  //     setalertUser(false)
  //     setalertConexion(false)


  //   }

  //   setvalidUsername(usernameRegister)
  //   setvalidemail(emailRegister)
  //   console.log(messages);
  // }

  /*---------------------- Finish Register --------------------------------*/


  /*---------------------- Login --------------------------------*/
  // const [messagesLogin, setmessagesLogin] = useState("")
  // const [alertUserLogin, setalertUserLogin] = useState(false)
  // const [alertUserLoginPassword, setalertUserLoginPassword] = useState(false)
  // const [alertHome, setalertHome] = useState(false)
  // const [alertConexionLogin, setalertConexionLogin] = useState(false)
  // const [userLogin, setuserLogin] = useState("")
  // const [passwordUser, setpasswordUser] = useState("")

  // const onChangeUserLogin = ({ currentTarget }) => setuserLogin(currentTarget.value.toLowerCase());
  // const onChangePasswordLogin = ({ currentTarget }) => setpasswordUser(currentTarget.value);


  // const getApi = async () => {

  //   axios.get('https://apiprojectmain.herokuapp.com/api/users')
  //     .then(function (response) {
  //       // handle success
  //       response.data.map(async (data) => {

  //         const desencriptado = await desencriptar(contraseñaDesencriptar, data.password);
  //         // console.log(desencriptado);
  //         if (userLogin === data.email && passwordUser === desencriptado) {

  //           localStorage.setItem("EmailValid", true);
  //           setalertHome(true);
  //           // setidUser(data.id);
  //           localStorage.setItem("idUser", data.id);
  //           localStorage.setItem("EmailValid", true);
  //           localStorage.setItem("Password", data.password);
  //           localStorage.setItem("direction", data.direccion);

  //           // localStorage.setItem("NameUser", data.name);

  //           // setusernameUser(data.name);
  //           // setemailUser(data.email);
  //           // setpassword(data.password);
  //           setmessagesLogin("bienvenido " + data.name)

  //         } else if (userLogin !== data.email && passwordUser !== desencriptado) {

  //           setmessagesLogin("usuario no registrado")
  //           setalertConexionLogin(false)
  //         } else if (userLogin !== data.email || passwordUser !== desencriptado) {

  //           setmessagesLogin("contraseña o email incorrectos")
  //           setalertConexionLogin(false)
  //         }
  //         return console.log("data obtenida");
  //       });
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //       setmessagesLogin(error.message);
  //     })
  // }

  // const ClickLogin = (e) => {
  //   e.preventDefault()
  //   if (userLogin === "admin@gmail.com" && passwordUser === "admin1234") {
  //     localStorage.setItem("EmailValid", true);
  //     setalertHome(true);
  //     // setvaliLoginAdmin(true)
  //     setmessagesLogin("Bienvenido admin")
  //     localStorage.setItem("EmailValidAdmin", true);
  //   } else if (userLogin !== "admin@gmail.com" || passwordUser !== "admin1234") {
  //     getApi()
  //   }


  // }

  // const [shown2, setShown2] = useState(false);
  // const switchShown2 = (event) => {
  //   setShown2(!shown2)
  //   event.preventDefault()
  // };

  // const onClick2 = () => {
  //   setalertUserLogin(false)
  //   setmessagesLogin("")
  //   setuserLogin("")
  //   setpasswordUser("")
  //   navigate('register')

  // }

  /*---------------------- Finish Login --------------------------------*/









  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login_Supervisor" element={<Supervisor />} />
        <Route path="/Register_Supervisor" element={<Register_Supervisor />} />
        <Route path="/Login_admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
