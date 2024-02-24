import react from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./component/Header"
import Banner from "./component/Banner"
import CardContainer from "./component/CardContainer"

const App = () =>{
    return (
        <div>
            <Header />
            <Banner />
            <CardContainer />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)