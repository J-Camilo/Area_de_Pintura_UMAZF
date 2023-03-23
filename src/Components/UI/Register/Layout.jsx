
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
                            <ion-icon name="person-outline"></ion-icon>
                                <input type="password" value="" required minLength={8} placeholder='Nombre de Usuario'/>
                            </div>
                            <div className="inputbox_">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type="email" value="" required minLength={8} placeholder='Email'/>
                            </div>
                            <div className="inputbox_">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" value="" required minLength={8} placeholder='Contraseña'/>
                            </div>
                            <div className="inputbox_">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" value="" required minLength={8} placeholder=' Confirmar Contraseña'/>
                            </div><br />
                           
                            <input type="submit" value="Registrarse" className="btn_send_"/>
                          
                        </form>

                    </div>
                </div>                
            </section>
        </>
    );
};