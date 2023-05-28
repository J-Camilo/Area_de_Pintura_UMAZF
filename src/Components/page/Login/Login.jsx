import React, { useEffect } from 'react'
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom"
import "./Login.css"

/* -------------- Components ---------------*/
import { Waves } from "../../UI/Waves/Waves"
import { Nav } from "../../UI/Nav/Nav"
import { Fond_Animated } from '../../UI/Fond_Animated/Fond_Animated';

/* --------------- Icons ------------------- */
import { BsTools } from "react-icons/bs"
import { MdSupervisorAccount } from "react-icons/md"



export const Login = (props) => {

  useEffect(() => {
    if (props.messagesLogin === "usuario no registrado") {

      props.setalertUserLogin(true)

    } else if (props.messagesLogin === "Network Error") {

      props.setalertConexionLogin(true)
    } else if (props.messagesLogin === "contraseña o email incorrectos") {

      props.setalertUserLoginPassword(true)
    }
  }, [props.messagesLogin]);

  // const onclick = () => {
  //   props.onClick2()
  // }


  return (
    <>
    <Fond_Animated />
      <div className="header">
      <Nav nav_styles="header_acc" nav_three_style="Counter_header_acc"   img_alt="logo" logo_styles="Logo"   h1_styles_frist="Text_major" text_frist="Iniciar Sessión" /> 
      </div>

      <div className="Content_2">
        <div className="Content_options_2">
          <div className="btn_">
            <BsTools className="Icons_2" />
            <p>Operario</p></div>

          <div className="btn_3">
            <MdSupervisorAccount className="Icons_" />
            <p className="Disable">Supervisor</p>

            <div className="All">
              <section >
                <div className="form-box">
                  <div className="form-value">

                    <form onSubmit={props.ClickLogin}>
                      <h3>Ingresa tus datos</h3>
                      <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input className='Input_text' type="email" minLength={8} onChange={props.onChangeUserLogin} value={props.userLogin} placeholder='Email' required />
                      </div>

                      <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input className='Input_text' required minLength={8} type={props.shown2 ? 'text' : 'password'} onChange={props.onChangePasswordLogin} value={props.passwordUser} placeholder='Contraseña' />
                      </div>

                      <p className="forgetPass"><Link to="/recoverPassword" >¿Haz olvidado tu contraseña?</Link></p>
                      {props.alertUserLogin ? <Alert variant="outlined" severity="error">Usuario no registrado — <strong>Registrate!</strong></Alert> : null}
                      {props.alertUserLoginPassword ? <Alert variant="outlined" severity="error">Contraseña o email incorrectos — <strong>Verifica!</strong></Alert> : null}
                      {props.alertConexionLogin ? <Alert variant="outlined" severity="warning">Sin conexion — <strong>Conectate a una red!</strong></Alert> : null}

                      <input type="submit" value="Ingresar" className="btn_send"/>

                    </form>
                  </div>
                </div>
              </section>



              <div className="Content_Icon">
                <MdSupervisorAccount className="Icon-user" />
                {props.NShow ? <h3 className="text_parragraf" id='ShowRg'>Ya tienes una cuenta, puedes ingresar</h3> : <><h3 className="text_parragraf" id='ShowRg'>¿Aún no tienes cuenta?</h3> <Link to="/Register/r/R3gcaso"><button className="btn_send" id='ShowRg' onClick={onclick}>Registrarse</button></Link></>}
                <Link to="/"><button className="btn_send_back">Volver al inicio</button></Link>
              </div>
            </div>



          </div>
        </div>
      </div>


      {/* <Footer /> */}
    </>
  );
};