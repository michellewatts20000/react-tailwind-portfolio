import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showScrolltoTop, setshowScrolltoTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigationClick = (item) => {    
    isMobileView && isMenuOpen ? setIsMenuOpen(false) : "";

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'navigation_click', {
        event_category: 'Navigation',
        event_label: item.text,
      });
    }
  };

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    console.log(isMobileView)
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const showScroll = scrollPosition > 300;
      setshowScrolltoTop(showScroll);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { text: 'Skills', href: '#skills', icon: null },
    { text: 'Portfolio', href: '#portfolio', icon: null },
    { text: 'Contact', href: '#contact', icon: null },
    { text: 'Resume', href: 'https://drive.google.com/file/d/1krIgipz9jmquz0QYmlm1wQfsUzI-PVIB/view?usp=sharing', icon: faBriefcase },
    { text: 'GitHub', href: 'https://github.com/michellewatts20000/', icon: faGithub },
    { text: 'LinkedIn', href: 'https://www.linkedin.com/in/michelle-e-watts/', icon: faLinkedin },
  ];

  return (
    <nav className={`py-6 fixed w-full z-[1000] bg-black bg-opacity-50`}>
      {/* mobile navigation button */}
        <div className="pl-10">
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
        <div className="container pl-10 md:pl-0 md:mx-auto md:px-8 relative z-10">
        <ul
          className={`${isMenuOpen ? 'block' : 'hidden'
            } sm:flex sm:space-x-4 sm:justify-center md:justify-end items-center 'justify-end'
            } sm:space-x-8 mt-8 sm:mt-0`}
          style={{ zIndex: 30 }}
        >
          {navItems.map((item, index) => (
            <li key={index} className="mb-3 relative">
              {item.icon === null ? (
                <a className={`text-white text-md hover:text-primary-500 hover:underline`} href={item.href} onClick={handleNavigationClick(item)}>
                  {item.text}
                </a>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-primary-500"
                  onClick={() => (window.location.href = item.href)}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              )}
            </li>
          ))}
        </ul>
        {(showScrolltoTop && !isMenuOpen) &&
          <button
            className="fixed right-10 bottom-6 bg-white rounded-full pt-4 px-4 pb-3 shadow-md focus:outline-none opacity-75 hover:opacity-100 transition-opacity duration-300"
            onClick={scrollToTop}
            style={{ zIndex: 40 }}
          >
            <FontAwesomeIcon icon={faArrowCircleUp} className="text-secondary-500 text-2xl" />
          </button>
        }
      </div>
    </nav>
  );
};

export default Navigation;
