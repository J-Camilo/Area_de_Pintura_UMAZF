import Logo from "../../Components/Images/Interface/Logo.png";
import React from 'react';
import './Account.css';

/* -------------------- depedenci -------------------- */
import { Link } from "react-router-dom";

/*------------------- components --------------- */
import { Waves } from '../UI/Waves/Waves';

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
            <div className='All_Account'>
                <div className="options_Account">
                    <div className="Content_Img">
                        <h1>hola</h1>
                    </div>
                    <div className="Content_option_account">
                        <p className="select_info" id="select_info" onClick={props.Show}>Infomación Personal</p>
                        <p className="select_text" id="select_text" onClick={props.Show2}>Cambiar Contraseña</p>
                        <p className="select_text_" id="select_text_" onClick={props.Show3}>Actualizar Información</p>
                    </div>
                </div>

                {/* ---------------------------------- Information user --------------------------------------------- */}
                <div className="Info_Account" id="Info_Account">
                    <h1 className='Text_account'><b>Informacion del Usuario</b></h1>
                    <div className="Content_text">
                        <div>
                            <p><b>Nombre: </b>  {props.codeUser.name}</p>
                            <p><b>Email: </b> {props.codeUser.email}</p>
                            <p><b>Usuario:  </b> {props.codeUser.email} </p>
                        </div>

                    </div>
                    <p className="text_down">Manten tu Información actualizada para una mejor experiencia</p>
                </div>

                {/* ---------------------------------- Update user --------------------------------------------- */}
                <div className="Update_Info_Account" id="Update_Info_Account">
                    <h1 className='Text_account'><b>Actualizar Información</b></h1>
                    <div className="Content_text_">
                        <form>
                            <div className="inputbox_2">
                                <ion-icon name="person-outline"></ion-icon>
                                <input className='Input_text' type="name" required minLength="5" placeholder='Primer Nombre' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                            </div>
                            <div className="inputbox_2">
                                <ion-icon name="person-outline"></ion-icon>
                                <input className='Input_text' type="name" required minLength="5" placeholder="Email" value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                            </div>
                            <p>Ingresa tu contraseña para confirmar</p>
                            <div className="inputbox_2">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input className='Input_text' type="name" required minLength="5" placeholder='Contraseña' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                            </div>
                            <input type="submit" value="Enviar" className="btn_send_" />
                        </form>
                    </div>

                    {/* ---------------------------------- Update user --------------------------------------------- */}

                    <div className="Update_Info_Account" id="Update_Info_Account">
                        <h1 className='Text_account'><b>Actualizar Información</b></h1>
                        <div className="Content_text_">
                            <form>
                                <div className="inputbox_2">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder='Primer Nombre' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                                </div>
                                <div className="inputbox_2">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder="Email" value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                                </div>
                                <p>Ingresa tu contraseña para confirmar</p>
                                <div className="inputbox_2">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder='Contraseña' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
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
