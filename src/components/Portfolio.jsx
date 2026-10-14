import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Carousel from './Carousel';
import PortfolioItem from './PortfolioItem';
import { getImageUrl } from '../helpers/utils';

const Portfolio = (props) => {
  const { items } = props;

  const [showGrid, setShowGrid] = useState(false);

  const toggleView = () => {
    setShowGrid(!showGrid);
  };

  return (
    <section id="portfolio" className="bg-twilight-500 pt-10 pb-20 px-10 relative">
      <div className="shape-divider"></div>
      <div className="container mx-auto text-center">
        <button
          className="bg-primary-800 hover:bg-primary-900 text-white font-bold mb-10 text-clampButton uppercase py-3 px-7 rounded-full inline-flex items-center"
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
          <Carousel label="Portfolio projects">
            {items.map((item) => (
              <div key={item.sys.id} className="bg-transparent p-6">
                <h1 className="text-2xl font-bold mb-2">{item.fields.name}</h1>
                <p className="text-gray-800 mb-2">{item.fields.description}</p>
                <p className="text-sm text-gray-600 mb-6">{item.fields.tech}</p>
                <a href={item.fields.deployed} className="max-w-full" style={{ display: "inline-block", overflow: "hidden" }} rel="noopener noreferrer" target="_blank">
                  <picture>
                    <source type="image/avif" srcSet={getImageUrl(item.fields.image, { width: 750, height: 466, format: 'avif', quality: 60 })} />
                    <img
                      src={getImageUrl(item.fields.image, { width: 750, height: 466 })}
                      alt={item.fields.name}
                      width="375"
                      height="233"
                      loading="lazy"
                      className="object-cover h-[233px] w-[375px] transition-transform duration-500 hover:scale-110"
                    />
                  </picture>
                </a>

                <div className="mt-8 flex flex-col gap-2 sm:gap-4 mb:flex-row items-center justify-center">
                  <a href={item.fields.deployed} rel="noopener noreferrer" target="_blank" className="rounded-full bg-primary-800 hover:bg-primary-900 text-white text-clampButton font-semibold py-2 px-4 lg:px-6 transition duration-300">
                    Demo
                    <FontAwesomeIcon icon={faEye} className="ml-2" />
                  </a>
                  {item.fields.github && (
                    <a href={item.fields.github} rel="noopener noreferrer" target="_blank" className="rounded-full bg-secondary-700 hover:bg-secondary-800 text-white text-clampButton font-semibold py-2 px-4 lg:px-6 transition duration-300">
                      GitHub
                      <FontAwesomeIcon icon={faGithub} className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Carousel>


        )}
      </div>
    </section>
  );
};

export default Portfolio;
