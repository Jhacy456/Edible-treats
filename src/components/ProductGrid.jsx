import React, { useState } from 'react';
import ProductCard from './ProductCard';
import hero1 from '../assets/images/hero1.jpg'
import hero from '../assets/images/hero.jpg'
import cookies1 from '../assets/images/cookies1.jpeg'
import pc from '../assets/images/pc.jpeg'

const ProductGrid = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Treats' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'chocolates', name: 'Chocolates' },
    { id: 'donuts', name: 'Donuts' },
    { id: 'cookies', name: 'Cookies' },
    { id: 'custom orders', name: 'Custom Orders' }
  ];

  const products = [
    {
      id: 1,
      name: "Red Velvet Cupcake",
      description: "Rich red velvet cake topped with cream cheese frosting and a cherry",
      price: 4.99,
      originalPrice: 6.99,
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400",
      category: "cupcakes",
      rating: 5,
      reviews: 124
    },
    {
      id: 2,
      name: "Enumde Milk Chocolate with Peanuts",
      description: "Premium Natural chocolate with Peanut content",
      price: 8.99,
      image: pc,
      category: "chocolates",
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: "Glazed Donut",
      description: "Classic glazed donut with a perfect sweet coating",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400",
      category: "donuts",
      rating: 5,
      reviews: 156
    },
    {
      id: 4,
      name: "Milk Chip Cookies",
      description: "Freshly baked cookies with premium Milk chips",
      price: 3.99,
      image: cookies1,
      category: "cookies",
      rating: 4,
      reviews: 203
    },
    {
      id: 5,
      name: "Vanilla Bean Cupcake",
      description: "Moist vanilla cupcake with real vanilla bean frosting",
      price: 4.49,
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400",
      category: "cupcakes",
      rating: 5,
      reviews: 178
    },
    {
      id: 6,
      name: "Milk Chocolate Truffles",
      description: "Handmade milk chocolate truffles dusted with cocoa powder",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400",
      category: "chocolates",
      rating: 5,
      reviews: 95
    },
    {
      id: 7,
      name: "Pink Frosted Donut",
      description: "Soft donut with pink strawberry frosting and sprinkles",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400",
      category: "donuts",
      rating: 4,
      reviews: 134
    },
    {
      id: 8,
      name: "Sugar Cookies",
      description: "Traditional sugar cookies with colorful icing decorations",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400",
      category: "cookies",
      rating: 4,
      reviews: 167
    },
    {
      id: 9,
      name: "Customized Birthday cake",
      description: " with colorful icing decorations",
      price: 5.99,
      image: hero1,
      category: "custom orders",
      rating: 4,
      reviews: 167
    },
    {
      id: 10,
      name: "Customized Wedding cake",
      description: " with colorful icing decorations",
      price: 5.99,
      image: hero,
      category: "custom orders",
      rating: 4,
      reviews: 167
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-[#FDF2F8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="gradient-text">Sweet</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted treats made with love and the finest ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category.id
                  ? 'bg-[#ec4899] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;