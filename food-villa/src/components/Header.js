// React component definition-2
// Component compoition done below
import { useState } from 'react'
import Logo from '../assets/imgs/food-villa.png'

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                // NOTE: You can  run any piece of JS inside {} if JS => JS expression and not statements
                (isLoggedIn ? (<button onClick={() => {console.log('change'); setIsLoggedIn(false)}}>LogOut</button>)
                     : <button onClick={() => {console.log('change'); setIsLoggedIn(true)}}>LogIn</button>)
            }
        </div>
    );
};

// React component definition-1: functional component
const Title = () => (
    <img src={Logo} alt="logo" className="logo" />
);

export default Header;