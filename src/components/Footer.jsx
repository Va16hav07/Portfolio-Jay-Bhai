import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/JaySoni1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jay-soni-51b634328/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:jaygsoni14@gmail.com"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a> */}
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Soni Jay Gaurang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;