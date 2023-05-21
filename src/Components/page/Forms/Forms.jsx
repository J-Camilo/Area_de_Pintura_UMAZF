import React from 'react'

/*------------------ components ------------------- */
import { Footer } from '../../UI/Footer/Footer';
import { Nav } from '../../UI/Nav/Nav';
import Logo from "../../Images/Interface/Logo.png"

//------------------ componets ---------------------------
import { Options_forms } from '../../UI/All_Options/Options_forms/Options_forms';
import { Fond_Animated } from '../../UI/Fond_Animated/Fond_Animated';
import { Waves } from '../../UI/Waves/Waves';
import { Link } from 'react-router-dom';

export const Forms = (props) => {


    return (
        <>
            {/* <Nav nav_styles="header_acc" nav_three_style="Counter_header_acc"   img_alt="logo" logo_styles="Logo"   h1_styles_frist="Text_major" text_frist="Formularios"  url='/All-options/r/oWncaso2' link_style="text"   h1_styles="Text_major" text_seg="Volver"/> */}
            <Fond_Animated />

            <div className="header_acc">
                <div className="inner-header_acc flex_acc">
                    <div className="Counter_header_acc" >
                        <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
                        <h1 className="Text_major">Formularios</h1>
                        <Link to="/All-options/r/oWncaso2" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>



            <Options_forms  Close={props.Close} codeUser={props.codeUser}/>

            <Footer />
        </>
    )
}
