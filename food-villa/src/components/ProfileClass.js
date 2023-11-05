import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props)
        //create state
        this.state = {
            userInfo: {
              name: 'test name',
              location: 'test location'
            }
          }
        console.log('C1');
    }

    async componentDidMount() {
        console.log('C3');
        const data = await fetch('https://api.github.com/users/Deepak-Urs');
        const json = await data.json();
        console.log('json', json);
        this.setState({userInfo: json})
    }

    componentDidUpdate() {
        console.log('CDU');
    }

    componentWillUnmount() {
        console.log('CWU');
    }

    render() {
        const {count} = this.state;
        console.log('C2');
        return (
            <div>
                <h1>Profile Class component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.login}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
                {/*<h3>Count: {this.state.count}</h3>*/}
                {/*<h3>Count: {count}</h3>*/}
                {/* do not mutate state directly */}
        </div>
        )
    }
}

export default ProfileClass;