import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo192.png";

function Header() {
  return (
    <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <BurgerNavBar />
      <Navbar />
    </header>
  );
}

function Navbar() {
  return (
    <div id="navBar" className="navBar">
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

function BurgerNavBar() {
  const burgerLinks = document.getElementsByClassName("burger_links");
  //TODO

  return (
    <div id="burgerNavBar" className="burgerNavBar">
      <div className="burgerNavBarContainer">
        <label htmlFor="toggle_burgerNavBar" id="burgerNavbarToggle">☰</label>
        <input type="checkbox" id="toggle_burgerNavBar" onChange={""} />
        <div className="burger_links" role="menu">
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active-Navlink header-burgerNav-link" : "header-burgerNav-link")}>Home</ NavLink>
          <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active-Navlink header-burgerNav-link" : "header-burgerNav-link")}>Schedule</ NavLink>
          <NavLink to="/prices" className={({ isActive }) => (isActive ? "active-Navlink header-burgerNav-link" : "header-burgerNav-link")}>Prices</ NavLink>
          <NavLink to="/instructors" className={({ isActive }) => (isActive ? "active-Navlink header-burgerNav-link" : "header-burgerNav-link")}>Instructors</ NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-Navlink header-burgerNav-link" : "header-burgerNav-link")}>Gallery</ NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? "active-Navlink header-burgerNav-link" : "header-burgerNav-link")}>Shop</ NavLink>
          <a className="header-burgerNav-link" href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">Registration</a>
        </div>
      </div>
    </div>
  );
}

export default Header;