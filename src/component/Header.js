import { useState } from "react";
import hambuger from "../utils/images/hambuger.png"

const Header = () => {


  const [hidden,setHidden] = useState('hidden')

const clickHandle = () =>{
hidden == "hidden" ? setHidden('block') : setHidden("hidden")
}

console.log(hidden)

  return (
    <div className="drop-shadow-md sticky top-0">
      <nav className="flex bg-blue-100 justify-between lg:px-32 px-9 font-sans font-semibold ">
        <div className="left flex py-2 m-1">
          <div className="py-2 my-1 lg:mx-4  mx-0">logo</div>
          {/* <div className="p-2 m-1">
                        explore
                    </div> */}
        </div>
        <div>
          <ul className="right lg:flex p-2 m-1 hidden">
            <li className="p-2 my-1 mx-6">Home</li>
            <li className="p-2 my-1 mx-6">About</li>
            <li className="p-2 my-1 mx-6">Shop</li>
          </ul>
        </div>
        <div className="flex">
        <div className="p-4 my-2 mx-4">Sell</div>
      <button className="lg:hidden block hover:cursor-pointer" onClick={clickHandle}>
        <img className="w-6" src={hambuger} />
      </button>
      </div>
      </nav>
        <div className = {`hamburger ${hidden} bg-blue-100 flex-col justify-center`}>
          <ul className="flex flex-col w-1/2">
            <li className="p-2 my-1 mx-6">Home</li>
            <li className="p-2 my-1 mx-6">About</li>
            <li className="p-2 my-1 mx-6">Shop</li>
          </ul>
        </div>
    </div>
  );
};

export default Header;
