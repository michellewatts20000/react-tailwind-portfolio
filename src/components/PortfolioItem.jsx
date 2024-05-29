import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

const PortfolioItem = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md px-5 md:px-0 pt-5 pb-10">
      <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
      <p className="text-gray-600 mb-1">{item.description}</p>
      <div>
        <motion.img
          src={item.image.fields.file.url}
          alt={item.name}
          className="p-8 object-cover h-[233px] w-[375px] mx-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-gray-500 text-sm">{item.tech}</p>
      <div className="mt-4">
        <a href={item.deployed} rel="noopener noreferrer" target="_blank" className="rounded-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 lg:px-6 rounded mr-2">
          Demo
          <FontAwesomeIcon icon={faEye} className="ml-2" />
        </a>
        {item.github && (
          <a href={item.github} rel="noopener noreferrer" target="_blank" className="rounded-full bg-secondary-500 hover:bg-secondary-600 text-white text-clampButton font-semibold py-2 px-4 lg:px-6 transition duration-300">
            GitHub
            <FontAwesomeIcon icon={faGithub} className="ml-2" />
          </a>
        )}
        {/* <a href={item.github} rel="noopener noreferrer" target="_blank" className="rounded-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-2 px-4 lg:px-6 rounded transition duration-300">
          GitHub
          <FontAwesomeIcon icon={faGithub} className="ml-2" />
        </a> */}
      </div>
    </div>
  );
};

export default PortfolioItem;