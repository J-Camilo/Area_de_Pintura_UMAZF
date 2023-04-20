import "./Register.css";
import { React, useEffect } from 'react';
import Alert from '@mui/material/Alert';

/* --------------- Components ------------------ */
import { Waves } from "../../UI/Waves/Waves";
import { Nav } from "../../UI/Nav/Nav";
import { Fond_Animated } from "../../UI/Fond_Animated/Fond_Animated";

/* --------------- Icons ------------------- */
import { MdSupervisorAccount } from "react-icons/md"
import { Link } from "react-router-dom";



export const Register = (props) => {

    // send sms 
      useEffect(() => {
        if (props.messages === "Request failed with status code 400") {
          props.setalertUser(true)

        } else if (props.messages === "Network Error") {
          props.setalertConexion(true)
        }
      }, [props.messages]);

    // const onclick = () => {
    //     props.onClick()
    // }


    return (

        <>
            <Fond_Animated />
            <div className="header">
                <Nav Text="Registrarse" sty="Counter_header" contentAll="inner-header flex" />
                <Waves />
            </div>

            <div className="Content_3">
                <div className="Content_options_3">
                    <div className="btn_content">
                        <MdSupervisorAccount className="Icons_" />
                        {/* <p className="Disable">Supervisor</p> */}

                        <div className="All_">
                            <section >
                                <div className="form-box_">
                                    <div className="form-value_">

                                        <form  onSubmit={props.postApi}>
                                            <h3>Ingresa tus datos</h3>
                                            <div className="inputbox_">
                                                <ion-icon name="person-outline"></ion-icon>
                                                <input  className='Input_text' type="name" required minLength="5" placeholder='Nombre Completo' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                                            </div>
                                            {/* <p className='pvaliRegister' id='txtvalidUsername' /> */}
                                            <div className="inputbox_">
                                                <ion-icon name="mail-outline"></ion-icon>
                                                <input className='Input_text' type="email" value={props.emailRegister} onChange={props.onChangeemailRegister} required minLength={8} placeholder='Email' />
                                            </div>
                                            {/* <p className='pvaliRegister' id='txtvalidEmail' /> */}
                                            <div className="inputbox_">
                                                <ion-icon name="lock-closed-outline"></ion-icon>
                                                <input className='Input_text' type="password" autoComplete="current-password" required minLength="8" maxLength="20" value={props.passwordRegister} onChange={props.onChangepasswordRegister} placeholder='Contraseña' />
                                            </div>

                                            <div className="inputbox_">
                                                <ion-icon name="lock-closed-outline"></ion-icon>
                                                <input className='Input_text' type="password" autoComplete="current-password" minLength="8" maxLength="20" value={props.confrimPasword} onChange={props.onChangeconfrimPasword} placeholder=' Confirmar Contraseña' />
                                            </div>
                                            {/* <p className='pvaliRegister' id='txtvalidPassword' /> */}

                                            {props.alertUser ? <Alert variant="outlined" severity="warning">Usuario o Email ya Registrado!</Alert> : null}
                                            {props.alertConexion ? <Alert variant="outlined" severity="warning">Sin conexion — <strong>Conectate a una red!</strong></Alert> : null}
                                            <input value="Registrarse" type="submit" className="btn_send_" />
                                      

                                        </form>

                                    </div>
                                </div>
                            </section>
                            <div className="Content_Icon">
                                <MdSupervisorAccount className="Icon-user" />
                                <h3 className="text_parragraf">Registra tus datos aquí</h3>
                                <Link to="/login/r/owncaso"><button className="btn_send_back" onClick={onclick}>Volver a login</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};