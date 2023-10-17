const RestaurantCard = ({image, name, cuisines, avgRating}) => {
    //const {image, name, cuisines, avgRating} = props.restaurant
    return (
        <div className="card">
            <img alt="company-logo" src={image} />
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

export default RestaurantCard