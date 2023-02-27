import { MdSupervisorAccount } from "react-icons/md"
import { Layout } from "../Register/Layout"


export const Register = (props) => {
    return (
        <>
            <div className="All_">
                <Layout />
                 <div className="Content_Icon_">
                    <MdSupervisorAccount className="Icon-user_" />
                    
                </div>  
            </div>
        </>
    );
};