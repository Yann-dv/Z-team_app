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
        <Route path="/z-team_app/home" element={<Home />} />
        <Route path="/z-team_app/schedule" element={<Schedule />} />
        <Route path="/z-team_app/prices" element={<Prices />} />
        <Route path="/z-team_app/instructors" element={<Instructors />} />
        <Route path="/z-team_app/gallery" element={<Gallery />} />
        <Route path="/z-team_app/shop" element={<Shop />} />
        <Route path="/z-team_app/partners" element={<Partners />} />
        <Route path="/z-team_app/legal" element={<Legal />} />
        <Route path="/z-team_app/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/z-team_app/home" />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
