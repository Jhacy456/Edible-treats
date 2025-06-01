import React, { useEffect, useState } from 'react';
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'
import hero4 from '../assets/images/hero4.jpg'
const heroSlides = [
  {
    id: 1,
    title: "Delicious Handcrafted Treats",
    subtitle: "Made with love, delivered to your doorstep",
    cta: "Shop Now",
    image: hero2,
  },
  {
    id: 2,
    title: "Premium Quality Ingredients",
    subtitle: "Sourced locally for the freshest taste",
    cta: "Explore Our Range",
    image: hero3,
  },
  {
    id: 3,
    title: "Special Occasion Treats",
    subtitle: "Make your celebrations memorable",
    cta: "Order Now",
    image: hero4

  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden" id='home'>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-transparent"></div>


      </div>

      {/* Text Overlay */}
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-lg text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {slide.title}
          </h1>
          <p className="text-lg sm:text-xl mb-6">{slide.subtitle}</p>
          <a
            href="#products"
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold text-base sm:text-lg shadow hover:bg-pink-50 transition inline-block"
          >
            {slide.cta}
          </a>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-300 rounded-full opacity-50 animate-bounce"></div>
    </section>
  );
};

export default Hero;
