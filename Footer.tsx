import React from 'react';
import { Crown, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-6 w-6 text-amber-400" />
              <span className="text-xl font-serif">CRÈME ROYALE</span>
            </div>
            <p className="text-sm text-gray-400">
              Crafting extraordinary moments of indulgence, one scoop at a time.
            </p>
          </div>

          <div>
            <h4 className="font-serif mb-4">Collections</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400">Signature Series</a></li>
              <li><a href="#" className="hover:text-amber-400">Limited Edition</a></li>
              <li><a href="#" className="hover:text-amber-400">Custom Creation</a></li>
              <li><a href="#" className="hover:text-amber-400">Gift Collections</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-amber-400">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400">Locations</a></li>
              <li><a href="#" className="hover:text-amber-400">Careers</a></li>
              <li><a href="#" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CRÈME ROYALE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;