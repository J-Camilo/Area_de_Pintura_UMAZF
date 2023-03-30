import React from "react";
import { Options } from "../../UI/All_Options/Options/Options";
import { Footer } from "../../UI/Footer/Footer";
import { Waves } from "../../UI/Waves/Waves";
import { Nav } from "../../UI/Nav/Nav";


export const Home = (props) => {
  return (
    <>
      <div className="header">
        <Nav Text="Area de pintura" sty="Counter_header" contentAll="inner-header flex" />
        <Waves />
      </div>

      <Options valiLogin={props.valiLogin} NameUser={props.NameUser}/>
      <Footer />
    </>
  );
};