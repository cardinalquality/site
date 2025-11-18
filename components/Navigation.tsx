'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/logo.png"
            alt="Cardinal Quality Consulting"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold text-lg md:text-xl text-dark-text">
            Cardinal Quality
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-dark-text hover:text-primary-red transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-dark-text hover:text-primary-red transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-dark-text hover:text-primary-red transition-colors"
          >
            About
          </button>
          <a
            href="https://calendly.com/nick-cardinalquality/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-red text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors"
          >
            Book Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-dark-text p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container-custom py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-dark-text text-lg hover:text-primary-red transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-dark-text text-lg hover:text-primary-red transition-colors text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-dark-text text-lg hover:text-primary-red transition-colors text-left"
            >
              About
            </button>
            <a
              href="https://calendly.com/nick-cardinalquality/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-red text-white px-6 py-4 rounded-md font-semibold hover:bg-red-600 transition-colors text-center"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
