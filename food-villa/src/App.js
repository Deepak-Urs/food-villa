import React from "react";
//import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer"
import './App.css'

function AppLayout(){
    return (
        <React.Fragment>
            {/*{console.log('restauarantList seen', restaurantList)}*/}
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}


//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<AppLayout />)

export default AppLayout