import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { IMG_URL } from "../utils/const/IMG_URL";
import WhyToConnect from "../component/WhyToConnect";
import ConnectToReader from "../component/ConnectToReader";

const BookOverview = () =>{
    const {resId} = useParams()
    console.log(resId)

    const [bookDetails,setBookDetails] = useState({})
    const [toggle,setToggle] =  useState('hidden')

    const docRef = doc(db, "readers", `${resId}`);
    useEffect(()=>{
const func = async()=>{
  const docSnap = await getDoc(docRef)
  // console.log(docSnap.data())
  setBookDetails(docSnap.data())
}
func()
    },[])
const BD = bookDetails
// console.log(bookDetails)
const {Author, Category, Discription, ImgVal, Rating, TitleOfBook, instaId} = BD
// console.log(Author)
// console.log(instaId)
console.log(IMG_URL+ImgVal+"?alt=media&token")


const clickHandler =() =>{
toggle == 'hidden' ? setToggle('block') : setToggle('hidden')
}

    return (
        <div>
<section class="overflow-hidden">
  <div class="mx-auto max-w-5xl px-5 py-24">
    <div class="mx-auto flex flex-wrap items-center lg:w-full">
      <img
        alt="Nike Air Max 21A"
        class="h-full w-full rounded object-cover lg:h-1/6 lg:w-1/4 "
        src={`${IMG_URL}${ImgVal}?alt=media&token`}
        
      />
      <div class="mt-6 w-full lg:mt-0 lg:w-8/12 lg:pl-10 mx-8">
        {/* <h2 class="text-sm font-semibold tracking-widest text-gray-500">
          {TitleOfBook}
        </h2> */}
        <h1 class="my-4 text-3xl font-semibold text-black">{TitleOfBook}</h1>
        <div class="my-4 flex items-center font-semibold border-b-2 pb-2">
          by {Author}
        </div>
        <p class="leading-relaxed pt-1 pb-5 mb-5 border-b-2 ">
          {Discription}
        </p>
        <div class="flex items-center justify-between ">
          <span class="title-font text-xl font-bold text-gray-900 ">
          Rate by Reader: {Rating} out of 5
          </span>
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
            onClick={clickHandler}
          >
            Connect to Reader
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<div className={`${toggle}`}>
<ConnectToReader ig={instaId}/>
</div>
<WhyToConnect />

        </div>
    )
}

export default BookOverview