
'use client';

import { useState } from 'react';

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

  /* ─── shared arrow SVGs ─── */
  const ChevronLeft = ({ size = 8 }) => (
    <svg width={size} height={size * 1.6} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 1L1.5 6.5L6.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const ChevronRight = ({ size = 8 }) => (
    <svg width={size} height={size * 1.6} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 1L6.5 6.5L1.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section
      id="ai-care"
      className="relative overflow-hidden -mt-[1px]"
      style={{
        background: 'linear-gradient(160deg, #164925 0%, #1b532c 28%, #4a7a58 52%, #b8d8ca 76%, #e4ede8 100%)',
      }}
    >

      {/* ═══════════════════════════════════
          DESKTOP  (md and above)
      ═══════════════════════════════════ */}
      <div className="hidden md:block relative" style={{ minHeight: '400px' }}>
        {/* Container that mirrors page max-width */}
        <div className="mx-auto px-10 lg:px-20 xl:px-28" style={{ maxWidth: '1200px' }}>
          {/* Left text block — sits in normal flow */}
          <div className="flex flex-col justify-center py-12" style={{ maxWidth: '50%' }}>
            {/* Coming Soon Badge */}
            <div className="mb-6">
              <img
                src="/images/coming-soon-badge.png"
                alt="Coming Soon"
                className="h-[38px] w-auto object-contain"
              />
            </div>

            {/* Titles */}
            <div className="mb-8">
              <p className="text-white/80 text-[18px] font-medium font-poppins mb-2">
                AI Plant care
              </p>
              <h2 className="font-bold text-white font-poppins leading-tight" style={{ fontSize: '36px' }}>
                Expert Care for Any Plant
              </h2>
            </div>

            {/* Description */}
            <p className="text-white/70 text-[15px] font-medium font-poppins mb-5">
              Scan plant and get Instant diagnosis.
            </p>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleArrowClick}
                aria-label="Previous"
                className="w-[44px] h-[44px] rounded-full border border-white/50 bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft size={8} />
              </button>
              <button
                onClick={handleArrowClick}
                aria-label="Next"
                className="w-[44px] h-[44px] rounded-full bg-[#164925] flex items-center justify-center hover:bg-[#1a5c3a] transition-all duration-300"
              >
                <ChevronRight size={8} />
              </button>
            </div>
          </div>
        </div>

        {/* Plant image — absolute, flush to right & bottom */}
        <div
          className="absolute bottom-0 right-0 flex items-end justify-end"
          style={{ width: '48%', height: '100%', pointerEvents: 'none' }}
        >
          {/* Scan overlay */}
          <div
            className="absolute z-20"
            style={{ right: '55%', top: '15%', width: '35%', aspectRatio: '1' }}
          >
            <div className="absolute -top-[3px] -left-[3px] w-6 h-6 border-t-4 border-l-4 border-white rounded-tl-sm" />
            <div className="absolute -top-[3px] -right-[3px] w-6 h-6 border-t-4 border-r-4 border-white rounded-tr-sm" />
            <div className="absolute -bottom-[3px] -left-[3px] w-6 h-6 border-b-4 border-l-4 border-white rounded-bl-sm" />
            <div className="absolute -bottom-[3px] -right-[3px] w-6 h-6 border-b-4 border-r-4 border-white rounded-br-sm" />
            <div className="absolute inset-0 border border-dashed border-white/30 rounded-lg" />
            <div className="absolute left-0 w-full h-[3px] bg-[#00FF73] shadow-[0_0_15px_#00FF73] animate-scan" />
            <div className="absolute top-[25%] left-[45%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_white] animate-ping" />
            <div className="absolute top-[25%] left-[45%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_white]" />
            <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] animate-ping [animation-delay:0.4s]" />
            <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] [animation-delay:0.4s]" />
            <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] animate-ping [animation-delay:0.8s]" />
            <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] [animation-delay:0.8s]" />
            <div className="absolute bottom-[35%] left-[50%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] animate-ping [animation-delay:1.2s]" />
            <div className="absolute bottom-[35%] left-[50%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] [animation-delay:1.2s]" />
          </div>

          <img
            src="/images/plantImage.png"
            alt="AI Plant Care Scan"
            className="w-full h-full object-contain object-bottom"
            style={{ pointerEvents: 'auto' }}
          />
        </div>
      </div>

      {/* ═══════════════════════════════════
          MOBILE  (below md)
      ═══════════════════════════════════ */}
      <div className="block md:hidden">
        {/* Top row: text left + image right */}


        {/* Bottom row: description + buttons, full width */}
        {/* Bottom row: description + buttons, full width */}
        <div className="block md:hidden">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ minHeight: '340px' }}
          >
            {/* Top-left: badge + headings */}
            <div className="relative z-10 px-4 pt-5" style={{ maxWidth: '60%' }}>
              <div className="mb-3">
                <img
                  src="/images/coming-soon-badge.png"
                  alt="Coming Soon"
                  className="h-[35px] w-auto object-contain"
                />
              </div>
              <p className="text-white/80 text-[11px] font-medium font-poppins mb-1 leading-tight">
                AI Plant care
              </p>
              <h2
                className="font-bold text-white font-poppins leading-snug"
                style={{ fontSize: '16px', lineHeight: '1.25' }}
              >
                Expert Care for Any Plant
              </h2>
            </div>

            {/* Plant image - bleeds to bottom + right edges, BIG */}
            <div
              className="absolute z-0"
              style={{ right: -25, bottom: 0, width: '68%', height: '72%' }}
            >
              <img
                src="/images/plantImage.png"
                alt="AI Plant Care Scan"
                className="w-full h-full object-contain object-bottom"
              />
            </div>

            {/* Scan overlay - sits ON TOP of the leaf, upper-left area of image */}
            <div
              className="absolute z-10 pointer-events-none"
              style={{ left: '40%', top: '38%', width: '25%', aspectRatio: '1' }}
            >
              <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-[3px] border-l-[3px] border-white rounded-tl-sm" />
              <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-[3px] border-r-[3px] border-white rounded-tr-sm" />
              <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-[3px] border-l-[3px] border-white rounded-bl-sm" />
              <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-[3px] border-r-[3px] border-white rounded-br-sm" />
              <div className="absolute inset-0 border border-dashed border-white/30 rounded-lg" />
              <div className="absolute left-0 w-full h-[2px] bg-[#00FF73] shadow-[0_0_10px_#00FF73] animate-scan" />
              <div className="absolute top-[25%] left-[45%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_white] animate-ping" />
              <div className="absolute top-[25%] left-[45%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_white]" />
              <div className="absolute top-[40%] left-[30%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white] animate-ping [animation-delay:0.4s]" />
              <div className="absolute top-[40%] left-[30%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_white] [animation-delay:0.4s]" />
              <div className="absolute bottom-[35%] left-[50%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white] animate-ping [animation-delay:1.2s]" />
              <div className="absolute bottom-[35%] left-[50%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_white] [animation-delay:1.2s]" />
            </div>

            {/* Bottom-left: description + buttons, floats over the image */}
            <div
              className="absolute z-20 left-4 bottom-6"
              style={{ maxWidth: '48%' }}
            >
              <p className="text-white/70 text-[12px] font-medium font-poppins mb-3 leading-snug">
                Scan plant and get Instant diagnosis.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleArrowClick}
                  aria-label="Previous"
                  className="w-[34px] h-[34px] rounded-full border border-white/50 bg-white/10 flex items-center justify-center"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleArrowClick}
                  aria-label="Next"
                  className="w-[34px] h-[34px] rounded-full bg-[#164925] flex items-center justify-center"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
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
              className="relative w-full max-w-[340px] md:max-w-[660px] rounded-3xl bg-[#FFFAF3] shadow-2xl overflow-hidden font-poppins flex flex-col md:flex-row md:h-[400px] border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop Left Side / Mobile Top: Image */}
              <div className="relative w-full h-[180px] md:h-full md:w-[44%] flex-shrink-0 overflow-hidden bg-white">
                <img
                  src="/images/flowerpop.png"
                  alt="Coming Soon Sprout"
                  className="w-full h-full object-cover"
                />
                
                {/* Circular Coming Soon Badge */}
                <div className="absolute top-[8%] left-[32%] md:top-[28%] md:left-[16%] w-[84px] md:w-[125px] z-10">
                  <img
                    src="/images/comingsoon.png"
                    alt="Coming Soon Badge"
                    className="w-full h-auto object-contain animate-pulse"
                  />
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
              className="relative w-full max-w-[320px] md:max-w-[420px] rounded-3xl bg-white shadow-2xl overflow-hidden font-poppins"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 w-7 h-7 flex items-center justify-center rounded-full bg-black/10 text-gray-500 hover:bg-black/20 hover:text-gray-700 transition-colors"
              >
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </button>

              {/* Flower Image with Dashed Border */}
              <div className="flex justify-center pt-7 pb-4 px-6">
                <div className="relative w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-2xl border-2 border-dashed border-[#164925]/40 p-2 flex items-center justify-center">
                  <img
                    src="/images/popup.png"
                    alt="Thank You Flowers"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Thank You Content */}
              <div className="text-center px-6 pb-7">
                <h3 className="text-[#164925] font-bold text-lg md:text-xl leading-snug mb-1">
                  Thank You
                </h3>
                <p className="text-[#164925]/80 font-medium text-sm md:text-base mb-1">
                  We've Got Your Request
                </p>
                <p className="text-gray-500 text-xs md:text-sm mb-5 font-nunito">
                  We'll notify you when the app is ready!
                </p>
                <button
                  onClick={closeModal}
                  className="w-full max-w-[200px] rounded-lg bg-[#164925] text-white text-sm font-medium py-2.5 hover:bg-[#1b532c] transition-colors"
                >
                  Explore Now
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}