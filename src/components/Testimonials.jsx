import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import test1 from '../assets/images/test1.jpg'
import test2 from '../assets/images/test2.jpg'
import test3 from '../assets/images/test3.jpg'
import test4 from '../assets/images/test4.jpg'
function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const whatsappScreenshots = [
    {
      id: 1,
      image: test1,
      alt: "Customer praising chocolate truffles quality",
      
    },
    {
      id: 2,
      image: test2,
      alt: "Happy customer sharing gift box experience",
    },
    {
      id: 3,
      image: test3,
      alt: "Customer recommending cookies to friends",
      
    },
    {
      id: 4,
      image: test4,
      alt: "Customer recommending cookies to friends",
      
    },
   
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => 
      prev < whatsappScreenshots.length - 1 ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) => 
      prev > 0 ? prev - 1 : whatsappScreenshots.length - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-100" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#ec4899] rounded-full p-3 mr-3">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Real Customer <span className="gradient-text">Reviews</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about us on WhatsApp
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {whatsappScreenshots.map((screenshot) => (
                  <div
                    key={screenshot.id}
                    className="min-w-full flex justify-center p-2 sm:p-6"
                  >
                    <div className="relative group w-full max-w-xs sm:max-w-md md:max-w-lg">
                      {/* WhatsApp-style frame */}
                      <div className="bg-gradient-to-b from-green-400 to-green-600 p-1 rounded-3xl shadow-xl">
                        <div className="bg-white rounded-3xl overflow-hidden">
                          {/* Phone header */}
                          <div className="bg-green-500 text-white p-3 sm:p-4 text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <MessageCircle className="w-5 h-5" />
                              <span className="font-semibold text-xs sm:text-base">WhatsApp/text messages</span>
                            </div>
                          </div>
                          {/* Screenshot content */}
                          <div className="relative">
                            <img
                              src={screenshot.image}
                              alt={screenshot.alt}
                              className="w-full h-60 sm:h-80 md:h-96 object-cover object-top"
                            />
                            {/* Overlay with WhatsApp-style elements */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            {/* Caption overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-6">
                              <p className="text-white font-medium text-center text-xs sm:text-base">
                                {screenshot.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-green-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 text-[#a855f7] hover:text-[#c797f5] hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3 text-[#a855f7] hover:text-[#c797f5] hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Next screenshot"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {whatsappScreenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                activeSlide === index 
                  ? "bg-[#a855f7] w-8 h-3" 
                  : "bg-[#c797f5] w-3 h-3 hover:bg-purple-300"
              }`}
              aria-label={`Go to screenshot ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#ec4899] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Real Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-[#ec4899]" />
              <span className="text-sm font-medium">Verified Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#ec4899] rounded-full"></div>
              <span className="text-sm font-medium">100% Authentic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;