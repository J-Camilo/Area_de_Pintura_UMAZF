import { Link } from "react-router-dom"
import { MdSupervisorAccount } from "react-icons/md"
import { Layouth     } from "../Login/Layout"


export const Login = (props) => {
    return (
        <>
            <div className="All">
                <Layouth />
                <div className="Content_Icon">
                    <MdSupervisorAccount className="Icon-user" />
                    <Link to="/Register_Supervisor"><button className="btn_send">Registrarse</button></Link>
                </div>
            </div>
        </>
    );
};