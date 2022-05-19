import Autho from "./Autho"
import AuthContext from "./AuthProvider";
import Profile from "./Profile"
import { useContext } from "react";


const Access = () => {
    
    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn;    
    return(  
        <div className="authorisation">
            <h1>{isLoggedIn}</h1>
        {!isLoggedIn && <Autho/>}
        {isLoggedIn && <Profile/>}
        </div>
    )
    
}

export default Access