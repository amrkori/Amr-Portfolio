import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Copyright © 2024 Amr Mohammed. Made with 
            <Heart className="text-red-500 w-4 h-4 fill-current" /> 
            by Amr Mohamed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;