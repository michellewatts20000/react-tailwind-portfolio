import { useState } from 'react';
import PortfolioItem from './PortfolioItem';

const INITIAL_COUNT = 6;

const Portfolio = (props) => {
  const { items } = props;

  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, INITIAL_COUNT);

  const toggleShowAll = () => {
    // When collapsing, jump back to the section so the visitor isn't left below it
    if (showAll) document.getElementById('portfolio').scrollIntoView();
    setShowAll(!showAll);
  };

  return (
    <section id="portfolio" className="bg-white py-20 px-6 tb:px-10 relative">
      <div className="shape-divider"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center text-gray-900 font-semibold mb-4">
          Selected work
        </h2>
        <p className="text-center text-gray-700 text-lg mb-12">
          A mix of client projects and things I&apos;ve built along the way.
        </p>

        <div className="grid grid-cols-1 tb:grid-cols-2 sm:grid-cols-3 gap-8">
          {visibleItems.map((item) => (
            <PortfolioItem key={item.sys.id} item={item.fields} />
          ))}
        </div>

        {items.length > INITIAL_COUNT && (
          <div className="text-center mt-12">
            <button
              className="rounded-full ring-1 ring-gray-300 hover:ring-gray-900 text-gray-900 font-semibold py-3 px-7 transition"
              onClick={toggleShowAll}
              aria-expanded={showAll}
            >
              {showAll ? 'Show fewer projects' : `Show all ${items.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
