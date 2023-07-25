import React, { useState, useEffect } from 'react';
import { getBlogPosts, getPortfolioItems } from "./utils";
import ReactGA from 'react-ga4';
import HeroSection from './components/Hero';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ShapeDivider from './components/ShapeDivider';
import Footer from './components/Footer';
import Skills from './components/Skills';

const App = () => {
  const tracking_ID = 'G-Z5SWHFG9S1';
  const [posts, setPosts] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    ReactGA.initialize(tracking_ID);
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, [tracking_ID])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getBlogPosts();
        const itemsData = await getPortfolioItems();

        setPosts(postsData);
        setItems(itemsData);
      } catch (error) {
        // Handle error here
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
      <ShapeDivider foregroundColor="#DFDCE3" backgroundColor="#F7B733" />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
