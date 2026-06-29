'use client';

import Image from 'next/image';

export default function WhyChoose() {
  const features = [
    {
      id: 1,
      title: 'Trusted & Verified Gardeners',
      description: 'Verified and trained gardeners you can trust'
    },
    {
      id: 2,
      title: 'Transparent & fair Pricing',
      description: 'Clear pricing with no surprises'
    },
    {
      id: 3,
      title: 'Easy Booking & Quick Support',
      description: 'Smooth booking experience with reliable support'
    }
  ];

  return (
    <section className="bg-[#FFFAF3] py-12 md:py-20 -mt-[1px]">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4 md:hidden">
            <Image src="/images/flower-icon.svg" alt="flower-icon" width={24} height={24} />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium text-[#164925] mb-4 font-poppins">
            Why Choose Growniq
          </h2>
          <p className="text-base md:text-lg text-[#164925] opacity-90 max-w-2xl mx-auto font-nunito">
            We're committed to providing the best gardening and landscaping experience
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Left Column - Satisfaction Card */}
          <div className="bg-[#FFE9CA] rounded-[32px] p-6 md:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-sm">
            {/* Decorative leaf for mobile/desktop background */}
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
              <Image src="/images/leaf-bg.svg" alt="leaf" width={150} height={150} />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Badge and Title */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
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
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#164925] font-poppins leading-snug">
                    Customers are satisfied and Happy with our services
                  </h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#164925] opacity-90 leading-relaxed font-nunito">
                Growniq transforms every space from balconies and home gardens to rooftops and open areas into a calm, beautiful green oasis with expert gardening, landscaping, and maintenance services.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-[#164925]/30 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                
                {/* User Avatars & Stats */}
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <div className="flex -space-x-3">
                    <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <Image src="/images/avtar-1.png" alt="User Avatar 1" fill className="object-cover" />
                    </div>
                    <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gray-300">
                      <Image src="/images/avtar-2.png" alt="User Avatar 2" fill className="object-cover" />
                    </div>
                    <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gray-400">
                      <Image src="/images/avtar-3.png" alt="User Avatar 3" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="text-xs md:text-sm font-nunito">
                    <div className="font-bold text-[#164925]">1000+</div>
                    <div className="text-[#164925]/80">Users actively booking</div>
                  </div>
                </div>

                {/* View Testimonials Button */}
                <a 
                  href="#user-reviews" 
                  className="w-full sm:w-auto px-6 py-3 bg-[#FFE9CA] hover:bg-[#ffdca8] text-[#164925] font-medium rounded-xl border border-[#164925] transition-colors duration-300 text-center font-nunito text-sm"
                >
                  View Testimonials
                </a>

              </div>
            </div>
          </div>

          {/* Right Column - Features List */}
          <div className="flex flex-col justify-center space-y-8 md:space-y-12 py-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="space-y-2 group"
              >
                <div className="text-lg font-semibold text-[#164925] font-poppins">
                  {feature.title}
                </div>
                <p className="text-sm md:text-base text-[#164925] opacity-90 leading-relaxed font-nunito">
                  {feature.description}
                </p>
              </div>
            ))}

            {/* Bottom Separator Image on Mobile */}
            <div className="flex justify-center pt-6 lg:hidden">
              <Image src="/images/bottom-bar.png" alt="Separator" width={180} height={10} className="object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
