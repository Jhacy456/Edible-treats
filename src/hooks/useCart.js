import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

 
  const addToCart = (item) => {
    setCartItems(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };


  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart
  };
};
