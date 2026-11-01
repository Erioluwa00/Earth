import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ShopProvider } from './context/ShopContext.jsx';

// Core Design System & Stylesheets
import './styles/variables.css';
import './styles/global.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/shop.css';
import './styles/pages.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>,
);
