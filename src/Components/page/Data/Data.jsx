import Logo from "../../Images/Interface/Logo.png";
import "./Data.css"

/*------------------ components ------------------- */
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves"; 
import { Options_User } from "../../UI/All_Options/Options_User/Options_User";

/*----------------- dependencias ------------------ */
// import Swal from 'sweetalert2';


export const Data = (props) => {


    return (
        <>
            <div className="header2">
                <div className="inner-header2 flex2">
                    <div className="Counter_header_2" >
                        <img src={Logo} alt="Logo2" srcSet="" className="Logo" />
                        <h1 className="Text_major">Todas las opciones</h1>
                        <a href="/login/r/owncaso" className="text"><h1 onClick={props.Delecte} className="Text_major">Cerrar Sesión</h1></a>
                    </div>
                </div>
                <Waves />
            </div>

            <Options_User Disable_btn={props.Disable_btn}/>
            <Footer />
        </>
    );
};