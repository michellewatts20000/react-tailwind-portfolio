import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getImageUrl } from "../helpers/utils";

const PortfolioItem = ({ item }) => {
  const techTags = (item.tech ?? '').split(',').map((tag) => tag.trim()).filter(Boolean);

  return (
    <article className="group flex flex-col bg-white rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-left">
      <a href={item.deployed} rel="noopener noreferrer" target="_blank" className="block overflow-hidden aspect-[750/466] bg-gray-100" tabIndex={-1} aria-hidden="true">
        <picture>
          <source type="image/avif" srcSet={getImageUrl(item.image, { width: 750, height: 466, format: 'avif', quality: 60 })} />
          <img
            src={getImageUrl(item.image, { width: 750, height: 466 })}
            alt=""
            width="375"
            height="233"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      </a>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.name}</h3>
        <p className="text-gray-700 mb-4">{item.description}</p>

        {techTags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies">
            {techTags.map((tag) => (
              <li key={tag} className="bg-gray-100 text-gray-700 text-xs font-medium rounded-full px-2.5 py-1">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-3">
          <a href={item.deployed} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-primary-800 hover:bg-primary-900 text-white text-sm font-semibold py-2 px-5 transition-colors">
            View project
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
          </a>
          {item.github && (
            <a href={item.github} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 rounded-full ring-1 ring-gray-300 hover:ring-gray-900 text-gray-900 text-sm font-semibold py-2 px-5 transition">
              <FontAwesomeIcon icon={faGithub} />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default PortfolioItem;
