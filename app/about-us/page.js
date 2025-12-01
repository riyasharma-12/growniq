'use client';

import { LeafIcon } from '@/components/icons';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-[#FFFAF3]">
            {/* Hero Section */}
            <div className="relative text-white md:py-10 ">
                <div className="container  bg-green mx-auto px-4 flex items-center justify-between md:rounded-[32px] py-5 md:pt-5 md:pb-5 md:pl-20 md:pr-5 flex-col md:flex-row">
                    <div className=" ">
                        <span className=" bg-[#FFE9CA] py-1 px-5 rounded-[32px] text-green text-base uppercase">About Us</span>
                        <h1 className=" mt-[60px] text-5xl font-medium leading-10 text-[#FFFAF3] ">We’re Growniq <span className=""> <img className='inline' src="/images/about-us-icon.svg" alt="" /> </span></h1>
                        <p className="mt-[30px] text-[#FFFAF3] text-[20px] font-normal " >
                            Making Gardening <br /> Simple, Smart & Accessible for Everyone
                        </p>
                    </div>


                    <div className="image">
                        <Image src="/images/about-us-image.png" alt="Logo" width={550} height={287} />
                    </div>
                </div>
            </div>

            <div className='md:text-center md:px-[123px] px-4 py-5 pb-[64px]'>
                <h2 className='text-green text-xl md:text-4xl mb-4 md:mb-10'>The Journey</h2>
                <p className='text-green text-base font-normal leading-7 mb-12'>
                    Growniq was born in 2024 with a simple belief creating beautiful green spaces shouldn’t be complicated. What began as a small, passionate team offering garden care and landscaping services in Delhi-NCR quickly revealed a universal truth: people love greenery, but managing it is often overwhelming. Finding trustworthy gardeners, sourcing quality plants, coordinating maintenance, and keeping everything healthy took too much effort.
                </p>

                <h2 className='text-green text-xl md:text-4xl mb-4 md:mb-10'>
                    So, we decided to reimagine the entire experience.
                </h2>
                <p className='text-green text-base font-normal leading-7 mb-12'>
                    Growniq is being built as a smart, all-in-one platform that brings every green need together from expert garden care and landscaping to online plant shopping, AI plant guidance, and professional services for homes, cafés, offices, and communities. One app, one tap, and your green world is beautifully managed.
                </p>
                <h2 className='text-green text-xl md:text-4xl mb-4 md:mb-10'>
                    Our vision goes beyond convenience.
                </h2>
                <p className='text-green text-base font-normal leading-7 mb-12'>
                    We aim to make gardening effortless, joyful, and sustainable for everyone nurturing greener homes, connected communities, and healthier cities. Through our CSR and corporate green programs, Growniq also helps organizations create real environmental impact with plantation drives, rooftop gardens, urban forests, and community initiatives.
                </p>

                <img className='flex items-center justify-center mx-auto' src="/images/bottom-bar.png" alt="bottom-bar" />

                <p className='text-green text-[20px] font-normal leading-7 mt-12'>
                    What began as a simple idea is now growing into a movement a future where technology, design, and nature work together, and where every green need from care to creativity is always within reach.
                </p>
            </div>

        </div>
    );
}
