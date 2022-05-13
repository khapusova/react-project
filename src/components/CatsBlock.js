// import { useState } from "react";
// import React from "react";
// const  CatsBlock = ({allCats, setCats}) => {
//     let [newCat,setNewCat] = useState(null);
//     const anotherCat = async ()=>{
//       const response = await fetch('https://api.thecatapi.com/v1/images/search');
//       const rspnsJSON = await response.json();
//       setNewCat(rspnsJSON[0]);
//     }

//     const changePicture = (id)=> 
//       allCats.map(cat => {
//         if(cat.id===id){
//           anotherCat();
//           return newCat;
//         }
//         else return cat;
//       });
    
//     return(
        
//     );
// }
// export default CatsBlock;