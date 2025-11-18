'use client';

import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-gradient-to-b from-off-white to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark-text">
              Ship Faster.{' '}
              <span className="text-primary-red">Build Smarter.</span>{' '}
              Scale Confidently.
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Product and quality systems built on Agile transformations, shift-left testing, and
              user validation frameworks. Track record includes{' '}
              <span className="font-bold text-primary-red">94% bug reduction and 99% crash-free rates</span>.
              Proven at Fender, Native Instruments, Output, and Offtop.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://calendly.com/nick-cardinalquality/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Book Free 30-Min Consultation
              </a>
              <button
                onClick={scrollToServices}
                className="border-2 border-primary-red text-primary-red px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary-red hover:text-white transition-all flex items-center justify-center space-x-2"
              >
                <span>View Services</span>
                <HiArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Signal */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-dark-text">15 years</span> building product
                and quality systems for music technology and SaaS companies
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-red/20">
              <Image
                src="/assets/nick.jpeg"
                alt="Nick - Cardinal Quality Consulting"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
