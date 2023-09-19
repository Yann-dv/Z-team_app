import '../styles/App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Schedule from '../pages/Schedule';
import Prices from '../pages/Prices';
import Instructors from '../pages/Instructors';
import Gallery from '../pages/Gallery';
import Shop from '../pages/Shop';
import Partners from '../pages/Partners';
import Footer from './Footer';
import Legal from '../pages/Legal';
import Privacy from '../pages/Privacy';

function App() {
  const location = useLocation();

  return (
    <section className="App homeContainer generalBackground light-bg">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
