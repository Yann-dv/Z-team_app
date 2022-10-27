import logo from './logo192.png';
import banner from './team_banner.jpg'
import './App.css';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </header>
      <Banner />
    </section>
  );
}

function Navbar() {
  return (
    <div className="navBar">
      <ul className="header-nav-ul">
          <li className="header-nav-li"><a href="#" className="header-nav-links">Link to another page</a></li>
          <li className="header-nav-li"><a href="#" className="header-nav-links">Link to another page</a></li>
          <li className="header-nav-li"><a href="#" className="header-nav-links">Link to another page</a></li>
          <li className="header-nav-li"><a href="#" className="header-nav-links">Link to another page</a></li>
          <li className="header-nav-li"><a className="header-nav-links" href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">Inscription Link - 2022/2023</a></li>
      </ul>
      
    </div>
  );
}

function Banner() {
  return (
    <section className="banner">
      <img className="banner_img" src={banner} alt="Academy banner, with a group of student after a class session"></img>
      <h1 className="bannerTitle">Z-Team Academy</h1>
    </section>
  );
}

export default App;
