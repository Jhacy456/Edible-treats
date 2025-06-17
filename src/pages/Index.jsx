import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/Contact';
import { useCart } from '../hooks/useCart'; 

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart(); 

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen">
      <Header 
        cartItems={cartItems} 
        onCartToggle={toggleCart} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Hero />
    <ProductGrid onAddToCart={addToCart} />
      <AboutUs />
      <Testimonials />
      <ContactForm />
      <Footer />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart} 
      />
    </div>
  );
};

export default Index;
