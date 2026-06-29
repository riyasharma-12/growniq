'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const slides = [
    '/images/Gardening-Image-atf-3.png',
    '/images/AI-Plant-atf-2.png',
    '/images/Growniq-Online-atf-4.png',
    '/images/Indoor-Plant-atf-5.png',
    '/images/Top-Image.png',


  ];
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [nextSlide, isPaused]);

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrent(index);
  };


  const handleGetQuote = (e) => {
    e.preventDefault();
    setIsContactOpen(true);
  };

  return (
    <section className="heroBanner py-0 sm:py-12 lg:py-16">
      <div className=" container mx-auto px-0 md:px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-1 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="topBanner-bg px-4 space-y-6 lg:space-y-8 relative">
            {/* Menu Button + Phone Row - Hidden on desktop per Figma (hidden="true" on node 1:395) */}
            <div className=''>
              <h1 className="text-[26px] md:text-5xl font-medium text-[#164925] md:leading-[56px]">
                All your green needs, Services, Store &amp; AI care in one app.
              </h1>
              <p className="mt-2 text-sm md:text-base text-[#164925]">
                Verified professionals &nbsp;•&nbsp; Transparent pricing &nbsp;•&nbsp; Eco-friendly care
              </p>
            </div>
            {/* <div className='leafArrow absolute top-11 right-7 md:hidden'>
              <Image src="/images/arrow-graphic.svg" alt="leaf-arrow" width={75} height={170} />
            </div> */}

            {/* Quote Form */}
            <div className="bg-[rgba(255,249,240,0.65)] backdrop-blur-md border border-white/60 shadow-lg p-6 md:p-8 rounded-2xl">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {/* Select Service */}
                  <div>
                    <label className="block text-sm font-medium text-[#164925] mb-2">
                      Select Service
                    </label>
                    <div className='relative'>
                      <div className='absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g opacity="0.5">
                            <path d="M4 6L8 10L12 6" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                        </svg>
                      </div>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="appearance-none h-12 w-full px-3 py-2 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] focus:outline-none focus:ring-1 focus:ring-[#164925] focus:border-transparent"
                        required
                      >
                        <option value="">Choose a service</option>
                        <option value="book-a-gardener">Book a Gardner</option>
                        <option value="monthly-plant-care">Monthly plant care</option>
                        <option value="lawn-maintenance">Lawn Maintenance</option>
                        <option value="terrace-garden-maintenance">Terrace Garden Maintenance</option>
                        <option value="new-home-plant-setup">New Home Plant Setup</option>
                        <option value="garden-heavy-work">Garden Heavy Work</option>
                        <option value="workspace-plant-care">Workspace Plant Care</option>
                        <option value="plant-repotting">Plant Repotting</option>
                      </select>


                    </div>
                  </div>

                  {/* Enter Location */}
                  <div>
                    <label className="block text-sm font-medium text-[#164925] mb-2">
                      Enter Pincode
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your location"
                      className="h-12 w-full px-3 py-2 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] focus:outline-none focus:ring-1 focus:ring-[#164925] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleGetQuote}
                  className="w-full text-base px-6 py-3 bg-[#164925] text-white font-medium rounded-lg hover:bg-[#1a5c3a] transition hover:shadow-lg"
                >
                  Get Instant Quote
                </button>
              </form>

              {/* Stats */}
              <div className="flex items-center justify-between flex-row gap-6 mt-6 pt-6 border-t border-dashed border-[rgba(22,73,37,0.2)]">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white relative overflow-hidden">
                      <Image src="/images/avtar-1.png" alt="Professional gardener at work" fill className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white relative overflow-hidden">
                      <Image src="/images/avtar-2.png" alt="Professional gardener at work" fill className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white relative overflow-hidden">
                      <Image src="/images/avtar-3.png" alt="Professional gardener at work" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold text-[#164925]">1000+</div>
                    <div className="text-[#164925] whitespace-nowrap">Users actively booking</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-right">
                  <div className="font-semibold text-[#164925] flex items-center justify-end gap-1">
                    5/5
                    <div className="flex text-[#164925]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-[#164925] whitespace-nowrap">Rating by users</div>
                </div>
              </div>
            </div>

            {/* Contact Bottom Sheet / Desktop Modal */}
            {isContactOpen && (
              <div
                role="dialog"
                aria-modal="true"
                className="fixed inset-0 z-[60] !mt-0"
              >
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-black/80 opacity-100 transition-opacity top-0"
                  onClick={() => setIsContactOpen(false)}
                />
                {/* Panel */}
                <div
                  className="absolute left-0 right-0 bottom-0 lg:inset-0 lg:flex lg:items-center lg:justify-center"
                >
                  {/* Mobile: Bottom sheet. Desktop: Centered card */}
                  <div className="mx-auto w-full max-w-md bg-white rounded-t-2xl lg:rounded-2xl shadow-xl p-6 lg:p-7 transform transition-transform duration-300 ease-out translate-y-0 lg:translate-y-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-medium text-[#164925]">Get in touch!</h3>
                      <button
                        aria-label="Close"
                        className="-m-2 p-2 rounded"
                        onClick={() => setIsContactOpen(false)}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="black">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-[#164925] mt-1 mb-4">Please give us information and we will get back to you as soon as possible.</p>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsContactOpen(false);
                        alert('Thanks! We will get back to you soon.');
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm text-[#164925] mb-2">Name<span className="text-[#f00]">*</span></label>
                        <input type="text" required className="w-full h-11 rounded-md border border-green px-3 outline-none text-black" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm text-[#164925] mb-2">Mobile Number <span className="text-[#f00]">*</span></label>
                        <input type="tel" required className="w-full h-11 rounded-md border border-green px-3 outline-none text-black" placeholder="Enter mobile number" />
                      </div>
                      <button type="submit" className="w-full rounded-md bg-[#164925] text-white py-2.5 hover:bg-[#1a5c3a]">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div
              className="relative rounded-none sm:rounded-3xl overflow-hidden"
              onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
              onTouchMove={(e) => setTouchEndX(e.changedTouches[0].clientX)}
              onTouchEnd={() => {
                if (touchStartX === null || touchEndX === null) return;
                const delta = touchEndX - touchStartX;
                if (Math.abs(delta) > 40) {
                  if (delta < 0) {
                    setCurrent((prev) => (prev + 1) % slides.length);
                  } else {
                    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
                  }
                }
                setTouchStartX(null);
                setTouchEndX(null);
              }}
            >
              {/* <Image src="/images/gardner-2.png" alt="Professional gardener at work" width={662} height={662} className="object-cover w-full h-full transition-opacity duration-300" /> */}
              <div 
                className="w-full h-[202px] md:h-[580px] relative overflow-hidden"
                // onMouseEnter={() => setIsPaused(true)}
                // onMouseLeave={() => setIsPaused(false)}
              >
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-[202px] md:h-[580px]"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 md:hidden" >
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index ? 'bg-white w-6' : 'bg-white/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="hidden md:block">
                <div className="h-11 p-[2px] absolute rounded-full bg-gradient-to-b from-gray-200/20 to-gray-300/14 backdrop-blur-md bottom-8 left-1/2 -translate-x-1/2 flex">
                  <button
                    className="w-10 h-10 rounded-full bg-[rgba(255, 255, 255, 0.20)] hover:bg-[rgba(255, 255, 255, 0.30)] hover:backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                      <path d="M5.04004 0.499956L0.500039 5.03996L5.04004 9.57996" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-[rgba(255, 255, 255, 0.20)] hover:bg-[rgba(255, 255, 255, 0.30)] hover:backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M0.5 0.499977L4.813 4.81298L0.5 9.12598" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
