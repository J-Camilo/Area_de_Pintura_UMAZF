import React from "react";
import { Link } from "react-router-dom"

/* --------------- Icons ------------------- */
import { BsTools } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { TbCloudDataConnection } from "react-icons/tb";
import { RiAccountPinCircleLine } from "react-icons/ri";

import "./Options_User.css"

export const Options_User = (props) => {

    return (
        <>
            <div className="Content_all_option_users">
                <div className="Content_options_Users">
                    <div className="btn_Forms" onClick={props.Disable_btn}>
                        <BsTools className="Icons" />
                        <p>Formularios</p></div>
                    <Link to="/All-options/r/Bicaso" className="text"><div className="btn_powerBi" >
                        <MdOutlineAnalytics className="Icons"/>
                        <p>Datos power bi</p></div>
                    </Link>

                    {props.codeUser.preference === "admin" || props.codeUser.preference === "master" 
                     ? <Link to="/All-options/r/Usecaso" className="text"><div className="btn_Users">
                        <FaUsers className="Icons" />
                        <p>Usuarios</p></div>
                    </Link> : null }

                    {props.codeUser.preference === "master" || props.codeUser.preference === "admin" 
                     ? <Link to="/All-options/r/oWncaso2" className="text"><div className="btn_DataBase" onClick={props.Disable_btn}>
                        <TbCloudDataConnection className="Icons" />
                        <p>Bases de datos</p></div>
                    </Link> : null }
                    <a href="/Account/r/Acc-caso" className="text"><div className="btn_Acount">
                        <RiAccountPinCircleLine className="Icons" />
                        <p>Mi Cuenta</p></div>
                    </a>
                </div>
            </div>
        </>
    );
};

