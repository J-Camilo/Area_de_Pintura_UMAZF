import  { Link } from "react-router-dom"

/* --------------- Icons ------------------- */
import { BsTools } from "react-icons/bs"
// import { RiAdminFill } from "react-icons/ri"
import { MdSupervisorAccount } from "react-icons/md"

import "./Options.css"

export const Options = (props) => {

    return (

        <div className="Content">

            <div className="Content_options">
                <div className="btn">
                    <BsTools className="Icons" />
                    <p>Operario</p></div>
             
                <Link to="/login_Supervisor/r/owncaso" className="text"><div className="btn3">
                    <MdSupervisorAccount className="Icons" />
                    <p>Iniciar Sesión</p></div>
                   </Link>
            </div>
        </div>
    );
};