import { Children, useCallback, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const AUTOPLAY_INTERVAL = 2000;

// Lightweight replacement for react-slick: native horizontal scrolling with CSS scroll-snap,
// plus arrows, dots and autoplay. Shows 1 slide on mobile, 2 on tablet and 3 on desktop.
const Carousel = ({ children, label }) => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const slides = Children.toArray(children);

  const getSlideWidth = () => trackRef.current?.firstElementChild?.offsetWidth || 1;

  // Work out how many scroll positions there are (slides minus those visible at once, plus one)
  // and which one we're at. Runs on scroll and resize.
  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = getSlideWidth();
    const visibleSlides = Math.round(track.clientWidth / slideWidth);
    setPageCount(Math.max(slides.length - visibleSlides + 1, 1));
    setActiveIndex(Math.round(track.scrollLeft / slideWidth));
  }, [slides.length]);

  useEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [updatePosition]);

  // Only autoplay while the carousel is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = (index) => {
    trackRef.current?.scrollTo({ left: index * getSlideWidth(), behavior: 'smooth' });
  };

  // Wrap around at either end, like react-slick's infinite mode
  const step = (direction) => goTo((activeIndex + direction + pageCount) % pageCount);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || !isVisible || prefersReducedMotion || pageCount < 2) return;
    const timer = setTimeout(() => step(1), AUTOPLAY_INTERVAL);
    return () => clearTimeout(timer);
  });

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <button
        className="absolute top-1/2 -left-5 -translate-y-1/2 z-[1] text-black text-xl p-1"
        onClick={() => step(-1)}
        aria-label="Previous slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
        onScroll={updatePosition}
      >
        {slides.map((slide, index) => (
          <div key={slide.key ?? index} className="shrink-0 w-full tb:w-1/2 sm:w-1/3 snap-start">
            {slide}
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 -right-5 -translate-y-1/2 z-[1] text-black text-xl p-1"
        onClick={() => step(1)}
        aria-label="Next slide"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {pageCount > 1 && (
        <div className="flex flex-wrap justify-center mt-4">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              className="flex items-center justify-center h-6 w-6"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
            >
              <span className={`h-1.5 w-1.5 rounded-full bg-black ${index === activeIndex ? 'opacity-75' : 'opacity-25'}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
