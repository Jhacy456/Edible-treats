import React, { useState, useEffect } from 'react';
import { MapPin, Mail, User, Phone, Instagram, Twitter, Linkedin, Send, CheckCircle, X } from 'lucide-react';
import { useForm } from '@formspree/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [state, handleSubmit] = useForm("xzzgloag");

  // Handle successful submission
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [state.succeeded]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center justify-center px-2 py-6" id='contact'>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Contact Info Card */}
          <div className="lg:w-2/5 bg-[#ec4899] text-white p-6 lg:p-8 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
              <p className="text-pink-100 mb-6 text-sm">We'd love to hear from you. Send us a message and we'll respond quickly.</p>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-pink-100">Frafraha<br />Adenta, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-pink-100">yanuoriyee@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Username</h4>
                    <p className="text-pink-100">ebibletreats</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-pink-100">+233 24 9967 700</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-3">
                  <a href="#" className="bg-white/20 p-2 rounded-xl hover:bg-white/30 hover:scale-105 transition">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="bg-white/20 p-2 rounded-xl hover:bg-white/30 hover:scale-105 transition">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="bg-white/20 p-2 rounded-xl hover:bg-white/30 hover:scale-105 transition">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-3/5 p-6 lg:p-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-6 text-sm">Ready to start a conversation? Send us a message below.</p>

              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                      <p className="text-xs text-green-600">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="text-green-600 hover:text-green-800 transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form
                onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#ec4899] text-white font-medium py-2.5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition flex items-center justify-center space-x-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 p-3 bg-pink-50 rounded-lg border border-pink-100">
                <p className="text-xs text-pink-700 text-center">
                  <span className="font-medium">Quick Response:</span> We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;