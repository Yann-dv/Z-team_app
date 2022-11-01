import '../styles/App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Planning from './Planning.js';
import Prices from './Prices.js';
import Teachers from './Teachers.js';
import Gallery from './Gallery.js';
import Footer from './Footer.js';

function App() {
  return (
    <section className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </section>
  );
}


export default App;
