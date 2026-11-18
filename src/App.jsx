import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import AdventureDetails from './pages/AdventureDetails';
import Booking from './pages/Booking';
import Destinations from './pages/Destinations';
import ContentPages from './pages/ContentPages';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/adventures/:id" element={<AdventureDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<ContentPages page="about" />} />
          <Route path="/team" element={<ContentPages page="team" />} />
          <Route path="/stories" element={<ContentPages page="stories" />} />
          <Route path="/gallery" element={<ContentPages page="gallery" />} />
          <Route path="/upcoming-trips" element={<Explore upcoming />} />
          <Route path="/custom-trips" element={<ContentPages page="custom" />} />
          <Route path="/contact" element={<ContentPages page="contact" />} />
          <Route path="/faq" element={<ContentPages page="faq" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
