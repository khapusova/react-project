
import { useState, useContext, useEffect } from 'react';
import './App.css'
import AllCats from './components/cats-block/AllCats';
import Access from './components/authorisation/Access';
import AuthContext from './components/authorisation/AuthProvider';
import { collection, getDocs} from 'firebase/firestore';
import {db} from './utils/firebase'
// import { collection, getDocs,addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// import { async } from '@firebase/util';
// import { async } from '@firebase/util';
// import AuthContext from './components/authorisation/AuthProvider';

const  App = () => {
  const usersCollectionRef = collection(db, "users");
  const [initialCats,setInitialCats] = useState();
  const [loading, setLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  let [cats, setCats] = useState([]);



  


  const refreshPage = () => {
    window.location.reload();   
 }

  const addCat = async () =>{
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const responseJSON = await response.json();
    setCats(prev=>[...prev, responseJSON[0]]); 

  }

  const changeCat = async (id) => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const responseJSON = await response.json();
    setCats(cats.map(cat=> cat.id===id?responseJSON[0]:cat));
  }
  
  const setNewCats = (cts) => {
    setCats(cts);
  }
  return (
    <div className="App">

      <header onClick={refreshPage}>
        <button className='leftside' >😸</button>
        <h1>Котикогенератор</h1>
      </header>

      <div className='body-cats'>
        <Access catsArr = {cats} setNewCats = {setNewCats} />
      </div>

      <div className='add-cat-btn'>
        <button onClick={addCat}> Додати котика </button>
        <AllCats cats={cats} changePictureByIdAll = {changeCat}/>
      </div>
      
    </div>
  );

}

export default App;
