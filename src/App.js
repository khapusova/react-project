import './App.css'
import AllCats from './components/cats-block/AllCats';
import Access from './components/authorisation/Access';
import { useDispatch, useSelector } from 'react-redux';
import { addCat, changeCat } from './components/store/PicturesSlice';

const  App = () => {
  

  const myCats = useSelector(state => state.PicturesReducer.cats);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   console.log(myCats)
  // },
  // [myCats])


  const refreshPage = () => {
    window.location.reload();   
 }

  const addNewCat = async () =>{
    dispatch(addCat());
  }


  return (
    <div className="App">

      <header onClick={refreshPage}>
        <button className='leftside' >😸</button>
        <h1>Котикогенератор</h1>
      </header>

       <div className='body-cats'>
        <Access  />
      </div> 

      <div className='add-cat-btn'>
        <button onClick={addNewCat}> Додати котика </button>
        <AllCats cats={myCats} />
         {/* changePictureByIdAll = {changeCatByClick} */}
      </div>
      
    </div>
  );

}

export default App;