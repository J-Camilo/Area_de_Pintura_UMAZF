import React, { useEffect, useState } from 'react'
import Logo from "../../Images/Interface/Logo.png"
import "./Inventary.css"

// ----------------- dependenci--------------
import { Link } from 'react-router-dom'
import { AiOutlineDelete } from "react-icons/ai"
import Swal from 'sweetalert2';
import axios from 'axios'

// ------------------------- components -----------------
import { Waves } from '../../UI/Waves/Waves'
import { Search } from '../../UI/Search/Search'
import { Fond_Animated } from '../../UI/Fond_Animated/Fond_Animated'


export const Inventary = (props) => {

    //manejo de estados para data y buscador
    const [listData, setlistData] = useState([])
    const [buscadorData, setbuscadorData] = useState("")

    //funcion para cambio de estado del buscador
    const onchangeDataBuscador = (e) => {
        setbuscadorData(e.target.value)
        console.log(buscadorData);
    }

    //funcion para consumo de la api
    const apiConsumo = () => {
        axios.get('https://apiproducts-production-f466.up.railway.app/Api/products')
            .then(function (response) {
                // si hay data en el buscador la filtra de lo contrario solo lista
                if (buscadorData !== "") {
                   const dataFilter= response.data.filter(data=>data.name.toLowerCase().includes(buscadorData.toLowerCase()) || data.brand.toLowerCase().includes(buscadorData.toLowerCase()))
                    setlistData(dataFilter)
                } else {
                    setlistData(response.data)
                }

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    
    }

    
    useEffect(() => {
        apiConsumo()

        return () => {
            console.log("desmonto componente");
        }
    }, [buscadorData])


    const add = (e) => {
        // JSON.stringify(localStorage.setItem("aWQgcGFyYSBhZ3JlZ2FyIGNhdGVnb3LDrWEgZGUgZXN0YWRv1", e.target.value))
        document.getElementById("content_all_edit_2").className = "content_all_edit2";
        document.getElementById("content_edit2").className = "content_edit_2";
    }

    const add_ = (e) => {
        // JSON.stringify(localStorage.setItem("aWQgcGFyYSBhZ3JlZ2FyIGNhdGVnb3LDrWEgZGUgZXN0YWRv1", e.target.value))
        document.getElementById("content_all_edit_3").className = "content_all_edit3";
        document.getElementById("content_edit3").className = "content_edit_3";
    }

    const delete_User = (e) => {
        JSON.stringify(localStorage.setItem("aWQgcGFyYSBhZ3JlZ2FyIGNhdGVnb3LDrWEgZGUgZXN0YWRv1", e.target.value))
        Swal.fire({
            title: '¿Estas seguro de eliminar esto?',
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
                // props.delApi(e);
            }
        })
    }
    return (
        <>
            <Fond_Animated />
            <div className="header_acc">
                <div className="inner-header_acc flex_acc">
                    <div className="Counter_header_acc" >
                        <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
                        <h1 className="Text_major">Inventario</h1>
                        <Link to="/login/r/owncaso" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>

            <div className='Content_nav-product'>
                <div className="Content_nav-inter">
                    <div className='nav'>
                        <li>Estado
                            {/*aqui debe ir el map*/}
                            <div className='content_user'>
                                {/* <li>1 <AiOutlineDelete className='Delete_op' onClick={(e) => { delete_User(e) }} value={data._id}/></li> */}
                                <li>1 {props.codeUser.preference === "admin" || props.codeUser.preference === "master" ? <AiOutlineDelete className='Delete_op' /> : null}</li>
                                {/* <button className='btn_post_state' onClick={(e) => { add(e) }} value={data._id}>+</button> */}
                                {props.codeUser.preference === "master" || props.codeUser.preference === "admin" || props.codeUser.preference === "supervisor" ? <button className='btn_post_state' onClick={add} >+</button> : null}

                            </div>
                        </li>
                        {/*aqui debe ir el el buscador*/}

                        <div>
                            <Search OnChange={(e) => onchangeDataBuscador(e)} Id="Character_product" styles="search_product" Placeholder="Busca tu producto" />
                        </div>
                        <li>
                            Marca

                            {/*aqui debe ir el map*/}
                            <div className='content_user'>
                                {/* <li>1 <AiOutlineDelete className='Delete_op' onClick={(e) => { delete_User(e) }} value={data._id}/></li> */}
                                <li>hola {props.codeUser.preference === "admin" || props.codeUser.preference === "master" ? <AiOutlineDelete className='Delete_op' /> : null} </li>
                                {/* <button className='btn_post_state' onClick={(e) => { add(e) }} value={data._id}>+</button> */}
                                {props.codeUser.preference === "master" || props.codeUser.preference === "admin" || props.codeUser.preference === "supervisor" ? <button className='btn_post_state' onClick={add_} >+</button> : null}
                            </div>
                        </li>
                    </div>
                </div>
                <div className="content_all_edit_2" id="content_all_edit_2">
                    <div className="content_edit2" id="content_edit2">
                        <div className="Content_text_2">
                            <div className="text_edit" id="text_edit">
                                <p>Estas editando la seccion de estados</p>
                                <p>¿Cual sera el nuevo estado?</p>
                                <form action="">
                                    <div className="inputbox_2">
                                        <ion-icon name="compass-outline"></ion-icon>
                                        <input className='Input_text' type="name" required minLength="5" placeholder='Escribe el estado' value="" onChange="" />
                                    </div>
                                    <input type="submit" value="Agregar" className="btn_send_" />
                                </form>
                            </div>
                        </div>
                        <div className="Content_close">
                            <button className="btn_send_close" onClick={props.Close} >Salir de el editor</button>
                        </div>
                    </div>
                </div>

                {/* -------------------------------------------------------------------- */}
                <div className="content_all_edit_3" id="content_all_edit_3">
                    <div className="content_edit3" id="content_edit3">
                        <div className="Content_text_2">
                            <div className="text_edit" id="text_edit">
                                <p>Estas editando la seccion de Marcas</p>
                                <p>¿Cual sera la nueva marca?</p>
                                <form action="">
                                    <div className="inputbox_2">
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                        <input className='Input_text' type="name" required minLength="5" placeholder='Escribe la marca' value="" onChange="" />
                                    </div>
                                    <input type="submit" value="Agregar" className="btn_send_" />
                                </form>
                            </div>
                        </div>
                        <div className="Content_close">
                            <button className="btn_send_close_" onClick={props.Close_} >Salir de el editor</button>
                        </div>
                    </div>
                </div>
            </div>

            {
                listData.map((data) => (
                    <>  <div className="content_api_users" id="content_api_users" key={data._id}>
                        <p><b>{data.name}</b></p>
                        <p>{data.brand}</p>
                        <p><b>Cantidad: {data.amount} </b></p>
                        <div className="Content_options_users">
                            <div><button className="Delete" onClick={(e) => { delete_User(e) }} value={data._id}>Eliminar</button></div>
                        </div>
                    </div>

                    </>
                )
                )
            }
        </>
    )
}
