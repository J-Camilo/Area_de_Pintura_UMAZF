import Logo from "../../Components/Images/Interface/Logo.png";
import React from 'react';
import './Account.css';

/* -------------------- dependenci -------------------- */
import { Link } from "react-router-dom";

/*------------------- components --------------- */
import { Waves } from '../UI/Waves/Waves';
import { Fond_Animated } from "../UI/Fond_Animated/Fond_Animated";
// import { Troubleshoot } from "@mui/icons-material";

export const Account = (props) => {
    return (
        <>
            <div className="header_acc">
                <div className="inner-header_acc flex_acc">
                    <div className="Counter_header_acc" >
                        <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
                        <h1 className="Text_major">Mi Cuenta</h1>
                        <Link to="/login/r/owncaso" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>
            <Fond_Animated />
            <div className='All_Account'>
                <div className="options_Account">
                    <div className="Content_Img">
                        <ion-icon name="person-circle-outline" className='IconAcount'></ion-icon>
                    </div>
                    <div className="Content_option_account">
                        <p className="select_info" id="select_info" onClick={props.Show}>Infomación Personal</p>
                        <p className="select_text" id="select_text" onClick={props.Show2}>Actualizar datos</p>
                        {/* <p className="select_text_" id="select_text_" onClick={props.Show3}>Cambiar contraseña</p> */}
                    </div>
                </div>

                {/* ---------------------------------- Information user --------------------------------------------- */}
                <div className="Info_Account" id="Info_Account">
                    <h1 className='Text_account'><b>Informacion del Usuario</b></h1>
                    <div className="Content_text">

                        <div>
                            <p><b>Nombre: </b>  {props.codeUser.name}</p>
                            <p><b>Email: </b> {props.codeUser.email}</p>
                            <p><b>Usuario:  </b> {props.codeUser.preference ? props.codeUser.preference : <>Normal</>} </p>
                            <p><b>Cualidades  </b></p>
                            {props.codeUser.preference
                                ? null
                                : <>
                                    <p>Solo puedes ver la pagina</p>
                                    <p>Si quieres mas acceso manda un correo y nos contactaremos contigo</p>
                                </>}
                            {props.codeUser.preference === "master"
                                ? <> <p> El usuario {props.codeUser.preference} tiene el poder apsoluto <b>(Creador de la pagina)</b></p>
                                    <ul>
                                        <li>Tienes acceso total</li>
                                    </ul>
                                    <p>Al tener este rol debes ser precabido con lo que haces</p> </>
                                : null}
                            {props.codeUser.preference === "admin"
                                ? <> <p></p>
                                    <ul>
                                        <li>Modificar</li>
                                        <li>Borrar todos los datos</li>
                                        <li>Dar roles a los demas usuarios</li>
                                        <li>Tienes acceso a todos los formularios <b>(Modificar, Actualizar, Borrar)</b></li>
                                        <b><li>Más opciones pronto</li></b>
                                    </ul>
                                    <p>Al tener este rol debes ser precabido con lo que haces</p> </>
                                : null}
                            {props.codeUser.preference === "supervisor"
                                ? <> <p></p>
                                    <ul>
                                        <li>Modificar Algunos datos</li>
                                        <li>Puedes ver los datos que entran <b>(sin poder borrar)</b></li>
                                        <li>Puedes actualizar los datos <b>(sin poder borrar)</b></li>
                                        <li>Tienes acceso a todos los formularios<b>(solo puedes ver)</b></li>
                                    </ul>
                                    <p>Si quieres mas acceso manda un correo y nos contactaremos contigo</p> </>
                                : null}


                        </div>


                    </div>
                    <p className="text_down">Manten tu Información actualizada para una mejor experiencia</p>
                </div>

                {/* ---------------------------------- Update user --------------------------------------------- */}
                <div className="Update_Info_Account" id="Update_Info_Account">
                    <h1 className='Text_account'><b>Actualizar Información</b></h1>
                    <div className="Content_text">
                        <form onSubmit={props.updateData}>
                            <div className="inputbox_2">
                                <ion-icon name="person-outline"></ion-icon>
                                <input className='Input_text' type="name" required minLength="5" placeholder='Nombre' value={props.usernameUp} onChange={props.onChangeU} />
                            </div>
                            <div className="inputbox_2">
                                <ion-icon name="person-outline"></ion-icon>
                                <input className='Input_text' type="email" required minLength="5" placeholder="Email" value={props.emailUp} onChange={props.onChangeE} />
                            </div>
                            <div className="inputbox_2">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input className='Input_text' type="password" required minLength="5" placeholder='Ingresa tu contraseña para verificar' />
                            </div>
                            <input type="submit" value="Actualizar" className="btn_send_" />
                        </form>
                    </div>

                    {/* ---------------------------------- Update password --------------------------------------------- */}

                    <div className="Update_Info_Password" id="Update_Info_Password">
                        <h1 className='Text_account'><b>Actualizar Contraseña</b></h1>
                        <div className="Content_text_">
                            <form>
                                <div className="inputbox_2">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <input className='Input_text' type="password" required minLength="5" placeholder='Contraseña antigua' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                                </div>
                                <div className="inputbox_2">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <input className='Input_text' type="password" required minLength="5" placeholder="Nueva Contraseña" value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                                </div>
                                <p>Ingresa tu contraseña para confirmar</p>
                                <div className="inputbox_2">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                    <input className='Input_text' type="password" required minLength="5" placeholder='Confirmar Contraseña' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                                </div>
                                <input type="submit" value="Enviar" className="btn_send_" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
