import './App.css';
import Header from './Header.js';
import HomeContent from './Home.js';
import Footer from './Footer.js';
import Legal from './Legal.js';

function App() {
  return (
    <section className="App">
      <Header />
      <Banner />
      <HomeContent />
      <Footer />
    </section>
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
