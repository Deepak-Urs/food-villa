import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"

const Body = () => {
    const [searchText, setSearchtext] = useState("")
    return (
        <div className="body" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="search-container">
                <input
                    type="" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText} 
                    onChange={(e) => setSearchtext(e.target.value)}/>
                <button className="search-btn">Search</button>
            </div>
            {restaurantList.map((res) => {
                return <RestaurantCard {...res} key={res.id} />
            })}
        </div>
    )
}


export default Body;