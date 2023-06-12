import React, { useEffect, useState } from "react";
import Logo from "../../Images/Interface/Logo.png";
import "./Inventary.css";

// ----------------- dependenci--------------
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";

// ------------------------- components -----------------
import { Waves } from "../../UI/Waves/Waves";
import { Search } from "../../UI/Search/Search";
import { Fond_Animated } from "../../UI/Fond_Animated/Fond_Animated";
import {
  dataFilterBrand,
  dataFilterEstado,
} from "../../../Logic/dataFilters/DataFilters";

export const Inventary = (props) => {
  //manejo de estados para data y buscador
  const [listData, setlistData] = useState([]);
  const [buscadorData, setbuscadorData] = useState("");
  const [marcaFilter, setmarcaFilter] = useState("");
  const [estadoFilter, setestadoFilter] = useState("");
  const [dataFilters, setdataFilters] = useState({ marca: [], estado: [] });

  //funcion para cambio de estado del buscador
  const onchangeDataBuscador = (e) => {
    setbuscadorData(e.target.value);
    // console.log(buscadorData);
  };

  //funcion para consumo de la api
  const apiConsumo = () => {
    axios
      .get("https://apiproducts-production-f466.up.railway.app/Api/products")
      .then(function (response) {
        // console.log(buscadorData);
        // si hay data en el buscador la filtra de lo contrario solo lista
        if (buscadorData !== "") {
          if (marcaFilter !== "" || estadoFilter !== "") {
            if (marcaFilter !== "" && estadoFilter !== "") {
              const dataFilter = response.data.filter(
                (data) =>
                  data.name
                    .toLowerCase()
                    .includes(buscadorData.toLowerCase()) &&
                  data.brand.toLowerCase() === marcaFilter.toLowerCase() &&
                  data.state.toLowerCase() === estadoFilter.toLowerCase()
              );
              setlistData(dataFilter);
            } else if (marcaFilter !== "") {
              const dataFilter = response.data.filter(
                (data) =>
                  data.name
                    .toLowerCase()
                    .includes(buscadorData.toLowerCase()) &&
                  data.brand.toLowerCase() === marcaFilter.toLowerCase()
              );
              setlistData(dataFilter);
            } else if (estadoFilter !== "") {
              const dataFilter = response.data.filter(
                (data) =>
                  data.name
                    .toLowerCase()
                    .includes(buscadorData.toLowerCase()) &&
                  data.state.toLowerCase() === estadoFilter.toLowerCase()
              );
              setlistData(dataFilter);
            }
          } else {
            const dataFilter = response.data.filter((data) =>
              data.name.toLowerCase().includes(buscadorData.toLowerCase())
            );
            setlistData(dataFilter);
          }
        } else {
          if (marcaFilter !== "" || estadoFilter !== "") {
            if (marcaFilter !== "" && estadoFilter !== "") {
              const dataFilter = response.data.filter(
                (data) =>
                  data.brand.toLowerCase() === marcaFilter.toLowerCase() &&
                  data.state.toLowerCase() === estadoFilter.toLowerCase()
              );
              setlistData(dataFilter);
            } else if (marcaFilter !== "") {
              const dataFilter = response.data.filter(
                (data) =>
                  data.brand.toLowerCase() === marcaFilter.toLowerCase()
              );
              setlistData(dataFilter);
            } else if (estadoFilter !== "") {
              const dataFilter = response.data.filter(
                (data) =>
                  data.state.toLowerCase() === estadoFilter.toLowerCase()
              );
              setlistData(dataFilter);
            }
          } else {
            setlistData(response.data);
          }
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  //llama las funciones de obtener filtros de forma asincrona
  async function getFilters() {
    //actualiza el estado con los nuevos valores
    setdataFilters({
      marca: await dataFilterBrand(),
      estado: await dataFilterEstado(),
    });
  }
  useEffect(() => {
    getFilters();
    apiConsumo();

    // return () => {
    //   console.log("desmonto componente");
    // };
  }, [buscadorData, marcaFilter, estadoFilter]);

  const add = (e) => {
    document.getElementById("content_all_edit_2").className =
      "content_all_edit2";
    document.getElementById("content_edit2").className = "content_edit_2";
  };

  const add_ = (e) => {
    document.getElementById("content_all_edit_3").className =
      "content_all_edit3";
    document.getElementById("content_edit3").className = "content_edit_3";
  };

  const edit = (e) => {
    JSON.stringify(
      localStorage.setItem(
        "aWQgcGFyYSBhZ3JlZ2FyIGNhdGVnb3LDrWEgZGUgZXN0YWRv1",
        e.target.value
      )
    );
    document.getElementById("content_all_edit_5").className =
      "content_all_edit5";
    document.getElementById("content_edit5").className = "content_edit_5";
  };

  const delete_User = (e) => {
    JSON.stringify(
      localStorage.setItem(
        "aWQgcGFyYSBhZ3JlZ2FyIGNhdGVnb3LDrWEgZGUgZXN0YWRv1",
        e.target.value
      )
    );
    Swal.fire({
      title: "¿Estas seguro de eliminar este producto?",
      text: "No prodras revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        /* logic  */
        props.delOneProduct(e);
      }
    });
  };

  const delete_options = (e) => {
    JSON.stringify(
      localStorage.setItem(
        "ZWxpbWluYXIgb3BjaW9uZXMgZGUgZmlsdHJhZG8NCg0K",
        e.target.value
      )
    );
    Swal.fire({
      title: "¿Estas seguro de eliminar esto?",
      text: "No prodras revertir esto tendras que agreaarlo de nuevo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        /* logic  */
        props.delBrandPut(e);
      }
    });
  };

  const delete_options_2 = (e) => {
    JSON.stringify(
      localStorage.setItem(
        "ZWxpbWluYXIgb3BjaW9uZXMgZGUgZmlsdHJhZG8NCg0K",
        e.target.value
      )
    );
    Swal.fire({
      title: "¿Estas seguro de eliminar esto?",
      text: "No prodras revertir esto tendras que agreaarlo de nuevo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero eliminarlo!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        /* logic  */
        props.delStatePut(e);
      }
    });
  };
  return (
    <>
      <div className="header_acc">
        <div className="inner-header_acc flex_acc">
          <div className="Counter_header_acc">
            <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
            <h1 className="Text_major">Inventario</h1>
            <Link to="/login/r/owncaso" className="text">
              <h1 className="Text_major">Volver</h1>
            </Link>
          </div>
        </div>
        <Waves />
      </div>
      <Fond_Animated />

      <div className="Content_nav-product">
        <div className="Content_nav-inter">
          <div className="nav">
            <li>
              {estadoFilter === "" ? "Estado" : estadoFilter}
              {/*aqui debe ir el map*/}
              <div className="content_user">
                {dataFilters.estado.map((data, key) => (
                  <>
                    <li
                      onClick={() =>
                        estadoFilter === data
                          ? setestadoFilter("")
                          : setestadoFilter(data)
                      }
                      key={key}
                    >
                      {data}{" "}
                      {/* {props.codeUser.preference === "admin" ||
                        props.codeUser.preference === "master" ? (
                        <AiOutlineDelete className='Delete_op' onClick={(e) => { delete_options_2(e) }} value={data._id}/>

                      ) : null} */}
                    </li>

                  </>
                ))}
                {props.codeUser.preference === "master" ||
                  props.codeUser.preference === "admin" ||
                  props.codeUser.preference === "supervisor" ? (
                  <button className="btn_post_state" onClick={add}>
                    +
                  </button>
                ) : null}
              </div>

            </li>

            {/* el buscador*/}
            <div>
              <Search
                OnChange={(e) => onchangeDataBuscador(e)}
                Id="Character_product"
                styles="search_product"
                Placeholder="Busca tu producto"
              />
            </div>
            <li>
              {marcaFilter === "" ? "Marca" : marcaFilter}
              {/*aqui debe ir el map*/}
              <div className="content_user">
                {dataFilters.marca.map((data, key) => (
                  <li
                    onClick={() =>
                      marcaFilter === data
                        ? setmarcaFilter("")
                        : setmarcaFilter(data)
                    }
                    key={key}
                  >
                    {data}
                    {/* {props.codeUser.preference === "admin" ||
                      props.codeUser.preference === "master" ? (
                      <AiOutlineDelete className='Delete_op' onClick={(e) => { delete_options(e) }} value={data._id} />
                    ) : null} */}
                  </li>
                ))}

                {props.codeUser.preference === "master" ||
                  props.codeUser.preference === "admin" ||
                  props.codeUser.preference === "supervisor" ? (
                  <button className="btn_post_state" onClick={add_}>
                    +
                  </button>
                ) : null}
              </div>

            </li>
          </div>
        </div>

        {/* ---------------------------------- edit state ---------------------------------- */}

        <div className="content_all_edit_2" id="content_all_edit_2">
          <div className="content_edit2" id="content_edit2">
            <div className="Content_text_2">
              <div className="text_edit" id="text_edit">
                <p>Estas editando la seccion de estados</p>
                <p>¿Cual sera el nuevo estado?</p>
                <form onSubmit={props.putState}>
                  <div className="inputbox_2">
                    <ion-icon name="compass-outline"></ion-icon>
                    <input
                      className="Input_text"
                      type="name"
                      required
                      minLength="5"
                      placeholder="Escribe el estado"
                      value={props.textUp}
                      onChange={props.onChangeUpText}
                    />
                  </div>
                  <input type="submit" value="Agregar" className="btn_send_" />
                </form>
              </div>
            </div>
            <div className="Content_close">
              <button className="btn_send_close_" onClick={props.Close}>
                Salir de el editor
              </button>
            </div>
          </div>
        </div>

        {/* ---------------------------------- edit brand ---------------------------------- */}
        <div className="content_all_edit_3" id="content_all_edit_3">
          <div className="content_edit3" id="content_edit3">
            <div className="Content_text_2">
              <div className="text_edit" id="text_edit">
                <p>Estas editando la seccion de Marcas</p>
                <p>¿Cual sera la nueva marca?</p>
                <form onSubmit={props.putBrand}>
                  <div className="inputbox_2">
                    <ion-icon name="bookmark-outline"></ion-icon>
                    <input
                      className="Input_text"
                      type="name"
                      required
                      minLength="2"
                      placeholder="Escribe la marca"
                      value={props.textUp}
                      onChange={props.onChangeUpText}
                    />
                  </div>
                  <input type="submit" value="Agregar" className="btn_send_" />
                </form>
              </div>
            </div>
            <div className="Content_close">
              <button className="btn_send_close_" onClick={props.Close_}>
                Salir de el editor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* btn post of product */}
      {props.codeUser.preference === "master" ||
        props.codeUser.preference === "admin" ||
        props.codeUser.preference === "supervisor" ? (
        <div className="contentPostProduct">
          <p>¿No encuentras el producto que buscabas?</p>
          <button className="btnPost" onClick={props.See}>
            Agregar nuevo producto +{" "}
          </button>
        </div>
      ) : null}

      {/* Card of product */}
      {props.codeUser._id ? (
        listData.map((data, key) => (
          <>
            {" "}
            {data.alert >= data.amount
              ? (
                <div
                  className="content_api_users_color_advertency"
                  id="content_api_users"
                  key={key} 
                >
                  <p>
                    <b>{data.name}</b>
                  </p>  
                  <p>{data.brand}</p>
                  <p>
                    <b>Cantidad: {data.amount} </b>
                  </p>
                  <p>{data.state}</p>

                  {props.codeUser.preference === "master" ||
                    props.codeUser.preference === "admin" ? (
                    <div className="Content_options_users">
                      <div>
                        <button
                          className="Delete"
                          onClick={(e) => {
                            delete_User(e);
                          }}
                          value={data._id}
                        >
                          Eliminar
                        </button>
                      </div>
                      <div>
                        <button
                          className="Edit"
                          onClick={(e) => {
                            edit(e);
                          }}
                          value={data._id}
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : data.limit >= data.amount
                ? (
                  <div
                    className="content_api_users_color_alert"
                    id="content_api_users"
                    key={key}
                  >
                    <p>
                      <b>{data.name}</b>
                    </p>
                    <p>{data.brand}</p>
                    <p>
                      <b>Cantidad: {data.amount} </b>
                    </p>
                    <p>{data.state}</p>

                    {props.codeUser.preference === "master" ||
                      props.codeUser.preference === "admin" ? (
                      <div className="Content_options_users">
                        <div>
                          <button
                            className="Delete"
                            onClick={(e) => {
                              delete_User(e);
                            }}
                            value={data._id}
                          >
                            Eliminar
                          </button>
                        </div>
                        <div>
                          <button
                            className="Edit"
                            onClick={(e) => {
                              edit(e);
                            }}
                            value={data._id}
                          >
                            Editar
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>

                ) : (
                  <div
                    className="content_api_users_color_good"
                    id="content_api_users"
                    key={key}
                  >
                    <p>
                      <b>{data.name}</b>
                    </p>
                    <p>{data.brand}</p>
                    <p>
                      <b>Cantidad: {data.amount} </b>
                    </p>
                    <p>{data.state}</p>

                    {props.codeUser.preference === "master" ||
                      props.codeUser.preference === "admin" ? (
                      <div className="Content_options_users">
                        <div>
                          <button
                            className="Delete"
                            onClick={(e) => {
                              delete_User(e);
                            }}
                            value={data._id}
                          >
                            Eliminar
                          </button>
                        </div>
                        <div>
                          <button
                            className="Edit"
                            onClick={(e) => {
                              edit(e);
                            }}
                            value={data._id}
                          >
                            Editar
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}


          </>
        ))
      ) : (
        <div className="content_api_users">
          <p>El contenito no se puede mostrar en este momento</p>
        </div>
      )}

      <div className="content_all_edit_5" id="content_all_edit_5">
        <div className="content_edit5" id="content_edit5">
          <div className="Content_text_5">
            <div className="text_edit_" id="text_edit_">
              <p>Estas editando este producto</p>
              <p>Que quieres editar</p>
            </div>

            <div className="btn_opacity" id="btn_opacity">
              <button className="btn_send_2" onClick={props.Show__}>
                Nombre
              </button>
              <button className="btn_send_2" onClick={props.Show__2}>
                Marca
              </button>
              <button className="btn_send_2" onClick={props.Show__3}>
                Estado
              </button>
              <button className="btn_send_2" onClick={props.Show__4}>
                Cantidad
              </button>
              <button className="btn_send_2" onClick={props.Show__5}>
                Limite
              </button>
              <button className="btn_send_2" onClick={props.Show__6}>
                General
              </button>
              <button className="btn_send_2" onClick={props.Show__7}>
                Alerta
              </button>
            </div>
            {/* ---------------------------------- Form for alert product ---------------------------------- */}

            <div id="ocult_form_7">
              <div className="text_edit" id="text_edit">
                <p>Estos ayudara a darte el aviso del producto que esta por
                  debajo de esa alerta y mandar un correo de inmediato</p>
              </div>
              <form onSubmit={props.putAlertProduct}>
                <div className="inputbox_2">
                  <ion-icon name="alert-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="name"
                    required
                    minLength="1"
                    placeholder="Numero"
                    value={props.alert}
                    onChange={props.onChangeUpAlertProduct}
                  />
                </div>
                <input type="submit" value="Agregar" className="btn_send_" />
              </form>
            </div>

            {/* ---------------------------------- Form for name ---------------------------------- */}

            <div id="ocult_form_">
              <div className="text_edit" id="text_edit">
                <p>Estas editando el Nombre de este producto</p>
              </div>
              <form onSubmit={props.putNameProduct}>
                <div className="inputbox_2">
                  <ion-icon name="text-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="name"
                    required
                    minLength="5"
                    placeholder="Nombre"
                    value={props.nameProduct}
                    onChange={props.onChangeUpNameProduct}
                  />
                </div>
                <input type="submit" value="Agregar" className="btn_send_" />
              </form>
            </div>

            {/* ---------------------------------- Form for brand ---------------------------------- */}

            <div id="ocult_form_2">
              <div className="text_edit" id="text_edit">
                <p>Estas editando la Marca de este producto</p>
              </div>
              <form onSubmit={props.putBrandProduct}>
                <div className="inputbox_2">
                  <ion-icon name="bookmark-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    minLength="2"
                    placeholder="Marca"
                    value={props.brandProduct}
                    onChange={props.onChangeUpBrandProduct}
                  />
                </div>
                <input type="submit" value="Agregar" className="btn_send_" />
              </form>
            </div>

            {/* ---------------------------------- Form for state ---------------------------------- */}

            <div id="ocult_form_3">
              <div className="text_edit" id="text_edit">
                <div className="text_edit">
                  <p>Tipos de Estados hablilitados</p>
                  <table>
                    <td>directo</td>
                    <td>otro</td>
                    <td>indirecto</td>
                  </table>
                </div>
              </div>
              <form onSubmit={props.putStateProduct}>
                <div className="inputbox_2">
                  <ion-icon name="star-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    minLength="3"
                    placeholder="Estado"
                    value={props.stateProduct}
                    onChange={props.onChangeUpStateProduct}
                  />
                </div>
                <input type="submit" value="Agregar" className="btn_send_" />
              </form>
            </div>

            {/* ---------------------------------- Form for amount ---------------------------------- */}

            <div id="ocult_form_4">
              <div className="text_edit" id="text_edit">
                <p>Estas editando la cantidad disponible de este producto</p>
              </div>
              <form onSubmit={props.putAmountProduct}>
                <div className="inputbox_2">
                  <ion-icon name="add-circle-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    placeholder="Cantidad en Bodega"
                    value={props.amountProduct}
                    onChange={props.onChangeUpAmountProduct}
                  />
                </div>
                <input type="submit" value="Agregar" className="btn_send_" />
              </form>
            </div>

            {/* ---------------------------------- Form for limit ---------------------------------- */}

            <div id="ocult_form_5">
              <div className="text_edit" id="text_edit">
                <p>Estas editando su limite</p>
                <p>
                  Estos ayudara a darte el aviso del producto que esta por
                  debajo de ese limite
                </p>
              </div>
              <form onSubmit={props.putLimitProduct}>
                <div className="inputbox_2">
                  <ion-icon name="alert-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    placeholder="Que limite quieres que se active la alerta"
                    value={props.limitProduct}
                    onChange={props.onChangeUpLimitProduct}
                  />
                </div>
                <input type="submit" value="Agregar" className="btn_send_" />
              </form>
            </div>

            {/* ---------------------------------- Form for genearl (all) ---------------------------------- */}

            <div id="ocult_form_6">
              <form onSubmit={props.putGeneralProduct}>
                <div className="inputbox_2">
                  <ion-icon name="text-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="name"
                    required
                    minLength="5"
                    placeholder="Nombre"
                    value={props.nameProduct}
                    onChange={props.onChangeUpNameProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="bookmark-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    minLength="2"
                    placeholder="Marca"
                    value={props.brandProduct}
                    onChange={props.onChangeUpBrandProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="star-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    minLength="5"
                    placeholder="Estado"
                    value={props.stateProduct}
                    onChange={props.onChangeUpStateProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="add-circle-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    placeholder="Cantidad en Bodega"
                    value={props.amountProduct}
                    onChange={props.onChangeUpAmountProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="alert-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    placeholder="Que limite quieres que se active la alerta amarilla"
                    value={props.limitProduct}
                    onChange={props.onChangeUpLimitProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="alert-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="name"
                    required
                    minLength="1"
                    placeholder="Que limite quieres que se active la alerta roja"
                    value={props.alert}
                    onChange={props.onChangeUpAlertProduct}
                  />
                </div>
                <input type="submit" value="Agregar" className="btn_send_" />
              </form>
            </div>
          </div>
          <div className="Content_close">
            <button className="btn_send_close" onClick={props.don_tSee}>
              Salir de el editor
            </button>
          </div>
        </div>
      </div>

      {/*----------------------------------------------------------------------------- */}

      <div className="content_all_edit_6" id="content_all_edit_6">
        <div className="content_edit6" id="content_edit6">
          <div className="Content_text_2">
            <div className="text_edit" id="text_edit">
              <form onSubmit={props.postProduct}>
                <div className="inputbox_2">
                  <ion-icon name="text-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="name"
                    required
                    minLength="5"
                    placeholder="Nombre"
                    value={props.nameProduct}
                    onChange={props.onChangeUpNameProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="bookmark-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    minLength="3"
                    placeholder="Marca"
                    value={props.brandProduct}
                    onChange={props.onChangeUpBrandProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="star-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    minLength="5"
                    placeholder="Estado"
                    value={props.stateProduct}
                    onChange={props.onChangeUpStateProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="add-circle-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    placeholder="Cantidad en Bodega"
                    value={props.amountProduct}
                    onChange={props.onChangeUpAmountProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="alert-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="text"
                    required
                    placeholder="Que limite quieres que se active la alerta amarilla"
                    value={props.limitProduct}
                    onChange={props.onChangeUpLimitProduct}
                  />
                </div>
                <div className="inputbox_2">
                  <ion-icon name="alert-outline"></ion-icon>
                  <input
                    className="Input_text"
                    type="name"
                    required
                    minLength="1"
                    placeholder="Que limite quieres que se active la alerta roja"
                    value={props.alert}
                    onChange={props.onChangeUpAlertProduct}
                  />
                </div>
                <input type="submit" value="Agregar" className="btn_send_" />
              </form>
            </div>
          </div>
          <div className="Content_close">
            <button className="btn_send_close" onClick={props.don_tSee}>
              Salir de el editor
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
