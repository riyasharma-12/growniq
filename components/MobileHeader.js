'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import DownloadModal from '@/components/DownloadModal';
import Subtract from "../public/images/Subtract.png"

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

          {/* Right: Download/App Badge + Hamburger */}
          <div className="flex items-center gap-3">
            {/* App download circle badge */}
            {/* <button
              onClick={openDownload}
              className="w-[32px] h-[32px] rounded-full bg-white/15 flex items-center justify-center"
              aria-label="Download app"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 15V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button> */}

            {/* Hamburger Menu Button */}
            {/* <button
              onClick={toggleMenu}
              className="focus:outline-none rounded-full"
              aria-label="Toggle menu"
            >
              <Image src="/images/hemburger-menu.svg" alt="Menu" width={28} height={28} />
            </button> */}
            <button
              onClick={toggleMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Image
                src="/images/hemburger-menu.svg"
                alt="Menu"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Screen */}
      {/* Mobile Menu Full Screen */}
      {/* Mobile Menu Full Screen */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full flex flex-col">
          {/* Header with tagline and close button */}
          <div className="relative bg-[#FBFAF7] px-6 pt-6 pb-9 overflow-hidden">
            <div className="flex items-start justify-between relative z-10">
              <div className="flex-1 pr-12">
                <p className="leading-snug font-poppins text-[17px] font-bold">
                  <span className="block text-[#F0704A]">Let&apos;s grow</span>
                  <span className="block text-[#164925]">something beautiful</span>
                  <span className="block text-[#164925]">today!</span>
                </p>
              </div>
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#164925] z-20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Decorative leaf image */}
            <div className="absolute -top-3 right-0 w-[150px] h-[130px] pointer-events-none z-0">
              <Image
                src="/images/leaf.png"
                alt="Decorative leaf"
                width={150}
                height={130}
                className="object-contain object-top w-full h-full"
              />
            </div>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 bg-[#FBFAF7] font-nunito">
            {/* Primary Menu Items */}
            <nav className="space-y-0">
              <a
                href="/"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, null, '/')}
              >
                Home
              </a>
              <a
                href="#expert-services"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, 'expert-services')}
              >
                Book a Service
              </a>
              <a
                href="#digi-nursery"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, 'digi-nursery')}
              >
                Shop Plants
              </a>
              <a
                href="#ai-care"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, 'ai-care')}
              >
                Smart Care with AI
              </a>
              <a
                href="#pricing"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, 'pricing')}
              >
                Pricing
              </a>
            </nav>

            {/* Divider */}
            <div className="border-t border-dotted border-[#164925]/30 my-4"></div>

            {/* Secondary Menu Items */}
            <nav className="space-y-0">
              <a
                href="#how-it-works"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, 'how-it-works')}
              >
                How it Works
              </a>
              <a
                href="/about-us"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, null, '/about-us')}
              >
                About Growniq
              </a>
              <a
                href="#blog"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, 'blog')}
              >
                Blog / Tips
              </a>
              <a
                href="#support"
                className="block text-[#164925] font-bold py-3.5 transition-colors text-[16px]"
                onClick={(e) => handleNavClick(e, 'support')}
              >
                Support
              </a>
            </nav>
          </div>

          {/* Footer - App Download */}
          <div className="bg-[#FBFAF7] px-6 py-5 border-t border-[rgba(22,73,37,0.1)]">
            <p className="text-sm text-[#164925] mb-3 text-center font-semibold">Download Growniq App</p>
            <div className="flex items-center justify-center gap-3">
              {/* Google Play Button */}
              <a
                href="#"
                onClick={openDownload}
                className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-lg hover:bg-gray-800 transition"
                role="button"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[8px] font-normal tracking-wide">GET IT ON</span>
                  <span className="text-[13px] font-semibold -mt-0.5">Google Play</span>
                </span>
              </a>

              {/* App Store Button */}
              <a
                href="#"
                onClick={openDownload}
                className="flex items-center gap-2 bg-black text-white px-3.5 py-2 rounded-lg hover:bg-gray-800 transition"
                role="button"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="flex flex-col leading-tight text-left">
                  <span className="text-[8px] font-normal tracking-wide">Download on the</span>
                  <span className="text-[13px] font-semibold -mt-0.5">App Store</span>
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
