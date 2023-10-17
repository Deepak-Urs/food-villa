import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"
import { swiggy_api_URL } from "../constants"
import Shimmer from "./Shimmer"

function filterData (searchText, resData) {
    // taking restaurantList to have original data always
    let res = resData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    console.log('filtered res seen', res);
    return res;
}

//function setProcessedRestaurants(data) {
//    console.log('data seen', ser);
//})

const Body = () => {
    const [searchText, setSearchtext] = useState("")
    const [restaurants, setRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const getData = async () => {
        let res = await fetch(swiggy_api_URL)
        const jsonData = await res.json()
        //console.log(jsonData?.data)
        //console.log(jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
        //.then((res) => {
        //    let jsonData = res.json()
        //    console.log('data seen', data)
        //})
        //console.log('res seen', res)
        setRestaurants(jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useState(() => {
        getData()
    }, [restaurantList])
    
    return restaurants.length ? (
        <div className="body" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="search-container">
                <input
                    type="" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText} 
                    onChange={(e) => setSearchtext(e.target.value)}/>
                <button className="search-btn" onClick={() => {
                    setFilteredRestaurants(filterData(searchText, restaurants))
                }}>Search</button>
            </div>
            {filteredRestaurants.map((res) => {
                return <RestaurantCard {...res?.info} key={res?.info?.id} />
            })}
        </div>
    ) : 
    (<Shimmer />)
}


export default Body;