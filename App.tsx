import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import CustomBuilder from './components/CustomBuilder';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import { CartProvider } from './contexts/CartContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-black text-white">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <CartModal />
        <main className="relative">
          <Hero />
          <Collections />
          <CustomBuilder />
          <Testimonials />
          <Footer />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;