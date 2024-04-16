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
        <div className="lg:px-32 lg:py-14 p-10 ">
            <div className="mx-auto max-w-2xl lg:mx-0 border-b-[1px] w-full">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose your book</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">Learnings of books posted by our Readers</p> <span className="text-blue-400">You can also post your learnings → 
      <Link to={'/signUp'}><span className="hover:underline"> Click to post your book</span></Link></span>

    </div>
            <div className="flex justify-center">
            <div className="p-4 flex flex-wrap w-5/6 justify-between">
{bookRef.map((c)=>{
    return <Link to={'/book/'+c._document.data.value.mapValue.fields.bId.stringValue}><Card details={c._document.data.value.mapValue.fields}>hello</Card></Link>
})}
            </div>
            </div>
        

        </div>
    )
}

export default CardContainer