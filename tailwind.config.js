export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E7F5F3',
          100: '#C2E8E0',
          200: '#9BDACC',
          300: '#74CDC7',
          400: '#4DBFB3',
          500: '#4ABDAC', // Original color
          600: '#43A79B',
          700: '#3B8D85',
          800: '#34746E',
          900: '#2D5A57',
        },
        secondary: {
          50: '#FCE3DD',
          100: '#F8C5BC',
          200: '#F4A69B',
          300: '#F0867A',
          400: '#EC6859',
          500: '#FC4A1A', // Original color
          600: '#D93F18',
          700: '#B63615',
          800: '#922C12',
          900: '#70220F',
        },
        supernova: {
          50: '#FFF8E5',
          100: '#FFE7B3',
          200: '#FFD580',
          300: '#FFC34D',
          400: '#FFB11A',
          500: '#F7B733', // Original color
          600: '#D7A22E',
          700: '#B89228',
          800: '#987221',
           900: '#786318',
        },
        twilight: {
          50: '#F2F1F5',
          100: '#DEDDE5',
          200: '#CAC8D6',
          300: '#B6B2C6',
          400: '#A2A0B7',
          500: '#DFDCE3', // Original color
          600: '#8E8CAF',
          700: '#7A799E',
          800: '#66658D',
          900: '#52527C',
        },
        // Add more custom colors here as needed
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
};
