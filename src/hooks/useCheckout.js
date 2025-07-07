import { useState } from 'react';
import { useToast } from '../toast';

export const useCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const processCheckout = async (cartItems, customerEmail) => {
    setIsLoading(true);

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const amountInPesewas = total * 100;

    return new Promise((resolve, reject) => {
      const handler = window.PaystackPop.setup({
        key: 'pk_live_a2aee4e2b8929c02c24fb42b46e9f451bdf98419',
        email: customerEmail,
        amount: amountInPesewas,
        currency: 'GHS',
        ref: `order_${Date.now()}`,
        metadata: {
          custom_fields: [
            {
              display_name: 'Cart Items',
              variable_name: 'cart_items',
              value: JSON.stringify(cartItems),
            },
          ],
        },
        callback: function (response) {
          setIsLoading(false);
          toast({
            title: "Payment Successful",
            description: `Reference: ${response.reference}`,
          });
          resolve(response.reference); 
        },

        onClose: function () {
          toast({
            title: 'Payment Cancelled',
            description: 'You closed the payment window.',
            variant: 'destructive',
          });
          setIsLoading(false);
          reject(new Error('Payment window closed'));
        },
      });

      handler.openIframe();
    });
  };

  return {
    processCheckout,
    isLoading,
  };
};
