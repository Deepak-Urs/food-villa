import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props)
        //create state
        this.state = {
            count: 0,
            count2: 0
        }
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>Profile Functional component</h1>
                <h2>Name: {this.props.name}</h2>
                {/*<h3>Count: {this.state.count}</h3>*/}
                <h3>Count: {count}</h3>
                {/* do not mutate state directly */}
                <button onClick={() => this.setState({
                    count: count+1
                })}>Click</button>
                {/*<h3>Count: {this.state.count}</h3>*/}
        </div>
        )
    }
}

export default ProfileClass;