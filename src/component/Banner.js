import banner from "../utils/images/banner.png"

const Banner = ( ) => {
    return ( 
        <div className=" h-full lg:w-full w-screen flex justify-center text-[1.1rem]
         flex-wrap lg:flex-nowrap" >
            <div className="lg:w-4/6 px-8 text-gray-800 w-full">
                <h1 className="lg:pl-32 pl-1 mt-16 font-bold text-6xl">Welcome to our <span className="text-blue-400">vitrual library</span></h1>
                <p className="lg:pl-32 pl-1 py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus iusto consectetur autem aspernatur quos consequatur architecto itaque doloremque minima dolorum facere explicabo deserunt magni, animi laboriosam corrupti deleniti maxime, officia nesciunt sequi? Eveniet, nemo.</p>
                <button className="lg:mx-32 mx-1 my-5 bg-slate-200 border p-2 rounded-lg hover:bg-slate-300 hover:cursor-pointer">About Us</button>
            </div>
            <div className="lg:pr-32 pr-1 w-4/6">
                <img className="" src={banner}/>
            </div>

        </div>
    )
}

export default Banner