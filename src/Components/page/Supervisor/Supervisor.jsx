import { Footer } from "../../UI/Footer/Footer"
import { Waves } from "../../UI/Waves/Waves"
import { Nav } from "../../UI/Nav/Nav"

import { Option_Lg_Supervisor } from "../../UI/All_Options/Option_Lg_Supervisor/Option_Lg_Supervisor";


export const Supervisor = (props) => {
  return (
    <>
      <div className="header">
        <Nav Text="Iniciar Sesión" sty="Counter_header" contentAll="inner-header flex" />
        <Waves />
      </div>
    
      <Option_Lg_Supervisor />
     
      <Footer />
    </>
  );
};