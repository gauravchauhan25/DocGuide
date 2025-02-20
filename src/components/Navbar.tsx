import { Menu, X, Bot, Home, Info, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import docGenie from '../img/docgenie.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative">
                <img className="h-12 w-12 text-white rounded-full" src={docGenie} />
                <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
                  <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="ml-3">
                <span className="text-white text-2xl font-bold font-sans">DocGuide</span>
                <p className="text-xs text-white/80 font-light">Your Digital Government Services Assistant</p>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:bg-white/10 px-4 py-2 rounded-md text-base font-medium flex items-center transition-colors">
                <Home className="w-5 h-5 mr-2" />
                Home
              </Link>
              <Link to="/about" className="text-white hover:bg-white/10 px-4 py-2 rounded-md text-base font-medium flex items-center transition-colors">
                <Info className="w-5 h-5 mr-2" />
                About
              </Link>
              <Link to="/chat" className="text-white hover:bg-white/10 px-4 py-2 rounded-md text-base font-medium flex items-center transition-colors">
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat with DocGenie
              </Link>
            </div>
            <div className="flex items-center text-white px-4 py-2 rounded-md bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">011-123456789</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/chat" className="text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium">
              Chat with DocGenie
            </Link>
            <div className="text-white px-3 py-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>011-123456789</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
