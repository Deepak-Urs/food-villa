import { restaurantList } from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { swiggy_api_URL } from "../constants"
import Shimmer from "./Shimmer"

function filterData(searchText, resData) {
    // taking restaurantList to have original data always
    let res = resData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    console.log('filtered res seen', res);
    return res;
}

//function setProcessedRestaurants(data) {
//    console.log('data seen', ser);
//})

const Body = () => {
    //avoid rendering component
    const [searchText, setSearchtext] = useState("")
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const getData = async () => {
        let res = await fetch(swiggy_api_URL)
        const jsonData = await res.json()

        setAllRestaurants(jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        getData()
    }, [allRestaurants])

    // early return
    if(!allRestaurants) return null;

    if(filteredRestaurants.length === 0) {
        return (<h1>No restaurants matched your filter</h1>)
    }

    return filteredRestaurants.length === 0 ? (<Shimmer />) :(
        <div className="body" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="search-container">
                <input
                    type=""
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchtext(e.target.value)} />
                <button className="search-btn" onClick={() => {
                    setFilteredRestaurants(filterData(searchText, allRestaurants))
                }}>Search</button>
            </div>
            {filteredRestaurants.map((res) => {
                return <RestaurantCard {...res?.info} key={res?.info?.id} />
            })}
        </div>
    )
        
}


export default Body;