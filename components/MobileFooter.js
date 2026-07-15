// 'use client';

// import { useState } from 'react';
// import { BrandLogoIcon, InstagramIcon, LinkedInIcon, YouTubeIcon, FacebookIcon, TwitterIcon, AppleIcon } from './icons';
// import Link from 'next/link';
// import DownloadModal from './DownloadModal';

// export default function MobileFooter() {
//   const [openSection, setOpenSection] = useState('support');
//   const [isDownloadOpen, setIsDownloadOpen] = useState(false);

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   const footerSections = [
//     {
//       id: 'links',
//       title: 'Important Links',
//       links: [
//         { name: 'Services', href: '/#expert-services' },
//         // { name: 'Pricing', href: '#', isDownloadTrigger: true },
//         { name: 'About Us', href: '/about-us' },
//         // { name: 'Blog', href: '#' }
//       ]
//     },
//     {
//       id: 'policies',
//       title: 'Our Policies',
//       links: [
//         { name: 'Terms of Service', href: '/terms-of-service' },
//         { name: 'Privacy Policy', href: '/privacy-policy' },
//         { name: 'Refund Policy', href: '#' }
//       ]
//     },
//     {
//       id: 'company',
//       title: 'Company Info',
//       links: [
//         { name: 'About Growniq', href: '/about-us' },

//         { name: 'Careers', href: '#' },
//         { name: 'Partners', href: '#' }
//       ]
//     }
//   ];

//   return (
//     <footer className="lg:hidden bg-[#164925] text-white border-t border-[rgba(255,255,255,0.1)] pb-28">
//       <div className="container mx-auto px-5 py-8">

//         {/* Brand Logo */}
//         <div className="mb-6 flex justify-start pl-1">
//           <BrandLogoIcon className="h-8 w-auto text-white" />
//         </div>

//         {/* Accordion Sections */}
//         <div className="space-y-0">

//           {/* Support Center Accordion */}
//           <div className="border-b border-white/10">
//             <button
//               onClick={() => toggleSection('support')}
//               className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
//             >
//               <span className="text-sm font-semibold font-poppins text-white">Support Center</span>
//               <span className="text-xl font-light text-white/80 pr-1">
//                 {openSection === 'support' ? '×' : '+'}
//               </span>
//             </button>
//             <div
//               className={`overflow-hidden transition-all duration-300 ${openSection === 'support' ? 'max-h-48 pb-5' : 'max-h-0'
//                 }`}
//             >
//               <div className="space-y-4 text-xs font-nunito pl-1">
//                 <div>
//                   <p className="text-white/60 mb-1">Email</p>
//                   <a href="mailto:contact@growniq.in" className="text-white text-sm hover:underline">
//                     contact@growniq.in
//                   </a>
//                 </div>
//                 <div>
//                   <p className="text-white/60 mb-1">Contact Number</p>
//                   <a href="tel:+919717104342" className="text-white text-sm hover:underline">
//                     +91 - 9717104342
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Links Accordions */}
//           {footerSections.map((section) => (
//             <div key={section.id} className="border-b border-white/10">
//               <button
//                 onClick={() => toggleSection(section.id)}
//                 className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
//               >
//                 <span className="text-sm font-semibold font-poppins text-white">{section.title}</span>
//                 <span className="text-xl font-light text-white/80 pr-1">
//                   {openSection === section.id ? '×' : '+'}
//                 </span>
//               </button>

//               <div
//                 className={`overflow-hidden transition-all duration-300 ${openSection === section.id ? 'max-h-60 pb-4' : 'max-h-0'
//                   }`}
//               >
//                 <ul className="space-y-3.5 pl-1 font-nunito">
//                   {section.links.map((link, index) => (
//                     <li key={index}>
//                       {link.isDownloadTrigger ? (
//                         <a
//                           href="#"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank");
//                           }}
//                           className="text-sm text-white/80 hover:text-white transition-colors"
//                         >
//                           {link.name}
//                         </a>
//                       ) : (
//                         <Link
//                           href={link.href}
//                           className="text-sm text-white/80 hover:text-white transition-colors"
//                         >
//                           {link.name}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Download App Section */}
//         <div className="mt-12 text-center">
//           <h4 className="text-sm font-semibold font-poppins mb-5 text-white">Download The Growniq App</h4>
//           <div className="flex justify-center items-center gap-3">
//             {/* Google Play Button */}
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setIsDownloadOpen(true);
//               }}
//               className="flex items-center gap-2 px-3 py-1.5 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors w-[145px] justify-center bg-[#164925]"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="shrink-0">
//                 <path d="M11.405 11.8116L3.07471 20.3797C3.17035 20.7038 3.33963 21.0023 3.56981 21.2529C3.79998 21.5034 4.08506 21.6994 4.40358 21.8262C4.72209 21.9529 5.06573 22.007 5.40864 21.9845C5.75155 21.9619 6.08477 21.8633 6.38324 21.696L15.7564 16.4552L11.405 11.8116Z" />
//                 <path d="M19.8285 10.3551L15.7751 8.07599L11.2126 12.0066L15.7937 16.443L19.8161 14.1883C20.073 14.0572 20.301 13.8775 20.4869 13.6597C20.6729 13.4418 20.8132 13.19 20.8997 12.9188C20.9862 12.6475 21.0173 12.3621 20.9911 12.0791C20.9649 11.796 20.882 11.5208 20.7472 11.2692C20.5367 10.8801 20.2124 10.5617 19.8161 10.3551H19.8285Z" />
//                 <path d="M3.07449 4.12103C3.02492 4.30394 2.99988 4.49241 3 4.68168V19.8191C2.99988 20.0084 3.02492 20.1969 3.07449 20.3798L11.6903 12.031L3.07449 4.12103Z" />
//                 <path d="M11.4671 12.2504L15.775 8.076L6.41427 2.8108C6.062 2.60859 5.66156 2.50137 5.25349 2.5C4.76062 2.49905 4.28094 2.65633 3.88758 2.94789C3.49422 3.23944 3.20876 3.64928 3.07471 4.11491L11.4671 12.2504Z" />
//               </svg>
//               <div className="text-left leading-tight">
//                 <p className="text-[7px] uppercase font-nunito tracking-wider text-white/70">Get it on</p>
//                 <p className="text-[11px] font-semibold font-poppins text-white">Google Play</p>
//               </div>
//             </a>

//             {/* Apple Store Button */}
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setIsDownloadOpen(true);
//               }}
//               className="flex items-center gap-2 px-3 py-1.5 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors w-[145px] justify-center bg-[#164925]"
//             >
//               <AppleIcon className="w-5 h-5 shrink-0 text-white fill-white" />
//               <div className="text-left leading-tight">
//                 <p className="text-[7px] uppercase font-nunito tracking-wider text-white/70">Download on the</p>
//                 <p className="text-[11px] font-semibold font-poppins text-white">App Store</p>
//               </div>
//             </a>
//           </div>
//         </div>

//         {/* Social Media Section */}
//         <div className="mt-12 text-center">
//           <h4 className="text-sm font-semibold font-poppins mb-4 text-white">Follow Us</h4>
//           <div className="flex items-center justify-center gap-4">
//             <a href="#" className="hover:opacity-85 transition-opacity" aria-label="Facebook">
//               <FacebookIcon className="w-7 h-7" />
//             </a>
//             <a href="#" className="hover:opacity-85 transition-opacity" aria-label="Twitter">
//               <TwitterIcon className="w-7 h-7" />
//             </a>
//             <a href="#" className="hover:opacity-85 transition-opacity" aria-label="Instagram">
//               <InstagramIcon className="w-7 h-7" />
//             </a>
//             <a href="#" className="hover:opacity-85 transition-opacity" aria-label="YouTube">
//               <YouTubeIcon className="w-7 h-7" />
//             </a>
//             <a href="#" className="hover:opacity-85 transition-opacity" aria-label="LinkedIn">
//               <LinkedInIcon className="w-7 h-7" />
//             </a>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 pt-6 border-t border-white/10 text-center">
//           <p className="text-xs text-white/50 font-nunito">© 2025 Growniq. All rights reserved.</p>
//         </div>
//       </div>

//       {/* Sticky Bottom Bar */}
//       <div className="fixed bottom-0 left-0 right-0 bg-[#FFFAF3] border-t border-[#164925]/10 py-3 px-5 z-40 flex flex-col items-center gap-2 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
//         <span className="text-[#164925] text-xs font-semibold font-poppins">
//           Download Growniq App
//         </span>
//         <div className="flex items-center justify-center gap-3 w-full">
//           {/* Google Play Button */}
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               setIsDownloadOpen(true);
//             }}
//             className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors w-[145px] justify-center bg-[#164925]"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="shrink-0">
//               <path d="M11.405 11.8116L3.07471 20.3797C3.17035 20.7038 3.33963 21.0023 3.56981 21.2529C3.79998 21.5034 4.08506 21.6994 4.40358 21.8262C4.72209 21.9529 5.06573 22.007 5.40864 21.9845C5.75155 21.9619 6.08477 21.8633 6.38324 21.696L15.7564 16.4552L11.405 11.8116Z" />
//               <path d="M19.8285 10.3551L15.7751 8.07599L11.2126 12.0066L15.7937 16.443L19.8161 14.1883C20.073 14.0572 20.301 13.8775 20.4869 13.6597C20.6729 13.4418 20.8132 13.19 20.8997 12.9188C20.9862 12.6475 21.0173 12.3621 20.9911 12.0791C20.9649 11.796 20.882 11.5208 20.7472 11.2692C20.5367 10.8801 20.2124 10.5617 19.8161 10.3551H19.8285Z" />
//               <path d="M3.07449 4.12103C3.02492 4.30394 2.99988 4.49241 3 4.68168V19.8191C2.99988 20.0084 3.02492 20.1969 3.07449 20.3798L11.6903 12.031L3.07449 4.12103Z" />
//               <path d="M11.4671 12.2504L15.775 8.076L6.41427 2.8108C6.062 2.60859 5.66156 2.50137 5.25349 2.5C4.76062 2.49905 4.28094 2.65633 3.88758 2.94789C3.49422 3.23944 3.20876 3.64928 3.07471 4.11491L11.4671 12.2504Z" />
//             </svg>
//             <div className="text-left leading-tight">
//               <p className="text-[7px] uppercase font-nunito tracking-wider text-white/70">Get it on</p>
//               <p className="text-[11px] font-semibold font-poppins text-white">Google Play</p>
//             </div>
//           </a>

//           {/* Apple Store Button */}
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault();
//               setIsDownloadOpen(true);
//             }}
//             className="flex items-center gap-2 px-3 py-1.5 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors w-[145px] justify-center bg-[#164925]"
//           >
//             <AppleIcon className="w-5 h-5 shrink-0 text-white fill-white" />
//             <div className="text-left leading-tight">
//               <p className="text-[7px] uppercase font-nunito tracking-wider text-white/70">Download on the</p>
//               <p className="text-[11px] font-semibold font-poppins text-white">App Store</p>
//             </div>
//           </a>
//         </div>
//       </div>

//       <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
//     </footer>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BrandLogoIcon, InstagramIcon, LinkedInIcon, YouTubeIcon, FacebookIcon, TwitterIcon, AppleIcon } from './icons';
import Link from 'next/link';
import DownloadModal from './DownloadModal';
import Image from 'next/image';

export default function MobileFooter() {
  const [openSection, setOpenSection] = useState('support');
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Homepage: show sticky bar only after the Hero section scrolls out of view.
  // All other pages: always show the sticky bar immediately.
  useEffect(() => {
    if (!isHomePage) {
      // On non-home pages — always show the sticky bar
      setShowStickyBar(true);
      return;
    }

    // On the homepage — start hidden and watch the hero section
    setShowStickyBar(false);

    const heroEl = document.getElementById('hero-section');
    if (!heroEl) {
      // Hero element not found on homepage — keep bar hidden
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(entry.boundingClientRect.bottom <= 0);
      },
      { threshold: 0 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [isHomePage]);

  const footerSections = [
    {
      id: 'links',
      title: 'Important Links',
      links: [
        { name: 'Services', href: '/#expert-services' },
        // { name: 'Pricing', href: '#', isDownloadTrigger: true },
        { name: 'About Us', href: '/about-us' },
        // { name: 'Blog', href: '#' }
      ]
    },
    {
      id: 'policies',
      title: 'Our Policies',
      links: [
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        // { name: 'Refund Policy', href: '#' }
      ]
    },
    // {
    //   id: 'company',
    //   title: 'Company Info',
    //   links: [
    //     { name: 'About Growniq', href: '/about-us' },

    //     { name: 'Careers', href: '#' },
    //     { name: 'Partners', href: '#' }
    //   ]
    // }
  ];

  return (
    <footer className="lg:hidden bg-[#164925] text-white border-t border-[rgba(255,255,255,0.1)] pb-28">
      <div className="container mx-auto px-5 py-8">

        {/* Brand Logo */}
        <div className="mb-6 flex justify-start pl-1">
          <BrandLogoIcon className="h-8 w-auto text-white" />
        </div>

        {/* Accordion Sections */}
        <div className="space-y-0">

          {/* Support Center Accordion */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleSection('support')}
              className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
            >
              <span className="text-[16px] font-nunito font-poppins text-white">Support Center</span>
              <span className="text-xl font-light text-white/80 pr-1">
                {openSection === 'support' ? '×' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openSection === 'support' ? 'max-h-48 pb-5' : 'max-h-0'
                }`}
            >
              <div className="space-y-4 text-[13px] font-semibold pl-1">
                <div>
                  <p className="text-white/60 mb-1">Email</p>
                  <a href="mailto:contact@growniq.in" className="text-white text-sm hover:underline">
                    contact@growniq.in
                  </a>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Contact Number</p>
                  <a href="tel:+919717104342" className="text-white text-sm hover:underline">
                    +91 - 9717104342
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Accordions */}
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-white/10">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
              >
                <span className="text-[16px] font-nunito font-poppins text-white">{section.title}</span>
                <span className="text-xl font-light text-white/80 pr-1">
                  {openSection === section.id ? '×' : '+'}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openSection === section.id ? 'max-h-60 pb-4' : 'max-h-0'
                  }`}
              >
                <ul className="space-y-3.5 pl-1 font-nunito">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      {link.isDownloadTrigger ? (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            // window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank");
                          }}
                          className="text-[13px] text-white/80 hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[13px] text-white/80 hover:text-white transition-colors"
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

        {/* Download App Section */}
        {/* <div className="mt-12 text-center">
          <h4 className="text-[16px] font-nunito font-poppins mb-5 text-white">Download The Growniq App</h4>
          <div className="flex justify-center items-center gap-3">

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsDownloadOpen(true);
              }}
              className="flex items-center gap-2 px-3 py-1.5 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors w-[145px] justify-center bg-[#164925]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" className="shrink-0">
                <path d="M11.405 11.8116L3.07471 20.3797C3.17035 20.7038 3.33963 21.0023 3.56981 21.2529C3.79998 21.5034 4.08506 21.6994 4.40358 21.8262C4.72209 21.9529 5.06573 22.007 5.40864 21.9845C5.75155 21.9619 6.08477 21.8633 6.38324 21.696L15.7564 16.4552L11.405 11.8116Z" />
                <path d="M19.8285 10.3551L15.7751 8.07599L11.2126 12.0066L15.7937 16.443L19.8161 14.1883C20.073 14.0572 20.301 13.8775 20.4869 13.6597C20.6729 13.4418 20.8132 13.19 20.8997 12.9188C20.9862 12.6475 21.0173 12.3621 20.9911 12.0791C20.9649 11.796 20.882 11.5208 20.7472 11.2692C20.5367 10.8801 20.2124 10.5617 19.8161 10.3551H19.8285Z" />
                <path d="M3.07449 4.12103C3.02492 4.30394 2.99988 4.49241 3 4.68168V19.8191C2.99988 20.0084 3.02492 20.1969 3.07449 20.3798L11.6903 12.031L3.07449 4.12103Z" />
                <path d="M11.4671 12.2504L15.775 8.076L6.41427 2.8108C6.062 2.60859 5.66156 2.50137 5.25349 2.5C4.76062 2.49905 4.28094 2.65633 3.88758 2.94789C3.49422 3.23944 3.20876 3.64928 3.07471 4.11491L11.4671 12.2504Z" />
              </svg>
              <div className="text-left leading-tight">
                <p className="text-[7px] uppercase font-nunito tracking-wider text-white/70">Get it on</p>
                <p className="text-[11px] font-semibold font-poppins text-white">Google Play</p>
              </div>
            </a>


            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsDownloadOpen(true);
              }}
              className="flex items-center gap-2 px-3 py-1.5 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors w-[145px] justify-center bg-[#164925]"
            >
              <AppleIcon className="w-5 h-5 shrink-0 text-white fill-white" />
              <div className="text-left leading-tight">
                <p className="text-[7px] uppercase font-nunito tracking-wider text-white/70">Download on the</p>
                <p className="text-[11px] font-semibold font-poppins text-white">App Store</p>
              </div>
            </a>
          </div>
        </div> */}

        {/* Social Media Section */}
        <div className="mt-12 text-left">
          <h4 className="text-[13px] font-nunito font-poppins mb-4 text-white">Follow Us</h4>
          <div className="flex items-start justify-start gap-4">
            <a href="#" className="hover:opacity-85 transition-opacity" aria-label="Facebook">
              <FacebookIcon className="w-7 h-7" />
            </a>
            <a href="#" className="hover:opacity-85 transition-opacity" aria-label="Twitter">
              <TwitterIcon className="w-7 h-7" />
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

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50 font-nunito">© 2025 Growniq. All rights reserved.</p>
        </div>
      </div>

      {/* Sticky Bottom Bar - slides in only after Hero has scrolled out of view */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-[#FFFAF3] border-t border-[#164925]/10 py-3 px-5 z-40 flex flex-col items-center gap-2 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-out ${showStickyBar ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <span className="text-[#164925] text-[16px] font-semibold font-poppins">
          Download Growniq App
        </span>
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="flex flex-row items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsDownloadOpen(true);
              }}
              className="hover:opacity-90 transition-opacity"
            >
              <Image src="/images/608.svg" alt="Download on the Apple Store" width={180} height={50} className="object-contain h-[50px] md:h-[50px] w-auto" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsDownloadOpen(true);
              }}
              className="hover:opacity-90 transition-opacity"
            >
              <Image src="/images/609.svg" alt="Get it on Google Play" width={180} height={50} className="object-contain h-[50px] md:h-[50px] w-auto" />
            </a>
          </div>
        </div>
      </div>

      <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </footer>
  );
}
