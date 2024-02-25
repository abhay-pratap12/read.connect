import { useEffect, useState } from "react"
import Card from "./Card"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import { Link } from "react-router-dom"


const CardContainer = () =>{

const [bookRef,SetBookRef] = useState([])

useEffect(()=>{
    const show = async () =>{
        const queryData = await getDocs(collection(db,'readers'))
        return queryData
    }
    show()
    .then((val)=>SetBookRef(val.docs))
    // .then((val)=>console.log(val.docs))
    .catch((err)=>prompt(err))
},[])
console.log('bookref',bookRef)
    return (
        <div className="lg:px-32 lg:py-14 p-10">
            <h1 className="p-4 m-4 font-semibold text-3xl ">Choose your Books</h1>
            <div className="flex justify-center">
            <div className="p-4 flex flex-wrap w-5/6 justify-between">
{bookRef.map((c)=>{
    return <Link to={'/book/'+c._document.data.value.mapValue.fields.bId.stringValue}><Card details={c._document.data.value.mapValue.fields}/></Link>
})}
            </div>
            </div>

        </div>
    )
}

export default CardContainer