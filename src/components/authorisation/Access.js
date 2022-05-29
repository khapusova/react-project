import Autho from "./Autho"
import Profile from "./Profile"
import { useSelector } from "react-redux";


const Access = (props) => {

    const isLoggedIn = useSelector(state => state.AuthoReducer.isLoggedIn); 
       
    return(  
        <div className="authorisation">
            <h1>{isLoggedIn}</h1>
        {!isLoggedIn && <Autho/>}
        {isLoggedIn && <Profile/>}
        </div>
    )
}

export default Access