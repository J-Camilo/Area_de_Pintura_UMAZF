import React from 'react'
import Logo from "../../Images/Interface/Logo.png";
import "./All.css"

/*------------------ components ------------------- */
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves";
import { Link } from "react-router-dom";


export const Aprobation = () => {
    return (
        <>
            <div className="header2">
                <div className="inner-header_acc flex_acc">
                    <div className="Counter_header_acc" >
                        <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
                        <h1 className="Text_major">Aprobación Directa</h1>
                        <Link to="/All-options/r/Bicaso" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>

            <div className='Content_data_powerbi'>
                <iframe title="CONTROL DE CALIDAD" className='Data_powerBi' src="https://app.powerbi.com/reportEmbed?reportId=d5262d56-931c-4b29-958e-7e96b70bab4e&autoAuth=true&ctid=9414ead6-ae15-47b8-a23d-731c83fc6b53" frameBorder="0"  />
            </div>

            <div className='Content_data_powerbi'>
                <a target='_blank' href="https://app.powerbi.com/groups/me/list">Acualiza en caso de que aún no se mustren los datos</a>
                <p>Si no tienes acceso comunicate con el encargado de esta pagina</p>
            </div>

            <Footer />
        </>
    )
}
