import { useState } from 'react';
import { useToast } from '../toast';

export const useCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const processCheckout = async (cartItems, customerEmail) => {
    setIsLoading(true);

    try {
      const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const amountInKobo = total * 100; 

      const handler = window.PaystackPop.setup({
        key: 'pk_test_b9ff8364b1996d42b2c89ad77b8cc610e748ebf7', 
        email: customerEmail,
        amount: amountInKobo,
        currency: 'GHS',
        ref: `order_${Date.now()}`,
        metadata: {
          custom_fields: [
            {
              display_name: "Cart Items",
              variable_name: "cart_items",
              value: JSON.stringify(cartItems),
            }
          ]
        },
        callback: function (response) {
          toast({
            title: "Payment Successful",
            description: `Reference: ${response.reference}`,
          });
        },
        onClose: function () {
          toast({
            title: "Payment Cancelled",
            description: "You closed the payment window.",
            variant: "destructive",
          });
        }
      });

      handler.openIframe();
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Payment Error",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    processCheckout,
    isLoading
  };
};
