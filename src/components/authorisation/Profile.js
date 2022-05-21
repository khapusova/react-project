import AuthContext from "./AuthProvider";
import { useContext, useEffect, useState } from "react";
import {db} from '../../utils/firebase';
import { collection, getDocs,addDoc, updateDoc, doc } from 'firebase/firestore';
const Profile = (props) => {

    const authoCtx = useContext(AuthContext);
    const constemail = authoCtx.email;

    const usersCollectionRef = collection(db, "users");
    const [allEmails,setAllEmails] = useState(null);
    const [emailsGot,setEmailsGot] = useState(false);
    const [catsGot,setCatsGot] = useState(false);
    
    useEffect(()=>{
        getUsers();
        if(emailsGot){
            getSavedCats(constemail);
        }
    },[emailsGot]);
    
    
    const canBeUpdated = (email)=> {
        if(!allEmails) return false;
        let same = allEmails.filter(user =>  user.email===email);
        if(same.length!==0) return true;
        return false;
    }

    const logout = () => {
        authoCtx.logout();
        setNewCats([]);
    }

    const setNewCats = (newCats) => {
        props.setNewCats(newCats);
    }

    const getSavedCats =  async (currentEmail) => {
            let same = allEmails.filter(user => (user.email===currentEmail));
            if(same.length !== 0)
                setNewCats(same[0].cats);
            else
                setNewCats([]);
            setCatsGot(true);
        };
    
    const saveAll = async () => {    
        await emailRequest(constemail, props.catsArr);
        alert("Cats saved!");
    }

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setAllEmails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setEmailsGot(true);
    };

    const updateData = async (id, newField) => {
        const userDoc = doc(db, "users", id);
        const newFields = { cats: newField };
        await updateDoc(userDoc, newFields);
    };

    const emailRequest = async (email, newField) => {
            const isToBeUpdated = canBeUpdated(constemail);
            if(isToBeUpdated){
                let same = await allEmails.filter(user =>  user.email===email);
                await updateData(same[0].id, newField);}
            else{ 
                    await addDoc(usersCollectionRef, { email: email, cats: newField});
                }
            await getUsers();
        };

    return(
            <div className="add-cat-btn">
                <h2 className="text">Welcome, {authoCtx.email}</h2>
                <button onClick={logout}>Log out</button>
                {catsGot&&<button onClick={saveAll}>Save all</button>}
            </div>
    )
}
export default Profile