'use client';

import { useState } from 'react';
import AnimatedBorderBadge from "./AnimatedBorderBadge";
import Image from 'next/image';

export default function AiWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleArrowClick = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    // Reset states after closing so reopening shows the form again
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setError('');
    }, 300);
  };

  const handleNotifyMe = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const heroGradient =
    'linear-gradient(160deg, #164925 0%, #1b532c 28%, #4a7a58 52%, #b8d8ca 76%, #e4ede8 100%)';

  return (
    <section
      id="ai-care"
      className="relative z-[1] overflow-hidden max-md:-mt-[1px] md:-mt-[3px]"
      style={{ background: heroGradient, backgroundColor: '#164925' }}
    >
      <div
        className="hidden md:block relative overflow-hidden md:border-t-0"
        style={{
          minHeight: '592px',
          background: heroGradient,
        }}
      >
        {/* Container that mirrors page max-width */}
        <div
          className="relative z-10 mx-auto px-10 min-h-[592px] flex flex-col justify-between"
          style={{ maxWidth: '1200px' }}
        >
          {/* Left text block — top */}
          <div className="flex flex-col pt-12" style={{ maxWidth: '50%' }}>

            {/* Coming Soon Badge */}
            <div className="rainbow inline-flex p-[2px] rounded-full bg-gradient-to-r from-lime-400 via-red-500 via-blue-500 to-purple-600 mb-6">
              <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5">
                <Image src="/images/icons3.svg" alt="star" width={20} height={20} />
                <span className="text-orange-600 font-bold text-sm tracking-wide whitespace-nowrap">
                  COMING SOON
                </span>
              </div>
            </div>

            {/* Titles */}
            <div>
              <p className="text-white text-[35px] font-regular font-poppins mb-2">
                AI Plant care
              </p>
              <h2 className="font-semibold text-white font-poppins leading-tight" style={{ fontSize: '35px' }}>
                Expert Care for Any Plant
              </h2>
            </div>
          </div>

          {/* Description — same column, naturally aligned with headings */}
          <div className="pb-12" style={{ maxWidth: '50%' }}>
            <p className="text-[#164925] text-[20px] font-medium font-poppins mb-[20px] leading-snug">
              Scan plant and get Instant diagnosis.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleArrowClick}
                aria-label="Previous"
                className="w-[34px] h-[34px] rounded-full border border-[#164925] bg-white/10 flex items-center justify-center cursor-pointer"
              >
                <svg width="14" height="10" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 7H1M1 7L7 1M1 7L7 13" stroke="green" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleArrowClick}
                aria-label="Next"
                className="w-[34px] h-[34px] rounded-full bg-[#164925] flex items-center justify-center cursor-pointer"
              >
                <svg width="14" height="10" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Video — native 1440×592 */}
        {/* <div className="absolute z-0 bottom-0 right-0 pointer-events-none"> */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            width={1440}
            height={592}
            className="block w-[1440px] h-[592px] max-w-none object-contain object-bottom"
          >
            <source src="/images/video-full.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

          {/* Video — scales full width of section, so it never gaps on larger desktop screens */}
{/* <div className="absolute z-0 inset-0 pointer-events-none">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="block w-full h-full object-cover object-bottom"
  >
    <source src="/images/video-full.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div> */}


{/* Video — always fills full width of section, crops from left first so plant stays visible */}
<div className="absolute z-0 inset-0 pointer-events-none">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="block w-full h-full object-cover object-right-bottom"
  >
    <source src="/images/video-full.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      {/* </div> */}

      {/* ═══════════════════════════════════
          MOBILE  (below md)
      ═══════════════════════════════════ */}
      <div className="block md:hidden py-6 bg-[#FFFAF3]">
        <div
          className="relative overflow-hidden rounded-[24px] border  bg-cover bg-center bg-no-repeat shadow-sm pt-7 bg-[#164925]"
          style={{
            minHeight: '700px',
            // backgroundImage: "url('/images/bg1.png')",
          }}
        >
          {/* Top-left: badge + headings */}
          <div className="relative z-10  pl-6 pt-5" style={{ maxWidth: '85%' }}>

            {/* Premium Coming Soon CSS Badge for Mobile */}
            <div className=" rainbow inline-flex p-[2px] rounded-full bg-gradient-to-r from-lime-400 via-red-500 via-blue-500 to-purple-600 mb-6">
              <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5">
                <Image src="/images/icons3.svg" alt="star" width={16} height={16} />
                <span className="text-orange-600 font-bold text-sm tracking-wide whitespace-nowrap">
                  COMING SOON
                </span>
              </div>
            </div>
            <p className="text-white text-[24px] font-regular font-poppins  leading-tight opacity-90">
              AI Plant care
            </p>
            <h2
              className="font-semibold text-white font-poppins leading-snug  "
              style={{ fontSize: '24px', lineHeight: '36px' }}
            >
              Expert Care for Any Plant
            </h2>
          </div>

          {/* Plant image - clean, no brain badge */}
          <div
            className="absolute z-0 "
            style={{ right: -80, bottom: 0, width: '50%, top: 7%', height: '75%' }}
          >
            {/* <img
              src="/images/plantImage.png"
              alt="AI Plant Care Scan"
              className="w-full h-full object-contain object-bottom"
            /> */}

            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{
                __html: `
                  <video
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-contain object-bottom"
                  >
                    <source src="/images/vidw.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                `
              }}
            />
          </div>

          {/* Scan overlay - sits ON TOP of the leaf */}
          {/* <div
            className="absolute z-10 pointer-events-none"
            style={{ left: '10%', top: '30%', width: '60%', aspectRatio: '0.98' }}
          >
            <div className="absolute -top-[2px] -left-[2px] w-5 h-5 border-t-[3px] border-l-[3px] border-white rounded-tl-[3px] z-10" />
            <div className="absolute -top-[2px] -right-[2px] w-5 h-5 border-t-[3px] border-r-[3px] border-white rounded-tr-[3px] z-10" />
            <div className="absolute -bottom-[2px] -left-[2px] w-5 h-5 border-b-[3px] border-l-[3px] border-white rounded-bl-[3px] z-10" />
            <div className="absolute -bottom-[2px] -right-[2px] w-5 h-5 border-b-[3px] border-r-[3px] border-white rounded-br-[3px] z-10" />
            <div className="absolute inset-0 border border-dashed border-white/20 rounded-[2px] z-10" />

           
            <img
              src="/images/scan2.svg"
              alt="Scan Overlay"
              className="absolute inset-0 w-full h-full object-cover rounded-[2px] opacity-65"
            />

            <div className="absolute left-0 w-full h-[2.5px] bg-[#00FF73] shadow-[0_0_10px_#00FF73] animate-scan z-20" />
          </div> */}

          {/* Bottom-left: description + buttons */}
          <div
            className="absolute z-20 left-4 bottom-6"
            style={{ maxWidth: '48%' }}
          >
            <p className="text-[#164925] text-[12px] font-medium font-poppins mb-[20px] leading-snug">
              Scan plant and get Instant diagnosis.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleArrowClick}
                aria-label="Previous"
                className="w-[34px] h-[34px] rounded-full border border-[#164925] bg-white/10 flex items-center justify-center cursor-pointer"
              >
                <svg width="14" height="10" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 7H1M1 7L7 1M1 7L7 13" stroke="green" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleArrowClick}
                aria-label="Next"
                className="w-[34px] h-[34px] rounded-full border-[#164925] bg-[#164925] flex items-center justify-center cursor-pointer"
              >
                <svg width="14" height="10" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Notify Me Modal ─── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={closeModal}
        >
          {!isSubmitted ? (
            /* ═══ FORM STATE ═══ */
            <div
              className="relative w-full max-w-[340px] md:max-w-[660px] rounded-3xl bg-[#FFFAF3] md:bg-[url('/images/download-popup-desk.png')] md:bg-cover md:bg-no-repeat md:bg-left shadow-2xl overflow-hidden font-poppins flex flex-col md:flex-row md:h-[400px] border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop Left Side / Mobile Top: Image */}
              <div className="relative w-full h-[230px] md:h-full md:w-[44%] flex-shrink-0 bg-[url('/images/plant3.png')] md:bg-none bg-cover bg-center bg-no-repeat">

                {/* Circular Coming Soon Badge — now animated */}
                <div className="absolute z-10 pointer-events-none left-1/2 -translate-x-1/2 top-[25px] w-[140px] h-[140px] md:left-[95px] md:translate-x-0 md:top-[90px] md:w-[170px] md:h-[170px]">
                  <div className="w-full h-full animate-[spin_16s_linear_infinite] flex items-center justify-center">
                    <img
                      src="/images/comingsoon.png"
                      alt="Coming Soon Badge"
                      // className="w-full h-full object-contain"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Mobile Only: Brand Logo & Close Button overlaid on image */}
                <div className="absolute top-4 left-4 md:hidden">
                  <img src="/images/mobi-logo.svg" alt="Growniq Logo" className="h-6 w-auto" />
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="absolute top-4 right-4 md:hidden w-7 h-7 flex items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/30 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Desktop Right Side / Mobile Bottom: Form Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between h-full bg-[#FFFAF3] min-h-[220px]">

                {/* Desktop Only Header: Logo & Close Button */}
                <div className="hidden md:flex items-center justify-between">
                  <img src="/images/growniq-green-logo.svg" alt="Growniq Logo" className="h-7 w-auto" />
                  <button
                    onClick={closeModal}
                    aria-label="Close"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Title & Input & Button Container */}
                <div className="space-y-4 my-auto md:my-0 md:pt-4">
                  <h3 className="text-left text-[#164925] font-semibold text-sm md:text-[17px] leading-snug">
                    You are in the right place,<br />
                    Growniq app is sprouting soon
                  </h3>

                  <div className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      placeholder="Enter your email"
                      className={`w-full rounded-lg border ${error ? 'border-red-400' : 'border-gray-300'} bg-white px-4 py-2 text-sm outline-none focus:border-[#164925] transition-colors font-nunito`}
                    />
                    {error && (
                      <p className="text-red-500 text-xs font-nunito">{error}</p>
                    )}

                    <button
                      onClick={handleNotifyMe}
                      disabled={isLoading}
                      className="w-full rounded-lg bg-[#164925] text-white text-sm font-medium py-2.5 hover:bg-[#1b532c] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Notify Me'
                      )}
                    </button>
                  </div>
                </div>

                {/* Footer Divider & Contact Details */}
                <div className="mt-4 md:mt-0 pt-3 border-t border-dashed border-gray-300/80">
                  <div className="flex items-center justify-start gap-5 text-[10px] md:text-xs text-[#164925]/80 font-nunito">
                    <a href="tel:+919717104342" className="flex items-center gap-1.5 hover:underline">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                      </svg>
                      +91 9717104342
                    </a>
                    <a href="mailto:contact@growniq.in" className="flex items-center gap-1.5 hover:underline">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                      </svg>
                      contact@growniq.in
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            /* ═══ THANK YOU STATE ═══ */
            <div
              className="relative mx-auto w-full max-w-[340px] md:max-w-[520px] bg-[#FFFDF9] rounded-[24px] shadow-2xl p-6 md:p-8 font-poppins text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
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
                      onClick={closeModal}
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
      )}
    </section>
  );
}