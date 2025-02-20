import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Bot className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">DocGuide</span>
            </div>
            <p className="mt-2 text-gray-400">
              Simplifying access to government services through AI-powered assistance.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/chat" className="hover:text-blue-400">Chat with DocGenie</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Connect With Us</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 DocGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}