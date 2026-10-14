import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

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

  const handleNavigationClick = () => {    
    isMobileView && isMenuOpen ? setIsMenuOpen(false) : "";
  };

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

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

  const renderNavItem = (item) =>
    item.icon === null ? (
      <a className="text-white hover:text-primary-300 transition-colors" href={item.href} onClick={handleNavigationClick}>
        {item.text}
      </a>
    ) : (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.text}
        className="text-white text-2xl hover:text-primary-300 transition-colors"
      >
        <FontAwesomeIcon icon={item.icon} />
      </a>
    );

  return (
    <nav className="fixed w-full z-[1000] bg-black bg-opacity-50">
      <div className="max-w-6xl mx-auto px-6 tb:px-10 py-5 flex items-center justify-between relative z-10">
        <a href="#hero" className="text-white text-2xl font-semibold font-['Cormorant_Garamond',serif]" onClick={handleNavigationClick}>
          Michelle Watts
        </a>

        {/* desktop navigation */}
        <ul className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.text}>{renderNavItem(item)}</li>
          ))}
        </ul>

        {/* mobile navigation button */}
        <button
          className="sm:hidden text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* mobile navigation menu */}
      <div
        className={`sm:hidden fixed inset-0 bg-black h-screen transition duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      ></div>
      {isMenuOpen && (
        <ul className="sm:hidden relative z-10 px-6 pt-4 pb-8 flex flex-col gap-5 text-lg">
          {navItems.map((item) => (
            <li key={item.text}>{renderNavItem(item)}</li>
          ))}
        </ul>
      )}

      {(showScrolltoTop && !isMenuOpen) &&
        <button
          className="fixed right-6 tb:right-10 bottom-6 bg-white rounded-full pt-4 px-4 pb-3 shadow-md focus:outline-none opacity-75 hover:opacity-100 transition-opacity duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{ zIndex: 40 }}
        >
          <FontAwesomeIcon icon={faArrowCircleUp} className="text-primary-800 text-2xl" />
        </button>
      }
    </nav>
  );
};

export default Navigation;
