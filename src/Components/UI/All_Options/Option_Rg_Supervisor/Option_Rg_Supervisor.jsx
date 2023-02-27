import { Register } from "../../Register/Register"

/* --------------- Icons ------------------- */
// import { BsTools } from "react-icons/bs"
// import { RiAdminFill } from "react-icons/ri"
import { MdSupervisorAccount } from "react-icons/md"

import "./Option_Rg_Supervisor.css"

export const Option_Rg_Supervisor = (props) => {
    return (

        <div className="Content_3">
            <div className="Content_options_3">
                <div className="btn_content">
                    <MdSupervisorAccount className="Icons_" />
                    {/* <p className="Disable">Supervisor</p> */}

                    <Register />

                </div>
            </div>
        </div>
    );
};