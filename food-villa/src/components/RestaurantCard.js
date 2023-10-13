const RestaurantCard = ({image, name, cuisines, rating}) => {
    //const {image, name, cuisines, rating} = props.restaurant
    return (
        <div className="card">
            <img alt="company-logo" src={image} />
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}

export default RestaurantCard