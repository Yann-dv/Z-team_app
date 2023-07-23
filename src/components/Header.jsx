import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo192-w.png";

function Header() {
  return (
    <header className="App-header">
      <Link to="/z-team_app/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <BurgerNavBar />
      <Navbar />
    </header>
  );
}

function Navbar() {
  return (
    <div id="navBar" className="navBar">
      <ul className="header-nav-ul">
        <li className="header-nav-li">< NavLink to="/z-team_app/home" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Accueil</ NavLink></li>
        <li className="header-nav-li">< NavLink to="/z-team_app/schedule" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Planning</ NavLink></li>
        <li className="header-nav-li">< NavLink to="/z-team_app/prices" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Tarifs</ NavLink></li>
        <li className="header-nav-li">< NavLink to="/z-team_app/instructors" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Professeurs</ NavLink></li>
        <li className="header-nav-li">< NavLink to="/z-team_app/gallery" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Gallerie</ NavLink></li>
        <li className="header-nav-li">< NavLink to="/z-team_app/shop" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Shop</ NavLink></li>
        <li className="header-nav-li">< NavLink to="/z-team_app/partners" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Partenaires</ NavLink></li>
        <li className="header-nav-li registration-link"><a className="header-nav-links" href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">Inscription</a></li>
      </ul>
    </div>
  );
}

function BurgerNavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <div id="burgerNavBar" className="burgerNavBar">
      <button id="burgerNavbarToggle" onClick={handleToggle}>{navbarOpen ? "X" : "☰"}</button>
        <ul className={`header-nav-ul ${navbarOpen ? "showMenu" : "hideMenu"}`}>
          <li className="header-nav-li">< NavLink to="/z-team_app/home" className={({ isActive }) => (isActive ? "active-Navlink " : "")} onClick={() => closeMenu()}>Home</ NavLink></li>
          <li className="header-nav-li">< NavLink to="/z-team_app/schedule" className={({ isActive }) => (isActive ? "active-Navlink " : "")} onClick={() => closeMenu()}>Schedule</ NavLink></li>
          <li className="header-nav-li">< NavLink to="/z-team_app/prices" className={({ isActive }) => (isActive ? "active-Navlink " : "")} onClick={() => closeMenu()}>Prices</ NavLink></li>
          <li className="header-nav-li">< NavLink to="/z-team_app/instructors" className={({ isActive }) => (isActive ? "active-Navlink " : "")} onClick={() => closeMenu()}>Instructors</ NavLink></li>
          <li className="header-nav-li">< NavLink to="/z-team_app/gallery" className={({ isActive }) => (isActive ? "active-Navlink " : "")} onClick={() => closeMenu()}>Gallery</ NavLink></li>
          <li className="header-nav-li">< NavLink to="/z-team_app/shop" className={({ isActive }) => (isActive ? "active-Navlink " : "")} onClick={() => closeMenu()}>Shop</ NavLink></li>
          <li className="header-nav-li">< NavLink to="/z-team_app/partners" className={({ isActive }) => (isActive ? "active-Navlink " : "")}>Partners</ NavLink></li>
          <li className="header-nav-li registration-link"><a className="header-nav-links" href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">Registration</a></li>
        </ul>
      </div>
  );
}

export default Header;