const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {
                Array(20).fill("").map((e, idx) => (
                    <div key={idx} className="shimmer-card"></div>
                ))
            }
        </div>
    )
}

export default Shimmer