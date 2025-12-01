'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BrandLogoIcon , AppleIcon , GooglePlayIcon } from './icons';
import DownloadModal from './DownloadModal';

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <nav className="hidden lg:block bg-[#164925] py-3 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => router.push('/')}
          >
            <BrandLogoIcon className="h-6 sm:h-8 w-auto" />
          </div>

          {/* Download App Section */}
          <div
            className="flex cursor-pointer items-center gap-2 sm:gap-4"
            onClick={() => setOpen(true)}
          >
            {/* App Store Icons */}
            <div className="flex items-center gap-2">
              {/* Apple Icon */}
              <AppleIcon className="w-6 h-6" />

              {/* Google Play Icon */}
              <GooglePlayIcon className="w-6 h-6" />
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
