import React, { useState } from 'react';
import { Mail, CreditCard } from 'lucide-react';

const CheckoutForm = ({ cartItems, total, onCheckout, isLoading }) => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && cartItems.length > 0) {
      onCheckout(email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-treat-pink focus:border-transparent outline-none transition-all"
            required
          />
        </div>
        {email && !isValidEmail && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Order Summary</span>
          <span className="text-sm text-gray-600">{cartItems.length} items</span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span className="text-treat-pink">GH₵{total.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValidEmail || cartItems.length === 0 || isLoading}
        className="w-full gradient-bg text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <CreditCard className="mr-2" size={20} />
        {isLoading ? 'Processing...' : `Pay GH₵${total.toFixed(2)} with Paystack`}
      </button>
    </form>
  );
};

export default CheckoutForm;
