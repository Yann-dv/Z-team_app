import logo from './logo192.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul class="header-nav-ul">
          <li class="header-nav-li"><a href="#" class="header-nav-links">Link to another page</a></li>
          <li class="header-nav-li"><a href="#" class="header-nav-links">Link to another page</a></li>
          <li class="header-nav-li"><a href="#" class="header-nav-links">Link to another page</a></li>
          <li class="header-nav-li"><a href="#" class="header-nav-links">Link to another page</a></li>
        </ul>
        <p class="header-welcome">
          Welcome to Z-Team Academy
        </p>
        <a
          className="App-link"
          href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inscription Link - 2022/2023
        </a>
      </header>
    </div>
  );
}

export default App;
