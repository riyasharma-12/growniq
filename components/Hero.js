'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const serviceOptions = [
  { value: 'book-a-gardener', label: 'Book a Gardner' },
  { value: 'monthly-plant-care', label: 'Monthly plant care' },
  { value: 'lawn-maintenance', label: 'Lawn Maintenance' },
  { value: 'terrace-garden-maintenance', label: 'Terrace Garden Maintenance' },
  { value: 'new-home-plant-setup', label: 'New Home Plant Setup' },
  { value: 'garden-heavy-work', label: 'Garden Heavy Work' },
  { value: 'workspace-plant-care', label: 'Workspace Plant Care' },
  { value: 'plant-repotting', label: 'Plant Repotting' },
];

export default function Hero() {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef(null);
  const slides = [
    '/images/Gardening-Image-atf-3.png',
    '/images/AI-Plant-atf-2.png',
    '/images/Growniq-Online-atf-4.png',
    '/images/Indoor-Plant-atf-5.png',
    // '/images/Top-Image.png',
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

  // Close service dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(e.target)) {
        setIsServiceDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrent(index);
  };

  const handleGetQuote = (e) => {
    e.preventDefault();
    setIsContactOpen(true);
  };

  return (
    <section id="hero-section" className="heroBanner py-0 lg:py-16">
      <div className="container mx-auto px-0 lg:px-6 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-start lg:items-stretch">

          {/* Left Content */}
          <div className="topBanner-bg px-4 lg:px-0 space-y-5 lg:space-y-6 relative">
            {/* Mobile handle indicator with dynamic sliding green segment */}
            <div className="lg:hidden w-full pt-4 px-2">
              <div className="relative h-[3px] w-full bg-[#E8D4B8] rounded-full overflow-hidden">
                <div
                  className="absolute top-0 bottom-0 bg-[#164925] rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: `${100 / slides.length}%`,
                    transform: `translateX(${current * 100}%)`,
                  }}
                />
              </div>
            </div>

            {/* Heading */}
            <div>
              <h1 className="-mt-6 hidden lg:block text-[26px] lg:text-[40px] font-medium text-[#164925] leading-[34px] lg:leading-[52px]">
                All your green needs, Services, Store &amp; AI care in one app <Image src="/images/subtract2.svg" alt="" width={21} height={26} className="inline-block ml-1 -mt-1 w-[18px] h-[22px] lg:w-[21px] lg:h-[26px]" />
              </h1>

              <h1 className=" mt-4 lg:hidden text-[26px] lg:text-[40px] font-medium text-[#164925] leading-[34px] lg:leading-[52px]">
                All your green needs,  <br />  Services, Store &amp; <br />
                <span className="inline-flex items-center gap-1">
                  AI care in one app
                  <Image src="/images/subtract2.svg" alt="" width={21} height={26} className="w-[18px] h-[22px] lg:w-[21px] lg:h-[26px] shrink-0" />
                </span>
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
              <a
                href="https://wa.me/919717104342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[48px] h-[48px] bg-[#164925] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#1a5c3a] transition"
                aria-label="Chat on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Mobile Arrow Graphic */}


            {/* Mobile Stats */}
            <div className="flex flex-col lg:hidden items-center justify-center gap-3.5 mt-5">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-gray-300  relative overflow-hidden">
                    <Image src="/images/m1.png" alt="User" fill sizes="32px" className="object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gray-400  relative overflow-hidden">
                    <Image src="/images/m2.png" alt="User" fill sizes="32px" className="object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gray-500  relative overflow-hidden">
                    <Image src="/images/m3.png" alt="User" fill sizes="32px" className="object-cover" />
                  </div>
                </div>
                <div className="text-[11px]">
                  <div className="font-semibold text-[#164925]">1000+ Users actively booking</div>
                  {/* <div className="text-[#164925] whitespace-nowrap"></div> */}
                </div>

              </div>
              <div className="absolute top-[90px] right-[45px] lg:hidden w-[75px] h-[90px] pointer-events-none z-10">
                <Image src="/images/arrow-graphic.svg" alt="arrow" width={75} height={190} />
              </div>

              {/* Dotted line separator */}
              <div className="w-full border-t border-dashed border-[#164925]"></div>

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
            <div className="hidden lg:block bg-[#FFE9CA] backdrop-blur-md  p-6 lg:p-8 rounded-2xl">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="space-y-4">
                  {/* Select Service - Horizontal layout */}
                  <div className="flex items-center gap-4">
                    <label className="text-[14px] font-regular text-[#164925] whitespace-nowrap min-w-[120px]">
                      Select Service
                    </label>
                    <div className="relative flex-1" ref={serviceDropdownRef}>
                      {/* Trigger Button */}
                      <button
                        type="button"
                        onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                        className="appearance-none h-[44px] w-full px-4 py-2 rounded-lg border border-[rgba(22,73,37,0.2)] bg-white text-left text-[14px] focus:outline-none focus:ring-1 focus:ring-[#164925] focus:border-transparent flex items-center justify-between"
                      >
                        <span className={service ? 'text-[#164925]' : 'text-[#164925]/50'}>
                          {service ? serviceOptions.find(s => s.value === service)?.label : 'Choose a service'}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className={`transition-transform duration-200 ${isServiceDropdownOpen ? 'rotate-180' : ''}`}
                        >
                          <g opacity="0.5">
                            <path d="M4 6L8 10L12 6" stroke="#164925" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </svg>
                      </button>

                      {/* Custom Dropdown Menu */}
                      {isServiceDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] py-2 z-50 border border-[rgba(22,73,37,0.08)]">
                          {serviceOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              className={`w-full text-left px-5 py-[10px] text-[14px] font-poppins transition-colors
                                ${service === option.value
                                  ? 'bg-[#D7EBE7] text-[#164925] font-medium'
                                  : 'text-[#333333] hover:bg-[#F5F5F5] font-normal'
                                }`}
                              onClick={() => {
                                setService(option.value);
                                setIsServiceDropdownOpen(false);
                              }}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Enter Pincode - Horizontal layout */}
                  <div className="flex items-center gap-4">
                    <label className="text-[14px] font-regular text-[#164925] whitespace-nowrap min-w-[120px]">
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
                <div className="flex items-center gap-4">
                  <div className="min-w-[120px]" />
                  <button
                    type="button"
                    onClick={handleGetQuote}
                    className="flex-1 text-[15px] px-6 py-3 bg-[#164925] text-white font-medium rounded-lg hover:bg-[#1a5c3a] transition hover:shadow-lg"
                  >
                    Get Instant Quote
                  </button>
                </div>
              </form>

              {/* <div className="w-full border-t border-dashed border-[#164925]"></div> */}

              {/* Desktop Stats */}
              <div className="flex items-center justify-between flex-row gap-6 mt-6 pt-6  w-full border-t border-dashed border-[#164925]">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full  relative overflow-hidden">
                      <Image src="/images/m1.png" alt="Professional gardener at work" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full  relative overflow-hidden">
                      <Image src="/images/m2.png" alt="Professional gardener at work" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="w-8 h-8 rounded-full   relative overflow-hidden">
                      <Image src="/images/m3.png" alt="Professional gardener at work" fill sizes="32px" className="object-cover" />
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold text-[#164925]">1000+</div>
                    <div className="text-[#164925] whitespace-nowrap">Users actively booking</div>
                  </div>
                </div>

                {/* Vertical line separator */}
                <div className="h-8 w-[1px] bg-[rgba(22,73,37,0.15)]"></div>

                <div className="text-xs sm:text-sm text-left flex-1 flex flex-col items-start pl-16">
                  <div className="font-semibold text-[#164925] flex items-center justify-start gap-1">
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
                    <div className="mx-auto w-full max-w-md lg:max-w-sm bg-[#FFFAF3] rounded-t-2xl lg:rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 ease-out translate-y-0 lg:translate-y-0">

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-[20px] font-bold text-[#164925] font-poppins">Get in touch!</h3>
                          <button
                            aria-label="Close"
                            className="-m-1 p-1 rounded-full hover:bg-black/5 transition-colors"
                            onClick={() => { setIsContactOpen(false); setTimeout(() => { setIsSubmitted(false); setFormError(''); }, 300); }}
                          >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#164925">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-sm text-[#164925] opacity-80 mb-5 font-nunito leading-relaxed">
                          Please give us information and we will get back to you as soon as possible.
                        </p>

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
                          className="space-y-4"
                        >
                          {/* Select Service */}
                          <div className="space-y-1 text-left">
                            <label className="block text-[14px] font-semibold text-[#164925] font-poppins">
                              Select Service<span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <select
                                value={service}
                                onChange={(e) => setService(e.target.value)}
                                className="appearance-none w-full h-11 px-4 rounded-xl border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[14px] focus:outline-none focus:border-[#164925] focus:ring-1 focus:ring-[#164925] transition-colors"
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
                              <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
                                  <path d="M4 6L8 10L12 6" stroke="#164925" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Enter Pincode */}
                          <div className="space-y-1 text-left">
                            <label className="block text-[14px] font-semibold text-[#164925] font-poppins">
                              Enter Pincode<span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              placeholder=""
                              className="w-full h-11 px-4 rounded-xl border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[14px] focus:outline-none focus:border-[#164925] focus:ring-1 focus:ring-[#164925] transition-colors"
                              required
                            />
                          </div>

                          {/* Name */}
                          <div className="space-y-1 text-left">
                            <label className="block text-[14px] font-semibold text-[#164925] font-poppins">
                              Name<span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={contactName}
                              onChange={(e) => { setContactName(e.target.value); setFormError(''); }}
                              placeholder=""
                              className="w-full h-11 px-4 rounded-xl border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[14px] focus:outline-none focus:border-[#164925] focus:ring-1 focus:ring-[#164925] transition-colors"
                              required
                            />
                          </div>

                          {/* Mobile Number */}
                          <div className="space-y-1 text-left">
                            <label className="block text-[14px] font-semibold text-[#164925] font-poppins">
                              Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              value={contactMobile}
                              onChange={(e) => { setContactMobile(e.target.value); setFormError(''); }}
                              placeholder=""
                              className="w-full h-11 px-4 rounded-xl border border-[rgba(22,73,37,0.2)] bg-white text-[#164925] text-[14px] focus:outline-none focus:border-[#164925] focus:ring-1 focus:ring-[#164925] transition-colors"
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
                            className="w-full h-12 rounded-xl bg-[#164925] text-white text-[15px] font-medium hover:bg-[#123a1d] transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-2"
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
                    <div className="relative mx-auto w-full max-w-[340px] md:max-w-[520px] bg-[#FFFDF9] rounded-[24px] shadow-2xl p-6 md:p-8 font-poppins text-left">
                      {/* Close Button */}
                      <button
                        onClick={() => { setIsContactOpen(false); setTimeout(() => { setIsSubmitted(false); setContactName(''); setContactMobile(''); setService(''); setLocation(''); setFormError(''); }, 300); }}
                        aria-label="Close"
                        className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-[#164925]/10 text-[#164925] hover:bg-[#164925]/20 transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      </button>

                      {/* Flex container: column on mobile, row on desktop */}
                      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8">
                        {/* Left Side: Graphic Image */}
                        <div className="flex items-center justify-center shrink-0 w-[140px] h-[140px] md:w-[180px] md:h-[180px]">
                          <img
                            src="/images/thanks.png"
                            alt="Thank You Flowers"
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Right Side: Text Content & Explore Button */}
                        <div className="flex flex-col justify-between text-center md:text-left flex-1 py-1 md:py-2">
                          <div className="space-y-2 md:space-y-3">
                            <div className="text-[#164925]">
                              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                Thank You,
                              </h3>
                              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                We've Got Your Request
                              </h3>
                            </div>
                            <p className="text-[#164925] opacity-80 text-xs md:text-sm font-medium font-nunito leading-normal">
                              Team Growniq will connect with you soon
                            </p>
                          </div>

                          <div className="mt-5 md:mt-auto flex justify-center md:justify-start">
                            <button
                              onClick={() => { setIsContactOpen(false); setTimeout(() => { setIsSubmitted(false); setContactName(''); setContactMobile(''); setService(''); setLocation(''); setFormError(''); }, 300); }}
                              className="px-8 py-2 rounded-full border border-[#164925] text-[#164925] text-[13px] md:text-[14px] font-semibold bg-transparent hover:bg-[#164925] hover:text-[#FFE9CA] transition-all duration-300 cursor-pointer"
                            >
                              Explore More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Image Carousel */}
          <div className="relative order-first lg:order-last lg:flex lg:flex-col">
            <div
              className="relative rounded-none lg:rounded-3xl overflow-hidden lg:flex-1 lg:flex lg:flex-col lg:h-full"
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
                className="w-full h-[220px] lg:h-full lg:flex-1 relative overflow-hidden"
              >
                <div
                  className="flex lg:h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 lg:h-full">
                      <img
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-[220px] lg:h-full"
                      />
                    </div>
                  ))}
                </div>


              </div>

              {/* Desktop Navigation Arrows */}
              {/* <div className="hidden lg:block">
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center  z-20">
                  <button
                    className="w-[38px] h-[38px] rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <img src="/images/arrow1.svg" alt="Previous" className="w-full h-full object-contain" />
                  </button>
                  <button
                    className="w-[38px] h-[38px] flex items-center justify-center hover:opacity-80 transition-all duration-300 cursor-pointer"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <img src="/images/arrow2.svg" alt="Next" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div> */}

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
