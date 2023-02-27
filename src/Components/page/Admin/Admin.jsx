import Logo from "../../Images/Interface/Logo.png"

import { Footer } from "../../UI/Footer/Footer"
import  { Link } from "react-router-dom"
import { Option_Lg_Admin } from "../../UI/All_Options/Option_Lg_Admin/Option_Lg_Admin";
import "./Admin.css"

export const Admin = (props) => {
  return (
    <>

      <div className="header2">
    
        
        <div className="inner-header2 flex2">
          <div className="Counter_header2">
            <img src={Logo} alt="Logo" srcSet="" className="Logo" />
            <h1 className="Text_major">Iniciar Sesión</h1>
            <Link to="/" className="text"><h1 className="Text_back">Atrás</h1></Link>
          </div>
        </div>


        <div>
          <svg
            className="waves2"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave2"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax2">
              <use
                xlinkHref="#gentle-wave2"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave2"
                x="88"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave2"
                x="58"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave2" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <Option_Lg_Admin />
     
      <Footer />
    </>
  );
};