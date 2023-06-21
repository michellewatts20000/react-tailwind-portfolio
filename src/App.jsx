import HeroSection from './Hero';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ShapeDivider from './ShapeDivider';
import Footer from './Footer';
import Skills from './Skills';

const App = () => {
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
