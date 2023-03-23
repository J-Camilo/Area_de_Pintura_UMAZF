import { Link } from "react-router-dom"
import { MdSupervisorAccount } from "react-icons/md"
import { Layouth } from "../Login/Layout"


export const Login = (props) => {
    return (
        <>
            <div className="All">
                <Layouth />
                <div className="Content_Icon">
                    <MdSupervisorAccount className="Icon-user" />
                    <h3  className="text_parragraf">¿Aun no tienes cuenta?</h3>
                    <Link to="/Register_Supervisor/r/R3gcaso"><button className="btn_send">Registrarse</button></Link>
                    <Link to="/"><button className="btn_send_back">Volver</button></Link>
                </div>
            </div>
        </>
    );
};