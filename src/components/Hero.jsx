import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useLayoutEffect } from "react";


import hero from "/assets/air-ballon-bg.jpg";
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
      className={`${window.innerHeight > 900 ? "h-[900px]" : ""} relative min-h-[650px] h-screen w-full overflow-hidden`}

    >
      <img src={hero} alt="hero image" className="object-cover lg:object-right-top sm:object-right-top object-right-bottom absolute h-[120%] w-full" data-speed="auto" />
      <div className={`max-w-[1920px] mx-auto h-screen ${window.innerHeight > 900 ? "h-[900px]" : ""}`}>
        <div className="container mx-auto flex flex-col sm:justify-center sm:mt-0 mt-[25vh] md:ml-20 md:items-start lg:text-left md:text-left text-center h-full sm:px-20 px-10 relative">
          <h1 className="hero-text text-clampHeading md:leading-tight leading-custom mb-6 text-secondary-500 font-semibold lg:mb-2 lg:w-1/2 md:text-left text-center">
            Hi! My name is Michelle. <br />  I&apos;m a Frontend Developer.
          </h1>

          <p className="text-white text-base md:text-lg lg:text-xl lg:w-1/2 lg:text-left md:text-left text-center">
            I specialise in React and Vue frameworks.  <br className="hidden sm:block" />I have a background in multimedia. <br className="hidden sm:block" /> This site was built using React and Tailwind CSS.
          </p>
          <motion.span
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="next-button uppercase bg-primary-500 hover:bg-primary-600 text-white font-bold mt-10 text-clampButton py-3 px-4 sm:px-7 rounded-full inline-flex items-center"
            // onClick={() => (window.location.href = "#portfolio")}
            >
              <span className="sm:inline hidden">View Portfolio</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:ml-2"
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
      </div>
    </section>
  );
};

export default HeroSection;
