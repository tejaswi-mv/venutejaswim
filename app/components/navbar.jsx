'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-[9999] border-b transition-all duration-300 ${
        isScrolled 
          ? 'border-gray-300 shadow-lg' 
          : 'border-gray-200'
      }`} 
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)', 
        WebkitBackdropFilter: 'blur(10px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%'
      }}
    >
      <nav className="flex justify-between items-center w-full px-4 lg:px-12 py-5" role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 list-none m-0 p-0" role="menubar">
          <li role="none">
            <Link 
              href="/#about" 
              className="no-underline font-medium text-sm lg:text-base hover:opacity-70 transition-opacity duration-300 mobile-btn"
              style={{ color: '#000000' }}
              role="menuitem"
              aria-label="Navigate to About Me section"
            >
              About Me
            </Link>
          </li>
          <li role="none">
            <Link 
              href="/#projects" 
              className="no-underline font-medium text-sm lg:text-base hover:opacity-70 transition-opacity duration-300 mobile-btn"
              style={{ color: '#000000' }}
              role="menuitem"
              aria-label="Navigate to Portfolio section"
            >
              Projects
            </Link>
          </li>
          <li role="none">
            <Link 
              href="/#skills" 
              className="no-underline font-medium text-sm lg:text-base hover:opacity-70 transition-opacity duration-300 mobile-btn"
              style={{ color: '#000000' }}
              role="menuitem"
              aria-label="Navigate to Services section"
            >
              Skills
            </Link>
          </li>
          <li role="none">
            <Link 
              href="/blog" 
              className="no-underline font-medium text-sm lg:text-base hover:opacity-70 transition-opacity duration-300 mobile-btn"
              style={{ color: '#000000' }}
              role="menuitem"
              aria-label="Navigate to Blog page"
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Book A Call Button - Desktop */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/#contact"
            className="no-underline border border-black px-5 py-2.5 rounded flex items-center gap-1.5 font-medium hover:opacity-80 transition-opacity duration-300"
            style={{ color: '#000000', borderColor: '#000000' }}
          >
            <span>Book A Call</span>
            <HiArrowUpRight size={12} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2"
            style={{ color: '#111111' }}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9999]">
          <ul className="py-4">
            <li className="px-6 py-3">
              <Link 
                href="/#about"
                className="block hover:opacity-70 transition-opacity duration-300 font-medium"
                style={{ color: '#000000' }}
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link 
                href="/#projects" 
                className="block hover:opacity-70 transition-opacity duration-300 font-medium"
                style={{ color: '#000000' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link 
                href="/#skills"
                className="block hover:opacity-70 transition-opacity duration-300 font-medium"
                style={{ color: '#000000' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link 
                href="/blog"
                className="block hover:opacity-70 transition-opacity duration-300 font-medium"
                style={{ color: '#000000' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li className="px-6 py-3 border-t border-gray-200 mt-2 pt-4">
              <Link 
                href="/#contact"
                className="flex items-center gap-1.5 border border-black px-5 py-2.5 rounded font-medium hover:opacity-80 transition-opacity duration-300"
                style={{ color: '#000000', borderColor: '#000000' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Book A Call</span>
                <HiArrowUpRight size={12} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;