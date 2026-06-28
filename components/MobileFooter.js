'use client';

import { useState } from 'react';
import { InstagramIcon, LinkedInIcon, YouTubeIcon, FacebookIcon } from './icons';
import Link from 'next/link';
import DownloadModal from './DownloadModal';

export default function MobileFooter() {
  const [openSection, setOpenSection] = useState(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      id: 'links',
      title: 'Important Links',
      links: [
        { name: 'Services', href: '/#expert-services' },
        { name: 'Pricing', href: '#', isDownloadTrigger: true },
        { name: 'About Us', href: '/about-us' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      id: 'policies',
      title: 'Our Policies',
      links: [
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Refund Policy', href: '#' }
      ]
    },
    {
      id: 'company',
      title: 'Company Info',
      links: [
        { name: 'About Growniq', href: '/about-us' },
        { name: 'Careers', href: '#' },
        { name: 'Partners', href: '#' }
      ]
    }
  ];

  return (
    <footer className="lg:hidden bg-[#164925] text-white border-t border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Accordion Sections */}
        <div className="space-y-0">
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-white/10">
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
              >
                <span className="text-sm font-semibold font-poppins">{section.title}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openSection === section.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === section.id ? 'max-h-60 pb-4' : 'max-h-0'
                }`}
              >
                <ul className="space-y-3 pl-2 font-nunito">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      {link.isDownloadTrigger ? (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank");
                          }}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact info in accordion-like layout for mobile */}
        <div className="border-b border-white/10 py-4">
          <h4 className="text-sm font-semibold font-poppins mb-3 text-[#FFE9CA]">Contact Us</h4>
          <p className="text-xs text-gray-300 leading-relaxed font-nunito">
            Call: +91 9717104342<br />
            Email: contact@growniq.in<br />
            Growniq Private Limited<br />
            2nd Floor, Plot No. 121, Sector 44,<br />
            Gurugram, Haryana – 122003, India
          </p>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 pt-2">
          <h4 className="text-start text-sm font-semibold font-poppins mb-4">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <YouTubeIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <LinkedInIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-gray-400 font-nunito">© 2026 Growniq Private Limited. All rights reserved.</p>
        </div>
      </div>
      <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </footer>
  );
}
