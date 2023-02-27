import Logo from "../../Images/Interface/Logo.png"

import { Footer } from "../../UI/Footer/Footer"
import  { Link } from "react-router-dom"
import { Option_Rg_Supervisor } from "../../UI/All_Options/Option_Rg_Supervisor/Option_Rg_Supervisor";
import "../../page/Home/Home.css"


export const Register_Supervisor = (props) => {
  return (
    <>

      <div className="header">
    
        
        <div className="inner-header flex">
          <div className="Counter_header">
            <img src={Logo} alt="Logo" srcSet="" className="Logo" />
            <h1 className="Text_major">Registrarse</h1>
            <Link to="/login_Supervisor" className="text"><h1 className="Text_back">Atrás</h1></Link>
          </div>
        </div>
     
       




        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="88"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="58"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <Option_Rg_Supervisor />
     
      <Footer />
    </>
  );
};