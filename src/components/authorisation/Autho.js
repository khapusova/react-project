import { useContext, useRef } from "react";
import AuthContext from "./AuthProvider";
import Registration from "./Registration";
const Autho =  () => {
    
    const authCtx = useContext(AuthContext)
    const isLoggedIn = authCtx.isLoggedIn;
    
    const loginInputRef = useRef();
    const passwordInputRef = useRef();
    
    
    
    const loginSubmit = async () => {

        const enteredLogin = loginInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

         const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDwn93WEScVoMrfYnBvJ6XF2axQmKXHRB8',
        {
            method:'POST',
            body:JSON.stringify({
                email: enteredLogin,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers:{
                'Content-type':'application/json'
            }
        });
        const resp = await response.json();
        if (response.ok){
            alert("You are signed in!")
            authCtx.login(resp.idToken, resp.email);
        }
        else{    
            alert(resp.error.message);
        }
        
    }
 

    
    return(
        <>
        {!isLoggedIn&&(
        <div className="autho">
        <div className="form add-cat-btn">
            <div className="login text">
                <label >Login: </label>
                <input name="login" ref={loginInputRef} />
            </div>

            <div className="password text">
                <label>Password:</label>
                <input name="password" ref={passwordInputRef} />
            </div>
            
            <button type="submit" onClick={loginSubmit}>Log In</button>
        </div>
        

        <Registration />

       </div>)}
        </>
    );
}


export default Autho;