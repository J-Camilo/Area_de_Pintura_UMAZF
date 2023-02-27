// import { Link } from "react-router-dom"
import { MdSupervisorAccount } from "react-icons/md"
import { Layouth } from "../Login/Layout";

import "./Login.css"

export const Login = (props) => {
    return (
        <>
            <div className="All">
                <Layouth />
                <div className="Content_Icon">
                    < MdSupervisorAccount className="Icon-user" />
                    <button className="btn_send">Registrarse</button>
                </div>
            </div>
        </>
    );
};