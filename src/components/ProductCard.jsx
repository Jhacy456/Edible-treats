import React from 'react';
import { Plus, Heart, Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <Heart size={18} className="text-gray-600 hover:text-treat-pink" />
        </button>
        <div className="absolute bottom-4 left-4 bg-treat-pink text-white px-3 py-1 rounded-full text-sm font-bold">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-treat-pink">GH₵{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through"> GH₵{product.originalPrice}</span>
            )}
          </div>

          <button
            onClick={() => {
              if (typeof onAddToCart === 'function') {
                onAddToCart({ ...product, quantity: 1 });
              } else {
                console.error("onAddToCart is NOT a function!", onAddToCart);
              }
            }}
            className="bg-[#a855f7] hover:bg-purple-600 text-white p-3 rounded-full transition-colors shadow-lg hover:shadow-xl group"
          >
            <Plus size={20} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;