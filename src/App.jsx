import { useState, useEffect } from 'react';
import { getPortfolioItems } from "./helpers/utils";
import HeroSection from './components/Hero';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import ShapeDivider from './components/ShapeDivider';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData = await getPortfolioItems();
        setItems(itemsData);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);


  return (
    <>
     <Navigation />
        <HeroSection />
        <Skills />
        <Portfolio items={items} />
        <ShapeDivider foregroundColor="#ffffff" backgroundColor="#F7B733" />
        <Contact />
        <Footer />

    </>
  );
};

export default App;
