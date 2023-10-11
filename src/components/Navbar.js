import { Outlet, Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="main-nav-container">
            <div className="logo">CabBazar</div>
            <ul className="nav-bar">
              {/* <li><Link to="/">Home</Link></li> */}
              <li><Link to="/Book">Book</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/">Book Ride</Link></li>
              <li><input type="search"  placeholder="Search"/></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar;