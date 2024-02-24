const Card = () =>{
    return (
        <div className="shadow-lg w-[200px] m-4 rounded-md">
            <div className="w-[200px] h-[200px] bg-yellow-100">
                img
            </div>
            <div className="p-3">
                <h3 className="font-semibold">Title</h3>
                <div className="text-[0.8rem] py-1">Author</div>
                <div className="text-[0.8rem]">Offer price: ₹ 2</div>
            </div>
        </div>
    )
}

export default Card