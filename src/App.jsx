import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import HeroSection from './Hero';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ShapeDivider from './ShapeDivider';
import Footer from './Footer';
import Skills from './Skills';

const App = () => {
  const tracking_ID = 'G-Z5SWHFG9S1';

  useEffect(() => {
    ReactGA.initialize(tracking_ID);
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, [tracking_ID]);

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

export default App;
