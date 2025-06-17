import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCheckout } from '../hooks/useCheckout';
import CheckoutForm from './CheckOutForm';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  console.log("Cart Items:", cartItems);

  const [showCheckout, setShowCheckout] = useState(false);
  const { processCheckout, isLoading } = useCheckout();
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const total = subtotal;
const handleCheckout = async (email) => {
  await processCheckout(cartItems, email);
  onClearCart(); // ✅ clears cart after checkout
  setShowCheckout(false);
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 " onClick={onClose}></div>

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <ShoppingBag className="mr-2" size={24} />
              {showCheckout ? 'Checkout' : 'Shopping Cart'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {!showCheckout ? (
              <>
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                    <p className="text-gray-400">Add some sweet treats to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-treat-pink font-bold">GH₵{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <CheckoutForm
                cartItems={cartItems}
                total={total}
                onCheckout={handleCheckout}
                isLoading={isLoading}
              />
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && !showCheckout && (
            <div className="border-t p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>GH₵{subtotal.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>GH₵{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowCheckout(true)}
                className="w-full gradient-bg text-white py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Checkout - GH₵{total.toFixed(2)}
              </button>
            </div>
          )}

          {showCheckout && (
            <div className="border-t p-6">
              <button
                onClick={() => setShowCheckout(false)}
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                Back to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;