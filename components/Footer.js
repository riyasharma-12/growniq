'use client';

import { useState } from 'react';
import {LeafIcon, InstagramIcon, LinkedInIcon, YouTubeIcon, CallIcon, MailIcon, MassegeIcon, FacebookIcon, TwitterIcon } from './icons';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="hidden lg:block bg-green text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex  gap-3 mb-2">
              <LeafIcon />
              <h4 className='font-bold text-base sm:text-2xl'>Growniq</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Professional gardening and landscaping services with eco-friendly practices and transparent pricing.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="/about-us" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <CallIcon className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+919717104342" className="hover:text-white transition">+91 9717104342</a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@growniq.in" className="hover:text-white transition break-all">contact@growniq.in</a>
              </li>
              <li className="flex items-center gap-2">
                <MassegeIcon className="w-4 h-4 flex-shrink-0" />
                <a href="#" className="hover:text-white transition">WhatsApp Support</a>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Get seasonal gardening tips & exclusive offers
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-white/40 transition"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded bg-white text-[#164925] font-medium text-sm hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-300">
            <p>© 2024 Growniq. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
