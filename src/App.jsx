import HeroSection from './Hero';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ShapeDivider from './ShapeDivider';
import Footer from './Footer';
import Resume from './Resume';

const App = () => {
  return (
    <>

      <Navigation />

      <HeroSection />
      
      {/* <ShapeDivider foregroundColor="transparent" backgroundColor="#F7B733" /> */}

      {/* <Resume /> */}

      <Portfolio />

      <ShapeDivider foregroundColor="#DFDCE3" backgroundColor="#F7B733" />

      <Contact />

      <Footer />

    </>
  );
};


export default App
