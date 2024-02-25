import { useState } from "react";
import hambuger from "../utils/images/hambuger.png"
import { Link } from "react-router-dom";
import logo from "../utils/images/bookCon.png"

const Header = () => {


  const [hidden,setHidden] = useState('hidden')

const clickHandle = () =>{
hidden == "hidden" ? setHidden('block') : setHidden("hidden")
}

console.log(hidden)

  return (
    <div className="drop-shadow-md sticky top-0">
      <nav className="flex bg-blue-300 justify-between lg:px-36 px-9 font-sans font-semibold ">
        <div className="left flex py-2 m-1">
          <div className="  mx-0">
            <img className="w-10" src={logo} />
          </div>
          {/* kuchunique sa create kr skte hain logo pr click kre toh */}
          {/* <div className="p-2 m-1">
                        explore
                    </div> */}
        </div>
        <div>
          <ul className="right lg:flex p-2 m-1 hidden">
            <Link to={'/'}><li className="p-2 my-1 mx-6 hover:bg-white rounded-2xl">Home</li></Link>
            <Link to={'/about'}><li className="p-2 my-1 mx-6  hover:bg-white rounded-2xl">About</li></Link>
            <Link to={'/library'}><li className="p-2 my-1 mx-6  hover:bg-white rounded-2xl">Library</li></Link>
            <a href="https://readconnect-bookrecommendation-com.onrender.com/"><li className="p-2 my-1 mx-6  hover:bg-white rounded-2xl">Recommended</li></a>
          </ul>
        </div>
        <div className="flex">
        <Link to={'/signIn'}><div className="py-2 my-4 mx-3 px-1 hover:bg-white rounded-2xl">Post your books</div></Link>
      <button className="lg:hidden block hover:cursor-pointer" onClick={clickHandle}>
        <img className="w-6" src={hambuger} />
      </button>
      </div>
      </nav>
        <div className = {`hamburger ${hidden} bg-blue-100 flex-col justify-center`}>
          <ul className="flex flex-col w-1/2">
            <Link to={'/'}><li className="p-2 my-1 mx-6  hover:bg-white rounded-2xl">Home</li></Link>
            <Link to={'/about'}><li className="p-2 my-1 mx-6  hover:bg-white rounded-2xl">About</li></Link>
            <Link to={'/library'}><li className="p-2 my-1 mx-6  hover:bg-white rounded-2xl">Library</li></Link>
            <Link to={'/recommended'}><li className="p-2 my-1 mx-6  hover:bg-white rounded-2xl">Recommended</li></Link>
          </ul>
        </div>
    </div>
  );
};

export default Header;
