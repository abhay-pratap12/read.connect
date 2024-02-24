const ConnectToReader =({ig})=>{
// console.log(props)
    return(
        <div className="bg-gray-500 lg:mx-32 mx-10 rounded-lg my-4 px-4 py-4 text-white">
            <p>Available options to connect</p>
            <div className="bg-white text-gray-500 rounded-lg p-2 cursor-pointer">
                via: <a href={`https://www.instagram.com/${ig}/`}>Instagram</a>
            </div>
            

        </div>
    )
}

export default ConnectToReader