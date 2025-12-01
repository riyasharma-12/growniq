'use client';

import { useState, useRef } from 'react';
import { LeftArrow, RightArrow } from './icons';
import Image from 'next/image';

export default function ExpertServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'Garden Care & Maintenance',
      description: 'From balconies to lawns and greenhouses, Growniq keeps every space healthy. Book a one-time visit or pick a subscription plan that fits your routine.',
      image: '/images/service-1.png',
      alt: 'Garden maintenance with hedge trimmer'
    },
    {
      id: 2,
      title: 'Landscaping And Garden Setup',
      description: 'Create a clean, green space at home with Growniq. Our experts design balcony gardens, terrace gardens, vertical walls, kitchen gardens tailored to your style and space',
      image: '/images/service-2.png',
      alt: 'Landscaping with flowers and ladder'
    },
    {
      id: 3,
      title: 'Indoor Plant Vastu Guide',
      description: 'Bring balance, positivity, and fresh air into your home with the right plants in the right places. Growniq helps you plan Vastu-aligned indoor plant layouts.',
      image: '/images/service-3.png',
      alt: 'Indoor plants and decor'
    },
    {
      id: 4,
      title: 'Office & Community Gardening',
      description: 'Growniq offers end-to-end subscription-based green solutions for offices, cafés, restaurants, institutions, societies, and public spaces.',
      image: '/images/service-4.png',
      alt: 'Plant care services'
    },
    {
      id: 5,
      title: 'CSR & Green Initiatives',
      description: 'With a commitment to a greener environment, Growniq partners with corporates to execute meaningful plantation and community-driven green programs.',
      image: '/images/service-5.png',
      alt: 'Plant care services'
    }
  ];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / services.length;
      const scrollPosition = cardWidth * index;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#FFFAF3] py-10 md:py-12 -mt-[1px]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center">
            <div className="mb-4 md:hidden mx-auto">
              <Image src="/images/leaf-icon.svg" alt="leaf-icon" width={24} height={24} />
            </div>
          </div>
          <h2 className="text-[22px] md:text-4xl md:font-normal text-[#164925] mb-3 sm:mb-4">
            Our Expert Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-green max-w-3xl mx-auto">
            Professional gardening and landscaping services tailored to your needs
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-hidden sm:overflow-x-auto overflow-y-visible sm:overflow-y-hidden scrollbar-hide scroll-smooth mb-8 sm:[scroll-snap-type:x_mandatory]"
          >
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 md:pb-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(28.571%-22.857px)] overflow-hidden cursor-pointer sm:[scroll-snap-align:start]"
                >
                  {/* Service Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-out transform hover:scale-105"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="pt-5">
                    <h3 className="!text-[18px] md:text-2xl font-normal text-green mb-2 leading-7">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-green leading-6 mb-5 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Explore Button */}
                    <button className="w-full bg-[#164925] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#1a5c3a] transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <span>Explore Service</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:block">      
            <div className="hidden sm:flex items-center justify-end gap-5 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-green flex items-center justify-center "
                aria-label="Previous service"
              >
                <LeftArrow className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-green flex items-center justify-center"
                aria-label="Next service"
              >
                <RightArrow className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
             </div>
        </div>
      </div>
    </section>
  );
}
