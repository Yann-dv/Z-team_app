import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo192.png';

function Header() {
    return(
        <header className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        <Navbar />
      </header>
    );
}

function Navbar() {
    return (
        <div className="navBar">
          <ul className="header-nav-ul">
              <li className="header-nav-li">< NavLink to="/home" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Home</ NavLink></li>
              <li className="header-nav-li">< NavLink to="/schedule" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Schedule</ NavLink></li>
              <li className="header-nav-li">< NavLink to="/prices" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Prices</ NavLink></li>
              <li className="header-nav-li">< NavLink to="/instructors" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Instructors</ NavLink></li>
              <li className="header-nav-li">< NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Gallery</ NavLink></li>
              <li className="header-nav-li">< NavLink to="/shop" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Shop</ NavLink></li>
              <li className="header-nav-li registration-link"><a className="header-nav-links" href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">Registration</a></li>
          </ul>
        </div>
    );
  }
  
  
  export default Header;