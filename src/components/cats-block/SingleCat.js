import { changeCat } from "../store/PicturesSlice"
import { useDispatch,useSelector } from "react-redux"
const SingleCat = (props)=>{
    const dispatch = useDispatch();
    const cats = useSelector(state => state.PicturesReducer.cats);
    const catIsClicked = (id) => dispatch(changeCat({id,cats}));

    return(
           <img onClick={() => catIsClicked(props.cat.id)} src={props.cat.url} alt = "Had to be a cat"/>
    )
}
export default SingleCat;
