
/* --------------- Icons ------------------- */
import { BsTools } from "react-icons/bs"
import { RiAdminFill } from "react-icons/ri"
import { MdSupervisorAccount } from "react-icons/md"

import "./Options.css"

export const Options = (props) => {

    function isVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    // cuando se carga la página...
    window.addEventListener('DOMContentLoaded', (ev0) => {
        // asignamos un evento scroll...
        window.addEventListener('scroll', (ev1) => {
            // y a todos los elementos con la clase paused...
            document.querySelectorAll(".paused").forEach(elm => {
                if (isVisible(elm)) // que sean visibles...
                    elm.classList.remove("paused"); // les quitamos la clase paused
            })
        });
    });

    return (

        <div className="Content">

            <div className="Content_options">
                <div className="btn">
                    <BsTools className="Icons" />
                    <p>Operario</p></div>
                <div className="btn2">
                    <RiAdminFill className="Icons" />
                    <p>Administrador</p></div>
                <div className="btn3">
                    <MdSupervisorAccount className="Icons" />
                    <p>Supervisor</p></div>
            </div>
        </div>
    );
};