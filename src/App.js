import logo from './logo192.png';
import './App.css';
import HomeContent from './Home.js';


function App() {
  return (
    <section className="App">
      <header className="App-header">
        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        <Navbar />
      </header>
      <Banner />
      <HomeContent />
    </section>
  );
}

function Navbar() {
  return (
    <div className="navBar">
      <ul className="header-nav-ul">
          <li className="header-nav-li"><a href="/" className="header-nav-links">About</a></li>
          <li className="header-nav-li"><a href="/" className="header-nav-links">Planning</a></li>
          <li className="header-nav-li"><a href="/" className="header-nav-links">Prices</a></li>
          <li className="header-nav-li"><a href="/" className="header-nav-links">Gallery</a></li>
      </ul>
      <a className="header-nav-links registration-link" href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">Registration</a>
    </div>
  );
}

function Banner() {
  return (
    <section className="banner" >
      <h1 className="bannerTitle">Z-Team Academy</h1>
    </section>
  );
}

export default App;
