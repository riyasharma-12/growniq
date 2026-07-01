'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
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
    <section className="heroBanner py-0 lg:py-16">
      <div className="container mx-auto px-0 lg:px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-start">

          {/* Left Content */}
          <div className="topBanner-bg px-4 lg:px-0 space-y-5 lg:space-y-6 relative">
            {/* Heading */}
            <div>
              <h1 className="hidden lg:block text-[26px] lg:text-[40px] font-medium text-[#164925] leading-[34px] lg:leading-[52px]">
                All your green needs, Services, Store &amp; AI care in one app <Image src="/images/Subtract.png" alt="" width={21} height={26} className="inline-block ml-1 -mt-1 w-[18px] h-[22px] lg:w-[21px] lg:h-[26px]" />
              </h1>

              <h1 className=" mt-4 lg:hidden text-[26px] lg:text-[40px] font-medium text-[#164925] leading-[34px] lg:leading-[52px]">
                All your green needs,  <br />  Services, Store &amp; <br /> AI care in one app <Image src="/images/Subtract.png" alt="" width={21} height={26} className="inline-block ml-1 -mt-1 w-[18px] h-[22px] lg:w-[21px] lg:h-[26px]" />
              </h1>

              {/* Desktop subtitle - inline with dots */}
              <p className="hidden lg:block mt-3 text-[14px] text-[#164925] font-nunito">
                Verified professionals &nbsp;•&nbsp; Transparent pricing &nbsp;•&nbsp; Eco-friendly care
              </p>

              {/* Mobile bullet points */}
              <ul className="lg:hidden mt-6 mb-6 space-y-1.5">
                <li className="flex items-center gap-2 text-[18px] text-[#164925] font-nunito">
                  <span className="w-[5px] h-[5px] bg-[#164925] rounded-full flex-shrink-0"></span>
                  Verified professionals
                </li>
                <li className="flex items-center gap-2 text-[18px] text-[#164925] font-nunito">
                  <span className="w-[5px] h-[5px] bg-[#164925] rounded-full flex-shrink-0"></span>
                  Transparent pricing
                </li>
                <li className="flex items-center gap-2 text-[18px] text-[#164925] font-nunito">
                  <span className="w-[5px] h-[5px] bg-[#164925] rounded-full flex-shrink-0"></span>
                  Eco-friendly care
                </li>
              </ul>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                type="button"
                onClick={handleGetQuote}
                className="flex-1 bg-[#164925] text-[#FFE9CA] font-medium py-3.5 rounded-full text-[15px] hover:bg-[#1a5c3a] transition"
              >
                Get Instant Quote
              </button>
              <button
                type="button"
                onClick={handleGetQuote}
                className="w-[48px] h-[48px] bg-[#164925] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#1a5c3a] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Mobile Arrow Graphic */}


            {/* Mobile Stats */}
            <div className="flex flex-col lg:hidden items-center justify-center gap-4 pt-4 mt-4 border-t border-dashed border-[rgba(22,73,37,0.2)]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white relative overflow-hidden">
                    <Image src="/images/avtar-1.png" alt="User" fill className="object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gray-400 border-2 border-white relative overflow-hidden">
                    <Image src="/images/avtar-2.png" alt="User" fill className="object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gray-500 border-2 border-white relative overflow-hidden">
                    <Image src="/images/avtar-3.png" alt="User" fill className="object-cover" />
                  </div>
                </div>
                <div className="text-[11px]">
                  <div className="font-semibold text-[#164925]">1000+ Users actively booking</div>
                  {/* <div className="text-[#164925] whitespace-nowrap"></div> */}
                </div>

              </div>
              <div className="absolute top-[50px] right-[45px] lg:hidden w-[75px] h-[90px] pointer-events-none z-10">
                <Image src="/images/arrow-graphic.svg" alt="arrow" width={75} height={190} />
              </div>

              {/* Vertical line separator */}
              <div className="h-[1px] w-full bg-[rgba(22,73,37,0.15)] mx-1"></div>

              <div className="text-[11px] text-right flex-1 flex  ">
                <div className="font-semibold text-[#164925] flex items-center justify-end gap-1">
                  5/5
                  <div className="flex gap-[2px] text-[#164925]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-[#164925] whitespace-nowrap px-2 ">Rating by users</div>
              </div>
            </div>

            {/* Desktop Quote Form */}
            <div className="hidden lg:block bg-[#FFE9CA] backdrop-blur-md border border-white/60 shadow-lg p-6 lg:p-8 rounded-2xl">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="space-y-4">
                  {/* Select Service - Horizontal layout */}
                  <div className="flex items-center gap-4">
                    <label className="text-[14px] font-semibold text-[#164925] whitespace-nowrap min-w-[120px]">
                      Select Service
                    </label>
                    <div className='relative flex-1'>
                      <div className='absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g opacity="0.5">
                            <path d="M4 6L8 10L12 6" stroke="#164925" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </svg>
                      </div>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="appearance-none h-[44px] w-full px-4 py-2 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[14px] focus:outline-none focus:ring-1 focus:ring-[#164925] focus:border-transparent"
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

                  {/* Enter Pincode - Horizontal layout */}
                  <div className="flex items-center gap-4">
                    <label className="text-[14px] font-semibold text-[#164925] whitespace-nowrap min-w-[120px]">
                      Enter Pincode
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your location"
                      className="flex-1 h-[44px] w-full px-4 py-2 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[14px] focus:outline-none focus:ring-1 focus:ring-[#164925] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleGetQuote}
                  className="w-full text-[15px] px-6 py-3 bg-[#164925] text-white font-medium rounded-lg hover:bg-[#1a5c3a] transition hover:shadow-lg"
                >
                  Get Instant Quote
                </button>
              </form>

              {/* Desktop Stats */}
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

                {/* Vertical line separator */}
                <div className="h-8 w-[1px] bg-[rgba(22,73,37,0.15)]"></div>

                <div className="text-xs sm:text-sm text-right flex-1 flex flex-col items-end">
                  <div className="font-semibold text-[#164925] flex items-center justify-end gap-1">
                    5/5
                    <div className="flex gap-[2px] text-[#164925]">
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
                  className="absolute inset-0 bg-black/60 opacity-100 transition-opacity top-0"
                  onClick={() => { setIsContactOpen(false); setTimeout(() => { setIsSubmitted(false); setFormError(''); }, 300); }}
                />
                {/* Panel */}
                <div
                  className="absolute left-0 right-0 bottom-0 lg:inset-0 lg:flex lg:items-center lg:justify-center"
                >
                  {!isSubmitted ? (
                    /* ═══ FORM STATE ═══ */
                    <div className="mx-auto w-full max-w-md lg:max-w-sm bg-white rounded-t-2xl lg:rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 ease-out translate-y-0 lg:translate-y-0">

                      {/* Top Image Strip */}
                      {/* <div className="relative h-[100px] lg:h-[90px] overflow-hidden">
                        <img
                          src="/images/Gardening-Image-atf-3.png"
                          alt="Garden"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                      </div> */}

                      <div className="p-5 lg:p-4">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-[17px] lg:text-[15px] font-semibold text-[#164925]">Get in touch!</h3>
                          <button
                            aria-label="Close"
                            className="-m-1 p-1 rounded"
                            onClick={() => { setIsContactOpen(false); setTimeout(() => { setIsSubmitted(false); setFormError(''); }, 300); }}
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#164925">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-[#164925]/70 mb-4 lg:mb-3 font-nunito">Please give us information and we will get back to you as soon as possible.</p>

                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            if (!contactName.trim() || !contactMobile.trim()) {
                              setFormError('Name and mobile number are required');
                              return;
                            }
                            setFormError('');
                            setIsSubmitting(true);
                            try {
                              const res = await fetch('/api/contact', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                  name: contactName,
                                  mobile: contactMobile,
                                  service: service,
                                  pincode: location,
                                }),
                              });
                              const data = await res.json();
                              if (res.ok) {
                                setIsSubmitted(true);
                              } else {
                                setFormError(data.error || 'Something went wrong. Please try again.');
                              }
                            } catch (err) {
                              setFormError('Network error. Please try again.');
                            } finally {
                              setIsSubmitting(false);
                            }
                          }}
                          className="space-y-3.5 lg:space-y-2.5"
                        >
                          {/* Select Service */}
                          <div>
                            <label className="block text-[13px] lg:text-[12px] font-medium text-[#164925] mb-1.5 lg:mb-1">Select Service<span className="text-red-500">*</span></label>
                            <div className="relative">
                              <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="appearance-none w-full h-11 lg:h-9 px-3 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[13px] lg:text-[12px] focus:outline-none focus:ring-1 focus:ring-[#164925]"
                                required
                              >
                                <option value="">Choose a service</option>
                                <option value="book-a-gardener">Book a Gardner</option>
                                <option value="monthly-plant-care">Monthly Plant Care</option>
                                <option value="lawn-maintenance">Lawn Maintenance</option>
                                <option value="terrace-garden-maintenance">Terrace Garden Maintenance</option>
                                <option value="new-home-plant-setup">New Home Plant Setup</option>
                                <option value="garden-heavy-work">Garden Heavy Work</option>
                                <option value="workspace-plant-care">Workspace Plant Care</option>
                                <option value="plant-repotting">Plant Repotting</option>
                              </select>
                              <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
                                  <path d="M4 6L8 10L12 6" stroke="#164925" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Enter Pincode */}
                          <div>
                            <label className="block text-[13px] lg:text-[12px] font-medium text-[#164925] mb-1.5 lg:mb-1">Enter Pincode<span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              placeholder="Enter your pincode"
                              className="w-full h-11 lg:h-9 px-3 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[13px] lg:text-[12px] focus:outline-none focus:ring-1 focus:ring-[#164925]"
                              required
                            />
                          </div>

                          {/* Name */}
                          <div>
                            <label className="block text-[13px] lg:text-[12px] font-medium text-[#164925] mb-1.5 lg:mb-1">Name<span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              value={contactName}
                              onChange={(e) => { setContactName(e.target.value); setFormError(''); }}
                              placeholder="Your name"
                              className="w-full h-11 lg:h-9 px-3 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[13px] lg:text-[12px] focus:outline-none focus:ring-1 focus:ring-[#164925]"
                              required
                            />
                          </div>

                          {/* Mobile Number */}
                          <div>
                            <label className="block text-[13px] lg:text-[12px] font-medium text-[#164925] mb-1.5 lg:mb-1">Mobile Number<span className="text-red-500">*</span></label>
                            <input
                              type="tel"
                              value={contactMobile}
                              onChange={(e) => { setContactMobile(e.target.value); setFormError(''); }}
                              placeholder="Enter mobile number"
                              className="w-full h-11 lg:h-9 px-3 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[13px] lg:text-[12px] focus:outline-none focus:ring-1 focus:ring-[#164925]"
                              required
                            />
                          </div>

                          {/* Error message */}
                          {formError && (
                            <p className="text-red-500 text-xs font-nunito">{formError}</p>
                          )}

                          {/* Submit */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-[#164925] text-white text-[14px] lg:text-[13px] font-medium py-3 lg:py-2.5 hover:bg-[#1a5c3a] transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Submitting...
                              </>
                            ) : (
                              'Submit'
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  ) : (
                    /* ═══ THANK YOU STATE ═══ */
                    <div className="mx-auto w-full max-w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden font-poppins">
                      {/* Close Button */}
                      <button
                        onClick={() => { setIsContactOpen(false); setTimeout(() => { setIsSubmitted(false); setContactName(''); setContactMobile(''); setService(''); setLocation(''); setFormError(''); }, 300); }}
                        aria-label="Close"
                        className="absolute top-4 right-4 z-20 w-7 h-7 flex items-center justify-center rounded-full bg-black/10 text-gray-500 hover:bg-black/20 hover:text-gray-700 transition-colors"
                      >
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      </button>

                      {/* Flower Image with Dashed Border */}
                      <div className="flex justify-center pt-7 pb-4 px-6">
                        <div className="relative w-[160px] h-[160px] rounded-2xl border-2 border-dashed border-[#164925]/40 p-2 flex items-center justify-center">
                          <img
                            src="/images/popup.png"
                            alt="Thank You Flowers"
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      </div>

                      {/* Thank You Content */}
                      <div className="text-center px-6 pb-7">
                        <h3 className="text-[#164925] font-bold text-lg leading-snug mb-1">
                          Thank You
                        </h3>
                        <p className="text-[#164925]/80 font-medium text-sm mb-1">
                          We've Got Your Request
                        </p>
                        <p className="text-gray-500 text-xs mb-5 font-nunito">
                          We'll get back to you as soon as possible!
                        </p>
                        <button
                          onClick={() => { setIsContactOpen(false); setTimeout(() => { setIsSubmitted(false); setContactName(''); setContactMobile(''); setService(''); setLocation(''); setFormError(''); }, 300); }}
                          className="w-full max-w-[200px] rounded-lg bg-[#164925] text-white text-sm font-medium py-2.5 hover:bg-[#1b532c] transition-colors"
                        >
                          Explore Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Image Carousel */}
          <div className="relative order-first lg:order-last">
            <div
              className="relative rounded-none lg:rounded-3xl overflow-hidden"
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
              <div
                className="w-full h-[220px] lg:h-[580px] relative overflow-hidden"
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
                        className="object-cover w-full h-[220px] lg:h-[580px]"
                      />
                    </div>
                  ))}
                </div>

                {/* Mobile Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 lg:hidden">
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

              {/* Desktop Navigation Arrows */}
              <div className="hidden lg:block">
                <div className="h-11 p-[2px] absolute rounded-full bg-gradient-to-b from-gray-200/20 to-gray-300/14 backdrop-blur-md bottom-8 left-1/2 -translate-x-1/2 flex">
                  <button
                    className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11" fill="none">
                      <path d="M5.04004 0.499956L0.500039 5.03996L5.04004 9.57996" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-all duration-300"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M0.5 0.499977L4.813 4.81298L0.5 9.12598" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
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
