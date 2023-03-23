import { Footer } from "../../UI/Footer/Footer"
import { Option_Rg_Supervisor } from "../../UI/All_Options/Option_Rg_Supervisor/Option_Rg_Supervisor";
import { Waves } from "../../UI/Waves/Waves"
import { Nav } from "../../UI/Nav/Nav"


export const Register_Supervisor = (props) => {
  return (
    
    <>
      <div className="header">
        <Nav Text="Registrarse" sty="Counter_header" contentAll="inner-header flex" />
      
       
        <Waves />
      </div>
    
      <Option_Rg_Supervisor />
     
      {/* <Footer /> */}
    </>
  );
};