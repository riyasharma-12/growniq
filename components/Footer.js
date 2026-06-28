'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LeafIcon, InstagramIcon, LinkedInIcon, YouTubeIcon, CallIcon, MailIcon, FacebookIcon } from './icons';
import DownloadModal from './DownloadModal';

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="hidden lg:block bg-[#164925] text-white py-12 border-t border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <LeafIcon className="w-8 h-8 text-[#FFE9CA]" />
              <h4 className="font-bold text-2xl font-poppins tracking-wide">Growniq</h4>
            </div>
            <p className="text-[#FFFAF3] opacity-80 text-sm leading-relaxed max-w-xs font-nunito">
              Let's grow something beautiful today! One platform for all your green needs, services, store &amp; AI care.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                <YouTubeIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <LinkedInIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-lg font-poppins text-[#FFE9CA]">Quick Links</h4>
            <ul className="space-y-3.5 text-sm font-nunito text-[#FFFAF3] opacity-90">
              <li>
                <Link href="/#expert-services" className="hover:text-[#FFE9CA] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank"); }} className="hover:text-[#FFE9CA] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#FFE9CA] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFE9CA] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div>
            <h4 className="font-semibold mb-5 text-lg font-poppins text-[#FFE9CA]">Our Policies</h4>
            <ul className="space-y-3.5 text-sm font-nunito text-[#FFFAF3] opacity-90">
              <li>
                <Link href="/terms-of-service" className="hover:text-[#FFE9CA] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#FFE9CA] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFE9CA] transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-semibold mb-5 text-lg font-poppins text-[#FFE9CA]">Contact Us</h4>
            <ul className="space-y-4 text-sm font-nunito text-[#FFFAF3] opacity-90">
              <li className="flex items-center gap-3">
                <CallIcon className="w-5 h-5 shrink-0 text-[#FFE9CA]" />
                <a href="tel:+919717104342" className="hover:text-[#FFE9CA] transition-colors">
                  +91 9717104342
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 shrink-0 text-[#FFE9CA]" />
                <a href="mailto:contact@growniq.in" className="hover:text-[#FFE9CA] transition-colors break-all">
                  contact@growniq.in
                </a>
              </li>
              <li className="text-xs leading-relaxed text-[#FFFAF3]/80">
                Growniq Private Limited<br />
                2nd Floor, Plot No. 121, Sector 44,<br />
                Gurugram, Haryana – 122003, India
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-[#FFFAF3] opacity-80 font-nunito">
            <p>© 2026 Growniq Private Limited. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/terms-of-service" className="hover:text-[#FFE9CA] transition-colors">Terms of Service</Link>
              <Link href="/privacy-policy" className="hover:text-[#FFE9CA] transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-[#FFE9CA] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
      <DownloadModal open={open} onClose={() => setOpen(false)} />
    </footer>
  );
}
