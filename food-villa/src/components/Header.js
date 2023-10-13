// React component definition-2
// Component compoition done below
const Header = () => {
    return (
        <div className="header">
            Hi <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// React component definition-1: functional component
const Title = () => (
    <img src="fv.jpeg" alt="logo" className="logo" />
);

export default Header;