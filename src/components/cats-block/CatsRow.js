import SingleCat from "./SingleCat";
const CatsRow = (props)=>{

    return(
        <div className="cats-row">
            {props.rows.map(cat=>
                <div className="single-cat" key={cat.id}>
                    <SingleCat cat = {cat}/>
                </div>
            )}
        </div>
    )
}
export default CatsRow;