import { Waves } from "../../UI/Waves/Waves";
import { Nav } from "../../UI/Nav/Nav";
import "./Register.css";
import { React, useEffect } from 'react';
import Alert from '@mui/material/Alert';

/* --------------- Icons ------------------- */
import { MdSupervisorAccount } from "react-icons/md"
import { Link } from "react-router-dom";


export const Register = (props) => {


    // validaciones username
    //   useEffect(() => {
    //     props.validUsername.indexOf('`') !== -1 || props.validUsername.indexOf('.') !== -1 || props.validUsername.indexOf('@') !== -1 || props.validUsername.indexOf('!') !== -1 || props.validUsername.indexOf('%') !== -1 || props.validUsername.indexOf('$') !== -1 || /\s/.test(props.validUsername) ?
    //       document.getElementById('txtvalidUsername').textContent = 'USUARIO INVALIDO: solo letras o numeros, sin espacios minimo 3 caracteres y maximo 20' :
    //       document.getElementById('txtvalidUsername').textContent = '';
    //   }, [props.validUsername])

    //   //validaciones de email
    //   useEffect(() => {
    //     props.validemail.indexOf('.') === -1 || props.validemail.indexOf('@') === -1 || /\s/.test(props.validemail) ?
    //       document.getElementById('txtvalidEmail').textContent = 'Email invalido' :
    //       document.getElementById('txtvalidEmail').textContent = '';
    //   }, [props.validemail])

    //validaciones password

    //   useEffect(() => {
    //     props.confrimPasword === props.passwordRegister ? document.getElementById('buttonRegister').removeAttribute('disabled') : document.getElementById('buttonRegister').setAttribute('disabled', 'true')
    //   }, [props.confrimPasword, props.passwordRegister]);

    //   useEffect(() => {
    //     props.confrimPasword === props.passwordRegister ?
    //       document.getElementById('txtvalidPassword').textContent = '' :
    //       document.getElementById('txtvalidPassword').textContent = 'LA CONTRASEÑA NO COINCIDE';
    //   }, [props.confrimPasword, props.passwordRegister]);

    // envio mensaje 
      useEffect(() => {
        if (props.messages === "Request failed with status code 400") {
          props.setalertUser(true)

        } else if (props.messages === "Network Error") {
          props.setalertConexion(true)
        }
      }, [props.messages]);

    const onclick = () => {
        props.onClick()
    }


    return (

        <>
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
                                                <input type="name" required minLength="5" placeholder='Nombre de Usuario' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                                            </div>
                                            {/* <p className='pvaliRegister' id='txtvalidUsername' /> */}
                                            <div className="inputbox_">
                                                <ion-icon name="mail-outline"></ion-icon>
                                                <input type="email" value={props.emailRegister} onChange={props.onChangeemailRegister} required minLength={8} placeholder='Email' />
                                            </div>
                                            {/* <p className='pvaliRegister' id='txtvalidEmail' /> */}
                                            <div className="inputbox_">
                                                <ion-icon name="lock-closed-outline"></ion-icon>
                                                <input type="password" autoComplete="current-password" required minLength="8" maxLength="20" value={props.passwordRegister} onChange={props.onChangepasswordRegister} placeholder='Contraseña' />
                                            </div>

                                            <div className="inputbox_">
                                                <ion-icon name="lock-closed-outline"></ion-icon>
                                                <input type="password" autoComplete="current-password" minLength="8" maxLength="20" value={props.confrimPasword} onChange={props.onChangeconfrimPasword} placeholder=' Confirmar Contraseña' />
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