import React from 'react';
import { useCart } from '../contexts/CartContext';

const Collections = () => {
  const { addToCart } = useCart();

  const collections = [
    {
      id: 'royal-reserve',
      name: "Royal Reserve",
      description: "24k gold-infused vanilla bean with Tahitian black pearls",
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&q=80",
      price: 42,
    },
    {
      id: 'midnight-opulence',
      name: "Midnight Opulence",
      description: "Dark chocolate truffles with Madagascar vanilla",
      image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80",
      price: 38,
    },
    {
      id: 'crown-jewel',
      name: "Crown Jewel",
      description: "Saffron-infused pistachio with rose crystals",
      image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&q=80",
      price: 45,
    },
  ];

  return (
    <section id="collections" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-16">
          Signature <span className="text-amber-400">Collections</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-serif mb-2">{collection.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{collection.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 text-lg">${collection.price}</span>
                  <button 
                    onClick={() => addToCart({
                      id: collection.id,
                      name: collection.name,
                      price: collection.price,
                      image: collection.image,
                      description: collection.description
                    })}
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;