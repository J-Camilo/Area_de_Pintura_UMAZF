import Logo from "../../Images/Interface/Logo.png";
import React from 'react';

/*------------------ components ------------------- */
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves"; 
// import { Options_User } from "../../UI/All_Options/Options_User/Options_User";

export const All_Users = (props) => {
    return (
        <>
            <div className="header2">
                <div className="inner-header2 flex2">
                    <div className="Counter_header_2" >
                        <img src={Logo} alt="Logo2" srcSet="" className="Logo" />
                        <h1 className="Text_major">Todos los Usuarios Activos</h1>
                        <a href="/login/r/owncaso" className="text"><h1 className="Text_major">Volver</h1></a>
                    </div>
                </div>
                <Waves />
            </div>


            {/* {props.id_User ? <Options_User Disable_btn={props.Disable_btn} /> : null} */}
            <Footer />
        </>
    )
}
