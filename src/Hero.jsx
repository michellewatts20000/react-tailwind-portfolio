import { motion } from "framer-motion";
import ShapeDivider from "./ShapeDivider";

const HeroSection = () => {
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
      <div className="container mx-auto flex flex-col justify-center lg:items-start lg:text-left md:text-left text-center h-full px-10 relative">
        <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl text-secondary-300 font-semibold lg:mb-2 lg:w-1/2 lg:text-left md:text-left text-center">
          Hi! My name is Michelle.
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl text-secondary-300 font-semibold mb-4 lg:w-1/2 lg:text-left md:text-left text-center">
          I&apos;m a Frontend Developer.
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl lg:w-1/2 lg:text-left md:text-left text-center">
          I specialise in Vue and React frameworks. I have a background in multimedia. This site was built using React and Tailwind CSS. Check out some of my work by clicking the portfolio button below.
        </p>
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="bg-primary-500 hover:bg-primary-600 text-white font-bold mt-10 font-bold py-3 px-7 rounded-full inline-flex items-center"
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
