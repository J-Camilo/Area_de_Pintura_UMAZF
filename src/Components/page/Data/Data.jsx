import Logo from "../../Images/Interface/Logo.png";
import "./Data.css"

/*------------------ components ------------------- */
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves";
import { Options_User } from "../../UI/All_Options/Options_User/Options_User";
import { Fond_Animated } from "../../UI/Fond_Animated/Fond_Animated";

/*----------------- dependencias ------------------ */
// import Swal from 'sweetalert2';


export const Data = (props) => {



    return (
        <>
            <Fond_Animated />
            <div className="header2">
                <div className="inner-header2 flex2">
                    <div className="Counter_header_2" >
                        <img src={Logo} alt="Logo2" srcSet="" className="Logo" />
                        <h1 className="Text_major">Todas las opciones</h1>
                        <a href="/login/r/owncaso" onClick={props.Delecte} className="text"><h1 className="Text_major">Cerrar Sesión</h1></a>
                    </div>
                </div>
                <Waves />
            </div>


            {props.id_User ? <Options_User Disable_btn={props.Disable_btn} codeUser={props.codeUser} /> : 
                <div className="illegal">
                    Esta intentando ingresar ilegalmente
                    <p className="illegal_text">Esto no es un juego</p>
                </div>
            }
            <Footer />
        </>
    );
};