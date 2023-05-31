import React from 'react'
import "./Options_Forms.css"

//----------------------- dependenci ---------------------
import Swal from 'sweetalert2';


export const Options_forms = (props) => {
    const add = (e) => {
        // JSON.stringify(localStorage.setItem("aWQgcGFyYSBhZ3JlZ2FyIGNhdGVnb3LDrWEgZGUgZXN0YWRv1", e.target.value))
        document.getElementById("content_all_edit_4").className = "content_all_edit4";
        document.getElementById("content_edit4").className = "content_edit_4";
    }

    const delete_User = (e) => {
        JSON.stringify(localStorage.setItem("SUQgcGFyYSBlbGltaW5hciBlbCBmb3JtdWxhcmlv", e.target.value))
        Swal.fire({
            title: '¿Estas seguro de eliminar este formulario?',
            text: "No prodras revertir esto",
            icon: 'warning',
            timerProgressBar: true,
            showCancelButton: true,
            timer: 6000,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, quiero eliminarlo!',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.isConfirmed) {
                /* logic  */
                props.delform(e);
            }
        })
    }

    return (
        <>
            {props.codeUser.preference === "admin" || props.codeUser.preference === "supervisor" || props.codeUser.preference === "master"
                ? <div className="Content_options_forms" onClick={add}>
                    <div className="btn_Froms">
                        {/* <BsPaintBucket className="Icons" /> */}
                        <p>Nuevo formulario</p></div>
                </div>
                : null
            }
            <div className="Content_all_option_users">
                <div className="Content_options_Users">
                    {props.dataForms.map((data, key) => (
                        <div className='Edit_forms' key={key}>
                            <a href={data.link} target='blanck' className="text">
                                <div className="btn_Acount_">
                                    {/* <BsPaintBucket className="Icons" /> */}
                                    <p>{data.name}</p>
                                </div>
                            </a>
                            {props.codeUser.preference === "admin" || props.codeUser.preference === "master"
                                ? <button className='btn_del_froms' onClick={(e) => { delete_User(e) }} value={data._id}>
                                    Eliminar este formulario
                                </button>
                                : null}
                        </div>
                    ) )}
                </div>
            </div>

            {/* -------------------------------------------------------------------- */}
            <div className="content_all_edit_4" id="content_all_edit_4">
                <div className="content_edit4" id="content_edit4">
                    <div className="Content_text_3">
                        <div className="text_edit" id="text_edit">
                            <p>¿Cual sera el nuevo fromulario?</p>

                            <form onSubmit={props.addForms}>
                                <div className="inputbox_2">
                                    <ion-icon name="compass-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder='Escribe el nombre del formulario' value={props.nameForm} onChange={props.onChangeNameF} />
                                </div>
                                <div className="inputbox_2">
                                    <ion-icon name="link-outline"></ion-icon>
                                    <input className='Input_text' type="name" required minLength="5" placeholder='Pega el link de ese formulario de microsoft' value={props.postform} onChange={props.onChangePostF} />
                                </div>
                                <div className="inputbox_2">
                                    <ion-icon name="pricetag-outline"></ion-icon>
                                    <input className='Input_text' type="name" minLength="5" placeholder='agregar un icono (opcional)' value={props.iconForms} onChange={props.onChangeIconF} />
                                </div>
                                <input type="submit" value="Agregar" className="btn_send_" />
                            </form>
                        </div>
                    </div>
                    <div className="Content_link">
                        <p>Necesitas una cuenta de Microsoft</p>
                        <a href="https://www.microsoft365.com/launch/forms" target='blanck' > Crear tu formulario aqui con Microsoft froms</a>
                    </div>
                    <div className="Content_close">
                        <button className="btn_send_close" onClick={props.Close} >Salir de el editor</button>
                    </div>

                </div>
            </div>
        </>
    )
}
