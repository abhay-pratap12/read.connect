import { Link } from "react-router-dom"
import banner from "../utils/images/banner.png"
import hero from "../utils/images/hero.jpg"

const Hero = () =>{
    return (
        <div>
     <div className=" h-full lg:w-5/6 w-screen flex justify-center text-[1.1rem]
         flex-wrap lg:flex-nowrap border-t-[1px] mx-32 " >
            <div className="lg:w-3/6 mr-4 text-gray-800 w-full">
                <h1 className=" pl-1 mt-16 font-bold text-5xl">We're changing the way people <span  id = "element" className="text-blue-400" >Connect.</span></h1>
                <p className=" pl-1 py-5"> We are connecting readers through this virtual library , fostering a
          vibrant online community centered around the love for books . Users
          can create personalized bookshelf and connect to like minded
          individual. Providing a system to encourage communication between
          users fostering discussion recommendations, and the exchange of
          literary insights.</p>
          <Link><button className=" mx-1 my-5 bg-blue-300 border p-2 rounded-lg hover:bg-slate-300 hover:cursor-pointer font-semibold">
            About us
        </button></Link>
            </div>
            <div className=" pr-1 w-2/6">
                <img className="w-[400px]" src={hero}/>
            </div>

        </div>
        </div>
    )
}

export default Hero