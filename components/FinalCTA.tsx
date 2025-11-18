'use client';

import { useEffect } from 'react';

export default function FinalCTA() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-off-white to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Book a free 30-minute consultation to discuss your quality challenges and explore how we can
            transform your product development process.
          </p>
          <p className="text-gray-600">
            No pressure. No sales pitch. Just a conversation about building better systems.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/nick-cardinalquality/30min"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </section>
  );
}
