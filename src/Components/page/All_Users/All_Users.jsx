import Logo from "../../Images/Interface/Logo.png";
import React from 'react';
import Swal from 'sweetalert2';
import "./All_Users.css"

/*------------------ components ------------------- */
import { Waves } from "../../UI/Waves/Waves";
import { Link } from "react-router-dom";
import { Fond_Animated } from "../../UI/Fond_Animated/Fond_Animated";
import { Search } from "../../UI/Search/Search";


export const All_Users = (props) => {

    //variables
    let dataUsers = props.inputCharacters

    const add = (e) => {
        JSON.stringify(localStorage.setItem("VXN1YXJpbyBpZGVudGlmaWNhZG8gcGFyYSBhY3R1YWxpemFy", e.target.value))
        document.getElementById("content_all_edit_").className = "content_all_edit";
        document.getElementById("content_edit").className = "content_edit_";
    }

    const delete_User = (e) => {
        JSON.stringify(localStorage.setItem("VXN1YXJpbyBpZGVudGlmaWNhZG8gcGFyYSBhY3R1YWxpemFy", e.target.value))
        Swal.fire({
            title: '¿Estas seguro de eliminar a este usuario?',
            text: "No prodras revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero eliminarlo!',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.isConfirmed) {
                /* logic  */
                props.delApi(e);
            }
        })
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
                {/* buscador de personas por el nombre */}
                <Search styles="content_search" Id="Character" Value={props.text} OnChange={props.inputLoad} Placeholder="Busca el nombre de esa persona" />
            </div>


            {props.codeUser._id === props.id_User
                ? dataUsers.map((data) => (
                    <> {data._id === props.id_User
                        ? null
                        : <div className="content_api_users" id="content_api_users" key={data._id}>

                            <p><b>{data.name}</b></p>
                            <p>{data.email}</p>
                            <p><b>Usuario: </b>{data.preference ? data.preference : <>Normal</>}</p>
                            <div className="Content_options_users">
                                <div><button className="Delete" onClick={(e) => { delete_User(e) }} value={data._id}>Eliminar</button></div>
                                <div><button className="Edit" onClick={(e) => { add(e) }} value={data._id}>Editar</button></div>
                            </div>
                        </div>
                    }
                    </>
                )
                )

                : <div className="content_api_users">
                    <p>El contenito no se puede mostrar en este momento</p>
                </div>

            }





            {/*---------------------------------------------------------------- */}

            <div className="content_all_edit_" id="content_all_edit_">
                <div className="content_edit" id="content_edit">
                    <div className="Content_text_2">
                        <div className="text_edit" id="text_edit">
                            <p>Estas editando a este usuario</p>
                            <p>Que quieres editar</p>
                        </div>

                        <div className="btn_opacity" id="btn_opacity">
                            <button className="btn_send_2" onClick={props.Show_}>Nombre</button>
                            <button className="btn_send_2" onClick={props.Show_2}>Email</button>
                            <button className="btn_send_2" onClick={props.Show_3}>Roll</button>
                            <button className="btn_send_2" onClick={props.Show_4}>General</button>
                        </div>

                        <div id="ocult_form" className="ocult_form">
                            <form onSubmit={props.putApiName} >
                                <div className="text_edit">
                                    <p>Recuerda que el dueño de esta cuenta vera los cambios que hiciste</p>
                                </div>
                                <div className="inputbox_2">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder='Escribe otro nombre' value={props.usernameUp} onChange={props.onChangeU} />
                                </div>
                                <input type="submit" value="Cambiar" className="btn_send_" />
                            </form>
                        </div>
                        {/*---------------------------------------------------------------- */}
                        <div id="ocult_form2">
                            <div className="text_edit">
                                <p>Recuerda que el dueño de esta cuenta vera los cambios que hiciste</p>
                            </div>
                            <form onSubmit={props.putApiEmail} >
                                <div className="inputbox_2">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <input className='Input_text' type="email" required minLength="5" placeholder="Escribe otro Email" value={props.emailUp} onChange={props.onChangeE} />
                                </div>
                                <input type="submit" value="Cambiar" className="btn_send_" />
                            </form>
                        </div>
                        {/*---------------------------------------------------------------- */}
                        <div id="ocult_form3">
                            <div className="text_edit">
                                <p>Tipos de usuarios hablilitados</p>
                                <table>
                                    <td>Admin</td>
                                    <td>Supervisor</td>
                                    <td>Normal</td>
                                </table>
                            </div>
                            <form onSubmit={props.putApiRoll}>
                                <div className="inputbox_2">
                                    <ion-icon name="accessibility-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder='Que Roll quieres darle?' value={props.stateUp} onChange={props.onChangeS} />
                                </div>
                                <input type="submit" value="Cambiar" className="btn_send_" />
                            </form>
                        </div>
                        {/*---------------------------------------------------------------- */}
                        <div id="ocult_form4">
                            <div className="text_edit">
                                <p>Recuerda que el dueño de esta cuenta vera los cambios que hiciste</p>
                            </div>
                            <form onSubmit={props.putApi}>
                                <div className="inputbox_2">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder='Primer Nombre' value={props.usernameUp} onChange={props.onChangeU} />
                                </div>
                                <div className="inputbox_2">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <input className='Input_text' type="email" required minLength="5" placeholder="Email" value={props.emailUp} onChange={props.onChangeE} />
                                </div>
                                <div className="inputbox_2">
                                    <ion-icon name="accessibility-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder='Que Roll quieres darle?' value={props.stateUp} onChange={props.onChangeS} />
                                </div>
                                <input type="submit" value="Terminar" className="btn_send_" />
                            </form>
                        </div>
                    </div>


                    <div className="Content_close">
                        <button className="btn_send_close" onClick={props.Close} >Salir de el editor</button>
                    </div>
                </div>
            </div>
        </>
    )
}
