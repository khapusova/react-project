import SingleCat from "./SingleCat";
const CatsRow = (props)=>{
    const changePictureById = (id) => {
        props.changePictureByIdRow(id)
    }
    return(
        <div className="cats-row">
            {props.rows.map(cat=>
                <div className="single-cat" key={cat.id}>
                <SingleCat cat = {cat}
                changePictureById = {changePictureById}/>
                </div>
            )}
        </div>
    )
}
export default CatsRow;