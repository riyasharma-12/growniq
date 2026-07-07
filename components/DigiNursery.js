// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function DigiNursery() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const productImages = [
//     '/images/service-1.png',
//     '/images/service-2.png',
//     '/images/service-3.png',
//     '/images/service-4.png',
//     '/images/service-5.png',
//     '/images/Garden-Maintainnace.png'
//   ];

//   // Auto-slide effect inside the phone mockup
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   // Scroll-based image change effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPos = window.scrollY;
//       const index = Math.floor(scrollPos / 300) % productImages.length;
//       setCurrentImageIndex(index);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-[#D7EBE7] text-[#164925] py-10 md:py-16 -mt-[1px]">
//       <div className="container mx-auto px-4 sm:px-6 flex justify-between items-start flex-col-reverse lg:flex-row max-w-[1200px]">

//         {/* Left Column Content */}
//         <div className="lg:pt-6 lg:basis-[496px] w-full">
//           <div className="hidden lg:block mb-6">
//             <Image src="/images/growniq-green-logo.svg" alt="logo" width={131} height={39} />
//           </div>

//           <h2 className="text-[26px] lg:text-[40px] font-bold leading-tight font-poppins">
//             Growniq <span className="block">Digi-nursery</span>
//           </h2>

//           <p className="mt-4 text-[14px] leading-relaxed font-nunito text-[#164925]">
//             The first-ever marketplace that brings all nearby nurseries and garden stores to your Growniq app.
//           </p>

//           {/* Tags list */}
//           <ul className="mt-6 flex gap-2.5 flex-wrap font-poppins text-[13px] font-semibold text-[#164925]">
//             <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full animate-float-1 hover:shadow-md transition-shadow cursor-pointer">
//               <img src="/images/plant.svg" alt="plants" className="w-[16px] h-[16px]" />
//               <span>Plants</span>
//             </li>
//             <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full animate-float-2 hover:shadow-md transition-shadow cursor-pointer">
//               <img src="/images/pots.svg" alt="pots" className="w-[16px] h-[16px]" />
//               <span>Pots</span>
//             </li>
//             <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full animate-float-3 hover:shadow-md transition-shadow cursor-pointer">
//               <img src="/images/seeds.svg" alt="seeds" className="w-[16px] h-[16px]" />
//               <span>Seeds</span>
//             </li>
//             <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full animate-float-4 hover:shadow-md transition-shadow cursor-pointer">
//               <img src="/images/tools.svg" alt="tools" className="w-[16px] h-[16px]" />
//               <span>Tools</span>
//             </li>
//             <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full animate-float-5 hover:shadow-md transition-shadow cursor-pointer">
//               <img src="/images/diy-kits.svg" alt="diy kits" className="w-[16px] h-[16px]" />
//               <span>DIY kits</span>
//             </li>
//             <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full animate-float-6 hover:shadow-md transition-shadow cursor-pointer">
//               <img src="/images/Fertilizer.svg" alt="fertilizer" className="w-[16px] h-[16px]" />
//               <span>Fertilizer</span>
//             </li>
//           </ul>

//           {/* Download App Buttons - Matching Figma Layout */}
//           <div className="mt-8 lg:mt-12 text-left">
//             <p className="text-xs text-[#164925] mb-3.5 font-medium font-nunito">Download Growniq App</p>
//             <div className="flex items-center gap-3.5 flex-wrap">
//               <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
//                 <Image src="/images/608.png" alt="Download on the Apple Store" width={140} height={42} className="object-contain h-[42px] w-auto" />
//               </a>
//               <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
//                 <Image src="/images/609.png" alt="Get it on Google Play" width={140} height={42} className="object-contain h-[42px] w-auto" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Phone Mockup & Animations */}
//         <div className="relative mx-auto lg:mx-0 order-first lg:order-last mb-8 lg:mb-0 w-full max-w-[580px] aspect-[768/634]">
//           {/* Mobile version logo */}
//           <div className="lg:hidden mb-6 flex justify-start">
//             <Image src="/images/growniq-green-logo.svg" alt="logo" width={110} height={32} />
//           </div>

//           {/* Desktop Mockup Overlay Container */}
//           <div className="hidden lg:block relative w-full h-full">
//             <img src="/images/group.png" alt="DigiNursery" className="w-full h-full object-cover" />

//             {/* Screen content overlay (fits inside the iPhone mockup screen) */}
//             <div
//               className="absolute overflow-hidden bg-white"
//               style={{
//                 top: '17.3%',
//                 left: '71.6%',
//                 width: '.4%',
//                 height: '42.5%',
//                 transform: 'rotate(-9.5deg) skewX(1deg)',
//                 borderRadius: '16px',
//                 zIndex: 10
//               }}
//             >
//               <img
//                 src={productImages[currentImageIndex]}
//                 alt="Product screen"
//                 className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
//               />
//             </div>

//             {/* SVG Overlay containing the animated circle traveling along the dotted path */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 768 634">
//               <path id="desktop-curve" d="M 640,250 C 660,280 625,360 670,375" fill="none" stroke="none" />
//               <circle r="6" fill="#ED5213">
//                 <animateMotion dur="3.5s" repeatCount="indefinite">
//                   <mpath href="#desktop-curve" />
//                 </animateMotion>
//               </circle>
//             </svg>
//           </div>

//           {/* Mobile Mockup Overlay Container */}
//           <div className="lg:hidden relative w-full aspect-[656/564]">
//             <img src="/images/group.png" alt="DigiNursery" className="w-full h-full object-cover" />

//             {/* Mobile screen content overlay */}
//             <div
//               className="absolute overflow-hidden bg-white"
//               style={{
//                 top: '28.3%',
//                 left: '44.9%',
//                 width: '16.0%',
//                 height: '39.8%',
//                 transform: 'rotate(-9.5deg) skewX(1.5deg)',
//                 borderRadius: '12px',
//                 zIndex: 10
//               }}
//             >
//               <img
//                 src={productImages[currentImageIndex]}
//                 alt="Product screen"
//                 className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
//               />
//             </div>

//             {/* SVG Overlay for mobile curves */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 656 564">
//               <path id="mobile-curve" d="M 450,220 C 470,250 430,340 470,360" fill="none" stroke="none" />
//               <circle r="5" fill="#ED5213">
//                 <animateMotion dur="3.5s" repeatCount="indefinite">
//                   <mpath href="#mobile-curve" />
//                 </animateMotion>
//               </circle>
//             </svg>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DownloadModal from './DownloadModal';

export default function DigiNursery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const productImages = [
    '/images/service-1.png',
    '/images/service-2.png',
    '/images/service-3.png',
    '/images/service-4.png',
    '/images/service-5.png',
    '/images/Garden-Maintainnace.png'
  ];

  // Auto-slide effect inside the phone mockup
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Scroll-based image change effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const index = Math.floor(scrollPos / 300) % productImages.length;
      setCurrentImageIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#D7EBE7] text-[#164925] py-10 md:py-16 -mt-[1px]">
      {/*
        IMPORTANT: removed `flex-col-reverse` (which was fighting with the
        order-first/order-last classes below). Using a plain flex-col on
        mobile + flex-row on desktop, and letting `order-*` utilities
        control sequencing explicitly. This guarantees:
          - Mobile: phone mockup image FIRST, text content SECOND (matches Figma)
          - Desktop: text content on the left, phone mockup on the right
      */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-start max-w-[1200px]">

        {/* Right Column: Phone Mockup & Animations (shown FIRST on mobile) */}
        <div className="relative mx-auto lg:mx-0 order-1 lg:order-2 mb-8 lg:mb-0 w-full max-w-[580px] aspect-[768/634]">
          {/* Mobile version logo */}
          <div className="lg:hidden mb-6 flex justify-start">
            <Image src="/images/growniq-green-logo.svg" alt="logo" width={110} height={32} />
          </div>

          {/* Desktop Mockup Overlay Container */}
          <div className="hidden lg:block relative w-full h-full">
            <img src="/images/video.svg" alt="DigiNursery" className="w-full h-full object-cover" />

            {/* Screen content overlay (fits inside the iPhone mockup screen) */}
            {/* <div
              className="absolute overflow-hidden bg-white"
              style={{
                top: '17.3%',
                left: '57.6%',     // shifted left to align with phone screen (was 71.6%, pushed it off)
                width: '16.0%',    // FIX: was '.4%' (typo) — now matches the phone screen width like mobile does
                height: '42.5%',
                transform: 'rotate(-9.5deg) skewX(1deg)',
                borderRadius: '16px',
                zIndex: 10
              }}
            >
              <img
                src={productImages[currentImageIndex]}
                alt="Product screen"
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              />
            </div> */}

            {/* SVG Overlay containing the animated circle traveling along the dotted path */}
            {/* <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 768 634">
              <path id="desktop-curve" d="M 640,250 C 660,280 625,360 670,375" fill="none" stroke="none" />
              <circle r="6" fill="#ED5213">
                <animateMotion dur="3.5s" repeatCount="indefinite">
                  <mpath href="#desktop-curve" />
                </animateMotion>
              </circle>
            </svg> */}
          </div>

          {/* Mobile Mockup Overlay Container */}
          <div className="lg:hidden relative w-full aspect-[656/564]">
            <img src="/images/basket.svg" alt="DigiNursery" className="w-full h-full object-cover" />

            {/* Mobile screen content overlay */}
            {/* <div
              className="absolute overflow-hidden bg-white"
              style={{
                top: '28.3%',
                left: '44.9%',
                width: '16.0%',
                height: '39.8%',
                transform: 'rotate(-9.5deg) skewX(1.5deg)',
                borderRadius: '12px',
                zIndex: 10
              }}
            >
              <img
                src={productImages[currentImageIndex]}
                alt="Product screen"
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
              />
            </div> */}

            {/* SVG Overlay for mobile curves */}
            {/* <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 656 564">
              <path id="mobile-curve" d="M 450,220 C 470,250 430,340 470,360" fill="none" stroke="none" />
              <circle r="5" fill="#ED5213">
                <animateMotion dur="3.5s" repeatCount="indefinite">
                  <mpath href="#mobile-curve" />
                </animateMotion>
              </circle>
            </svg> */}
          </div>
        </div>

        {/* Left Column Content (shown SECOND on mobile) */}
        <div className="lg:pt-6 lg:basis-[496px] order-2 lg:order-1 w-full">
          <div className="hidden lg:block mb-6">
            <Image src="/images/growniq-green-logo.svg" alt="logo" width={131} height={39} />
          </div>

          <h2 className="text-[40px] lg:text-[40px] font-medium leading-tight font-poppins">
            Growniq{' '}
            <span className="block relative w-fit">
              Digi-nursery
              <img
                src="/images/line.svg"
                alt=""
                className="absolute left-[14%] bottom-[-6px] w-[80%] h-auto pointer-events-none"
              />
            </span>
          </h2>

          <p className="mt-4 text-[16px] leading-relaxed font-nunito text-[#164925] px-2">
            The first-ever marketplace that brings all nearby nurseries and garden stores to your Growniq app.
          </p>

          {/* Tags list */}
          <ul className="mt-6 flex gap-2.5 flex-wrap font-poppins text-[13px] font-nunito text-[#164925]">
            <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full hover:shadow-md transition-shadow cursor-pointer">
              <img src="/images/plant.svg" alt="plants" className="w-[16px] h-[16px]" />
              <span>Plants</span>
            </li>
            <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full hover:shadow-md transition-shadow cursor-pointer">
              <img src="/images/pots.svg" alt="pots" className="w-[16px] h-[16px]" />
              <span>Pots</span>
            </li>

            <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full hover:shadow-md transition-shadow cursor-pointer">
              <img src="/images/seeds.svg" alt="seeds" className="w-[16px] h-[16px]" />
              <span>Seeds</span>
            </li>

            <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full hover:shadow-md transition-shadow cursor-pointer">
              <img src="/images/tools.svg" alt="tools" className="w-[16px] h-[16px]" />
              <span>Tools</span>
            </li>

            <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full hover:shadow-md transition-shadow cursor-pointer">
              <img src="/images/diy-kits.svg" alt="diy kits" className="w-[16px] h-[16px]" />
              <span>DIY kits</span>
            </li>

            <li className="bg-white flex items-center gap-2 py-2 px-4 rounded-full hover:shadow-md transition-shadow cursor-pointer">
              <img src="/images/Fertilizer.svg" alt="fertilizer" className="w-[16px] h-[16px]" />
              <span>Fertilizer</span>
            </li>
          </ul>

          {/* Download App Buttons - Matching Figma Layout */}
          <div className="hidden lg:block mt-8 lg:mt-12 text-left">
            <p className="text-xs text-[#164925] mb-2.5 font-medium font-nunito">Download Growniq App</p>
            <div className="flex flex-row items-center gap-5">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDownloadOpen(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <Image src="/images/608.svg" alt="Download on the Apple Store" width={140} height={50} className="object-contain h-[38px] md:h-[50px] w-auto" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDownloadOpen(true);
                }}
                className="hover:opacity-90 transition-opacity"
              >
                <Image src="/images/609.svg" alt="Get it on Google Play" width={140} height={50} className="object-contain h-[38px] md:h-[50px] w-auto" />
              </a>
            </div>
          </div>
        </div>

      </div>
      <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </div>
  );
}