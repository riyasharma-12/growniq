'use client';

import { useRef, useState, useEffect } from 'react';
import { LeftArrow, RightArrow } from './icons';
import Image from 'next/image';
import DownloadModal from './DownloadModal';

export default function ExpertServices() {
  const scrollContainerRef = useRef(null);
  const [carouselStyle, setCarouselStyle] = useState({});
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const containerWidth = 1200;
      const leftPadding = 24; // 1.5rem
      const marginLeft = Math.max(leftPadding, (width - containerWidth) / 2 + leftPadding);
      const carouselWidth = width - marginLeft;

      setCarouselStyle({
        marginLeft: `${marginLeft}px`,
        width: `${carouselWidth}px`
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      id: 1,
      title: 'Book A Gardner',
      image: '/images/garden.png',
      alt: 'Book A Gardner'
    },
    {
      id: 2,
      title: 'Monthly Plant Care',
      image: '/images/money.png',
      alt: 'Monthly Plant Care'
    },
    {
      id: 3,
      title: 'Terrace Garden Maintenance',
      image: '/images/terrace.png',
      alt: 'Terrace Garden Maintenance'
    },
    {
      id: 4,
      title: 'Lawn Maintenance',
      image: '/images/lawn.png',
      alt: 'Lawn Maintenance'
    },
    {
      id: 5,
      title: 'New Home Plant Setup',
      image: '/images/home.png',
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

  const mobileScrollContainerRef = useRef(null);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.querySelector('.service-card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 32; // lg:gap-8 is 32px
        const singleWidth = container.scrollWidth / 2;
        if (container.scrollLeft <= 10) {
          container.scrollLeft = singleWidth;
        }
        container.scrollBy({
          left: -(cardWidth + gap),
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.querySelector('.service-card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 32; // lg:gap-8 is 32px
        const singleWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= singleWidth - 10) {
          container.scrollLeft = container.scrollLeft - singleWidth;
        }
        container.scrollBy({
          left: cardWidth + gap,
          behavior: 'smooth'
        });
      }
    }
  };

  const duplicatedServices = [...services, ...services];

  return (
    <section className="py-10 md:py-16 -mt-[1px] overflow-hidden">
      {/* Centered Header Container */}
      <div className="container mx-auto px-4 sm:px-3 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* Leaf Icon - Centered for both mobile and desktop */}
          <div className="flex items-center justify-center mb-3">
            <Image src="/images/leaf-icon.svg" alt="leaf-icon" width={24} height={24} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
          </div>
          <h2 className="text-[22px] md:text-4xl font-medium md:font-normal text-[#164925] mb-2 sm:mb-4">
            Our Expert Services
          </h2>
          <p className="text-[15px] sm:text-[15px] text-green max-w-3xl sm:max-w-4xl mx-auto font-nunito px-4">
            Professional gardening and landscaping services tailored to your needs
          </p>
        </div>
      </div>

      {/* Desktop View: Carousel Slider - Starts at left container boundary, extends to right edge */}
      <div
        className="hidden lg:block overflow-hidden mb-6"
        style={carouselStyle}
      >
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-6 lg:gap-8 pb-4">
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="service-card flex-shrink-0 w-[230px] flex flex-col rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Service Image */}
                <div className="relative h-[150px] w-[230px] overflow-hidden rounded-t-2xl">
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
      </div>

      {/* Navigation & Controls Area */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        {/* Navigation Arrows */}
        <div className="hidden lg:flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-[42px] h-[42px] rounded-full border border-[rgba(22,73,37,0.3)] bg-transparent flex items-center justify-center text-[#164925] hover:bg-[#164925] hover:border-[#164925] hover:text-white active:bg-[#164925] active:border-[#164925] active:text-white transition-all cursor-pointer group"
            aria-label="Previous service"
          >
            <LeftArrow className="w-[6px] h-[11px] stroke-current transition-colors" />
          </button>
          <button
            onClick={handleNext}
            className="w-[42px] h-[42px] rounded-full border border-[rgba(22,73,37,0.3)] bg-transparent flex items-center justify-center text-[#164925] hover:bg-[#164925] hover:border-[#164925] hover:text-white active:bg-[#164925] active:border-[#164925] active:text-white transition-all cursor-pointer group"
            aria-label="Next service"
          >
            <RightArrow className="w-[6px] h-[11px] stroke-current transition-colors" />
          </button>
        </div>

        {/* Mobile & Tablet View: 2-Line Horizontal Scroll */}
        <div
          ref={mobileScrollContainerRef}
          className="lg:hidden overflow-x-auto scrollbar-hide pb-4"
        >
          <div className="grid grid-rows-2 grid-flow-col gap-2 w-max px-1">
            {duplicatedServices.map((service, index) => (
              <div
                key={`${service.id}-${index}-mob`}
                className="w-[200px] flex flex-col rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Service Image */}
                <div className="relative h-[130px] w-[200px] overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Service Content - Cream background box rounded at bottom */}
                <div className="bg-[#FFE9CA] py-2 px-2 text-center flex items-center justify-center min-h-[60px] rounded-b-2xl">
                  <h3 className="text-[12px] font-semibold text-[#164925] leading-tight font-poppins">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Growniq App Buttons */}
        <div className="hidden lg:block   text-center mt-10 md:mt-14">
          <p className="text-xs md:text-sm text-[#164925] mb-4 font-medium font-nunito">Download Growniq App</p>
          <div className=" flex flex-row items-center justify-center gap-3 px-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsDownloadOpen(true);
              }}
              className="hover:opacity-90 transition-opacity"
            >
              <Image src="/images/608.svg" alt="Download on the Apple Store" width={140} height={50} className="object-contain h-[38px] md:h-[50px] w-auto" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsDownloadOpen(true);
              }}
              className="hover:opacity-90 transition-opacity"
            >
              <Image src="/images/609.svg" alt="Get it on Google Play" width={140} height={50} className="object-contain h-[38px] md:h-[50px] w-auto" />
            </a>
          </div>
        </div>
      </div>
      <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </section>
  );
}
