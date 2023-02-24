import { Link } from "react-router-dom"
import { MdSupervisorAccount } from "react-icons/md"

import "./Login.css"

export const Login = (props) => {
    return (
        <>
            <section className="All">
                <div className="form-box">
                    <div className="form-value">

                        <form action="">
                            <h3>Ingresa tus datos</h3>
                            <div className="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type="email" value="" required minLength={8} />
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" value="" required minLength={8} />
                                <label htmlFor="">Contraseña</label>
                            </div><br />
                            <button>Ingresar</button>
                            <div className="register"><br />
                                <p>¿No tienes cuenta? <Link to="/" className="text">Registrate</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
                <MdSupervisorAccount className="Icon-user"/>
            </section>
        </>
    );
};