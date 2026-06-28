'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GreenApple, GooglePlayIcon } from './icons';
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

            <section className="hidden md:block bg-[#FFFAF3] py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">

                        <div className="">
                            <Image
                                src="/images/login-screen.png"
                                alt="Login Screen"
                                className="rounded-lg"
                                width={315}
                                height={500}
                            />
                        </div>
                        <div className=" mt-8">
                            <Image
                                src="/images/qr-screen.png"
                                alt="QR Screen"
                                className="rounded-lg"
                                width={580}
                                height={540}
                            />
                            <div className="flex justify-start items-center gap-3 pt-2">
                                <div className="flex items-center gap-3">
                                    <a
                                        href="#"
                                        className="cursor-pointer"
                                        onClick={handleStoreClick}
                                    >
                                        <GreenApple className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="#"
                                        className="cursor-pointer"
                                        onClick={handleStoreClick}
                                    >
                                        <GooglePlayIcon className="w-6 h-6" />
                                    </a>
                                </div>
                                <span 
                                    className="text-sm text-green font-medium cursor-pointer"
                                    onClick={handleStoreClick}
                                >
                                    Download the app
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}
