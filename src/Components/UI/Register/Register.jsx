import { Link } from "react-router-dom"
import { MdSupervisorAccount } from "react-icons/md"
import { Layout } from "../Register/Layout"


export const Register = (props) => {
    return (
        <>
            <div className="All_">
                <Layout />
                 <div className="Content_Icon">
                    <MdSupervisorAccount className="Icon-user" />
                    <h3  className="text_parragraf">Registra tus datos aquí</h3>
                    <Link to="/login_Supervisor/r/owncaso"><button className="btn_send_back">Volver</button></Link>
                    
                </div>  
            </div>
        </>
    );
};