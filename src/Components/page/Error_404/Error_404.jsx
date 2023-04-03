/* --------------- Images Of interfaces ------------- */
import Logo from "../../Images/Interface/Logo.png";
import desconect_404 from "../../Images/Interface/error404quees.jpg";

/* --------------- Components ------------- */
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves";
import { Link } from "react-router-dom";
import "./Error.css"

export const Error_404 = (props) => {
    return (
        <>
         <div className="header">
                <div className="inner-header flex">
                    <div className="Counter_header" >
                        <img src={Logo} alt="Logo" srcSet="" className="Logo" />
                        <h1 className="Text_major">Area pintura</h1>
                        <Link to="/" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>
        <div className="Content_all_404">
            <div className="content_404">
                <img src={desconect_404} alt="image_404" className="Error_image"/>
            </div>
        </div>
        <Footer />
        </>
    );
};