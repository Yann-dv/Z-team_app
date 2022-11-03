import '../styles/App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Schedule from './Schedule.js';
import Prices from './Prices.js';
import Instructors from './Instructors';
import Gallery from './Gallery.js';
import Footer from './Footer.js';

function App() {
  return (
    <section className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </section>
  );
}


export default App;
