import AuthContext from "./AuthProvider"
import { useContext } from "react"

const Profile = (props) => {
    const authoCtx = useContext(AuthContext);
    const logout = () => {
        authoCtx.logout();
    }

    return(
            <div className="add-cat-btn">
                <h2 className="text">Welcome, {authoCtx.email}</h2>
                <button onClick={logout}>Log out</button>
            </div>
    )
}
export default Profile