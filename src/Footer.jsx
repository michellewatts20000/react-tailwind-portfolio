import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="container mx-auto flex items-center justify-center px-4 py-5">
        <a
          href="https://github.com/michellewatts20000/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-10"
        >
          <FontAwesomeIcon icon={faGithub} className="h-4 w-4 mr-2" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/michelle-e-watts/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 mr-2" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
