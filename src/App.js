import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

/* --------------- Dependecies ------------------ */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import 'animate.css';


/*----------------------- Components ---------------------- */
import { Home } from "./Components/page/Home/Home";
import { Login } from './Components/page/Login/Login';
import { Register } from './Components/page/Register/Register';
import { Data } from './Components/page/Data/Data';
import { Error_404 } from "./Components/page/Error_404/Error_404";
import { Account } from './Components/Account/Account';
import { All_Users } from './Components/page/All_Users/All_Users';
import { PowerBi } from './Components/page/PowerBi/PowerBi';
import { Aprobation } from './Components/page/PowerBi/Aprobation';
import { Inventary } from './Components/page/Inventary/Inventary';
import { Forms } from './Components/page/Forms/Forms';




function App() {
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /* -------------------------------------------------- LocalStorage ---------------------------------------------------- */
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/

  const valiLogin = localStorage.getItem("Q29kZVZlcmlmeWNhdGlvbg==");
  const userId = localStorage.getItem("CRQsDul8xCamE");
  const id_User = localStorage.getItem("CRmoaBwT2p2r6");
  const NShow = localStorage.getItem("CRQsDul8xCamE");
  const Update_User = localStorage.getItem("VXN1YXJpbyBpZGVudGlmaWNhZG8gcGFyYSBhY3R1YWxpemFy");
  // const id_product = localStorage.getItem("");
  const id_forms = localStorage.getItem("SUQgcGFyYSBlbGltaW5hciBlbCBmb3JtdWxhcmlv");


  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*----------------------------------------------------------------------- encrypted password ----------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/

  const bufferABase64 = buffer => btoa(String.fromCharCode(...new Uint8Array(buffer)));
  const base64ABuffer = buffer => Uint8Array.from(atob(buffer), c => c.charCodeAt(0));
  const LONGITUD_SAL = 16;
  const LONGITUD_VECTOR_INICIALIZACION = LONGITUD_SAL;
  const contraseñaEncriptar = "lfjdnd193016"
  const contraseñaDesencriptar = "lfjdnd193016"

  const derivacionDeClaveBasadaEnContraseña = async (contraseña, sal, iteraciones, longitud, hash, algoritmo = 'AES-CBC') => {
    const encoder = new TextEncoder();
    let keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(contraseña),
      { name: 'PBKDF2' },
      false,
      ['deriveKey']
    );
    return await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: encoder.encode(sal),
        iterations: iteraciones,
        hash
      },
      keyMaterial,
      { name: algoritmo, length: longitud },
      false,
      ['encrypt', 'decrypt']
    );
  }
  const encriptar = async (contraseña, textoPlano) => {
    const encoder = new TextEncoder();
    const sal = window.crypto.getRandomValues(new Uint8Array(LONGITUD_SAL));
    const vectorInicializacion = window.crypto.getRandomValues(new Uint8Array(LONGITUD_VECTOR_INICIALIZACION));
    const bufferTextoPlano = encoder.encode(textoPlano);
    const clave = await derivacionDeClaveBasadaEnContraseña(contraseña, sal, 100000, 256, 'SHA-256');
    const encrypted = await window.crypto.subtle.encrypt(
      { name: "AES-CBC", iv: vectorInicializacion },
      clave,
      bufferTextoPlano
    );
    return bufferABase64([
      ...sal,
      ...vectorInicializacion,
      ...new Uint8Array(encrypted)
    ]);
  };

  const desencriptar = async (contraseña, encriptadoEnBase64) => {
    const decoder = new TextDecoder();
    const datosEncriptados = base64ABuffer(encriptadoEnBase64);
    const sal = datosEncriptados.slice(0, LONGITUD_SAL);
    const vectorInicializacion = datosEncriptados.slice(0 + LONGITUD_SAL, LONGITUD_SAL + LONGITUD_VECTOR_INICIALIZACION);
    const clave = await derivacionDeClaveBasadaEnContraseña(contraseña, sal, 100000, 256, 'SHA-256');
    const datosDesencriptadosComoBuffer = await window.crypto.subtle.decrypt(
      { name: "AES-CBC", iv: vectorInicializacion },
      clave,
      datosEncriptados.slice(LONGITUD_SAL + LONGITUD_VECTOR_INICIALIZACION)
    );
    return decoder.decode(datosDesencriptadosComoBuffer);
  }


  /*fin datos*/
  // /*------------------------------------------------- Finish encrypted password ----------------------------------------------------------*/

  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/

  /*------------------------------------------------------------------ Login ----------------------------------------------------------------------------*/

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- validation user ------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const [messagesLogin, setmessagesLogin] = useState("")
  const [alertUserLogin, setalertUserLogin] = useState(false)
  const [alertUserLoginPassword, setalertUserLoginPassword] = useState(false)
  const [alertHome, setalertHome] = useState(false)
  const [alertConexionLogin, setalertConexionLogin] = useState(false)
  const [userLogin, setuserLogin] = useState("")
  const [passwordUser, setpasswordUser] = useState("")
  const onChangeUserLogin = ({ currentTarget }) => setuserLogin(currentTarget.value.toLowerCase());
  const onChangePasswordLogin = ({ currentTarget }) => setpasswordUser(currentTarget.value);

  const getApi = async () => {
    axios.get('https://apisupervisor-production.up.railway.app/Api/users')
      .then(function (response) {
        response.data.map(async (data) => {

          const desencriptado = await desencriptar(contraseñaDesencriptar, data.password);
          if (userLogin === data.email && passwordUser === desencriptado) {
            setalertHome(true);
            localStorage.setItem("CRmoaBwT2p2r6", data._id);
            localStorage.setItem("Y29udHJhc2XDsWEgZW5jcmlwdGFkYSB5IG1hbmlvYnJhZGE=", data.password);
            localStorage.setItem("Q29kZVZlcmlmeWNhdGlvbg==", true)

            setTimeout(function () {
              Swal.fire({
                title: `Bienvenido ${data.name}. Que bueno verte`,
                // icon: 'info',
                backdrop: '#ffffff00',
                toast: true,
                position: 'top',
                showConfirmButton: false,
                width: 560,
                allowOutsideClick: true,
                timer: 2800,
                // timerProgressBar: true,
                stopKeydownPropagation: true,
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                  popup: 'Content_Swall_',
                  container: 'Content_Swal_All'
                }
              })
            }, 2000);
          } else if (userLogin !== data.email && passwordUser !== desencriptado) {
            setmessagesLogin("usuario no registrado")
            setalertConexionLogin(false)
          } else if (userLogin !== data.email || passwordUser !== desencriptado) {
            setmessagesLogin("contraseña o email incorrectos")
            setalertConexionLogin(false)
          }
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setmessagesLogin(error.message);
      })
  }

  const ClickLogin = (e) => {
    e.preventDefault()
    if (userLogin === "admin@gmail.com" && passwordUser === "admin1234") {
      setalertHome(true);
      setmessagesLogin("Bienvenido admin")
      localStorage.setItem("CodeValid_A", true);

    } else if (userLogin !== "admin@gmail.com" || passwordUser !== "admin1234") {
      getApi()
    }
  }
  const [shown2, setShown2] = useState(false);
  const switchShown2 = (event) => {
    setShown2(!shown2)
    event.preventDefault()
  };

  const onClick2 = () => {
    setalertUserLogin(false)
    setmessagesLogin("")
    setuserLogin("")
    setpasswordUser("")
    // navigate('register')
  }

  /*------------------------------------------------------------------ Finish Login ----------------------------------------------------------------------------*/

  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/

  /*------------------------------------------------------------------ Register ----------------------------------------------------------------------------*/

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- validation user ------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const [alertUser, setalertUser] = useState(false)
  const [alertConexion, setalertConexion] = useState(false)
  const [validUsername, setvalidUsername] = useState('');
  const [messages, setmessages] = useState("")
  const [validemail, setvalidemail] = useState('.@');
  const [usernameRegister, setusernameRegister] = useState("")
  const [passwordRegister, setpasswordRegister] = useState("")
  const [confrimPasword, setconfrimPasword] = useState("")
  const [emailRegister, setemailRegister] = useState("")
  const onChangeusernameRegister = ({ currentTarget }) => setusernameRegister(currentTarget.value);
  const onChangepasswordRegister = ({ currentTarget }) => setpasswordRegister(currentTarget.value);
  const onChangeemailRegister = ({ currentTarget }) => setemailRegister(currentTarget.value.toLowerCase());
  const onChangeconfrimPasword = ({ currentTarget }) => setconfrimPasword(currentTarget.value);



  const postApi = async (e) => {
    e.preventDefault()
    const encriptado = await encriptar(contraseñaEncriptar, passwordRegister);

    if (usernameRegister.indexOf('`') !== -1 || usernameRegister.indexOf('.') !== -1 || usernameRegister.indexOf('@') !== -1 || usernameRegister.indexOf('!') !== -1 || usernameRegister.indexOf('%') !== -1 || usernameRegister.indexOf('$') !== -1 || (emailRegister.indexOf('.') === -1 || emailRegister.indexOf('@') === -1 || /\s/.test(emailRegister))) {
      console.log("error");
    } else {
      axios.post('https://apisupervisor-production.up.railway.app/Api/users', {
        "name": usernameRegister,
        "email": emailRegister,
        "password": encriptado
      })
        .then(function (response) {
          console.log("All is Okay ...");
          localStorage.setItem("CRQsDul8xCamE", true);
          Swal.fire({
            title: 'Te has registrado con exito',
            html: '<a href="/login/r/owncaso" class="BtnAlert_Ancla">Ir a login<ion-icon  class="Icon_Alert" name="chevron-forward-outline"></ion-icon></a>',
            icon: 'success',
            backdrop: '#ffffff00',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            width: 560,
            allowOutsideClick: true,
            timer: 8000,
            timerProgressBar: true,
            stopKeydownPropagation: true,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            customClass: {
              popup: 'Content_Swall_',
              container: 'Content_Swal_All'
            }
          })
        })
        .catch(function (error) {
          //  handle error
          setmessages(error.message)
          Swal.fire({
            title: 'Oh no. ah ocurrido un error, intenta de nuevo o mas tarde',
            icon: 'error',
            backdrop: '#ffffff00',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            width: 560,
            allowOutsideClick: true,
            timer: 3000,
            // timerProgressBar: true,
            stopKeydownPropagation: true,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            },
            customClass: {
              popup: 'Content_Swall_error',
              container: 'Content_Swal_All'
            }
          })
        });
      setusernameRegister("")
      setpasswordRegister("")
      setconfrimPasword("")
      setemailRegister("")
      setmessages("")
      setalertUser(false)
      setalertConexion(false)
    }
    setvalidUsername(usernameRegister)
    setvalidemail(emailRegister)
    console.log(messages);
  }


  /*------------------------------------------------------------------ Finish Register ----------------------------------------------------------------------------*/



  //------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------- show the component -----------------------------------------------------

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // --------------------------- conmponent Account -----------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------


  const Show = () => {
    document.getElementById("Info_Account").style.display = 'flex'
    document.getElementById("Update_Info_Account").style.display = 'none'
    // document.getElementById("Update_Info_Password").style.display = 'none'
    document.getElementById("select_info").className = "select_info";
    document.getElementById("select_text").className = "select_text";
    // document.getElementById("select_text_").className = "select_text_";
  }
  const Show2 = () => {
    document.getElementById("Info_Account").style.display = 'none'
    document.getElementById("Update_Info_Account").style.display = 'flex'
    document.getElementById("Update_Info_Password").style.display = 'none'
    document.getElementById("select_info").className = "select_text";
    document.getElementById("select_text").className = "select_info";
    // document.getElementById("select_text_").className = "select_text";
  }
  const Show3 = () => {
    document.getElementById("Info_Account").style.display = 'none'
    document.getElementById("Update_Info_Password").style.display = 'flex'
    document.getElementById("Update_Info_Account").style.display = 'none'
    document.getElementById("select_text").className = "select_text";
    document.getElementById("select_info").className = "select_text";
    document.getElementById("select_text_").className = "select_info";
  }

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- component All_Users --------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const Show_ = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form").style.display = "flex";
    document.getElementById("text_edit").className = "block";
  }
  const Show_2 = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form2").style.display = "flex";
    document.getElementById("text_edit").className = "block";
  }
  const Show_3 = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form3").style.display = "flex";
    document.getElementById("text_edit").className = "block";
  }
  const Show_4 = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form4").style.display = "flex";
    document.getElementById("text_edit").className = "block";
  }

  const Close4 = () => {
    // users
    document.getElementById("content_all_edit_").className = "content_all_edit_";
    document.getElementById("content_edit").className = "content_edit";
    document.getElementById("btn_opacity").className = "see";
    document.getElementById("text_edit").className = "see_";
    document.getElementById("ocult_form").style.display = "none";
    document.getElementById("ocult_form2").style.display = "none";
    document.getElementById("ocult_form3").style.display = "none";
    document.getElementById("ocult_form4").style.display = "none";
  }

  const Close5 = () => {
    // inventary
    document.getElementById("content_all_edit_2").className = "content_all_edit_2";
    document.getElementById("content_edit2").className = "content_edit2";
    setTextUp("")
  }
  const Close6 = () => {
    // inventary
    document.getElementById("content_all_edit_3").className = "content_all_edit_3";
    document.getElementById("content_edit3").className = "content_edit3";
    setTextUp("")
  }

  const Close7 = () => {
    // froms
    document.getElementById("content_all_edit_4").className = "content_all_edit_4";
    document.getElementById("content_edit4").className = "content_edit4";
    setPostform("")
    setNameForm("")
    setIiconForms("")
  }

  /// -------------------------- inventary ----------------------------------
  const See = () => {
    document.getElementById("content_all_edit_6").className = "content_all_edit6";
    document.getElementById("content_edit6").className = "content_edit_6";
  }

  const don_tSee = () => {
    document.getElementById("content_all_edit_6").className = "content_all_edit_6";
    document.getElementById("content_edit6").className = "content_edit6";

    document.getElementById("content_all_edit_5").className = "content_all_edit_5";
    document.getElementById("content_edit5").className = "content_edit5";
    // clean input
    setNameProduct("")
    setStateProduct("")
    setAmountProduct("")
    setBrandProduct("")
    setLimitProduct("")

    document.getElementById("btn_opacity").className = "see";
    document.getElementById("text_edit_").className = "see_";
    document.getElementById("ocult_form_").style.display = "none";
    document.getElementById("ocult_form_2").style.display = "none";
    document.getElementById("ocult_form_3").style.display = "none";
    document.getElementById("ocult_form_4").style.display = "none";
    document.getElementById("ocult_form_5").style.display = "none";
    document.getElementById("ocult_form_6").style.display = "none";
  }

  const Show__ = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form_").style.display = "flex";
    document.getElementById("text_edit_").className = "block";
  }
  const Show__2 = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form_2").style.display = "flex";
    document.getElementById("text_edit_").className = "block";
  }
  const Show__3 = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form_3").style.display = "flex";
    document.getElementById("text_edit_").className = "block";
  }
  const Show__4 = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form_4").style.display = "flex";
    document.getElementById("text_edit_").className = "block";
  }
  const Show__5 = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form_5").style.display = "flex";
    document.getElementById("text_edit_").className = "block";
  }
  const Show__6 = () => {
    document.getElementById("btn_opacity").className = "block";
    document.getElementById("ocult_form_6").style.display = "flex";
    document.getElementById("text_edit_").className = "block";
  }

  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /* ------------------------------------------------------------------------ data user --------------------------------------------------------------  */

  const Delecte = () => {
    localStorage.clear();
  }
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- get your user --------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const [codeUser, setCodeUser] = useState([]);

  const baseURL = `https://apisupervisor-production.up.railway.app/Api/users/${id_User}`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setCodeUser(response.data)
    });
  }, []);

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- get one user ---------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const [codeUserOne, setCodeUserOne] = useState([]);

  const baseURLOne = `https://apisupervisor-production.up.railway.app/Api/users/${Update_User}`;
  useEffect(() => {
    axios.get(baseURLOne).then((response) => {
      setCodeUserOne(response.data)
    });
  }, []);
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- get all users --------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const [contenUsers, setContenUsers] = useState([]);

  const baseURLj = `https://apisupervisor-production.up.railway.app/Api/users`;
  useEffect(() => {
    axios.get(baseURLj).then((response) => {
      setContenUsers(response.data)
    });
  }, []);

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- delete one user ------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const delApi = async (event) => {
    event.preventDefault();
    const response_ = await axios.delete(`https://apisupervisor-production.up.railway.app/Api/users/${Update_User}`);

    Swal.fire({
      title: `Se ha eliminado este usuario con exito`,
      // icon: 'info',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 560,
      allowOutsideClick: true,
      timer: 2800,
      // timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    })
  };

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- delete all user ------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------


  const delallApi = async (event) => {
    event.preventDefault();
    const response_ = await axios.delete(`https://apisupervisor-production.up.railway.app/Api/users`);

    Swal.fire({
      title: `Se ha eliminado este usuario con exito`,
      // icon: 'info',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 560,
      allowOutsideClick: true,
      timer: 2800,
      // timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    })
  };
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- uptade users ---------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const [usernameUp, setUsernameUp] = useState("");
  const [emailUp, setEmailUp] = useState("");
  const [Loading, setLoading] = useState("");
  const [stateUp, setStateUp] = useState("");
  const onChangeU = ({ currentTarget }) => setUsernameUp(currentTarget.value);
  const onChangeE = ({ currentTarget }) => setEmailUp(currentTarget.value);
  const onChangeS = ({ currentTarget }) => setStateUp(currentTarget.value.toLowerCase());


  const putApi = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      "name": usernameUp,
      "email": emailUp,
      "preference": stateUp,
    };
    const response_ = await axios.put(`https://apisupervisor-production.up.railway.app/Api/users/${Update_User}`, data);
    setLoading(false);
    //---------------------------------- result ----------------------------------
    document.getElementById("content_all_edit_").className = "content_all_edit_";
    document.getElementById("content_edit").className = "content_edit";
    setUsernameUp("")
    setEmailUp("")
    setStateUp("")
    // mensaje in console
    console.log(response_.data, "All is okay... ");
    // mensaje sweetAlert
    Swal.fire({
      title: 'Has actualizado a este usuario presiona (recargar) para ver los cambios',
      html: '<a href="/All-options/r/Usecaso" class="BtnAlert_Ancla">Recargar<ion-icon  class="Icon_Alert" name="chevron-forward-outline"></ion-icon></a>',
      icon: 'success',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 860,
      allowOutsideClick: true,
      timer: 9000,
      timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    })
  };

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //----------------------------------- only name ------------------------------- 
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const putApiName = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      "name": usernameUp
    };
    const response_ = await axios.put(`https://apisupervisor-production.up.railway.app/Api/users/${Update_User}`, data);
    setLoading(false);
    //---------------------------------- result ----------------------------------
    document.getElementById("content_all_edit_").className = "content_all_edit_";
    document.getElementById("content_edit").className = "content_edit";
    setUsernameUp("")
    setEmailUp("")
    setStateUp("")

    // mensaje in console
    console.log(response_.data, "All is okay... ");
    // mensaje sweetAlert
    Swal.fire({
      title: 'Has actualizado a este usuario presiona (recargar) para ver los cambios',
      html: '<a href="/All-options/r/Usecaso" class="BtnAlert_Ancla">Recargar<ion-icon  class="Icon_Alert" name="chevron-forward-outline"></ion-icon></a>',
      icon: 'success',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 860,
      allowOutsideClick: true,
      timer: 9000,
      timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    })
  };

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //---------------------------------- only email -------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const putApiEmail = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      "email": emailUp
    };
    const response_ = await axios.put(`https://apisupervisor-production.up.railway.app/Api/users/${Update_User}`, data);
    setLoading(false);

    //---------------------------------- result ----------------------------------
    document.getElementById("content_all_edit_").className = "content_all_edit_";
    document.getElementById("content_edit").className = "content_edit";
    setUsernameUp("")
    setEmailUp("")
    setStateUp("")
    // mensaje in console
    console.log(response_.data, "All is okay... ");
    // mensaje sweetAlert
    Swal.fire({
      title: 'Has actualizado a este usuario presiona (recargar) para ver los cambios',
      html: '<a href="/All-options/r/Usecaso" class="BtnAlert_Ancla">Recargar<ion-icon  class="Icon_Alert" name="chevron-forward-outline"></ion-icon></a>',
      icon: 'success',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 860,
      allowOutsideClick: true,
      timer: 9000,
      timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    })
  };

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  //----------------------------------- only roll ------------------------------- 
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const putApiRoll = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      "preference": stateUp
    };
    const response_ = await axios.put(`https://apisupervisor-production.up.railway.app/Api/users/${Update_User}`, data);
    setLoading(false);
    //---------------------------------- result ----------------------------------
    document.getElementById("content_all_edit_").className = "content_all_edit_";
    document.getElementById("content_edit").className = "content_edit";
    setUsernameUp("")
    setEmailUp("")
    setStateUp("")
    // mensaje in console
    console.log(response_.data, "All is okay... ");
    // mensaje sweetAlert
    Swal.fire({
      title: 'Has actualizado a este usuario presiona (recargar) para ver los cambios',
      html: '<a href="/All-options/r/Usecaso" class="BtnAlert_Ancla">Recargar<ion-icon  class="Icon_Alert" name="chevron-forward-outline"></ion-icon></a>',
      icon: 'success',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 860,
      allowOutsideClick: true,
      timer: 9000,
      timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    })
  };

  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- uptade you user ------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const [passDescrip, setPassDescrip] = useState("");
  const [verificatitonPass, setVerificatitonPass] = useState("");
  const onChangeP_acc = ({ currentTarget }) => setVerificatitonPass(currentTarget.value);

  (async function () {
    const encrypted = await desencriptar(contraseñaEncriptar, localStorage.getItem("Y29udHJhc2XDsWEgZW5jcmlwdGFkYSB5IG1hbmlvYnJhZGE="));
    setPassDescrip(encrypted)
  })();

  // subir los datos 
  const UpdateYourUser = async (event) => {
    event.preventDefault();
    const data = {
      "name": usernameUp,
      "email": emailUp
    };
    if (passDescrip === verificatitonPass) {
      const response_ = await axios.put(`https://apisupervisor-production.up.railway.app/Api/users/${id_User}`, data);

      setUsernameUp("")
      setEmailUp("")
      setVerificatitonPass("")
      console.log(response_.data, "All is okay... ");
      Swal.fire({
        title: 'Has actualizado tu usuario (recargar) para ver los cambios',
        html: '<a href="/Account/r/Acc-caso" class="BtnAlert_Ancla">Recargar<ion-icon  class="Icon_Alert" name="chevron-forward-outline"></ion-icon></a>',
        icon: 'success',
        backdrop: '#ffffff00',
        toast: true,
        position: 'top',
        showConfirmButton: false,
        width: 860,
        allowOutsideClick: true,
        timer: 9000,
        timerProgressBar: true,
        stopKeydownPropagation: true,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
          popup: 'Content_Swall_',
          container: 'Content_Swal_All'
        }
      });
    } else {
      Swal.fire({
        title: 'Contraseña incorrecta',
        text: 'Vuelve a intentarlo',
        icon: 'error',
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        buttonsStyling: false,
      })

      setVerificatitonPass("")
    }
  }


  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------
  // ----------------------------- post forms --------------------------------------
  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------
  const [postform, setPostform] = useState("");
  const [nameForm, setNameForm] = useState("");
  const [iconForms, setIiconForms] = useState("");
  const onChangePostF = ({ currentTarget }) => setPostform(currentTarget.value);
  const onChangeNameF = ({ currentTarget }) => setNameForm(currentTarget.value);
  const onChangeIconF = ({ currentTarget }) => setIiconForms(currentTarget.value);

  //logic post for forms
  // subir los datos 
  const addForms = async (event) => {
    event.preventDefault();
    const data = {
      "name": nameForm,
      "link": postform,
      "icon": iconForms
    };
    const response_ = await axios.post('https://apiproducts-production-f466.up.railway.app/Api/forms', data);


    //---------------------------------- result ----------------------------------
    document.getElementById("content_all_edit_4").className = "content_all_edit_4";
    document.getElementById("content_edit4").className = "content_edit4";

    setPostform("")
    setNameForm("")
    setIiconForms("")
    console.log(response_.data, "All is okay... ");
    Swal.fire({
      title: 'Has agregado con exito el formulario (recargar) para ver los cambios',
      html: '<a href="/All-options/r/Focaso" class="BtnAlert_Ancla">Recargar<ion-icon  class="Icon_Alert" name="chevron-forward-outline"></ion-icon></a>',
      icon: 'success',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 860,
      allowOutsideClick: true,
      timer: 9000,
      timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    }
    );

  }

  const [dataForms, setDataForms] = useState([])

  const baseURLForms = 'https://apiproducts-production-f466.up.railway.app/Api/forms';
  useEffect(() => {
    axios.get(baseURLForms).then((response) => {
      setDataForms(response.data)
    });
  }, []);
  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------
  // ----------------------------- delecte forms -----------------------------------
  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  //logic delete for forms
  const delform = async (event) => {
    event.preventDefault();
    const response_ = await axios.delete(`https://apiproducts-production-f466.up.railway.app/Api/forms/${id_forms}`);

    console.log(response_.data);
    Swal.fire({
      title: `Se ha eliminado este usuario con exito`,
      // icon: 'info',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 560,
      allowOutsideClick: true,
      timer: 2800,
      // timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    })
  };


  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------
  // ----------------------------- search user ----------------------------------
  //-----------------------------------------------------------------------------
  //-----------------------------------------------------------------------------

  const [text, setText] = useState('');
  const [characters, setCharacters] = useState([])

  const inputLoad = (event) => {
    setText(event.target.value)
    // console.log(text);
  }
  /*--------------------------------------*/
  const baseURL__ = `https://apisupervisor-production.up.railway.app/Api/users`;
  useEffect(() => {
    axios.get(baseURL__).then((response) => {
      setCharacters(response.data)
    });
  }, []);

  const inputCharacters = characters.filter((character) => character.name.toLowerCase().includes(text.toLowerCase()))


  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------
  // ----------------------------- inventary --------------------------------------
  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  const [nameProduct, setNameProduct] = useState("");
  const [brandProduct, setBrandProduct] = useState("");
  const [stateProduct, setStateProduct] = useState("");
  const [amountProduct, setAmountProduct] = useState("");
  const [limitProduct, setLimitProduct] = useState("");
  const onChangeUpNameProduct = ({ currentTarget }) => setNameProduct(currentTarget.value);
  const onChangeUpBrandProduct = ({ currentTarget }) => setBrandProduct(currentTarget.value);
  const onChangeUpStateProduct = ({ currentTarget }) => setStateProduct(currentTarget.value);
  const onChangeUpAmountProduct = ({ currentTarget }) => setAmountProduct(currentTarget.value);
  const onChangeUpLimitProduct = ({ currentTarget }) => setLimitProduct(currentTarget.value);

  //post a product
  const postProduct = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      "name": nameProduct,
      "brand": brandProduct,
      "amount": amountProduct,
      "state": stateProduct,
      "limit": limitProduct
    };
    const response_ = await axios.post(`https://apiproducts-production-f466.up.railway.app/Api/products`, data);
    setLoading(false);
    //---------------------------------- result ----------------------------------
    document.getElementById("content_all_edit_6").className = "content_all_edit_6";
    document.getElementById("content_edit6").className = "content_edit6";

    // clean input
    setNameProduct("")
    setStateProduct("")
    setAmountProduct("")
    setBrandProduct("")
    setLimitProduct("")
    // mensaje in console

    console.log(response_.data, "All is okay... ");
    // mensaje sweetAlert or handle 
    Swal.fire({
      title: 'Has agregado un prducto nuevo presiona (recargar) para ver los cambios',
      html: '<a href="/All-options/r/invcaso" class="BtnAlert_Ancla">Recargar<ion-icon  class="Icon_Alert" name="chevron-forward-outline"></ion-icon></a>',
      icon: 'success',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 860,
      allowOutsideClick: true,
      timer: 9000,
      timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_',
        container: 'Content_Swal_All'
      }
    })
  };


  //text for post brand and state
  const [textUp, setTextUp] = useState("");
  const onChangeUpText = ({ currentTarget }) => setTextUp(currentTarget.value);


  //logic post for brand
  //--------------------
  //--------------------
  //--------------------
  //--------------------


  //logic post for state
  //--------------------
  //--------------------
  //--------------------
  //--------------------

  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------
  //---------------- -------------- alert of product -------------------------------
  //--------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------

  // // let amount_product = 18
  // const onTimeProduct = () => { 

  // }
  // // start 1 min
  // setInterval(onTimeProduct, 60000);  

  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/

  /* ------------------------------------------------------------------------ dynamic island --------------------------------------------------------------  */
  const Disable = () => {
    Swal.fire({
      title: 'Oh no. ah ocurrido un error, intenta de nuevo o mas tarde',
      icon: 'error',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      width: 560,
      allowOutsideClick: true,
      timer: 3000,
      // timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_error',
        container: 'Content_Swal_All'
      }
    })
  };

  /*-----------------------------*/
  const Disable_btn = () => {
    Swal.fire({
      title: 'Este boton esta deshabilidado',
      icon: 'error',
      backdrop: '#ffffff00',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      width: 360,
      timer: 800,
      // timerProgressBar: true,
      stopKeydownPropagation: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'Content_Swall_error',
        container: 'Content_Swal_All'
      }
    })
  };




  /* ------------------------------------------------------------------------ finish dinamy islan --------------------------------------------------------------  */

  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/
  /*------------------------------------------------------------------------------------------------------------------------------------------------*/

  return (
    <BrowserRouter>
      <Routes>

        {/*content*/}
        <Route path="/" element={<Home valiLogin={valiLogin} codeUser={codeUser} id_User={id_User} Disable={Disable} />} />

        {/* logic Props contetnt protect */}
        <Route path="/All-options/r/oWncaso2" element={valiLogin ? <Data codeUser={codeUser} Delecte={Delecte} Disable={Disable} Disable_btn={Disable_btn} id_User={id_User} /> : <Error_404 />} />
        <Route path="/login/r/owncaso" element={valiLogin ? <Navigate replace to="/All-options/r/oWncaso2" /> : <Login NShow={NShow} alertUserLoginPassword={alertUserLoginPassword} setalertUserLoginPassword={setalertUserLoginPassword} setalertConexionLogin={setalertConexionLogin} alertConexionLogin={alertConexionLogin} alertUserLogin={alertUserLogin} setalertUserLogin={setalertUserLogin} messagesLogin={messagesLogin} onClick2={onClick2} switchShown2={switchShown2} shown2={shown2} userLogin={userLogin} ClickLogin={ClickLogin} passwordUser={passwordUser} onChangePasswordLogin={onChangePasswordLogin} onChangeUserLogin={onChangeUserLogin} />} />
        <Route path="/Register/r/R3gcaso" element={userId ? <Navigate replace to="/login/r/owncaso" /> : <Register alertConexion={alertConexion} setalertConexion={setalertConexion} alertUser={alertUser} setalertUser={setalertUser} setmessages={setmessages} messages={messages} validemail={validemail} validUsername={validUsername} confrimPasword={confrimPasword} onChangeconfrimPasword={onChangeconfrimPasword} postApi={postApi} emailRegister={emailRegister} passwordRegister={passwordRegister} usernameRegister={usernameRegister} onChangeemailRegister={onChangeemailRegister} onChangepasswordRegister={onChangepasswordRegister} onChangeusernameRegister={onChangeusernameRegister} />} />
        <Route path="/Account/r/Acc-caso" element={valiLogin ? <Account UpdateYourUser={UpdateYourUser} codeUser={codeUser} Show={Show} Show2={Show2} Show3={Show3} usernameUp={usernameUp} emailUp={emailUp} stateUp={stateUp} verificatitonPass={verificatitonPass} onChangeP_acc={onChangeP_acc} onChangeU={onChangeU} onChangeE={onChangeE} /> : <Error_404 />} />
        <Route path="/All-options/r/Usecaso" element={valiLogin ? <All_Users inputCharacters={inputCharacters} inputLoad={inputLoad} textalter={text} setText={setText} delApi={delApi} delallApi={delallApi} contenUsers={contenUsers} Update_User={Update_User} codeUser={codeUser} Show_={Show_} Show_2={Show_2} Show_3={Show_3} Show_4={Show_4} Close={Close4} id_User={id_User} putApi={putApi} putApiRoll={putApiRoll} putApiEmail={putApiEmail} putApiName={putApiName} usernameUp={usernameUp} emailUp={emailUp} stateUp={stateUp} onChangeU={onChangeU} onChangeE={onChangeE} onChangeS={onChangeS} /> : <Error_404 />} />
        <Route path="/All-options/r/invcaso" element={valiLogin ? <Inventary Show__={Show__} Show__2={Show__2} Show__3={Show__3} Show__4={Show__4} Show__5={Show__5} Show__6={Show__6} postProduct={postProduct}  onChangeUpLimitProduct={onChangeUpLimitProduct} onChangeUpAmountProduct={onChangeUpAmountProduct} onChangeUpBrandProduct={onChangeUpBrandProduct} onChangeUpStateProduct={onChangeUpStateProduct} onChangeUpNameProduct={onChangeUpNameProduct} nameProduct={nameProduct} brandProduct={brandProduct} stateProduct={stateProduct} amountProduct={amountProduct} limitProduct={limitProduct} don_tSee={don_tSee} See={See} userId={userId} codeUser={codeUser} Close={Close5} Close_={Close6} /> : <Error_404 />} />

        {/* logic Props contetnt */}
        <Route path="/All-options/r/Bicaso" element={<PowerBi />} />
        <Route path="/All-options/r/Adcaso" element={<Aprobation />} />

        <Route path="/All-options/r/Focaso" element={<Forms delform={delform} dataForms={dataForms} addForms={addForms} onChangeIconF={onChangeIconF} onChangeNameF={onChangeNameF} onChangePostF={onChangePostF} iconForms={iconForms} nameForm={nameForm} postform={postform} codeUser={codeUser} Close={Close7} />} />


        {/* Protect routers */}
        <Route path="/*" element={<Error_404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
