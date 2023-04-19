import Logo from "../../Images/Interface/Logo.png";
import React from 'react';

/*------------------ components ------------------- */
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves";
import { Link } from "react-router-dom";
import { Fond_Animated } from "../../UI/Fond_Animated/Fond_Animated";
import { Power_bi } from "../../UI/All_Options/Power_bi/Power_bi";



export const PowerBi = () => {
    return (
        <>
            <Fond_Animated />
            <div className="header2">
                <div className="inner-header_acc flex_acc">
                    <div className="Counter_header_acc" >
                        <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
                        <h1 className="Text_major">Datos de Power Bi</h1>
                        <Link to="/All-options/r/oWncaso2" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>

            <Power_bi />


            <Footer />
        </>
    )
}
