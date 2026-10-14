import { motion } from "framer-motion";

const heroSrcSet = (format) =>
  [640, 1024, 1920].map((w) => `/assets/air-balloon-bg-${w}.${format} ${w}w`).join(", ");

// The image is 120% of the section height with object-cover, so on tall screens
// it renders wider than the viewport (1.2 * 1.47 aspect ratio ≈ 177vh).
const heroSizes = "max(100vw, 177vh)";

const HeroSection = () => {

  
  return (
    <section
      id="hero"
      className={`${window.innerHeight > 600 ? "h-[600px]" : ""} relative min-h-[650px] h-screen w-full overflow-hidden relative`}
    >
      <picture>
        <source type="image/avif" srcSet={heroSrcSet("avif")} sizes={heroSizes} />
        <source type="image/webp" srcSet={heroSrcSet("webp")} sizes={heroSizes} />
        <img
          src="/assets/air-ballon-bg.jpg"
          alt="hero image"
          width="1920"
          height="1307"
          fetchpriority="high"
          className="object-cover lg:object-right-top sm:object-right-top object-right-bottom absolute h-[120%] w-full z-[0]"
        />
      </picture>
      <div className={`max-w-[1920px] mx-auto h-screen relative z-[10] ${window.innerHeight > 600 ? "h-[600px]" : ""}`}>
        <div className="mx-auto flex flex-col justify-center items-center h-full px-10">
          <h1 className="text-clampHeading md:leading-tight leading-custom text-secondary-500 font-semibold mb-2 text-center">
            Hi! My name is Michelle. <br />  I&apos;m a Software Developer.
          </h1>

          <p className="text-white text-base text-secondary-500 max-w-[400px] text-center">
            I specialise in React and Vue frameworks. I have a background in design and multimedia. This site was built using React and Tailwind CSS.
          </p>
          <motion.span
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="next-button bg-primary-500 hover:bg-primary-600 text-white font-bold mt-10 text-clampButton py-3 px-4 sm:px-7 rounded-full inline-flex items-center"
              onClick={() => (window.location.href = "#portfolio")}
            >
              Explore Projects 
            </button>
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
