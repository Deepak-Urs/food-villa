import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"

function filterData (searchText) {
    // taking restaurantList to have original data always
    return restaurantList.filter((res) => res.name.includes(searchText))
}


const Body = () => {
    const [searchText, setSearchtext] = useState("")
    const [restaurants, setRestaurants] = useState(restaurantList)
    return (
        <div className="body" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="search-container">
                <input
                    type="" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText} 
                    onChange={(e) => setSearchtext(e.target.value)}/>
                <button className="search-btn" onClick={() => {
                    setRestaurants(filterData(searchText))
                }}>Search</button>
            </div>
            {restaurants.map((res) => {
                return <RestaurantCard {...res} key={res.id} />
            })}
        </div>
    )
}


export default Body;