import { Link } from "react-router-dom"

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

                {props.valiLogin 
                    ? <Link to="/All-options/r/oWncaso2" className="text"><div className="btn3">
                        <MdSupervisorAccount className="Icons" />
                        <p className="Text_User_">Cuenta vinculada</p>
                        <p className="Text_User">Entrar como <b>{props.NameUser}</b></p>
                        </div>
                    </Link>
                    : <Link to="/login/r/owncaso" className="text"><div className="btn3">
                        <MdSupervisorAccount className="Icons" />
                        <p>Iniciar Sesión</p></div>
                    </Link>
                }
            </div>
        </div>
    );
};