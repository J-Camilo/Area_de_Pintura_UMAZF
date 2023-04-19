import React from 'react';
import { Link } from "react-router-dom"

/* --------------- Icons ------------------- */
import { AiOutlinePercentage } from "react-icons/ai";
import { BsPaintBucket } from "react-icons/bs";
import { GiStopwatch } from "react-icons/gi";


export const Power_bi = (props) => {
  return (
    <>
      <div className="Content_all_option_users">
        <div className="Content_options_Users">
          <div className="btn_Forms">
            <GiStopwatch className="Icons" />
            <p>Paros en la linea</p></div>
          <Link to="/All-options/r/Adcaso" className="text"><div className="btn_powerBi" >
            <AiOutlinePercentage className="Icons" />
            <p>Aprobación</p></div>
          </Link>
          <a href="/Account/r/Acc-caso" className="text"><div className="btn_Acount">
            <BsPaintBucket className="Icons" />
            <p>Motos pintadas</p></div>
          </a>
        </div>
      </div>
    </>
  )
}
