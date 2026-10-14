const heroSrcSet = (format) =>
  [640, 1024, 1920].map((w) => `/assets/air-balloon-bg-${w}.${format} ${w}w`).join(", ");

// The image is 120% of the section height with object-cover, so on tall screens
// it renders wider than the viewport (1.2 * 1.47 aspect ratio ≈ 177vh).
const heroSizes = "max(100vw, 177vh)";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[650px] h-[100svh] w-full overflow-hidden bg-[#0b1324]">
      <picture>
        <source type="image/avif" srcSet={heroSrcSet("avif")} sizes={heroSizes} />
        <source type="image/webp" srcSet={heroSrcSet("webp")} sizes={heroSizes} />
        <img
          src="/assets/air-ballon-bg.jpg"
          alt=""
          width="1920"
          height="1307"
          fetchpriority="high"
          className="object-cover lg:object-right-top sm:object-right-top object-right-bottom absolute h-[120%] w-full z-[0]"
        />
      </picture>
      {/* Darken the side the text sits on so it stays readable over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent sm:bg-gradient-to-r sm:from-black/70 sm:via-black/25" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 tb:px-10 pt-20 flex flex-col justify-center">
        <div className="max-w-2xl">
          <p className="text-primary-300 text-lg font-medium mb-4">Hi, I&apos;m Michelle Watts</p>
          <h1 className="text-white text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] font-semibold mb-6">
            Frontend developer building fast, accessible React &amp; Vue apps.
          </h1>
          <p className="text-gray-200 text-lg max-w-xl mb-10">
            I specialise in React and Vue, with a background in design and multimedia.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="rounded-full bg-primary-300 hover:bg-primary-200 text-gray-900 font-semibold px-7 py-3 transition-colors">
              View projects
            </a>
            <a href="#contact" className="rounded-full border border-white/70 hover:bg-white/10 text-white font-semibold px-7 py-3 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
