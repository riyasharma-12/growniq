'use client';
import { RatingIcon } from './icons';
import Image from 'next/image';

export default function WhyChoose() {
  const features = [
    {
      id: 1,
      title: 'Complete Garden Care – All in One App',
      description: 'From daily watering and maintenance to landscaping, plant setups, and garden makeovers, everything your garden needs is available in one place.'
    },
    {
      id: 2,
      title: 'Easy Booking & Reliable Support',
      description: 'Book any service in seconds, track your gardener’s visit, and get quick support directly through the Growniq app.'
    },
    {
      id: 3,
      title: 'Smart AI Gardening',
      description: 'Identify plants, check plant health, get watering reminders, and learn easy care tips with our built-in AI assistant.'
    }
  ];

  return (
    <section className="bg-[#FFFAF3] py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 rounded-[16px] sm:px-6 ">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center">
            <div className="mb-4 md:hidden mx-auto">
              <Image src="/images/flower-icon.svg" alt="flower-icon" width={24} height={24} />
            </div>
          </div>
          <h2 className="text-[22px] md:text-4xl md:font-normal text-[#164925] mb-3 sm:mb-4">
            Why Choose Growniq
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-green max-w-3xl mx-auto">
            We're committed to providing the best gardening and landscaping experience
          </p>
        </div>

        <div className="bg-[#FFE9CA]  py-7 rounded-2xl px-4 md:bg-transparent grid lg:grid-cols-2 gap-4 lg:gap-10 relative">
          {/* Left Card - 95% Satisfaction */}
          <div className='absolute right-4 top-0 lg:hidden'>
            <Image src="/images/leaf-bg.svg" alt='leaf' width={120} height={109} />
          </div>
          <div className="rounded-[16px] md:bg-[#FFE9CA] sm:p-8 lg:p-10 space-y-6 relative">
            {/* 95% Badge and Title */}
            <div className="flex flex-col lg:flex-row items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="relative w-[103px] h-[78px]">
                  <Image
                    src="/images/percentage.svg"
                    alt="Percentage"
                    className="rounded-lg"
                    fill
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] sm:text-2xl font-semibold text-green">
                  Customers are satisfied and happy with our services
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-green leading-relaxed mb-10">
              Growniq transforms every corner of your world — from cozy balconies and home gardens to rooftops and outdoor spaces — into a serene green oasis through expert gardening and landscaping, and maintenance services.
            </p>

            {/* Divider */}
            <div className="border-t hidden md:block border-dashed border-[#164925]"></div>

            {/* Users and Button */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {/* User Avatars */}
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="flex -space-x-3">
                  <div className="relative w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <Image
                      src="/images/avtar-1.png"
                      alt="Avatar"
                      className="rounded-lg"
                      fill
                    />
                  </div>
                  <div className="relative w-10 h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                    <Image
                      src="/images/avtar-2.png"
                      alt="Avatar"
                      className="rounded-lg"
                      fill
                    />
                  </div>
                  <div className="relative w-10 h-10 rounded-full bg-gray-500 border-2 border-white overflow-hidden">
                    <Image
                      src="/images/avtar-3.png"
                      alt="Avatar"
                      className="rounded-lg"
                      fill
                    />
                  </div>
                </div>
                <div className="text-sm flex-1">
                  <div className="font-semibold text-[#164925]">1000+</div>
                  <div className="text-[#164925]">Users actively booking</div>
                </div>
              </div>

              {/* View Testimonials Button */}
              <a href="#user-reviews" className="flex-1 px-6 py-3 bg-[#FFE9CA] text-[#164925] font-medium rounded-lg border border-[#164925] transition-colors duration-300 text-center">
                View Testimonials
              </a>

              <div className="border-t mt-5 w-full md:hidden border-dashed border-[#164925]"></div>

            </div>

          </div>

          {/* Right Side - Features List */}
          <div className="md:py-4 space-y-4 sm:space-y-6 md:mb-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="text-green text-[20px]"
              >
                <div className="text-base font-medium text-green mb-2 leading-7 text-left">
                  {feature.title}
                </div>
                <p className="text-[16px] md:text-left sm:text-base text-green leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
            <div className="flex justify-center mt-5">
              <div className="bottomBar relative md:hidden">
                <Image src="/images/bottom-bar.png" alt="bottom-bar" width={208} height={11} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
