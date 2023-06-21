import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWindowResize = () => {
    setIsMobileView(window.innerWidth < 1024)
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWindowResize); // Add resize event listener

    // Initial check for mobile view
    handleWindowResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowResize); // Clean up resize event listener
    };
  }, []);

  const handleNavigationClick = () => {
    if (isMobileView) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { text: 'Home', href: '#hero', icon: null },
    { text: 'Portfolio', href: '#portfolio', icon: null },
    { text: 'Contact', href: '#contact', icon: null },
    { text: null, href: 'https://github.com/michellewatts20000/', icon: faGithub },
    { text: null, href: 'https://www.linkedin.com/in/michelle-e-watts/', icon: faLinkedin },
  ];

  return (
    <nav className={`py-6 fixed w-full z-10 ${isScrolled && 'bg-black bg-opacity-50'}`}>
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex items-center">
          <div className="relative">
            <button
              className="lg:hidden text-white text-2xl focus:outline-none"
              onClick={toggleMenu}
              style={{ zIndex: 50 }}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="fixed inset-0 bg-black h-screen"
                  style={{ zIndex: '-100' }}
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-4 items-center ${
            isMobileView ? 'flex flex-col mt-20 text-2xl h-screen bg-black bg-opacity-50 z-index:5' : 'justify-end'
          } lg:space-x-8 mt-8 lg:mt-0`}
          style={{ zIndex: 30 }}
        >
          {navItems.map((item, index) => (
            <li key={index} className='mb-3'>
              {item.href.startsWith('#') ? (
                <a href={item.href} className="text-white text-md hover:text-primary-500 hover:underline" onClick={handleNavigationClick}>
                  {item.text}
                </a>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-primary-500"
                  onClick={handleNavigationClick}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
