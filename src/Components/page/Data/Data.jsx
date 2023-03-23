import Logo from "../../Images/Interface/Logo.png";
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves";
import { Link } from "react-router-dom";
import "./Data.css"

export const Data = (props) => {



    return (
        <>
            <div className="header2">
                <div className="inner-header2 flex2">
                    <div className="Counter_header_2" >
                        <img src={Logo} alt="Logo2" srcSet="" className="Logo" />
                        <h1 className="Text_major">Bienvenido [Nombre]</h1>
                        <Link to="/login_Supervisor/r/owncaso" className="text"><h1 className="Text_major">Cerrar Sesión</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>

            <Footer />
        </>
    );
};