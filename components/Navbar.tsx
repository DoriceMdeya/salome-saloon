'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Book Appointment', href: '/booking' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-pink-600">
              SALOME<span className="text-gray-800">SALOON</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Auth & Cart */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-pink-600">
                  <FaUser />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-pink-600">
                  <FaUser />
                  <span>Login</span>
                </Link>
              )}
              <Link href="/orders" className="relative text-gray-700 hover:text-pink-600">
                <FaShoppingBag className="text-xl" />
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                {isLoggedIn ? (
                  <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-pink-600">
                    <FaUser />
                    <span>Dashboard</span>
                  </Link>
                ) : (
                  <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-pink-600">
                    <FaUser />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;