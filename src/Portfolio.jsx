
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faChevronRight} onClick={onClick}
      className={`${className} text-black hover:text-black text-5xl`}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        left: '100%',
        color: 'gray-500',
        hoverColor: 'gray-900',
        padding: '2px'
      }}
    />
  );
}


function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      onClick={onClick}
      className={`${className} text-black hover:text-black text-5xl`}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        left: '-20px',
        marginRight: '100px',
        color: 'text-gray-800',
        hoverColor: 'bg-primary-500',
        padding: '2px',
        zIndex: '1'
      }}
    />
  );
}

const Portfolio = () => {

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    className: "slides",
    autoplay: true, // Enable autoplay
    centerPadding: '60px', // Adjust the padding for the center slide
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };



  const items = [
    {
      id: "1",
      name: 'Promptopia',
      tech: 'Next.js, MongoDB, Tailwind CSS',
      url: './assets/code.jpg',
      description:
        'Save prompts to be used in AI.',
      deployed: 'https://comforting-gumption-53ec62.netlify.app/',
      github: 'https://github.com/michellewatts20000/promptopia',
    },
    {
      id: "2",
      name: "Hearo",
      tech: 'React, MongoDB, Express, Node.js',
      url: './assets/hearo.jpg',
      description:
        "Find quiet places to socialise.",
      deployed: 'https://still-bayou-61713.herokuapp.com',
      github: 'https://github.com/michellewatts20000/hearo',
    },
    {
      id: "3",
      name: "What's in my Pantry?",
      tech: 'Typescript, React, Material UI, REST API',
      url: './assets/pantry.jpg',
      description:
        "Find recipes from what you have.",
      deployed: 'https://voluble-blini-cd8074.netlify.app/',
      github: 'https://github.com/michellewatts20000/react-pantry',
    },
    {
      id: "4",
      name: 'Overtime Calculator',
      tech: 'HTML, CSS, JavaScript',
      url: './assets/unpaid-ot.jpg',
      description:
        "Calculate unpaid overtime.",
      deployed: 'https://nofreework.com.au/',
      github: 'https://github.com/michellewatts20000/unpaid-overtime-calc',
    },
    {
      id: "5",
      name: 'Weather Dashboard',
      tech: 'Vue3, Vuetify3, Typescript, REST APIs',
      url: './assets/weather.jpg',
      description:
        'Find the weather in your city.',
      deployed: 'https://transcendent-lily-437bc2.netlify.app',
      github: 'https://github.com/michellewatts20000/vue-weather',
    },
    {
      id: "6",
      name: 'Tech Blog',
      tech: 'Handlebars, MySQL, Express.js, Node.js',
      url: './assets/blogger.jpg',
      description:
        'Create a blog and comment on others.',
      deployed: 'https://boiling-beach-99511.herokuapp.com/',
      github: 'https://github.com/michellewatts20000/tech-blog',
    }
  ]

  return (
    <section id="portfolio" className="bg-twilight-500 pt-20 pb-20 px-10 relative">
     <div className="shape-divider"></div>
      <div className="container mx-auto text-center">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="bg-transparent p-6">
              <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
              <p className="text-gray-800 mb-2">{item.description}</p>
              <p className="text-sm text-gray-500 mb-6">{item.tech}</p>
              <a href={item.deployed} style={{ display: "inline-block", overflow: "hidden" }} rel="noopener noreferrer" target="_blank">
                <div style={{ maxWidth: "500px", maxHeight: "333px", width: "100%", height: "auto" }}>
                  <motion.img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full shadow-xl object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </a>

              <div className="mt-8">
                <a href={item.deployed} rel="noopener noreferrer" target="_blank" className="rounded-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 lg:px-6 rounded mr-2">
                  Demo
                  <FontAwesomeIcon icon={faEye} className="ml-2" />
                </a>
                <a href={item.github} rel="noopener noreferrer" target="_blank" className="rounded-full bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-2 px-4 lg:px-6 rounded transition duration-300">
                  GitHub
                  <FontAwesomeIcon icon={faGithub} className="ml-2" />
                </a>
              </div>



            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
