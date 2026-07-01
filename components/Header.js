'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BrandLogoIcon, AppleIcon, GooglePlayIcon } from './icons';
import DownloadModal from './DownloadModal';

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <nav className="hidden lg:block bg-[#164925] sticky top-0 z-50">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => router.push('/')}
          >
            <BrandLogoIcon />
          </div>

          {/* Download App Button - with stroke/border */}
          <button
            className="flex items-center gap-3 border border-white/40 text-white pl-4 pr-1 py-1 rounded-full hover:bg-white/5 transition-colors select-none h-[38px]"
            onClick={() => setOpen(true)}
          >
            <AppleIcon className="w-[17px] h-[17px] text-white fill-white" />
            <GooglePlayIcon className="w-[17px] h-[17px]" />
            <span className="bg-white text-[#164925] font-semibold text-[13px] font-nunito px-4 py-1.5 rounded-full flex items-center justify-center h-full">
              Download App
            </span>
          </button>
        </div>
      </div>
      <DownloadModal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
