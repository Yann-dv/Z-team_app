import { Link } from 'react-router-dom';
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
              <li className="header-nav-li"><Link to="/about" className="header-nav-links">About us</Link></li>
              <li className="header-nav-li"><Link to="/schedule" className="header-nav-links">Schedule</Link></li>
              <li className="header-nav-li"><Link to="/prices" className="header-nav-links">Prices</Link></li>
              <li className="header-nav-li"><Link to="/teachers" className="header-nav-links">Teachers</Link></li>
              <li className="header-nav-li"><Link to="/gallery" className="header-nav-links">Gallery</Link></li>
              <li className="header-nav-li registration-link"><a className="header-nav-links" href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">Registration</a></li>
          </ul>
        </div>
    );
  }
  
  export default Header;