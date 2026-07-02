'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import DownloadModal from '@/components/DownloadModal';

export default function MobileHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openDownload = (e) => {
    if (e) e.preventDefault();
    setIsMenuOpen(false);
    window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank");
  };

  const handleNavClick = (e, targetId, path = '/') => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (targetId) {
      if (pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`${path}#${targetId}`);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <header className="lg:hidden bg-[#164925] py-3 px-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => router.push('/')}>
            <Image src="/images/mobi-logo.svg" alt="Growniq logo" width={122} height={27} />
          </div>

          {/* Right: Hamburger Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMenu}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#FFFAF3] text-[#164925] focus:outline-none hover:bg-white active:bg-gray-100 transition-all cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 9H19" stroke="#164925" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 15H19" stroke="#164925" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Screen Overlay drawer (Figma mobile design) */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#FBFAF7] z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Header with tagline, hanging leaves background, and close button */}
          <div className="relative bg-[#FBFAF7] px-6 pt-8 pb-9 overflow-hidden flex-shrink-0">
            <div className="flex items-start justify-between relative z-10">
              <div className="flex-1 pr-12">
                <p className="leading-snug font-poppins text-[20px] font-bold">
                  <span className="block text-[#ED5213]">Let’s grow</span>
                  <span className="block text-[#164925]">something beautiful</span>
                  <span className="block text-[#164925]">today!</span>
                </p>
              </div>

              {/* Close Button - Round white button matching Figma */}
              <button
                onClick={toggleMenu}
                className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#164925] z-20 focus:outline-none hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Decorative leaf image hanging from top right (Figma Mobile) */}
            <div className="absolute -top-4 -right-2 w-[180px] h-[160px] pointer-events-none z-0">
              <Image
                src="/images/pexels-skylar-kang-6044747 2.png"
                alt="Decorative leaf"
                width={180}
                height={160}
                className="object-contain object-top w-full h-full"
              />
            </div>
          </div>

          {/* Menu Items (Upper and Lower lists separated by a dotted line) */}
          <div className="flex-1 overflow-y-auto px-6 py-4 bg-[#FBFAF7]">
            {/* Primary Menu Items */}
            <nav className="flex flex-col">
              <a
                href="/"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, null, '/')}
              >
                Home
              </a>
              <a
                href="#expert-services"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'expert-services')}
              >
                Book a Service
              </a>
              <a
                href="#digi-nursery"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'digi-nursery')}
              >
                Shop Plants
              </a>
              <a
                href="#ai-care"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'ai-care')}
              >
                Smart Care with AI
              </a>
              {/* <a
                href="#pricing"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'pricing')}
              >
                Pricing
              </a> */}
            </nav>

            {/* Dotted Line Separator */}
            <div className="border-t border-dotted border-[rgba(22,73,37,0.45)] my-5"></div>

            {/* Secondary Menu Items */}
            <nav className="flex flex-col">
              <a
                href="#how-it-works"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'how-it-works')}
              >
                How It Works
              </a>
              <a
                href="/about-us"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, null, '/about-us')}
              >
                About Growniq
              </a>
              {/* <a
                href="#blog"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'blog')}
              >
                Blog / Tips
              </a> */}
              {/* <a
                href="#support"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'support')}
              >
                Support
              </a> */}
            </nav>
          </div>

          {/* Footer - Download App buttons styled exactly like Figma (green bg, inline flex-1) */}
          <div className="bg-[#FBFAF7] px-6 py-5 border-t border-[rgba(22,73,37,0.35)] flex-shrink-0">
            <p className="text-xs text-[#164925] mb-3 text-center font-semibold font-poppins">
              Download Growniq App
            </p>
            <div className="flex items-center justify-center gap-3">
              {/* Google Play Button */}
              <a
                href="#"
                onClick={openDownload}
                className="flex-1 flex items-center gap-2 bg-[#164925] text-white px-3 py-2.5 rounded-xl hover:bg-[#123c1e] transition justify-center"
                role="button"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[7px] font-normal tracking-wide">GET IT ON</span>
                  <span className="text-[12px] font-semibold -mt-0.5 whitespace-nowrap">Google Play</span>
                </span>
              </a>

              {/* App Store Button */}
              <a
                href="#"
                onClick={openDownload}
                className="flex-1 flex items-center gap-2 bg-[#164925] text-white px-3 py-2.5 rounded-xl hover:bg-[#123c1e] transition justify-center"
                role="button"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[7px] font-normal tracking-wide">Download on the</span>
                  <span className="text-[12px] font-semibold -mt-0.5 whitespace-nowrap">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </>
  );
}
