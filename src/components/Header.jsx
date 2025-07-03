import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import logo from '../assets/images/etlogo.png';

const Header = ({ cartItems, onCartToggle, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Edible Treats Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold gradient-text">Edible Treats</h1>

            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['Home', 'Products', 'About Us','Trainings' ,'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                {item}
              </a>
            ))}

          </nav>


          <div className="flex items-center space-x-3">
            {/* Search input (mobile & desktop) */}
            <div className="relative w-32 sm:w-40 md:w-48">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="pl-8 pr-3 py-1.5 w-full rounded-full border border-gray-300 text-sm focus:ring-[#ec4899] focus:ring-2 outline-none"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer" onClick={onCartToggle}>
              <ShoppingCart className="text-[#ec4899] w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ec4899] text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </div>

            {/* Menu button (mobile) */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="text-[#ec4899]" />
              ) : (
                <Menu className="text-[#ec4899]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="space-y-3 mt-2">
              {['Home', 'Products', 'About Us','Trainings', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-gray-700 hover:text-pink-500 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </header>

      <div className="h-[70px]"></div>
    </>
  );
};

export default Header;
