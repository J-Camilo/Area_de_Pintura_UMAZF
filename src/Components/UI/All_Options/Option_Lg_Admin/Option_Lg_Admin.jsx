import { Login } from "../../Login/Login"

/* --------------- Icons ------------------- */
import { BsTools } from "react-icons/bs"
import { RiAdminFill } from "react-icons/ri"
import { MdSupervisorAccount } from "react-icons/md"

import "./Option_Lg_Admin.css"

export const Option_Lg_Admin = (props) => {
    return (

        <div className="Content_4">
            <div className="Content_options_4">
                <div className="btn_a">
                    <BsTools className="Icons_3" />
                    <p>Operario</p></div>
                <div className="btn_2a">
                    <Login /> 
                    </div>
                <div className="btn_3a">
                    <MdSupervisorAccount className="Icons_" />
                    <p className="Disable">Supervisor</p>   
                    </div>
            </div>
        </div>
    );
};