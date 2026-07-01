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
      title: 'Book A Gardner',
      image: '/images/service-1.png',
      alt: 'Book A Gardner'
    },
    {
      id: 2,
      title: 'Monthly Plant Care',
      image: '/images/service-2.png',
      alt: 'Monthly Plant Care'
    },
    {
      id: 3,
      title: 'Terrace Garden Maintenance',
      image: '/images/service-3.png',
      alt: 'Terrace Garden Maintenance'
    },
    {
      id: 4,
      title: 'Lawn Maintenance',
      image: '/images/service-4.png',
      alt: 'Lawn Maintenance'
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
    <section className=" py-10 md:py-16 -mt-[1px]">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* Leaf Icon - Centered for both mobile and desktop */}
          <div className="flex items-center justify-center mb-3">
            <Image src="/images/leaf-icon.svg" alt="leaf-icon" width={24} height={24} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          </div>
          <h2 className="text-[22px] md:text-4xl font-medium md:font-normal text-[#164925] mb-2 sm:mb-4">
            Our Expert Services
          </h2>
          <p className="text-xs sm:text-base text-green max-w-3xl mx-auto font-nunito px-4">
            Professional gardening and landscaping services tailored to your needs
          </p>
        </div>

        {/* Desktop View: Carousel Slider */}
        <div className="hidden lg:block relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth mb-6 [scroll-snap-type:x_mandatory]"
          >
            <div className="flex gap-6 lg:gap-8 pb-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 w-[270px] flex flex-col rounded-2xl overflow-hidden cursor-pointer [scroll-snap-align:start]"
                >
                  {/* Service Image */}
                  <div className="relative h-[180px] w-[270px] overflow-hidden rounded-t-2xl">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out transform hover:scale-105"
                    />
                  </div>

                  {/* Service Content - Cream background box rounded at bottom */}
                  <div className="bg-[#FFE9CA] py-3.5 px-3 text-center flex items-center justify-center min-h-[58px] rounded-b-2xl">
                    <h3 className="text-[14px] font-semibold text-[#164925] leading-tight font-poppins">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-[42px] h-[42px] rounded-full border border-[rgba(22,73,37,0.3)] flex items-center justify-center hover:bg-[#164925] hover:border-[#164925] group transition-all"
              aria-label="Previous service"
            >
              <LeftArrow className="w-[6px] h-[11px] stroke-[#164925] group-hover:stroke-white transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="w-[42px] h-[42px] rounded-full border border-[rgba(22,73,37,0.3)] flex items-center justify-center hover:bg-[#164925] hover:border-[#164925] group transition-all"
              aria-label="Next service"
            >
              <RightArrow className="w-[6px] h-[11px] stroke-[#164925] group-hover:stroke-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Mobile & Tablet View: 2-Line Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide pb-4">
          <div className="grid grid-rows-2 grid-flow-col gap-4 w-max px-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="w-[200px] flex flex-col rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Service Image */}
                <div className="relative h-[100px] w-[200px] overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Service Content - Cream background box rounded at bottom */}
                <div className="bg-[#FFE9CA] py-2 px-2 text-center flex items-center justify-center min-h-[46px] rounded-b-2xl">
                  <h3 className="text-[12px] font-semibold text-[#164925] leading-tight font-poppins">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Growniq App Buttons */}
        <div className="text-center mt-10 md:mt-14">
          <p className="text-xs md:text-sm text-[#164925] mb-4 font-medium font-nunito">Download Growniq App</p>
          <div className="flex items-center justify-center gap-3.5 px-4 flex-wrap">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
              <Image src="/images/608.png" alt="Download on the Apple Store" width={140} height={42} className="object-contain h-[42px] w-auto" />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
              <Image src="/images/609.png" alt="Get it on Google Play" width={140} height={42} className="object-contain h-[42px] w-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
