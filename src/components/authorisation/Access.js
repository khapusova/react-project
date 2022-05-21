import Autho from "./Autho"
import AuthContext from "./AuthProvider";
import Profile from "./Profile"
import { useContext } from "react";


const Access = (props) => {
    
    const setNewCats = (cts) => {
        props.setNewCats(cts)
    }
    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn;    
    return(  
        <div className="authorisation">
            <h1>{isLoggedIn}</h1>
        {!isLoggedIn && <Autho/>}
        {isLoggedIn && <Profile setNewCats = {setNewCats} catsArr = {props.catsArr}/>}
        </div>
    )
    
}

export default Access