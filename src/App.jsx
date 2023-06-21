import HeroSection from './Hero';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ShapeDivider from './ShapeDivider';
import Footer from './Footer';

const App = () => {
  return (
    <>

      <Navigation />

      <HeroSection />

      <Portfolio />

      <ShapeDivider foregroundColor="#DFDCE3" backgroundColor="#F7B733" />

      <Contact />

      <Footer />

    </>
  );
};


export default App
