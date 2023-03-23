import Logo from "../../Images/Interface/Logo.png"
// import  { Link } from "react-router-dom"


export const Nav = (props) => {



  return (
    <>
        <div className={props.contentAll}>
          <div className={props.sty} >
            <img src={Logo} alt="Logo" srcSet="" className="Logo" />
            <h1 className="Text_major">{props.Text}</h1>
            {/* <Link to="/login_Supervisor/r/owncaso"><h1 className="Text_major">Atras</h1></Link> */}
          </div>

        </div>
    </>
  );
};