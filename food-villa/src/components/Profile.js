import { useState } from "react"

const ProfileFunctional = (props) => {
    const [count, setCount] = useState(0)
    const [count2] = useState(0)
    return (
        <div>
            <h1>Profile Functional component</h1>
            <h2>{props.name}</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count+1)}>Click</button>
        </div>
    )
}

export default ProfileFunctional