'use client';

import { useState } from 'react';
import Image from 'next/image';
import DownloadModal from './DownloadModal';

export default function DownloadWidget() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStoreClick = (e) => {
        e.preventDefault();
        window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank");
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {/* Mobile-only widget */}
            <section className="md:hidden mobiDownloadSection relative overflow-hidden px-5 py-12">
                <div className="relative z-10 text-center">
                    <h2 className="text-[#164925] text-[22px] font-medium">Download <br /> The Growniq App</h2>
                    <p className="mt-2 text-[#164925] text-[16px] leading-[normal]">
                        See what's new & exciting you can do with your green area with hassle free gardening services.
                    </p>

                    {/* Store card */}
                    <div className="rounded-2xl w-[264px] mx-auto flex justify-center items-center gap-3 flex-col mt-14 p-8 border border-[#B0F0FF] bg-[linear-gradient(128deg,rgba(255,255,255,0.6)_4.42%,rgba(153,153,153,0.2)_96.7%)] shadow-[0_4px_44px_0_rgba(16,36,45,0.16)]">
                        <a href="#" className="cursor-pointer" onClick={handleStoreClick}>
                            <Image src="/images/app-store.png" alt="app store" width={195} height={60} className="object-cover" />
                        </a>
                        <a href="#" className="cursor-pointer" onClick={handleStoreClick}>
                            <Image src="/images/play-store.png" alt="google play" width={195} height={60} className="object-cover" />
                        </a>
                    </div>
                </div>

                {/* Decorative leaf bottom image */}
                {/* <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none">
                <Image src="/images/download-bg.png" alt="Leaves" width={360} height={400} className="w-full h-40 object-cover object-bottom" />
            </div> */}
            </section>
            
            {/* Modal component - rendered at the root level */}
            <DownloadModal open={isModalOpen} onClose={handleCloseModal} />

            <section className="hidden md:block bg-[#FFFAF3] py-16 lg:py-20 -mt-[1px] overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
                    <div className="relative rounded-[32px] bg-gradient-to-br from-[#d7ebe7] to-[#e8f5f0] p-12 lg:p-16 min-h-[476px] overflow-hidden">
                        
                        {/* Left Content */}
                        <div className="relative z-10 max-w-[633px]">
                            <div className="space-y-6">
                                <h2 className="text-4xl lg:text-[56px] font-semibold text-[#164925] leading-tight font-poppins">
                                    Download the Growniq App
                                </h2>
                                <p className="text-base lg:text-lg text-[#164925]/80 max-w-[424px] font-nunito leading-relaxed">
                                    Everything you need for gardening and plant care, made easy & quick.
                                </p>
                            </div>
                            
                            {/* Store Badges */}
                            <div className="flex items-center gap-4 mt-10">
                                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" onClick={handleStoreClick}>
                                    <Image src="/images/app-store.png" alt="Download on the Apple Store" width={207} height={60} className="object-contain h-[60px] w-auto hover:opacity-90 transition-opacity" />
                                </a>
                                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" onClick={handleStoreClick}>
                                    <Image src="/images/play-store.png" alt="Get it on Google Play" width={196} height={60} className="object-contain h-[60px] w-auto hover:opacity-90 transition-opacity" />
                                </a>
                            </div>
                        </div>

                        {/* Right Decorative Elements */}
                        <div className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none">
                            {/* Decorative leaf line */}
                            <div className="absolute left-0 top-[80px] w-[3px] h-[70%] bg-[#164925]/10 rounded-full"></div>
                            
                            {/* Top-right masked image blob */}
                            <div className="absolute right-8 top-12 w-[280px] h-[280px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-lg opacity-90">
                                <img 
                                    src="/images/service-1.png" 
                                    alt="Gardening" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Bottom-left masked image blob */}
                            <div className="absolute left-12 bottom-0 w-[240px] h-[250px] rounded-[60%_40%_30%_70%/50%_60%_40%_50%] overflow-hidden shadow-lg opacity-85">
                                <img 
                                    src="/images/service-2.png" 
                                    alt="Plant care" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

