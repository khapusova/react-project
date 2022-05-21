import CatsRow from "./CatsRow";
const AllCats = (props) => {
    const changePictureByIdRow = (id) => {
        props.changePictureByIdAll(id)
    }
    //получаем только список котов
    const organizeToRows = ( numOfCatsInOneRow) => {
        let List = props.cats;
        let result = [];

        while(List.length > 0){
            let subList = List.length > numOfCatsInOneRow?List.slice(0,numOfCatsInOneRow):List;
            List = List.slice(subList.length);
            result.push(subList);
        }

        return result;
        }
    return(
        <div className="all-cats">
            {organizeToRows(4).map((Row, index)=>
                
                <CatsRow key={index}
                changePictureByIdRow = {changePictureByIdRow}
                rows = {Row} />
            
            )}
        </div>
    )
    }
export default AllCats;