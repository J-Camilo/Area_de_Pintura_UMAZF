import React from 'react'
import Logo from "../../Images/Interface/Logo.png";

/*------------------ components ------------------- */
import { Waves } from '../../UI/Waves/Waves'
import { Fond_Animated } from '../../UI/Fond_Animated/Fond_Animated'
import { Footer } from '../../UI/Footer/Footer';
import { Link } from 'react-router-dom';

export const Forms = (props) => {
    return (
        <>
            <Fond_Animated />
            <div className="header2">
                <div className="inner-header2 flex2">
                    <div className="Counter_header_acc" >
                        <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
                        <h1 className="Text_major">Formularios</h1>
                        <Link  to="/login/r/owncaso" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>

            <Footer />
        </>
    )
}
