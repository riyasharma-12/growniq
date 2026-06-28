'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { BrandLogoIcon, AppleIcon, GooglePlayIcon } from './icons';
import DownloadModal from './DownloadModal';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    'Book a Gardner',
    'Monthly plant care',
    'Lawn Maintenance',
    'Terrace Garden Maintenance',
    'New Home Plant Setup',
    'Garden Heavy Work',
    'Workspace Plant Care',
    'Plant Repotting'
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (e) => {
    e.preventDefault();
    setDropdownOpen(false);
    
    if (pathname === '/') {
      const element = document.getElementById('expert-services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#expert-services');
    }
    // Delay slightly to allow scroll/navigation
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  return (
    <nav className="hidden lg:block bg-[#164925] py-3 sm:py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => router.push('/')}
          >
            <BrandLogoIcon className="h-6 sm:h-8 w-auto" />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-white font-nunito font-medium text-base">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus:outline-none"
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div 
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-64 bg-white border border-[rgba(22,73,37,0.15)] rounded-2xl shadow-xl py-3 z-50 animate-fadeIn"
                >
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href="#expert-services"
                      onClick={handleServiceClick}
                      className="block px-5 py-2.5 text-[#164925] hover:bg-[#D7EBE7]/50 font-semibold text-sm transition-colors"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about-us" className="hover:opacity-80 transition-opacity">
              About Us
            </Link>

            <Link href="/terms-of-service" className="hover:opacity-80 transition-opacity">
              Terms of Service
            </Link>
          </div>

          {/* Download App Section */}
          <div
            className="flex cursor-pointer items-center gap-2 sm:gap-4 group"
            onClick={() => window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank")}
          >
            {/* App Store Icons */}
            <div className="flex items-center gap-2">
              <AppleIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
              <GooglePlayIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
            </div>

            {/* Download Text */}
            <span className="hidden sm:inline-block text-white text-sm font-medium">
              Download the app
            </span>
          </div>
        </div>
      </div>
      <DownloadModal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
