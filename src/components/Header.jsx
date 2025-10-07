import React from 'react';
import { Code2, Rocket, Users, ChevronDown, Terminal, Coffee } from 'lucide-react';

const Header = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative animate-fade-in">
      {/* Profile Image */}
      <div className="mb-8 relative group">
        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-purple-500/30 animate-float group-hover:ring-purple-500/50 transition-colors duration-300">
          <img
            src="/Profile.JPG"
            alt="Profile"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 rounded-full animate-pulse-slow ring-4 ring-purple-500/20" />
      </div>

      {/* Name and Title */}
      <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Soni Jay Gaurang
        </span>
      </h1>

      {/* Software Engineer Title */}
      <div className="mb-8 text-2xl text-gray-300 flex items-center gap-3">
        <Terminal className="w-6 h-6 text-purple-400 animate-pulse" />
        <span>Software Engineering Student</span>
        <Coffee className="w-6 h-6 text-purple-400 animate-pulse" />
      </div>

      {/* Roles */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 text-lg text-gray-300 mb-12">
        <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
          <Code2 className="w-5 h-5 text-purple-400" />
          <span>Full Stack Developer</span>
        </div>
        <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
          <Rocket className="w-5 h-5 text-purple-400" />
          <span>Problem Solver</span>
        </div>
        <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
          <Users className="w-5 h-5 text-purple-400" />
          <span>Team Player</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-purple-400 transition-colors duration-300"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </header>
  );
};

export default Header;