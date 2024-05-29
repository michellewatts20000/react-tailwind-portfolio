import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { getBlogPosts, getPortfolioItems } from "./helpers/utils";


import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import HeroSection from './components/Hero';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ShapeDivider from './components/ShapeDivider';
import Footer from './components/Footer';
import Skills from './components/Skills';

const App = () => {
  // const tracking_ID = 'G-Z5SWHFG9S1';
  // const [posts, setPosts] = useState([]);
  const [items, setItems] = useState([]);
  const component = useRef(null);

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      speed: 0.8,
    });

    document.querySelector(".next-button").addEventListener("click", () => {
      smoother.scrollTo("#skills", true, "0% top");
    });


    document.querySelector(".skills").addEventListener("click", () => {
      smoother.scrollTo("#skills", true, "0% top");
    });

    document.querySelector(".portfolio").addEventListener("click", () => {
      smoother.scrollTo("#portfolio", true, "0% top");
    });

    document.querySelector(".contact").addEventListener("click", () => {
      smoother.scrollTo("#contact", true, "0% top");
    });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const split = new SplitText(".hero-text", { type: "lines" });
      gsap.from(split.lines, {
        opacity: 1,
        ease: "power3",
        x: -1000,
        duration: 1.0,
        delay: 0.5,
        stagger: 0.25,
      });

      document.querySelectorAll(".scroll-trigger").forEach((element) => {
        const split2 = new SplitText(element, { type: "lines" });

        gsap.from(split2.lines, {
          opacity: 0,
          ease: "power3",
          x: -1600,
          duration: 0.25,
          stagger: 0.25,
          scrollTrigger: {
            trigger: element,
            scrub: 0.25,
            end: "0%",
          },
        });
      });
    }, component);
    return () => ctx.revert();
  }, []);


  // useEffect(() => {
  //   ReactGA.initialize(tracking_ID);
  //   ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  // }, [tracking_ID])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const postsData = await getBlogPosts();
        const itemsData = await getPortfolioItems();

        // setPosts(postsData);
        setItems(itemsData);
      } catch (error) {
        // Handle error here
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div ref={component}>
        <Navigation />
        <HeroSection />
        <Skills />
        <Portfolio items={items} />
        <ShapeDivider foregroundColor="#DFDCE3" backgroundColor="#F7B733" />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
