import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80"
          alt="Luxury Ice Cream"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-wider">
          Indulgence
          <span className="block text-amber-400">Redefined</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience ice cream crafted for the most discerning palates. Each flavor is a masterpiece,
          meticulously created for those who demand excellence.
        </p>
        <button className="bg-amber-400 text-black px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-amber-300 transition-colors">
          Explore Collections
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-amber-400" />
      </div>
    </section>
  );
};

export default Hero;