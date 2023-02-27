
// import "../Login/Login.css"

export const Layouth = (props) => {
    return (
        <>
        <section >
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
                            </div><br /><br />
                            <input type="submit" value="Ingresar" className="btn_send"/>
                          
                        </form><br />

                    </div>
                </div>                
            </section>
        </>
    );
};