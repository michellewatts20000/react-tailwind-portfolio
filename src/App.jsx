import HeroSection from './Hero';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ShapeDivider from './ShapeDivider';
import Footer from './Footer';
import Skills from './Skills';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


ReactGA.initialize('G-TGYEXF5GNH');


const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location])
  
  return (
    <>

      <Navigation />

      <HeroSection />

      <Skills />

      <Portfolio />

      <ShapeDivider foregroundColor="#DFDCE3" backgroundColor="#F7B733" />

      <Contact />

      <Footer />

    </>
  );
};


export default App
