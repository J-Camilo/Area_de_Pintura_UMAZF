import React from 'react'
import Logo from "../../Images/Interface/Logo.png"
import "./Inventary.css"

// ----------------- dependenci--------------
import { Link } from 'react-router-dom'

// ------------------------- components -----------------
import { Waves } from '../../UI/Waves/Waves'
import { Search } from '../../UI/Search/Search'
import { Fond_Animated } from '../../UI/Fond_Animated/Fond_Animated'


export const Inventary = () => {
    return (
        <>
            <div className="header_acc">
                <div className="inner-header_acc flex_acc">
                    <div className="Counter_header_acc" >
                        <img src={Logo} alt="Logo_acc" srcSet="" className="Logo" />
                        <h1 className="Text_major">Inventario</h1>
                        <Link to="/login/r/owncaso" className="text"><h1 className="Text_major">Volver</h1></Link>
                    </div>
                </div>
                <Waves />
            </div>
            <Fond_Animated />

            <div className='Content_nav-product'>
                <div className="Content_nav-inter">
                    <div>Estado</div>
                    <Search Id="Character_product" styles="search_product" Placeholder="Busca tu producto" />
                    <div>Marca</div>
                </div>
            </div>
        </>
    )
}
