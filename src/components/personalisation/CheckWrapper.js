import { useContext, createContext } from "react"
import AuthContext from "../authorisation/AuthProvider"
const CheckWrapper = (props) => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
//else usual pictures
    if(!isLoggedIn)
        return(<>{props.children} </>)
    
    const email = authCtx.email;
    
    //if LoggedIn (rersonalised pictures)

    



}

export default CheckWrapper