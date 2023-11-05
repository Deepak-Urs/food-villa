//import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./Profile";

//const About = () => {
//  return (
//    <div>
//      <h1>About</h1>
//      <h2>This is Namaste React Web Series</h2>
//      {/*<Outlet />*/}
//      <ProfileFunctional name={'Deepak'}/>
//      <ProfileClass name={'Deepak Urs'}/>
//    </div>
//  );
//};

import React from "react";


class About extends React.Component {
  constructor(props) {
    super(props)
    console.log('S1');
    
  }

  componentDidMount() {
    console.log('S3');
    
  }

  render() {
    {console.log('S2')}
    return (
          <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            {/*<Outlet />*/}
            <ProfileFunctional name={'Deepak'}/>
            <ProfileClass name={'Deepak Urs'}/>
          </div>
        );
  }
}


export default About;