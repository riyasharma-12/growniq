'use client';

import Image from 'next/image';

export default function WhyChoose() {
  return (
    <section className="bg-[#FFFAF3] pt-12 md:py-20 -mt-[1px]">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">

    
        <div className="text-center mb-10 md:mb-16">
          {/* Centered Flower Icon (visible on both desktop and mobile) */}
          <div className="flex items-center justify-center mb-10">
            <Image
              src="/images/flower-icon.svg"
              alt="flower-icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <h2 className="text-[22px] md:text-[36px] font-medium text-[#164925] mb-4 font-poppins leading-tight">
            Why Choose Growniq
          </h2>
          <p className="text-[15px] px-4 md:text-lg text-[#164925] opacity-90 max-w-2xl mx-auto font-nunito ">
            We're committed to providing the best gardening and landscaping experience
          </p>
        </div>

        {/* ========================================================
            MOBILE LAYOUT (lg:hidden)
            Matches the Figma Mobile design precisely.
            ======================================================== */}
        <div className="block lg:hidden">
          <div className="bg-[#FFE9CA] rounded-[32px] p-6 relative overflow-hidden shadow-sm  pt-7">
            {/* Decorative leaf background */}
            <div className="absolute right-0 top-0 opacity-100 pointer-events-none px-6">
              <Image src="/images/leaf-bg.svg" alt="leaf" width={110} height={110} />
            </div>

            <div className="space-y-5 relative z-10">
              {/* Wreath Badge */}
              <div className="flex-shrink-0">
                <div className="relative w-[90px] h-[70px]">
                  <Image
                    src="/images/percentage.svg"
                    alt="95% Satisfaction Badge"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title (Using div to bypass global h3 !important styling in globals.css) */}
              <div className="text-lg md:text-sm font-semibold text-[#164925] font-poppins leading-tight text-left">
                Customers are satisfied and happy with our services
              </div>

              {/* Description Paragraph */}
              <p className="text-[16px] md:text-sm text-[#164925] opacity-90 leading-relaxed font-nunito text-left">
                Growniq transforms every corner of your world from cozy balconies and home gardens to rooftops and outdoor spaces into a serene green oasis through expert gardening and landscaping landscaping, and maintenance services.
              </p>

              {/* Features List Inside the Card */}
              <div className="space-y-5 pt-3">
                <div className="space-y-1 text-left">
                  <div className="text-[18px] md:text-base font-medium text-[#164925] font-poppins">
                    Trusted & Verified Gardeners
                  </div>
                  <p className="text-[16px] md:text-sm text-[#164925] opacity-90 leading-relaxed font-nunito">
                    Verified and trained gardeners you can trust
                  </p>
                </div>

                <div className="space-y-1 text-left">
                  <div className="text-[18px] md:text-base font-medium text-[#164925] font-poppins">
                    Transparent & Fair Pricing
                  </div>
                  <p className="text-[16px] md:text-sm text-[#164925] opacity-90 leading-relaxed font-nunito">
                    Clear pricing with no surprises
                  </p>
                </div>

                <div className="space-y-1 text-left">
                  <div className="text-[18px] md:text-base font-medium text-[#164925] font-poppins">
                    Easy Booking & Quick Support
                  </div>
                  <p className="text-[16px] md:text-sm text-[#164925] opacity-90 leading-relaxed font-nunito">
                    Smooth booking experience with reliable support
                  </p>
                </div>
              </div>

              {/* Dotted Separator Line */}
              <div className="border-t-2 border-dotted border-[#164925]/30 pt-6 mt-4">
                <div className="flex flex-col gap-4">
                  {/* User Avatars & Stats */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      <div className="relative w-8 h-8 rounded-full  overflow-hidden bg-gray-200">
                        <Image src="/images/m1.png" alt="User Avatar 1" fill sizes="32px" className="object-cover" />
                      </div>
                      <div className="relative w-8 h-8 rounded-full  overflow-hidden bg-gray-300">
                        <Image src="/images/m2.png" alt="User Avatar 2" fill sizes="32px" className="object-cover" />
                      </div>
                      <div className="relative w-8 h-8 rounded-full  overflow-hidden bg-gray-400">
                        <Image src="/images/m3.png" alt="User Avatar 3" fill sizes="32px" className="object-cover" />
                      </div>
                    </div>
                    <div className="text-xs font-nunito leading-tight text-left">
                      <div className="font-bold text-[#164925]">1000+</div>
                      <div className="text-[#164925]/80">Users actively booking</div>
                    </div>
                  </div>

                  {/* View Testimonials Button (Full-width pill button) */}
                  <a
                    href="#user-reviews"
                    className="w-full py-3 hover:bg-[#164925] text-[#164925] hover:text-white font-semibold rounded-full border border-[#164925] transition-all duration-300 text-center font-nunito text-sm block"
                  >
                    View Testimonials
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            DESKTOP LAYOUT (hidden lg:grid)
            Matches the Figma Desktop design precisely.
            ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-[57%_43%] gap-10 xl:gap-16 items-stretch ">

          {/* Left Column - Satisfaction Card */}
          <div className="bg-[#FFE9CA] rounded-[32px] p-8 xl:p-10 flex flex-col justify-between relative overflow-hidden shadow-sm">
            {/* Decorative leaf background */}
            <div className="absolute right-0 top-0 opacity-100 pointer-events-none px-6">
              <Image src="/images/leaf-bg.svg" alt="leaf" width={130} height={130} />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Badge and Title Row */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="relative w-[100px] h-[75px]">
                    <Image
                      src="/images/percentage.svg"
                      alt="95% Satisfaction Badge"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  {/* Using div to bypass global h3 !important styling in globals.css */}
                  <div className="text-[24px] xl:text-[24px] font-semibold text-[#164925] font-poppins leading-snug text-left">
                    Customers are satisfied and Happy with our services
                  </div>
                </div>
              </div>

              {/* Description Paragraph */}
              <p className="text-sm xl:text-base text-[#164925] opacity-90 leading-relaxed font-nunito text-left">
                Growniq transforms every space from balconies and home gardens to rooftops and open areas into a calm, beautiful green oasis with expert gardening, landscaping, and maintenance services.
              </p>
            </div>

            {/* Dotted Separator Line */}
            <div className="border-t-2 border-dotted border-[#164925]/30 pt-6 mt-8">
              <div className="flex items-center justify-between gap-6">

                {/* User Avatars & Stats */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-200">
                      <Image src="/images/m1.png" alt="User Avatar 1" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-300">
                      <Image src="/images/m2.png" alt="User Avatar 2" fill sizes="32px" className="object-cover" />
                    </div>
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-400">
                      <Image src="/images/m3.png" alt="User Avatar 3" fill sizes="32px" className="object-cover" />
                    </div>
                  </div>
                  <div className="text-xs xl:text-sm font-nunito leading-tight text-left">
                    <div className="font-medium text-[#164925]">1000+</div>
                    <div className="text-[#164925]/80">Users actively booking</div>
                  </div>
                </div>

                {/* View Testimonials Button (Pill button) */}
                <a
                  href="#user-reviews"
                  className="px-6 py-2.5 hover:bg-[#164925] text-[#164925] hover:text-white font-semibold rounded-full border border-[#164925] transition-all duration-300 text-center font-nunito text-sm block"
                >
                  View Testimonials
                </a>

              </div>
            </div>
          </div>

          {/* Right Column - Features List */}
          <div className="flex flex-col justify-center space-y-8 xl:space-y-10 pl-4">

            <div className="space-y-2 text-left">
              <div className="text-lg xl:text-[20px] font-semibold text-[#164925] font-poppins">
                Trusted & Verified Gardeners
              </div>
              <p className="text-sm xl:text-base text-[#164925] opacity-90 leading-relaxed font-nunito">
                Verified and trained gardeners you can trust
              </p>
            </div>

            <div className="space-y-2 text-left">
              <div className="text-lg xl:text-[20px] font-semibold text-[#164925] font-poppins">
                Transparent & fair Pricing
              </div>
              <p className="text-sm xl:text-base text-[#164925] opacity-90 leading-relaxed font-nunito">
                Clear pricing with no surprises
              </p>
            </div>

            <div className="space-y-2 text-left">
              <div className="text-lg xl:text-[20px] font-semibold text-[#164925] font-poppins">
                Easy Booking & Quick Support
              </div>
              <p className="text-sm xl:text-base text-[#164925] opacity-90 leading-relaxed font-nunito">
                Smooth booking experience with reliable support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
