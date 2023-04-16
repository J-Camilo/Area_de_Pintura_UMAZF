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


                {props.valiLogin
                    ? <a href="/All-options/r/oWncaso2" className="text"><div className="btn_op">
                        <MdSupervisorAccount className="Icons" />
                        {/* <p className="Text_User_">Cuenta vinculada</p> */}
                        <p className="Text_User"><b>{props.NameUser}</b></p>
                        <p className="Text_User_paragraft">Has clic en tu nombre para entrar </p>
                    </div>
                    </a>
                    : <>
                        <div className="btn">
                            <BsTools className="Icons" />
                            <p>Operario</p></div>

                        <Link to="/login/r/owncaso" className="text"><div className="btn3">
                            <MdSupervisorAccount className="Icons" />
                            <p>Iniciar Sesión</p></div>
                        </Link>
                    </>
                }
            </div>
        </div>
    );
};