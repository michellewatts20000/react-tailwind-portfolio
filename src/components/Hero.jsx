import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useLayoutEffect } from "react";

const HeroSection = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      speed: 0.8,
    });
  }, []);


  useLayoutEffect(() => {
    const headings = document.querySelectorAll(".scroll-trigger");
    headings.forEach((heading) => {
      let ctx = gsap.context(() => {
        gsap.fromTo(
          heading,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: heading,
              scrub: 1,
            },
          }
        );
      }, heading);
      return () => ctx.revert();
    });
  }, []);
  return (
    <section
      id="hero"
      className="relative bg-fixed bg-cover bg-center hero-size"
      style={{
        backgroundImage: 'url("./assets/air-ballon-bg.jpg")',
        backgroundPosition: 'center bottom',
        height: '80vh'
      }}
    >
      <div className="absolute inset-0 bg-secondary-800 opacity-20 backdrop-blur-md"></div> {/* Overlay */}
      <div data-speed="clamp(1.5)" className="container mx-auto flex flex-col justify-center md:ml-20 md:items-start lg:text-left md:text-left text-center h-full sm:px-20 px-10 relative">
        <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-secondary-500 font-semibold lg:mb-2 lg:w-1/2 lg:text-left md:text-left text-center">
          Hi! My name is Michelle.
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-secondary-500 font-semibold mb-4 lg:w-1/2 lg:text-left md:text-left text-center">
          I&apos;m a Frontend Developer.
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl lg:w-1/2 lg:text-left md:text-left text-center">
          I specialise in React and Vue frameworks.  <br />I have a background in multimedia. <br /> This site was built using React and Tailwind CSS.
        </p>
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold mt-10 text-clampButton py-3 px-4 sm:px-7 rounded-full inline-flex items-center"
            onClick={() => (window.location.href = "#portfolio")}
          >
            View Portfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </motion.span>
      </div>

    </section>
  );
};

export default HeroSection;
