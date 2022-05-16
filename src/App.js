import { useState,useEffect } from 'react';
import './App.css'
import AllCats from './components/AllCats';
// import SingleCat from './components/SingleCat';

const  App = () => {
  let [cats, setCats] = useState([]);
  
  useEffect(()=>{
    console.log(cats)
  },[cats]);

  const refreshPage = ()=>{
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
  


  
  
  return (
    <div className="App">
      <header onClick={refreshPage}>
        <button className='leftside' >😸</button>
        <h1>Котикогенератор</h1>
      </header>

      <div className='add-cat-btn'>
      <button onClick={addCat}> Додати котика </button>
      <AllCats cats={cats} changePictureByIdAll = {changeCat}/>
   

      </div>
    </div>
  );
}

export default App;
