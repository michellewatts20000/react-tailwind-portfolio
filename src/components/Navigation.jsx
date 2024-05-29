import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false); // New state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWindowResize = () => {
    setIsMobileView(window.innerWidth < 640);
    if (window.innerWidth >= 640) {
      setIsMenuOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
    setShowScrollButton(window.scrollY > 0); // Show scroll button when scrolled
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleNavigationClick = () => {
    if (isMobileView) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { text: 'Skills', href: '#skills', icon: null },
    { text: 'Portfolio', href: '#portfolio', icon: null },
    { text: 'Contact', href: '#contact', icon: null },
    { text: 'Resume', href: 'https://drive.google.com/file/d/1krIgipz9jmquz0QYmlm1wQfsUzI-PVIB/view?usp=sharing', icon: faBriefcase },
    { text: null, href: 'https://github.com/michellewatts20000/', icon: faGithub },
    { text: null, href: 'https://www.linkedin.com/in/michelle-e-watts/', icon: faLinkedin },
  ];

  return (
    <nav className={`py-6 fixed w-full z-10 ${isScrolled && 'bg-black bg-opacity-50'}`}>
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex items-center">
          <div className="relative">
            <button
              className="sm:hidden text-white text-2xl focus:outline-none"
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
          className={`${isMenuOpen ? 'block' : 'hidden'
            } sm:flex sm:space-x-4 sm:justify-center md:justify-end items-center ${isMobileView ? 'flex flex-col mt-20 text-2xl h-screen bg-black bg-opacity-50 z-index:5' : 'justify-end'
            } sm:space-x-8 mt-8 sm:mt-0`}
          style={{ zIndex: 30 }}
        >
          {navItems.map((item, index) => (
            <li key={index} className="mb-3">
              {item.icon === null ? (
                <button className={`text-white text-md hover:text-primary-500 hover:underline ${item.text.toLowerCase()}`} onClick={handleNavigationClick}>
                  {item.text}
                </button>
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
        {showScrollButton && ( // Render scroll button conditionally
          <button
            className="fixed right-10 bottom-6 bg-white rounded-full pt-4 px-4 pb-3 shadow-md focus:outline-none opacity-75 hover:opacity-100 transition-opacity duration-300"
            onClick={scrollToTop}
            style={{ zIndex: 40 }}
          >
            <FontAwesomeIcon icon={faArrowCircleUp} className="text-secondary-500 text-2xl" />
          </button>

        )}
      </div>
    </nav>
  );
};

export default Navigation;
