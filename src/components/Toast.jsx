import React from 'react';
import { useShop } from '../context/ShopContext';

export const Toast = () => {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className="earth-toast" role="status" aria-live="polite">
      <span>🌿</span>
      <span>{toast}</span>
    </div>
  );
};
