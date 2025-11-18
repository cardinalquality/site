'use client';

import { useState, useEffect } from 'react';
import { HiCalendar, HiX } from 'react-icons/hi';

export default function StickyFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 800px)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full shadow-lg transition-all"
            aria-label="Dismiss"
          >
            <HiX className="w-4 h-4" />
          </button>

          {/* CTA Button */}
          <a
            href="https://calendly.com/nick-cardinalquality/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-red hover:bg-red-600 text-white px-6 py-4 rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center space-x-3 font-semibold"
          >
            <HiCalendar className="w-6 h-6" />
            <span className="hidden sm:inline">Book Free Consultation</span>
            <span className="sm:hidden">Book Now</span>
          </a>
        </div>
      )}
    </>
  );
}
