import '../styles/App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Schedule from './Schedule.js';
import Prices from './Prices.js';
import Instructors from './Instructors';
import Gallery from './Gallery.js';
import Shop from './Shop.js';
import Footer from './Footer.js';
import Legal from './Legal.js';
import Privacy from './Privacy.js';

function App() {
  return (
    <section className="App">
      <Header />
      <Routes>
        <Route path="/z-team_app/" element={<Home />} />
        <Route path="/z-team_app/home" element={<Home />} />
        <Route path="/z-team_app/schedule" element={<Schedule />} />
        <Route path="/z-team_app/prices" element={<Prices />} />
        <Route path="/z-team_app/instructors" element={<Instructors />} />
        <Route path="/z-team_app/gallery" element={<Gallery />} />
        <Route path="/z-team_app/shop" element={<Shop />} />
        <Route path="/z-team_app/legal" element={<Legal />} />
        <Route path="/z-team_app/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
