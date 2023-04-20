import Logo from "../../Images/Interface/Logo.png";
import React from 'react';
import "./All_Users.css"

/*------------------ components ------------------- */
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves";
import { Link } from "react-router-dom";
import { Fond_Animated } from "../../UI/Fond_Animated/Fond_Animated";


export const All_Users = (props) => {

    const add = (e) => {
      JSON.stringify(localStorage.setItem("VXN1YXJpbyBpZGVudGlmaWNhZG8gcGFyYSBhY3R1YWxpemFy", e.target.value))
      document.getElementById("content_all_edit_").className = "content_all_edit";
      document.getElementById("content_edit").className = "content_edit_";
    }
  

    return (
        <>
            <Fond_Animated />
            <div className="header2">
                <div className="inner-header_acc flex_acc">
                    <div className="Counter_header_acc" >
                        <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
                        <h1 className="Text_major">Usuarios Activos</h1>
                        <Link to="/login/r/owncaso" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>

            <div className="content_users">
                <p><b>Todos los Usuarios</b></p>
            </div>

            <div className="content_search">
                <input type="search" name="Name" id="Character" placeholder="Busca el nombre de esa persona"/>
            </div>

            {props.codeUser._id === props.id_User
                ? props.contenUsers.map((data, key) => (
                    <> <div className="content_api_users" id="content_api_users" key={key}>

                        <p><b>Nombre: </b>{data.name}</p>
                        <p><b>Email: </b>{data.email}</p>
                        <p><b>Usuario: </b>{data.preference ? data.preference : <>Normal</>}</p>
                        <div className="Content_options_users">
                            <div><button className="Delete" onClick={props.Show5}>Eliminar</button></div>
                            <div><button className="Edit" onClick={(e) => { add(e) }} value={data._id}>Editar</button></div>
                        </div>

                        {/* ------------------------------------------------------ */}
                    </div>
                    </>

                )
                )
                : <div className="content_api_users">
                    <p>El contenito no se puede mostrar en este momento esta intentando acceder de forma ilegal</p>
                </div>
            }


            <div className="content_all_edit_" id="content_all_edit_">
                <div className="content_edit" id="content_edit">
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
                            <div className="inputbox_2">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input className='Input_text' type="name" required minLength="5" placeholder='Que Roll quieres darle?' value={props.usernameRegister} onChange={props.onChangeusernameRegister} />
                            </div>
                            <input type="submit" value="Terminar" className="btn_send_" />
                        </form>
                    </div>
                    <div className="Content_close">
                        <button className="btn_send_close" onClick={props.Close} >Salir de el editor</button>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
