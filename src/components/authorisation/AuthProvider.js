import { useState, createContext, useEffect } from "react";
import {db} from '../../utils/firebase';
import { collection, getDocs} from 'firebase/firestore';
const AuthContext = createContext({
    email: '',
    token: '',
    isLoggedIn: false,
    login: (token, email) => {},
    logout: () => {}
});

export const AuthProvider = (props) => {
   
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState('');
    const isUserLoggedIn = !!token;
  
    

    const loginHandler = (newToken, email) => {
        setEmail(email);
        setToken(newToken);
    };
    const logoutHandler = () => {
        setEmail('');
        setToken(null)
        
    };

    
    const contextData = {
        email: email,
        token: token,
        isLoggedIn: isUserLoggedIn,
        login: loginHandler,
        logout: logoutHandler,


    };
    

    return(
        <AuthContext.Provider value={contextData}>{props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
