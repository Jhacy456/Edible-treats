import React from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserAlt,
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-[#FDF2F8] flex items-center justify-center px-4 py-8">
      {/* Wrapper for responsiveness */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-3xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start">
        
        {/* Contact Card - stacked on mobile */}
        <div className="md:absolute md:-left-24 md:top-1/2 md:transform md:-translate-y-1/2 w-full md:w-80 bg-[#ec4899] text-white shadow-lg p-6 mb-6 md:mb-0 z-10">
          <h2 className="text-xl font-semibold mb-6">Contact Us</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1" />
              <span className="ml-3">Frafraha<br />Adenta,Ghana</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope />
              <span className="ml-3">info@ghanatreats.com</span>
            </li>
            <li className="flex items-center">
              <FaUserAlt />
              <span className="ml-3">ebibletreats</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt />
              <span className="ml-3">+233 24 9967 7007</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6 text-xl">
            <a href="#" className="hover:text-blue-300"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedin /></a>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:ml-auto md:w-2/3 md:pl-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Get in Touch</h2>
          <p className="text-gray-500 text-sm mb-6">Feel free to drop us a line below!</p>
          <form className="space-y-4 w-full max-w-[350px]">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
            />
            <textarea
              placeholder="Type your message here..."
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#ec4899] text-white px-6 py-2 rounded-full shadow hover:opacity-90 transition text-sm"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
