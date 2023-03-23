import React, { useEffect, useRef } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from "react-router-dom"


export const Layouth = (props) => {

    useEffect(() => {
        if (props.messagesLogin === "usuario no registrado") {

            props.setalertUserLogin(true)

        } else if (props.messagesLogin === "Network Error") {

            props.setalertConexionLogin(true)
        } else if (props.messagesLogin === "contraseña o email incorrectos") {

            props.setalertUserLoginPassword(true)
        }
    }, [props.messagesLogin]);

    const onclick = () => {
        props.onClick2()
    }


    return (
        <>
            <section >
                <div className="form-box">
                    <div className="form-value">

                        <form onSubmit={props.ClickLogin}>
                            <h3>Ingresa tus datos</h3>
                            <div className="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type="email" minLength={8} onChange={props.onChangeUserLogin} value={props.userLogin} required placeholder='Email' />
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input required minLength={8} type={props.shown2 ? 'text' : 'password'} onChange={props.onChangePasswordLogin} value={props.passwordUser} placeholder='Contraseña' />
                            </div>

                            <p className="forgetPass"><Link to="/recoverPassword" >¿Haz olvidado tu contraseña?</Link></p>
                            {props.alertUserLogin ? <Alert variant="outlined" severity="error"><AlertTitle>Error</AlertTitle>Usuario no registrado — <strong>Registrate!</strong></Alert> : null}
                            {props.alertUserLoginPassword ? <Alert variant="outlined" severity="error"><AlertTitle>Error</AlertTitle>Contraseña o email incorrectos — <strong>Verifica!</strong></Alert> : null}
                            {props.alertConexionLogin ? <Alert variant="outlined" severity="warning"><AlertTitle>Alvertencia</AlertTitle>Sin conexion — <strong>Conectate a una red!</strong></Alert> : <p></p>}

                            <input type="submit" value="Ingresar" className="btn_send" />

                        </form><br />

                    </div>
                </div>
            </section>
            <span></span>
            <Link ></Link>
        </>
    );
};