'use client';

import { LeftArrow, RightArrow } from './icons';

export default function AiWidget() {
  const handleDownloadClick = () => {
    window.open("https://www.figma.com/design/BlW3DX6fTXmzEButibgqB7/Growniq-Web?node-id=1602-326&m=dev", "_blank");
  };

  return (
    <section id="ai-care" className="relative overflow-hidden bg-[#eff0ea] min-h-[592px] flex items-center py-16 md:py-24 -mt-[1px]">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dark green gradient from top-left */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#164925] via-[#1b532c] to-transparent opacity-95"></div>
        {/* Light sage gradient from bottom-right */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#d7ebe7]/80 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Coming Soon Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-white border border-[#bf00ff]/30 shadow-[0_0_15px_rgba(191,0,255,0.15)] px-5 py-2 rounded-full">
                {/* Glow Icon */}
                <span className="w-2 h-2 rounded-full bg-[#ed5213] animate-ping"></span>
                <span className="text-[#ed5213] text-sm font-bold font-poppins tracking-wider uppercase">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Titles */}
            <div className="space-y-4">
              <h3 className="text-white/80 text-lg md:text-xl font-medium tracking-wide font-poppins">
                AI Plant care
              </h3>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight font-poppins">
                Expert Care for Any Plant
              </h2>
              <p className="text-lg md:text-2xl text-[#164925] font-medium font-poppins pt-2">
                Scan plant and get Instant diagnosis.
              </p>
            </div>

            {/* Navigation / Action Arrows */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handleDownloadClick}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#164925] transition-all duration-300"
                aria-label="Previous"
              >
                <LeftArrow className="w-5 h-5" />
              </button>
              <button
                onClick={handleDownloadClick}
                className="w-12 h-12 rounded-full bg-[#164925] border border-[#164925] text-white flex items-center justify-center hover:bg-white hover:text-[#164925] hover:border-white transition-all duration-300"
                aria-label="Next"
              >
                <RightArrow className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Right Column - Scanning Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-square sm:aspect-[1.1] rounded-3xl overflow-hidden shadow-2xl bg-black/10 flex items-center justify-center border border-white/10">
              
              {/* Monstera Leaf Image */}
              <img
                src="/images/AI-Plant-atf-2.png"
                alt="AI Plant Care Scan"
                className="w-full h-full object-cover rounded-3xl"
              />

              {/* Scanning Frame Overlay */}
              <div className="absolute inset-8 border border-dashed border-white/40 rounded-xl pointer-events-none">
                
                {/* Solid White Corner Brackets */}
                <div className="absolute -top-[3px] -left-[3px] w-6 h-6 border-t-4 border-l-4 border-white rounded-tl-sm"></div>
                <div className="absolute -top-[3px] -right-[3px] w-6 h-6 border-t-4 border-r-4 border-white rounded-tr-sm"></div>
                <div className="absolute -bottom-[3px] -left-[3px] w-6 h-6 border-b-4 border-l-4 border-white rounded-bl-sm"></div>
                <div className="absolute -bottom-[3px] -right-[3px] w-6 h-6 border-b-4 border-r-4 border-white rounded-br-sm"></div>
                
                {/* Bright Green Scanning Bar */}
                <div className="absolute left-0 w-full h-[3px] bg-[#00FF73] shadow-[0_0_15px_#00FF73] animate-scan"></div>

                {/* Animated Glowing Scan Points */}
                <div className="absolute top-[25%] left-[45%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_white] animate-ping"></div>
                <div className="absolute top-[25%] left-[45%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_white]"></div>

                <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] animate-ping [animation-delay:0.4s]"></div>
                <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] [animation-delay:0.4s]"></div>

                <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] animate-ping [animation-delay:0.8s]"></div>
                <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] [animation-delay:0.8s]"></div>

                <div className="absolute bottom-[35%] left-[50%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] animate-ping [animation-delay:1.2s]"></div>
                <div className="absolute bottom-[35%] left-[50%] w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white] [animation-delay:1.2s]"></div>

                <div className="absolute bottom-[45%] right-[40%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] animate-ping [animation-delay:1.6s]"></div>
                <div className="absolute bottom-[45%] right-[40%] w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] [animation-delay:1.6s]"></div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
