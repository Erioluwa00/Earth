import React, { createContext, useContext, useState } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([
    {
      product: PRODUCTS[0],
      size: 'M/L',
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);
  const [currency, setCurrency] = useState('NGN'); // 'NGN', 'USD', 'EUR'
  const [comingSoonModal, setComingSoonModal] = useState(null);

  // Scroll to top on page change
  const navigateTo = (page, category = 'all') => {
    setCurrentPage(page);
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toast trigger
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Cart operations
  const addToCart = (product, size = 'M', quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, size, quantity }];
      }
    });
    showToast(`Added "${product.name}" (${size}) to your bag.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const updateQuantity = (productId, size, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // Quick view operations
  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  // Coming Soon feature modal handlers
  const openComingSoon = (
    title = 'Upcoming Feature',
    message = '',
    actionText = 'TALK TO ATELIER CONCIERGE',
    actionPage = 'contact',
    badge = 'ATELIER IN PROGRESS'
  ) => {
    setComingSoonModal({
      title,
      message:
        message ||
        "This feature is currently being crafted and refined by our Lagos atelier team. We're rolling out updates intentionally to ensure sustainable, high-quality execution.",
      actionText,
      actionPage,
      badge
    });
  };

  const closeComingSoon = () => {
    setComingSoonModal(null);
  };

  // Currency Formatter (Base price in NGN)
  const formatPrice = (amountInNGN) => {
    if (typeof amountInNGN !== 'number') return '';
    if (currency === 'USD') {
      const usd = Math.round(amountInNGN / 1550);
      return `$${usd.toLocaleString()}`;
    }
    if (currency === 'EUR') {
      const eur = Math.round(amountInNGN / 1680);
      return `€${eur.toLocaleString()}`;
    }
    return `₦${Math.round(amountInNGN).toLocaleString()}`;
  };

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        selectedCategory,
        setSelectedCategory,
        navigateTo,
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartSubtotal,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        toast,
        showToast,
        currency,
        setCurrency,
        formatPrice,
        comingSoonModal,
        openComingSoon,
        closeComingSoon
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
