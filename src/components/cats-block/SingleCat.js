const SingleCat = (props)=>{

    const catIsClicked = (id) => {
        props.changePictureById(id)
    }


    return(
           <img onClick={() => catIsClicked(props.cat.id)} src={props.cat.url} alt = "Had to be a cat"/>
    )
}
export default SingleCat;
