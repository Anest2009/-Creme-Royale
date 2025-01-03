import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartModal: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpe, 
    updateQuantity, 
    removeFromCart,
    totalItems,
    totalPrice 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span className="text-lg font-medium">Cart ({totalItems})</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="rounded-full p-2 hover:bg-white/5 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
            {items.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                Your cart is empty
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    {item.customizations && (
                      <div className="mt-1 text-sm text-gray-400">
                        <div>Base: {item.customizations.base?.name}</div>
                        {item.customizations.toppings && item.customizations.toppings.length > 0 && (
                          <div>
                            Toppings: {item.customizations.toppings.map(t => t.name).join(', ')}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-full p-1 hover:bg-white/5 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-full p-1 hover:bg-white/5 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="text-amber-400">${item.price * item.quantity}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-white/10 px-6 py-6">
            <div className="flex justify-between text-lg font-medium mb-6">
              <span>Total</span>
              <span className="text-amber-400">${totalPrice}</span>
            </div>
            <button className="w-full bg-amber-400 text-black py-4 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-amber-300 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
