import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo192_no_back.png';
import frFlag from '../assets/fr-flag.png';
import enFlag from '../assets/en-flag.png';

library.add(faSun);
library.add(faMoon);

const tradBar = document.getElementById('gt-nvframe');

function Header() {
  return (
    <header className="App-header" id="App-header">
      <Link
        id="App-logo"
        onClick={() => toggleNavbar()}
        title="Fermer/ouvrir le menu"
      >
        <img src={logo} className="app-logo" alt="Z-team logo" />
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
            to="/home"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/schedule"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Planning
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/prices"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Tarifs
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/instructors"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Professeurs
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Gallerie
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/partners"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
          >
            Partenaires
          </NavLink>
        </li>
        <li className="header-nav-li registration-link">
          <a
            className="header-nav-links"
            href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/zteam-boulogne-adhesion-2024-2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscription
          </a>
        </li>
        <li>
          <TranslateButton />
        </li>
        <li>
          <ThemeButton />
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
      <button
        id="burgerNavbarToggle"
        onClick={handleToggle}
        className={navbarOpen ? 'burgerIconSquared' : 'burgerIconRounded'}
      >
        {navbarOpen ? 'X' : '☰'}
      </button>
      <ul className={`header-nav-ul ${navbarOpen ? 'showMenu' : 'hideMenu'}`}>
        <li className="header-nav-li">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/schedule"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Planning
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/prices"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Tarifs
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/instructors"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Professeurs
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            onClick={() => closeMenu()}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Gallerie
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink
            to="/partners"
            className={({ isActive }) => (isActive ? 'active-Navlink ' : '')}
            style={({ isActive }) =>
              isActive ? { color: 'white' } : { color: '' }
            }
          >
            Partenaires
          </NavLink>
        </li>
        <li className="header-nav-li registration-link">
          <a
            className="header-nav-links"
            href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/zteam-boulogne-adhesion-2024-2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscriptions
          </a>
        </li>
        <li className="header-nav-li">
          <TranslateButton />
        </li>
        <li>
          <ThemeButton />
        </li>
      </ul>
    </div>
  );
}

function toggleNavbar() {
  var navbarList = document.querySelector('.header-nav-ul');
  var appHheader = document.querySelector('#App-header');
  var banner = document.querySelector('#banner');

  navbarList.classList.toggle('toggleNavbar');
  appHheader.classList.toggle('appHeaderMinimize');
  banner.classList.toggle('margin-top-less-4');
}

function TranslateButton() {
  if(tradBar) 
  {
    /*flagLink.setAttribute('href', 'https://yann-dv.github.io/z-team_app/');
    flagLink.setAttribute('title', 'Voir la version française');
    flagVersion.style.background = "padding-box no-repeat center/ cover url({frFlag})";*/
    return (
      <a href="https://yann-dv.github.io/z-team_app/" id="flagLink" className="translateFlag">
        <img src={frFlag} alt="Translate to french" title="Translate to french" className="translateFlagImg" />
      </a>
    );
    
  }
  else {
    return (
      <a href="https://translate.google.com/translate?sl=fr&tl=en&u=https://yann-dv.github.io/z-team_app/" id="flagLink" className="translateFlag">
        <img src={enFlag} alt="Traduire en anglais" title="Traduire en anglais" className="translateFlagImg" />
      </a>
    );
  }
}

function ThemeButton() {
  const [isDarkMode, setDark] = useState(false);
  const toggleLightMode = () => {
    setDark(!isDarkMode);
    setThemeColor(isDarkMode);
  };
  return (
    <button
      id="themeButton"
      onClick={() => toggleLightMode()}
      className="themeButton"
    >
      <FontAwesomeIcon icon={isDarkMode ? 'sun' : 'moon'} />
    </button>
  );
}

function setThemeColor(darkMode) {
  var html = document.getElementsByTagName('html')[0];

  if (darkMode === true) {
    html.style.cssText = `
      --main-background : #FFFFFF;
      --main-shade-background : #f5f5f5ec;
      --banner-title-color: white; 
      --secondary-background : #f6f6f6;
      --footer-background : #2d2a2d;
      --third-background : rgb(62, 3, 62);
      --purple-background : #5d0a61;
      --purple-lighter-color: #8534cd;
      --blue-background : #2f1196;
      --img-background-grey : #cccccc;
      --img-background-reactive: #ddd2dd;
      --main-text-color : black;
      --secondary-text-color : white;
      --links-text-color : #61dafb;
      --bjj-color: #4cfa17;
      --grappling-color: #f7f717;
      --banner-url: var(--main-banner-url);
            `;
  } else {
    html.style.cssText = `
            --main-background : #2d2a2d;
            --main-shade-background : #aba9a9ec;
            --banner-title-color: #edf2a9; 
            --secondary-background : #000000;
            --footer-background : #aba9a9ec;
            --third-background : rgb(62, 3, 62);
            --purple-background : #edf2a9;
            --purple-lighter-color: #686d2b;
            --blue-background : #2f1196;
            --img-background-grey : #000000;
            --img-background-reactive: #e3dfe3;
            --main-text-color : white;
            --secondary-text-color : black;
            --links-text-color : #61dafb;
            --banner-url: var(--secondary-banner-url);
            `;
  }
}

export default Header;
