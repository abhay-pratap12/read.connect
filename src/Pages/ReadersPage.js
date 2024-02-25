import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import SellerCard from "../component/ReadersCard"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
// import { onAuthStateChanged } from "firebase/auth"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ReadersCard from "../component/ReadersCard"
import Shimmer from "../component/Shimmer"




const ReadersPage = () =>{

    const auth = getAuth();
    
const [sellersBookRef,SetSellersBookRef] = useState([])
const [userid,setUserid] = useState('')
const [checkid,setCheckid] = useState(false)

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid)
        setUserid(uid)
        setCheckid(true)
      } else {
        prompt("You are Sign Out");
        // setCheckid(false)
      }
    });
},[])
useEffect(()=>{
        const show = async () =>{
            const queryData = await getDocs(collection(db,'readers'))
            return queryData
        }
       show()
        .then((val)=>SetSellersBookRef(val.docs))
        // .then((val)=>console.log(val.docs))
        .catch((err)=>prompt(err))
       },[])

    // console.log(sellersBookRef.filter((c)=> c._document.data.value.mapValue.fields.userId.stringValue == `${userid}`))
  
    return  (
        <div className="lg:mx-40 lg:my-10 m-2">
            <div className="flex justify-between m-6 border-b-2 p-4 flex-wrap my-2">
            <h2 className="font-bold text-3xl lg:m-0 my-6 ">Your BookShelf</h2>
           { checkid == false ?<div>not be able to add</div> : <Link to={'/add'}><div className="bg-slate-200 w-[200px] py-2 px-4 rounded-lg border-b-2 ">Add to your <span className="text-blue-500 font-semibold">BookShelf</span></div></Link>}
            </div>
            {sellersBookRef.filter((c)=> c._document.data.value.mapValue.fields.userId.stringValue == `${userid}`).map((c)=><ReadersCard details={c._document.data.value.mapValue.fields}/>)}
           
        </div>
    )
}

export default ReadersPage