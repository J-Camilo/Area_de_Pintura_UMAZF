import Logo from "../../Images/Interface/Logo.png"

/*------------------ components ------------------- */
import { Fond_Animated } from "../Fond_Animated/Fond_Animated";
import { Waves } from "../Waves/Waves";
// import { Link } from "@mui/material";

export const Nav = (props) => {
  

  return (
    <>
            <Fond_Animated />
            <div className={props.nav_styles}>
                <div className="inner-header2 flex2">
                    <div className={props.nav_three_style}>
                        <img src={Logo} alt={props.img_alt} srcSet="" className={props.logo_styles} />
                        <h1 className={props.h1_styles_frist}>{props.text_frist}</h1>
                        <a herf={props.url} className={props.link_style}><h1 className={props.h1_styles}>{props.text_seg}</h1></a>
                    </div>
                </div>
                <Waves />
            </div>
    </>
  );
};