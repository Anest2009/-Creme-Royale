import React from 'react';
import { Crown, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { setIsCartOpen, totalItems } = useCart();

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-serif tracking-wider">CRÈME ROYALE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#collections">Collections</NavLink>
            <NavLink href="#custom">Custom Creation</NavLink>
            <NavLink href="#about">About</NavLink>
            <button 
              className="p-2 hover:bg-white/5 rounded-full transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#collections">Collections</MobileNavLink>
            <MobileNavLink href="#custom">Custom Creation</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium hover:text-amber-400 transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="block px-3 py-2 text-base font-medium hover:bg-white/5 transition-colors"
  >
    {children}
  </a>
);

export default Navbar;