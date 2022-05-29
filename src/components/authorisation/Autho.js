import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthoActs } from "../store/AuthoSlice";
import Registration from "./Registration";
const Autho =  () => {
        const dispatch = useDispatch();
  
    const isLoggedIn = useSelector(state => state.AuthoReducer.isLoggedIn); 

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
            alert("You are signed in!");            
            dispatch(AuthoActs.login({token: resp.idToken, email:resp.email}));
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