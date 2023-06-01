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
      <Nav nav_styles="header_acc" nav_three_style="Counter_header_acc"   img_alt="logo" logo_styles="Logo"   h1_styles_frist="Text_major" text_frist="Area Pintura" /> 
      </div>

      <Options valiLogin={props.valiLogin} NameUser={props.codeUser.name} />
      <Footer />
    </>
  );
};