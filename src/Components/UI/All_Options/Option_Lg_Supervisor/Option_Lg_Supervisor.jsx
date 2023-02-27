import { Login } from "../../Login/Login"

/* --------------- Icons ------------------- */
import { BsTools } from "react-icons/bs"
import { RiAdminFill } from "react-icons/ri"
import { MdSupervisorAccount } from "react-icons/md"

import "./Option_Lg_Supervisor.css"

export const Option_Lg_Supervisor = (props) => {
    return (

        <div className="Content_2">
            <div className="Content_options_2">
                <div className="btn_">
                    <BsTools className="Icons_2" />
                    <p>Operario</p></div>
                <div className="btn_2">
                    <RiAdminFill className="Icons_2" />
                    <p>Administrador</p></div>
                <div className="btn_3">
                    <MdSupervisorAccount className="Icons_" />
                    <p className="Disable">Supervisor</p>
                    
                    <Login />   
                    
                    
                    </div>
            </div>
        </div>
    );
};