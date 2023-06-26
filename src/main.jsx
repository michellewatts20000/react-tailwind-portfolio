import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ReactGA from 'react-ga';

import './index.css'
import '@fortawesome/fontawesome-free/css/all.css';
import "@fontsource/roboto"
import "@fontsource/lora"

ReactGA.initialize('G-TGYEXF5GNH');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
