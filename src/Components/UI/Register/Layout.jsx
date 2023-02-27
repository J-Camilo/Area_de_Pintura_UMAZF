
// import "../Login/Login.css"

export const Layout = (props) => {
    return (
        <>
        <section >
                <div className="form-box_">
                    <div className="form-value_">

                        <form action="">
                            <h3>Ingresa tus datos</h3>
                            <div className="inputbox_">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" value="" required minLength={8} />
                                <label htmlFor="">Nombre de Usuaro</label>
                            </div>
                            <div className="inputbox_">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type="email" value="" required minLength={8} />
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox_">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" value="" required minLength={8} />
                                <label htmlFor="">Contraseña</label>
                            </div>
                            <div className="inputbox_">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" value="" required minLength={8} />
                                <label htmlFor="">Confirmar Contraseña</label>
                            </div><br />
                           
                            <input type="submit" value="Registrarse" className="btn_send_"/>
                          
                        </form>

                    </div>
                </div>                
            </section>
        </>
    );
};