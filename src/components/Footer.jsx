import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock, X, Gift, ArrowUp, } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Show newsletter popup after 5 seconds (example)
  useEffect(() => {
    const timer = setTimeout(() => setShowNewsletterPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Detect scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#111827] text-amber-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="mb-4">
              Ghana's premier artisanal treats company, crafting delicious
              moments since 2020.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-amber-300 hover:text-white cursor-pointer" />
              <Instagram className="text-amber-300 hover:text-white cursor-pointer" />
              <Twitter className="text-amber-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About Us', 'Blog', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-300 transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-amber-400" size={18} />
                <span>Adenta Frafraha, Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-amber-400" size={18} />
                <span>+233 24 9967 7007</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-amber-400" size={18} />
                <span>info@ghanatreats.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-amber-400" size={18} />
                <span>Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* We Accept */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="/paypal.png" alt="PayPal" className="h-6" />
              <img src="/applepay.png" alt="Apple Pay" className="h-6" />
              <img src="/cash.png" alt="Cash" className="h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Certified By</h3>
            <div className="flex space-x-4">
              <div className="bg-white p-2 rounded text-amber-800 font-bold">FDA</div>
              <div className="bg-white p-2 rounded text-amber-800 font-bold">GSA</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} Ghana Treats. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Shipping Policy'].map((link) => (
                <a key={link} href="#" className="text-sm hover:text-amber-300 cursor-pointer">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Popup */}
      {showNewsletterPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative overflow-hidden">
            <button
              onClick={() => setShowNewsletterPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                  Get 10% Off Your First Order
                </h3>
                <p className="text-gray-600">
                  Subscribe to our newsletter and receive exclusive offers and updates
                </p>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition-colors duration-300">
                Subscribe Now
              </button>
              <p className="text-gray-500 text-xs text-center mt-4">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
            <div className="h-24 bg-amber-100 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Gift className="text-amber-500" size={32} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Consent */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-40 p-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-700 mb-4 md:mb-0">
              We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowCookieConsent(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm"
              >
                Decline
              </button>
              <button
                onClick={() => setShowCookieConsent(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/233249967700"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <IoLogoWhatsapp size={32} />
        </a>
      </div>

      {/* Back to Top Button */}
      {isScrolled && (
        <div className="fixed bottom-6 right-24 z-30">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-amber-800 hover:bg-amber-900 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
