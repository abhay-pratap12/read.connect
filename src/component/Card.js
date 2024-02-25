import { IMG_URL } from "../utils/const/IMG_URL"

const Card = ({details}) =>{

console.log(details)
const {Author, Category, Discription, ImgVal, TitleOfBook, userId , Rating} = details
    return (
        <div className="shadow-lg w-[195px] m-5 rounded-md ">
        <div className="w-[195px] h-[200px] bg-yellow-100 bg-cover" style={{backgroundImage: `url(${IMG_URL}${ImgVal.stringValue}?alt=media&token)`}}>
                
            </div>
            <div className="p-3">
                <h3 className="font-semibold">{TitleOfBook.stringValue}</h3>
                <div className="text-[0.8rem] py-1">{Author.stringValue}</div>
                <div className="text-[0.8rem]">Rating: {Rating.stringValue}/5</div>
            </div>
        </div>
    )
}

export default Card