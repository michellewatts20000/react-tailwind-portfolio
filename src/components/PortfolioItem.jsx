import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getImageUrl } from "../helpers/utils";

const PortfolioItem = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md px-5 md:px-0 pt-5 pb-10">
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-600 mb-1">{item.description}</p>
      <div>
        <picture>
          <source type="image/avif" srcSet={getImageUrl(item.image, { width: 750, height: 466, format: 'avif', quality: 60 })} />
          <img
            src={getImageUrl(item.image, { width: 750, height: 466 })}
            alt={item.name}
            width="375"
            height="233"
            loading="lazy"
            className="p-8 object-cover h-[233px] w-[375px] mx-auto transition-transform duration-500 hover:scale-110"
          />
        </picture>
      </div>
      <p className="text-gray-600 text-sm">{item.tech}</p>
      <div className="mt-4">
        <a href={item.deployed} rel="noopener noreferrer" target="_blank" className="rounded-full bg-primary-800 hover:bg-primary-900 text-white font-bold py-2 px-4 lg:px-6 rounded mr-2 text-clampButton">
          Demo
          <FontAwesomeIcon icon={faEye} className="ml-2" />
        </a>
        {item.github && (
          <a href={item.github} rel="noopener noreferrer" target="_blank" className="rounded-full bg-secondary-700 hover:bg-secondary-800 text-white text-clampButton font-semibold py-2 px-4 lg:px-6 transition duration-300">
            GitHub
            <FontAwesomeIcon icon={faGithub} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;