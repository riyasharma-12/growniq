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
          {/* <div className="flex items-center gap-3">
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
          </div> */}
          <div className="flex items-center gap-3">
            {/* <button
              onClick={toggleMenu}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#FFFAF3] text-[#164925] focus:outline-none hover:bg-white active:bg-gray-100 transition-all cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
              aria-label="Toggle menu"
            > */}
            <div onClick={toggleMenu}>
              <img
                src="/images/user.svg"
                alt="Menu"
                className=" object-contain"
              />
            </div>

            {/* </button> */}
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
                Services
              </a>
              {/* <a
                href="#digi-nursery"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'digi-nursery')}
              >
                Shop Plants
              </a> */}
              {/* <a
                href="#ai-care"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'ai-care')}
              >
                Smart Care with AI
              </a> */}
              {/* <a
                href="#pricing"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, 'pricing')}
              >
                Pricing
              </a> */}
            </nav>

            {/* Dotted Line Separator */}
            {/* <div className="border-t border-dotted border-[rgba(22,73,37,0.45)] my-5"></div> */}

            {/* <div className="w-full border-t border-dashed border-[#164925]"></div> */}

            {/* Secondary Menu Items */}
            <nav className="flex flex-col">

              <a
                href="/about-us"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, null, '/about-us')}
              >
                About Growniq
              </a>

              <a
                href="/terms-of-service"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, null, '/terms-of-service')}
              >
                Terms of Service
              </a>

              <a
                href="/privacy-policy"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e) => handleNavClick(e, null, '/privacy-policy')}
              >
                Privacy Policy
              </a>
              {/* <a
                href="#blog"
                className="block text-[#164925] font-semibold font-poppins py-3.5 transition-colors text-[17px] active:opacity-70"
                onClick={(e => handleNavClick(e, 'blog')}
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


              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDownloadOpen(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <Image src="/images/608.svg" alt="Download on the Apple Store" width={170} height={60} className="object-contain h-[55px] md:h-[50px] w-auto" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDownloadOpen(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <Image src="/images/609.svg" alt="Get it on Google Play" width={170} height={50} className="object-contain h-[55px] md:h-[50px] w-auto" />
              </a>

            </div>
          </div>


        </div>
      </div>
      <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </>
  );
}
