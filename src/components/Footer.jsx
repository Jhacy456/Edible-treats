import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock, X, Gift, ArrowUp } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io";
import visa from '../assets/images/visa.logo.png'
import mastercard from '../assets/images/mastercard.png'
import paypal from '../assets/images/paypal.png'
import applepay from '../assets/images/applepay.png'

const Footer = () => {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNewsletterPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-[#FCE9EF] text-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-pink-800 mb-4">About Us</h3>
            <p className="mb-4 text-gray-700">
              Ghana's premier artisanal treats company, crafting delicious moments since 2020.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-pink-600 hover:text-pink-800 cursor-pointer" />
              <Instagram className="text-pink-600 hover:text-pink-800 cursor-pointer" />
              <Twitter className="text-pink-600 hover:text-pink-800 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-pink-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-700">
              {['Home', 'Products', 'About Us','Trainings', 'Contact', "Testimonials", ].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-pink-700 transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold text-pink-800 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-pink-600" size={18} />
                <span>Adenta Frafraha, Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-pink-600" size={18} />
                <span>+233 24 9967 700</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-pink-600" size={18} />
                <span>yanuoriyee@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 text-pink-600" size={18} />
                <span>Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* We Accept */}
          <div>
            <h3 className="text-xl font-bold text-pink-800 mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <img src={visa} alt="Visa" className="h-6" />
              <img src={mastercard} alt="Mastercard" className="h-6" />
              <img src={paypal} alt="PayPal" className="h-6" />
              <img src={applepay} alt="Apple Pay" className="h-6" />
            
            </div>
            <h3 className="text-xl font-bold text-pink-800 mb-4">Certified By</h3>
            <div className="flex space-x-4">
              <div className="bg-white p-2 rounded text-pink-600 font-bold">FDA</div>
              <div className="bg-white p-2 rounded text-pink-600 font-bold">GSA</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pink-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-700">
            <p>&copy; {new Date().getFullYear()} Edible Treats. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Shipping Policy'].map((link) => (
                <a key={link} href="#" className="text-sm hover:text-pink-700 cursor-pointer">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

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
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm"
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
          className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <IoLogoWhatsapp size={32} />
        </a>
      </div>

      {/* Back to Top Button */}
      {isScrolled && (
        <div className="fixed bottom-6 right-24 z-30">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-pink-700 hover:bg-pink-900 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
