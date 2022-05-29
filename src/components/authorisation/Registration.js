import { useState, useRef } from "react";

const Registration = () => {
    const [regState, setRegState] = useState(false);
    const loginInputRef = useRef();
    const passwordInputRef = useRef();
    const showRegistrationForm = () => {setRegState(true)};
    
    const loginSubmit = async () => {
        const enteredLogin = loginInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDwn93WEScVoMrfYnBvJ6XF2axQmKXHRB8',
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
        if (response.ok){
            alert("You are signed up!")
            setRegState(false);
        }
        else{
            const resp = await response.json();
            alert(resp.error.message);
        }

    }

    const closeRegistration = () =>{
        setRegState(false);
    }
    return(
        !regState?
        (<p className="text add-cat-btn">
            Haven`t been registered yet? 
            <button onClick={showRegistrationForm} className="register">Sign up</button> 
        </p>)
    :(
        <div className="registration-window add-cat-btn">
            <button className="close-button" onClick={closeRegistration}> &#10006;</button>
            <h2 className="text">Creating your  new account</h2>
            
            <div className="form add-cat-btn">
                <div className="login text">
                    <label >Login: </label>
                    <input name="login" ref={loginInputRef} />
                </div>

                <div className="password text">
                    <label>Password:</label>
                    <input name="password" ref={passwordInputRef} />
                </div>
                
                <button type="submit" onClick={loginSubmit}>Sign up</button>
            </div>

        </div>
    ))
}
export default Registration;