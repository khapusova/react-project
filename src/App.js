import { useState,useEffect } from 'react';
import './App.css'
// import CatsBlock from './components/CatsBlock';

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
    setCats(prev=>prev.concat(responseJSON[0])); 
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
      <div className='cats'>
        {cats.map(cat => 
        <div key={cat.id} >
        <img
          onClick={()=>changeCat(cat.id)}
          src={cat.url}
          alt={cat.description}
          />
         <p> {cat.description} </p>
         </div>
          )}
      </div>
     

      </div>
    </div>
  );
}

export default App;
