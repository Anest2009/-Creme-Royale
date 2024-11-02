import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CustomBuilder = () => {
  const { addToCart } = useCart();
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const bases = [
    { id: 'vanilla-bean', name: 'Tahitian Vanilla Bean', price: 24 },
    { id: 'dark-chocolate', name: 'Belgian Dark Chocolate', price: 26 },
    { id: 'pistachio', name: 'Iranian Pistachio', price: 28 },
  ];

  const toppings = [
    { id: 'gold-leaf', name: '24k Gold Leaf', price: 18 },
    { id: 'truffle', name: 'Black Truffle Shavings', price: 15 },
    { id: 'caviar', name: 'Chocolate Caviar', price: 12 },
  ];

  const handleToppingToggle = (toppingId: string) => {
    setSelectedToppings(prev =>
      prev.includes(toppingId)
        ? prev.filter(id => id !== toppingId)
        : [...prev, toppingId]
    );
  };

  const handleAddToCart = () => {
    if (!selectedBase) return;

    const base = bases.find(b => b.id === selectedBase)!;
    const selectedToppingItems = toppings.filter(t => selectedToppings.includes(t.id));
    const totalPrice = base.price + selectedToppingItems.reduce((sum, t) => sum + t.price, 0);

    addToCart({
      id: `custom-${Date.now()}`,
      name: 'Custom Creation',
      price: totalPrice,
      isCustom: true,
      customizations: {
        base: { name: base.name, price: base.price },
        toppings: selectedToppingItems.map(t => ({ name: t.name, price: t.price }))
      }
    });

    // Reset selections
    setSelectedBase('');
    setSelectedToppings([]);
  };

  return (
    <section id="custom" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">
            Create Your <span className="text-amber-400">Masterpiece</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Craft your perfect indulgence with our premium ingredients and artisanal toppings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif mb-4">Select Your Base</h3>
              <div className="space-y-4">
                {bases.map((base) => (
                  <label
                    key={base.id}
                    className={`block p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedBase === base.id
                        ? 'border-amber-400 bg-white/5'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <input
                      type="radio"
                      name="base"
                      value={base.id}
                      checked={selectedBase === base.id}
                      onChange={(e) => setSelectedBase(e.target.value)}
                      className="hidden"
                    />
                    <div className="flex justify-between items-center">
                      <span>{base.name}</span>
                      <span className="text-amber-400">${base.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-4">Premium Toppings</h3>
              <div className="space-y-4">
                {toppings.map((topping) => (
                  <label
                    key={topping.id}
                    className={`block p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedToppings.includes(topping.id)
                        ? 'border-amber-400 bg-white/5'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedToppings.includes(topping.id)}
                      onChange={() => handleToppingToggle(topping.id)}
                      className="hidden"
                    />
                    <div className="flex justify-between items-center">
                      <span>{topping.name}</span>
                      <span className="text-amber-400">+${topping.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-8 h-fit sticky top-24">
            <h3 className="text-xl font-serif mb-6">Your Creation</h3>
            <div className="space-y-4 mb-8">
              {selectedBase && (
                <div className="flex justify-between">
                  <span>Base: {bases.find(b => b.id === selectedBase)?.name}</span>
                  <span>${bases.find(b => b.id === selectedBase)?.price}</span>
                </div>
              )}
              {selectedToppings.map(toppingId => {
                const topping = toppings.find(t => t.id === toppingId);
                return (
                  <div key={toppingId} className="flex justify-between text-amber-400">
                    <span>{topping?.name}</span>
                    <span>+${topping?.price}</span>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-white/10 pt-4 mb-8">
              <div className="flex justify-between text-xl">
                <span>Total</span>
                <span>
                  $
                  {(selectedBase ? bases.find(b => b.id === selectedBase)?.price || 0 : 0) +
                    selectedToppings.reduce(
                      (sum, toppingId) =>
                        sum + (toppings.find(t => t.id === toppingId)?.price || 0),
                      0
                    )}
                </span>
              </div>
            </div>
            <button 
              onClick={handleAddToCart}
              disabled={!selectedBase}
              className="w-full bg-amber-400 text-black py-4 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBuilder;