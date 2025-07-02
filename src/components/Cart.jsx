import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import Swal from 'sweetalert2';
import { useCheckout } from '../hooks/useCheckout';
import CheckoutForm from './CheckOutForm';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, clearCart }) => {
  const [view, setView] = useState('cart'); // 'cart' | 'checkout' | 'orders'
  const [orders, setOrders] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const { processCheckout, isLoading } = useCheckout();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const total = subtotal;

 useEffect(() => {
  const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

  // Normalize each order to ensure it has statusSteps and currentStep
  const normalizedOrders = savedOrders.map(order => ({
    ...order,
    statusSteps: order.statusSteps || [
      'Payment Received',
      'Order Confirmed',
      'Preparation in Progress',
      'Ready for Delivery',
      'Delivered'
    ],
    currentStep: order.currentStep ?? 0
  }));

  setOrders(normalizedOrders);
}, [isOpen]);


  const handleCheckout = async (email) => {
    try {
      const reference = await processCheckout(cartItems, email); // Wait for Paystack

      const newOrder = {
        id: `order_${Date.now()}`,
        email,
        reference,
        items: cartItems,
        total,
        date: new Date().toISOString(),
        currentStep: 0,
        statusSteps: [
          'Payment Received',
          'Order Confirmed',
          'Preparation in Progress',
          'Ready for Delivery',
          'Delivered'
        ]
      };

      const updatedOrders = [newOrder, ...orders];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      setOrders(updatedOrders);

      clearCart();
      setView('orders');
      onClose(); // Optional: auto-close cart

      Swal.fire({
        icon: 'success',
        title: 'Checkout Successful!',
        html: `Reference: <strong>${reference}</strong>`,
        confirmButtonColor: '#ec4899'
      });
    } catch (err) {
      console.log("Checkout failed or cancelled.");
    }
  };

  // Unique months for filter dropdown
  const uniqueMonths = [...new Set(orders.map(order =>
    new Date(order.date).toLocaleString('default', { month: 'long', year: 'numeric' })
  ))];

  const filteredOrders = orders.filter(order => {
    if (selectedMonth === 'all') return true;
    const orderMonth = new Date(order.date).toLocaleString('default', { month: 'long', year: 'numeric' });
    return orderMonth === selectedMonth;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <ShoppingBag className="mr-2" size={24} />
              {view === 'checkout' ? 'Checkout' : view === 'orders' ? 'Order History' : 'Shopping Cart'}
            </h2>
            <div className="flex items-center gap-2">
              {view !== 'orders' && (
                <button onClick={() => setView('orders')} className="text-sm text-pink-600 hover:underline">
                  Order History
                </button>
              )}
              {view === 'orders' && (
                <button onClick={() => setView('cart')} className="text-sm text-gray-600 hover:underline">
                  Back to Cart
                </button>
              )}
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {view === 'cart' && (
              cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-treat-pink font-bold">GH₵{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-200 rounded">
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-200 rounded">
                          <Plus size={16} />
                        </button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-full">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )
            )}

            {view === 'checkout' && (
              <CheckoutForm
                cartItems={cartItems}
                total={total}
                onCheckout={handleCheckout}
                isLoading={isLoading}
              />
            )}

            {view === 'orders' && (
              <div className="space-y-4">
                <div className="mb-4">
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    <option value="all">All Months</option>
                    {uniqueMonths.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>

                {filteredOrders.length === 0 ? (
                  <p className="text-gray-500 text-center">No orders for this month.</p>
                ) : (
                  filteredOrders.map(order => (
                    <div key={order.id} className="border p-4 rounded-lg bg-gray-50">
                      <div className="flex justify-between text-sm text-gray-500 mb-1">
                        <span>{new Date(order.date).toLocaleString()}</span>
                        <span className="font-medium text-green-600">
                          {order.statusSteps[order.currentStep]}
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold mb-1">GH₵{order.total.toFixed(2)}</p>
                      <ul className="text-sm list-disc list-inside text-gray-700 mb-2">
                        {order.items.map((item, i) => (
                          <li key={i}>{item.name} x {item.quantity}</li>
                        ))}
                      </ul>
                      <div className="space-y-1 text-sm">
                        {order.statusSteps.map((step, idx) => (
                          <div key={idx} className={`flex items-center gap-2 ${idx <= order.currentStep ? 'text-green-600' : 'text-gray-400'}`}>
                            {idx <= order.currentStep ? '✔️' : '⏳'} {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          {view === 'cart' && cartItems.length > 0 && (
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
                onClick={() => setView('checkout')}
                className="w-full gradient-bg text-white py-4 rounded-full font-semibold text-lg hover:opacity-90"
              >
                Checkout - GH₵{total.toFixed(2)}
              </button>
            </div>
          )}

          {view === 'checkout' && (
            <div className="border-t p-6">
              <button
                onClick={() => setView('cart')}
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-50"
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
