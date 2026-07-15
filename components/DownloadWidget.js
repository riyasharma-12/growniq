'use client';

import { useState } from 'react';
import Image from 'next/image';
import DownloadModal from './DownloadModal';

export default function DownloadWidget() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStoreClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {/* Modal component - rendered at the root level */}
            <DownloadModal open={isModalOpen} onClose={handleCloseModal} />

            <section className="bg-[#FFFAF3] pb-16 md:pb-20 -mt-[1px]">
                <div className="container mx-auto px-4 sm:px-1 max-w-[1200px]">
                    {/* Desktop View (md and above) */}
                    <div className="hidden md:block relative w-full aspect-[1208/484] max-w-[1208px] mx-auto overflow-hidden">
                        <img
                            src="/images/reviews1.svg"
                            alt="Download Growniq App"
                            className="w-full h-full object-contain"
                        />
                        {/* Apple Store Button Overlay */}
                        <a
                            href="#"
                            onClick={handleStoreClick}
                            className="absolute left-[5.6%] top-[61.5%] w-[14.5%] h-[12.5%] cursor-pointer"
                            aria-label="Download on the App Store"
                        />
                        {/* Google Play Button Overlay */}
                        <a
                            href="#"
                            onClick={handleStoreClick}
                            className="absolute left-[21.8%] top-[61.5%] w-[13.8%] h-[12.5%] cursor-pointer"
                            aria-label="Get it on Google Play"
                        />
                    </div>

                    {/* Mobile View (below md) */}
                    <div className="block md:hidden relative w-full aspect-[328/626] max-w-[400px] mx-auto overflow-hidden">
                        <img
                            src="/images/reviews3.svg"
                            alt="Download Growniq App"
                            className="w-full h-full object-contain"
                        />
                        {/* Google Play Button Overlay */}
                        <a
                            href="#"
                            onClick={handleStoreClick}
                            className="absolute left-[11%] top-[38%] w-[39%] h-[8.5%] cursor-pointer"
                            aria-label="Get it on Google Play"
                        />
                        {/* Apple Store Button Overlay */}
                        <a
                            href="#"
                            onClick={handleStoreClick}
                            className="absolute left-[51.5%] top-[38%] w-[38%] h-[8.5%] cursor-pointer"
                            aria-label="Download on the App Store"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

