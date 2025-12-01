'use client';

import { useState } from 'react';
import { InstagramIcon, LinkedInIcon, YouTubeIcon, FacebookIcon } from './icons';

export default function MobileFooter() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerSections = [
    {
      id: 'support',
      title: 'Support Center',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
      ]
    },
    {
      id: 'links',
      title: 'Important Links',
      links: [
        { name: 'Services', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    },
    {
      id: 'policies',
      title: 'Our Policies',
      links: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Refund Policy', href: '#' }
      ]
    },
    {
      id: 'company',
      title: 'Company Info',
      links: [
        { name: 'About Growniq', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Partners', href: '#' }
      ]
    }
  ];

  return (
    <footer className="lg:hidden bg-[#164925] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Accordion Sections */}
        <div className="space-y-0">
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-white/90">
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-4 text-left "
              >
                <span className="text-[13px] font-normal">{section.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openSection === section.id ? 'rotate-45' : ''
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openSection === section.id ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
              >
                <ul className="space-y-3 pl-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <div className="mt-8 pt-6">
          <h4 className="text-start text-base font-medium mb-4">Follow Us</h4>
          <div className="flex items-center gap-3">
            <a href="#" >
              <FacebookIcon className="" />
            </a>
            <a href="#" >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" >
              <YouTubeIcon className="" />
            </a>
            <a href="#" >
              <LinkedInIcon className="" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-7 pt-4">
          <p className="text-sm text-white">© 2025 Growniq</p>
        </div>
      </div>
    </footer>
  );
}
