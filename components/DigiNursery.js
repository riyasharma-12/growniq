import React from 'react';

export default function DigiNursery() {
    return (
        <div className="bg-[#D7EBE7] text-green py-8 md:py-0 md:pb-12 -mt-[1px]">
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-start flex-col-reverse md:flex-row" >
                <div className="md:pt-[109px] md:basis-[496px]">
                    <img className='hidden md:block' src="/images/growniq-green-logo.svg" alt="logo" width={131} />

                    <h2 className='md:mt-[52px] !text-[42px] md:text-5xl !font-bold !md:leading-12 !leading-[55px]'>Growniq <span className='block'>Digi-nursery </span></h2>

                    <p className='mt-[30px]'>
                        The first-ever marketplace that brings all nearby nurseries and garden stores to your Growniq app.
                    </p>

                    <ul className='mt-[30px] flex gap-3 flex-wrap'>

                        <li className='bg-white flex gap-2 py-2 px-3 rounded-3xl animate-float-1 hover:shadow-md transition-shadow'>
                            <img src="images/plant.svg" alt="palnts" />
                            <span>Plants</span>
                        </li>

                        <li className='bg-white flex gap-2 py-2 px-3 rounded-3xl animate-float-2 hover:shadow-md transition-shadow'>
                            <img src="images/pots.svg" alt="palnts" />
                            <span>Pots</span>
                        </li>

                        <li className='bg-white flex gap-2 py-2 px-3 rounded-3xl animate-float-3 hover:shadow-md transition-shadow'>
                            <img src="images/seeds.svg" alt="palnts" />
                            <span>Seeds</span>
                        </li>

                        <li className='bg-white flex gap-2 py-2 px-3 rounded-3xl animate-float-4 hover:shadow-md transition-shadow'>
                            <img src="images/tools.svg" alt="palnts" />
                            <span>Tools</span>
                        </li>

                        <li className='bg-white flex gap-2 py-2 px-3 rounded-3xl animate-float-5 hover:shadow-md transition-shadow'>
                            <img src="images/diy-kits.svg" alt="palnts" />
                            <span>DIY Kits</span>
                        </li>

                        <li className='bg-white flex gap-2 py-2 px-3 rounded-3xl animate-float-6 hover:shadow-md transition-shadow'>
                            <img src="images/Fertilizer.svg" alt="Fertilizer" />
                            <span>Fertilizer</span>
                        </li>

                    </ul>

                    <button className='md:mt-[70px] mt-8 bg-green text-white py-2 px-5 rounded-[10px] w-full md:w-[318px]'>
                        Explore Digi Nursery
                    </button>
                </div>

                <div className="image">
                    <img className='hidden md:block' src="images/Digi-Nursery-D.png" alt="DigiNursery" />
                    <img className='md:hidden mb-[60px] block' src="images/growniq-green-logo.svg" alt="logo" width={131} />
                    <img className='md:hidden mb-[60px] block' src="images/Digi-Nursery-M.png" alt="DigiNursery" />
                </div>

            </div>
        </div>
    );
}
