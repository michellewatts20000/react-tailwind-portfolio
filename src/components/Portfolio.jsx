
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import PortfolioItem from './PortfolioItem';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faChevronRight} onClick={onClick}
      className={`${className} text-black hover:text-black text-5xl`}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        left: '100%',
        color: 'gray-500',
        hoverColor: 'gray-900',
        padding: '2px'
      }}
    />
  );
}


function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      onClick={onClick}
      className={`${className} text-black hover:text-black text-5xl`}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        left: '-20px',
        marginRight: '100px',
        color: 'text-gray-800',
        hoverColor: 'bg-primary-500',
        padding: '2px',
        zIndex: '1'
      }}
    />
  );
}

const Portfolio = (props) => {
  const { items } = props;

  const [showGrid, setShowGrid] = useState(false);

  const toggleView = () => {
    setShowGrid(!showGrid);
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "slides",
    autoplay: true, // Enable autoplay
    centerPadding: '60px', // Adjust the padding for the center slide
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section id="portfolio" className="bg-twilight-500 pt-10 pb-20 px-10 relative">
      <div className="shape-divider"></div>
      <div className="container mx-auto text-center">
        <button
          className="bg-primary-500 hover:bg-primary-400 text-white font-bold mb-10 text-clampButton uppercase py-3 px-7 rounded-full inline-flex items-center"
          onClick={toggleView}
        >
          {showGrid ? "View as slider" : "View as grid"}
          {showGrid ? (<svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>

          ) : (<svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
            <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
            <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
            <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
          </svg>)}

        </button>
        {showGrid ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <PortfolioItem key={item.sys.id} item={item.fields} />
            ))}
          </div>

        ) : (
          <Slider {...settings}>
            {items.map((item) => (
              <div key={item.sys.id} className="bg-transparent p-6">
                <h1 className="text-2xl font-bold mb-2">{item.fields.name}</h1>
                <p className="text-gray-800 mb-2">{item.fields.description}</p>
                <p className="text-sm text-gray-500 mb-6">{item.fields.tech}</p>
                <a href={item.fields.deployed} style={{ display: "inline-block", overflow: "hidden" }} rel="noopener noreferrer" target="_blank">
                  <motion.img
                    src={item.fields.image.fields.file.url}
                    alt={item.fields.name}
                    className="object-cover h-[233px] w-[375px]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </a>

                <div className="mt-8 flex flex-col gap-2 sm:gap-4 mb:flex-row items-center justify-center">
                  <a href={item.fields.deployed} rel="noopener noreferrer" target="_blank" className="rounded-full bg-primary-500 hover:bg-primary-600 text-white text-clampButton font-semibold py-2 px-4 lg:px-6 transition duration-300">
                    Demo
                    <FontAwesomeIcon icon={faEye} className="ml-2" />
                  </a>
                  {item.fields.github && (
                    <a href={item.fields.github} rel="noopener noreferrer" target="_blank" className="rounded-full bg-secondary-500 hover:bg-secondary-600 text-white text-clampButton font-semibold py-2 px-4 lg:px-6 transition duration-300">
                      GitHub
                      <FontAwesomeIcon icon={faGithub} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Slider>


        )}
      </div>
    </section>
  );
};

export default Portfolio;
