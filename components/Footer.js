'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BrandLogoIcon, InstagramIcon, LinkedInIcon, YouTubeIcon, CallIcon, MailIcon, FacebookIcon, MassegeIcon } from './icons';
import DownloadModal from './DownloadModal';

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="hidden lg:block bg-[#164925] text-white py-16 border-t border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">

          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center">
              <BrandLogoIcon className="h-9 w-auto text-white" />
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:opacity-85 transition-opacity" aria-label="Facebook">
                <FacebookIcon className="w-7 h-7" />
              </a>
              <a href="#" className="hover:opacity-85 transition-opacity" aria-label="Instagram">
                <InstagramIcon className="w-7 h-7" />
              </a>
              <a href="#" className="hover:opacity-85 transition-opacity" aria-label="YouTube">
                <YouTubeIcon className="w-7 h-7" />
              </a>
              <a href="#" className="hover:opacity-85 transition-opacity" aria-label="LinkedIn">
                <LinkedInIcon className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-base font-poppins text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3.5 text-sm font-nunito text-[#FFFAF3] opacity-80">
              <li>
                <Link href="/#expert-services" className="hover:text-[#FFE9CA] transition-colors">
                  Services
                </Link>
              </li>
              {/* <li>
                <a href="#" onClick={(e) => { e.preventDefault(); window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank"); }} className="hover:text-[#FFE9CA] transition-colors">
                  Pricing
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-[#FFE9CA] transition-colors">
                  Blog
                </a>
              </li> */}
              <li>
                <Link href="/about-us" className="hover:text-[#FFE9CA] transition-colors">
                  About Growniq
                </Link>
              </li>
              <li>
                <Link href="/#faq-widget" className="hover:text-[#FFE9CA] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact-us" className="hover:text-[#FFE9CA] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="font-semibold mb-5 text-base font-poppins text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm font-nunito text-[#FFFAF3] opacity-80">
              <li className="flex items-center gap-3">
                <CallIcon className="w-5 h-5 shrink-0 text-white" />
                <a href="tel:+919717104342" className="hover:text-[#FFE9CA] transition-colors">
                  +91 9717104342
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 shrink-0 text-white" />
                <a href="mailto:contact@growniq.in" className="hover:text-[#FFE9CA] transition-colors break-all">
                  contact@growniq.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MassegeIcon className="w-5 h-5 shrink-0 text-white" />
                <a href="https://wa.me/919717104342" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE9CA] transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Updated */}
          <div>
            <h4 className="font-semibold mb-5 text-base font-poppins text-white tracking-wide">Stay Updated</h4>
            <p className="text-sm font-nunito text-[#FFFAF3] opacity-80 mb-5 leading-relaxed">
              Get seasonal gardening tips & exclusive offers
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 max-w-[260px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#245333] border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40 font-nunito"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-[#164925] font-semibold py-3 px-4 rounded-lg text-sm hover:bg-white/95 transition-colors font-poppins"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-[#FFFAF3] opacity-80 font-nunito">
            <p>© 2025 Growniq. All rights reserved.</p>
            <div className="flex items-center gap-6 md:gap-8">
              <Link href="/terms-of-service" className="hover:text-[#FFE9CA] transition-colors">Terms of Service</Link>
              <Link href="/privacy-policy" className="hover:text-[#FFE9CA] transition-colors">Privacy Policy</Link>
              {/* <a href="#" className="hover:text-[#FFE9CA] transition-colors">Cookie Policy</a> */}
            </div>
          </div>
        </div>
      </div>
      <DownloadModal open={open} onClose={() => setOpen(false)} />
    </footer>
  );
}
