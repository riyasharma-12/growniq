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
      title: 'Book a Gardner',
      image: '/images/service-1.png',
      alt: 'Book a Gardner'
    },
    {
      id: 2,
      title: 'Monthly plant care',
      image: '/images/service-2.png',
      alt: 'Monthly plant care'
    },
    {
      id: 3,
      title: 'Lawn Maintenance',
      image: '/images/service-4.png',
      alt: 'Lawn Maintenance'
    },
    {
      id: 4,
      title: 'Terrace Garden Maintenance',
      image: '/images/service-3.png',
      alt: 'Terrace Garden Maintenance'
    },
    {
      id: 5,
      title: 'New Home Plant Setup',
      image: '/images/service-5.png',
      alt: 'New Home Plant Setup'
    },
    {
      id: 6,
      title: 'Garden Heavy Work',
      image: '/images/Garden-Maintainnace.png',
      alt: 'Garden Heavy Work'
    },
    {
      id: 7,
      title: 'Workspace Plant Care',
      image: '/images/Indoor-Plants.png',
      alt: 'Workspace Plant Care'
    },
    {
      id: 8,
      title: 'Plant Repotting',
      image: '/images/Terrace-Garden.png',
      alt: 'Plant Repotting'
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
    <section className="bg-[#FFFAF3] py-10 md:py-16 -mt-[1px]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
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
            className="overflow-x-auto scrollbar-hide scroll-smooth mb-8 [scroll-snap-type:x_mandatory]"
          >
            <div className="flex gap-6 lg:gap-8 pb-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-[288px] overflow-hidden cursor-pointer [scroll-snap-align:start]"
                >
                  {/* Service Image */}
                  <div className="relative h-[192px] w-[288px] overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-out transform hover:scale-105"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="pt-4 text-center">
                    <h3 className="text-lg md:text-xl font-medium text-green leading-7">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:block">      
            <div className="hidden sm:flex items-center justify-end gap-5 mt-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-green flex items-center justify-center hover:bg-green hover:text-white transition-colors"
                aria-label="Previous service"
              >
                <LeftArrow className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-green flex items-center justify-center hover:bg-green hover:text-white transition-colors"
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
