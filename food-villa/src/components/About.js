import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./Profile";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      {/*<Outlet />*/}
      <ProfileFunctional name={'Deepak'}/>
      <ProfileClass name={'Deepak Urs'}/>
    </div>
  );
};

export default About;
