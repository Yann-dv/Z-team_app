import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo192_no_back.png';

function Header() {
  return (
    <header className="App-header" id="App-header">
      <Link id="App-logo" onClick={() => toggleNavbar()}>
        <img src={logo} className="App-logo" alt="Z-team logo"/>
      </Link>
      <Navbar />
      <BurgerNavBar />
    </header>
  );
}

function Navbar() {
  return (
    <div id="navBar">
      <ul className="header-nav-ul">
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/home"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Accueil
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/schedule"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Planning
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/prices"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Tarifs
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/instructors"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Professeurs
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/gallery"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Gallerie
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/shop"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Shop
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/partners"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
          >
            Partenaires
          </NavLink>
        </li>
        <li className="header-nav-li registration-link">
          <a
            className="header-nav-links"
            href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscription
          </a>
        </li>
      </ul>
    </div>
  );
}

function BurgerNavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div id="burgerNavBar" className="burgerNavBar">
      <button id="burgerNavbarToggle" onClick={handleToggle}>
        {navbarOpen ? 'X' : '☰'}
      </button>
      <ul className={`header-nav-ul ${navbarOpen ? 'showMenu' : 'hideMenu'}`}>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/home"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Accueil
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/schedule"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Planning
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/prices"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Tarifs
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/instructors"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Professeurs
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/gallery"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Gallerie
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/shop"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Shop
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/z-team_app/partners"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={ ({ isActive}) => (isActive ? {color: 'white'} : {color: ''}) }
          >
            Partenaires
          </NavLink>
        </li>
        <li className="header-nav-li registration-link">
          <a
            className="header-nav-links"
            href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscriptions
          </a>
        </li>
      </ul>
    </div>
  );
}

function toggleNavbar() {
  var navbarList = document.querySelector(".header-nav-ul");
  var appHheader = document.querySelector("#App-header");
  var banner = document.querySelector("#banner");

  navbarList.classList.toggle("toggleNavbar");
  appHheader.classList.toggle("appHeaderMinimize");
  banner.classList.toggle("margin-top-less-4");
} 

export default Header;
