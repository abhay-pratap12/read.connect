import Card from "./Card"

const CardContainer = () =>{
    return (
        <div className="px-32 py-14">
            <h1 className="p-4 m-4 font-semibold text-3xl ">Latest Products</h1>
            <div className="p-4">
            <Card />
            </div>

        </div>
    )
}

export default CardContainer