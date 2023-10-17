import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"
import { swiggy_api_URL } from "../constants"

function filterData (searchText) {
    // taking restaurantList to have original data always
    return restaurantList.filter((res) => res.name.includes(searchText))
}


const Body = () => {
    const [searchText, setSearchtext] = useState("")
    const [restaurants, setRestaurants] = useState(restaurantList)

    const getData = async () => {
        let res = await fetch(swiggy_api_URL)
        const jsonData = await res.json()
        console.log(jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants[0])
        //.then((res) => {
        //    let jsonData = res.json()
        //    console.log('data seen', data)
        //})
        //console.log('res seen', res)
        //setRestaurants(data)
    }

    useState(() => {
        getData()
    }, [restaurantList])
    
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