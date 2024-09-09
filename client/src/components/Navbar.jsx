import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <>
        <header>
      <div className="container">
        <h1 className="logo">Shortlet & Car Rental</h1>
     <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Listing">Listing</Link></li>
        <li><Link to="/Services">Services</Link></li>
      </ul>
    </nav>
    </div>
    </header>
    <Outlet />
        </>
    );
}
 
export default Navbar;



