import React from "react";

/*--------------- components------------------ */
import { Fond_Animated } from "../../UI/Fond_Animated/Fond_Animated";  
import { Options } from "../../UI/All_Options/Options/Options";
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves";
import { Nav } from "../../UI/Nav/Nav";


export const Home = (props) => {
  return (
    <>
      <Fond_Animated />
      <div className="header">
        <Nav Text="Area de pintura" sty="Counter_header" contentAll="inner-header flex" />
        <Waves />
      </div>

      <Options valiLogin={props.valiLogin} NameUser={props.codeUser.name}/>
      <Footer />
    </>
  );
};