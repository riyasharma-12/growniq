'use client';

import { useState } from 'react';
import Image from 'next/image';
import DownloadModal from '@/components/DownloadModal';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDownload = (e) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);
    setIsDownloadOpen(true);
  };

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Book a Service', href: '#' },
    { name: 'Shop Plants', href: '#' },
    { name: 'Smart Care with AI', href: '#' },
    { name: 'Pricing', href: '#' }
  ];

  const secondaryMenuItems = [
    { name: 'How It Works', href: '#' },
    { name: 'About Growniq', href: '#' },
    { name: 'Blog / Tips', href: '#' },
    { name: 'Support', href: '#' }
  ];

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <header className="lg:hidden bg-[#164925] py-3 px-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <Image src="/images/mobi-logo.svg" alt="groniq logo" width={80} height={24} />
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className=""
            aria-label="Toggle menu"
          >
            <Image src="/images/hemburger-menu.svg" alt="hemburger-menu" width={32} height={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Full Screen */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-100 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Header with tagline and close button */}
          <div className="relative bg-white px-6 py-6 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-8">
                <p className="text-[#164925] text-base font-medium leading-relaxed">
                  Let's grow something beautiful today!
                </p>
              </div>
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Decorative plant illustration */}
            <div className="absolute top-0 right-12 text-6xl opacity-50">
              🌿
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            {/* Primary Menu Items */}
            <nav className="space-y-1 mb-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-[#164925] hover:text-[#1a5c3a] font-medium py-3 transition-colors text-base"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Divider */}
            <div className="border-t border-gray-300 my-6"></div>

            {/* Secondary Menu Items */}
            <nav className="space-y-1">
              {secondaryMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-[#164925] hover:text-[#1a5c3a] font-medium py-3 transition-colors text-base"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Footer - App Download */}
          <div className="bg-white px-6 py-6 border-t border-gray-200">
            <p className="text-sm text-gray-700 mb-3 text-center">Download the Growniq app</p>
            <div className="flex items-center justify-center gap-3">
              {/* Google Play Button */}
              <a
                href="#"
                onClick={openDownload}
                className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition"
                role="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <span className="text-xs font-medium">Google Play</span>
              </a>

              {/* App Store Button */}
              <a
                href="#"
                onClick={openDownload}
                className="flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition"
                role="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-xs font-medium">App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </>
  );
}
