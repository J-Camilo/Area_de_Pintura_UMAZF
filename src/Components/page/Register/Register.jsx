import { Waves } from "../../UI/Waves/Waves"
import { Nav } from "../../UI/Nav/Nav"
import "./Register.css"

/* --------------- Icons ------------------- */
import { MdSupervisorAccount } from "react-icons/md"
import { Link } from "react-router-dom";

export const Register = (props) => {
    return (

        <>
            <div className="header">
                <Nav Text="Registrarse" sty="Counter_header" contentAll="inner-header flex" />


                <Waves />
            </div>



            <div className="Content_3">
            <div className="Content_options_3">
                <div className="btn_content">
                    <MdSupervisorAccount className="Icons_" />
                    {/* <p className="Disable">Supervisor</p> */}

                    
                    <div className="All_">
                <section >
                    <div className="form-box_">
                        <div className="form-value_">

                            <form action="">
                                <h3>Ingresa tus datos</h3>
                                <div className="inputbox_">
                                    <ion-icon name="person-outline"></ion-icon>
                                    <input type="password" value="" required minLength={8} placeholder='Nombre de Usuario' />
                                </div>
                                <div className="inputbox_">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <input type="email" value="" required minLength={8} placeholder='Email' />
                                </div>
                                <div className="inputbox_">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                    <input type="password" value="" required minLength={8} placeholder='Contraseña' />
                                </div>
                                <div className="inputbox_">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                    <input type="password" value="" required minLength={8} placeholder=' Confirmar Contraseña' />
                                </div><br />

                                <input type="submit" value="Registrarse" className="btn_send_" />

                            </form>

                        </div>
                    </div>
                </section>
                <div className="Content_Icon">
                    <MdSupervisorAccount className="Icon-user" />
                    <h3 className="text_parragraf">Registra tus datos aquí</h3>
                    <Link to="/login/r/owncaso"><button className="btn_send_back">Volver a login</button></Link>

                </div>
            </div>
                </div>
            </div>
        </div>
            

        </>
    );
};