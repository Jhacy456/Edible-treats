import React, { useState } from 'react';
import { Mail, Gift } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing! Check your email for a special discount.');
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="mb-8">
            <Gift size={64} className="mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Sweet Deals Await!
            </h2>
            <p className="text-xl text-pink-100">
              Subscribe to our newsletter and get 15% off your first order plus exclusive treats and recipes!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
                required
              />
            </div>
            <button 
              type="submit"
              className="bg-white text-treat-pink px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Get 15% Off
            </button>
          </form>

          <p className="text-sm text-pink-200 mt-4">
            No spam, just sweet treats and exclusive offers!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;