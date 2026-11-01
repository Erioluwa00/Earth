import React from 'react';
import { useShop } from './context/ShopContext';

// Navigation & Layout
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Modals & Interactive Overlays
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';
import { ComingSoonModal } from './components/ComingSoonModal';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Collections } from './pages/Collections';
import { OurStory } from './pages/OurStory';
import { Journal } from './pages/Journal';
import { Contact } from './pages/Contact';

function App() {
  const { currentPage } = useShop();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'shop':
        return <Shop />;
      case 'collections':
        return <Collections />;
      case 'story':
        return <OurStory />;
      case 'journal':
        return <Journal />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="earth-app-wrapper">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Route View */}
      {renderCurrentPage()}

      {/* Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <CartDrawer />
      <QuickViewModal />
      <SearchModal />
      <ComingSoonModal />
      <Toast />
    </div>
  );
}

export default App;
