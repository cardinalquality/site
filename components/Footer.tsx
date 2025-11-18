import Image from 'next/image';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/assets/logo.png"
                alt="Cardinal Quality Consulting"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-xl">Cardinal Quality</span>
            </div>
            <p className="text-gray-400">
              Building systems that give product and engineering teams faster insights, predictable
              releases, and scalable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-primary-red transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary-red transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-red transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/nick-cardinalquality/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-red transition-colors"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <a
              href="https://calendly.com/nick-cardinalquality/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-red transition-colors mb-4"
            >
              <HiMail className="w-5 h-5" />
              <span>Schedule a Call</span>
            </a>
            <p className="text-gray-400 text-sm">
              Available for consulting engagements and speaking opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Cardinal Quality Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
