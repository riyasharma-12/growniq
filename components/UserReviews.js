'use client';

import { useState, useRef, useEffect } from 'react';
import { LeftArrow, RightArrow } from './icons';
import DownloadModal from './DownloadModal';
import Image from 'next/image';

export default function UserReviews() {
  const scrollContainerRef = useRef(null);
  const [leftOffset, setLeftOffset] = useState(24);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const autoplayRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const containerWidth = 1200;
      const leftPadding = 24; // 1.5rem
      const offset = Math.max(leftPadding, (width - containerWidth) / 2 + leftPadding);
      setLeftOffset(offset);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lightbox states
  const [activeReviewId, setActiveReviewId] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const blogs = [
    {
      id: 1,
      rating: 5,
      title: 'Best Gardening Service ',
      description: 'We heard about the service from a friend and decided to give it a try. The team was highly professional and knowledgeable, and their gardeners were both supportive and helpful throughout the process.',
      author: 'Sunita',
      images: [
        '/images/r11.svg',
        '/images/r12.svg',
      ],
      authorImage: '/images/r11.svg',
      authorRole: 'Business Owner',
      location: 'Sec - 21, Gurugram'
    },
    {
      id: 2,
      rating: 4,
      title: 'Supportive Team',
      description: 'Growniq provides very professional services. The team is extremely supportive and always happy to assist, even when you have additional requests.',
      author: 'Namita Jain',
      date: 'Sec - 67, Gurugram',
      images: [
        '/images/r21.svg',
        '/images/r22.svg',
        '/images/r23.svg',
        '/images/r24.svg',
        '/images/r25.svg',
      ],
      authorImage: '/images/r21.svg',
      authorRole: 'Business Owner',
      location: 'Sec - 67, Gurugram'
    },
    {
      id: 3,
      rating: 5,
      title: 'Professional Gardening Service',
      description: '"I used to call a gardener through the guard or a friend, but then I found out Growniq is coming soon with an app related to gardening. I contacted them through their website, and now I\'m very happy and satisfied with their team. All the best to the team for the app waiting."',
      author: 'Hemika Raghav',
      date: 'Sec - 50, Gurgaon',
      images: [
        '/images/r31.png',
        '/images/r32.svg',
        '/images/r33.svg',
        '/images/r34.svg',
      ],
      authorImage: '/images/r31.png',
      authorRole: 'Housewife',
      location: 'Sec - 50, Gurgaon'
    },
    {
      id: 4,
      rating: 5,
      title: 'Great job done',
      description: 'Growniq provides very professional services. The team is extremely supportive and always happy to assist, even when you have additional requests.',
      author: 'Avinash',
      date: 'Sec - 49, Gurgaon',
      images: [
        '/images/r41.svg',
        '/images/r42.png',
        '/images/r43.svg',
      ],
      authorImage: '/images/r41.svg',
      authorRole: 'IT Professional',
      location: 'Sec - 49, Gurgaon'
    },
  ];



  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.querySelector('.review-card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 32;
        container.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.querySelector('.review-card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 32;
        container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      }
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="w-4 h-4"
            style={{ color: '#ED5213' }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Find the active review for the lightbox
  const activeReview = blogs.find((b) => b.id === activeReviewId);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!activeReview) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? activeReview.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!activeReview) return;
    setActiveImageIndex((prev) =>
      prev === activeReview.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Download Growniq App Bar */}
      <div className=" bg-[#FFFAF3] py-3 md:py-4">
        <div className="container  mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="hidden lg:block   text-center mt-10 md:mt-14">
            <p className="text-xs md:text-sm text-[#164925] mb-4 font-medium font-nunito">Download Growniq App</p>
            <div className=" flex flex-row items-center justify-center gap-5 px-4">
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
      </div>
      <DownloadModal open={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />

      <section id="user-reviews" className="scroll-mt-24 md:scroll-mt-32 bg-[#FFFAF3] py-12 md:py-20 -mt-[1px] overflow-hidden">
        {/* Centered Header Container */}
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
            <img src="/images/icons2.svg" alt="" className="w-[21px] h-[26px] mb-6 object-contain" />
            <h2 className="text-3xl md:text-5xl font-medium text-[#164925] mb-4 font-poppins">
              Why our customers keep coming back
            </h2>
            <p className="text-[16px] md:text-lg text-[#164925] max-w-3xl mx-auto font-nunito">
              Experience the future of gardening with our upcoming AI features
            </p>
          </div>
        </div>

        {/* Carousel Container - Starts at left container boundary,  */}
        <div className="overflow-hidden mb-4 w-full">
          <div
            ref={scrollContainerRef}
            className="bg-[#FFFAF3] overflow-x-auto overflow-y-hidden scrollbar-hide w-full"
          >
            <div
              className="flex gap-6 lg:gap-8 pb-4"
              style={{ paddingLeft: `${leftOffset}px`, paddingRight: `${leftOffset}px` }}
            >
              {blogs.map((blog, index) => (
                <div
                  key={`${blog.id}-${index}`}
                  className="review-card flex-shrink-0 w-[288px] sm:w-[340px] overflow-hidden"
                >
                  {/* Card */}
                  <div className="bg-[#FFFAF3] p-6 rounded-2xl h-full flex flex-col justify-between ">

                    <div className="space-y-4">
                      {/* Rating and Stars */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-base font-bold text-[#164925] font-poppins">{blog.rating}/5</span>
                        {renderStars(blog.rating)}
                      </div>

                      {/* Title */}
                      <h4 className="text-[18px] font-regular text-[#164925] font-poppins leading-snug">
                        {blog.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[13px] text-[#164925] leading-relaxed font-nunito line-clamp-6 opacity-90">
                        {blog.description}
                      </p>
                    </div>

                    <div>
                      {/* Images Grid — max 3 visible, 3rd shows +N overlay if more */}
                      <div className="flex gap-2 mb-5 mt-4">
                        {blog.images.slice(0, 3).map((image, idx) => {
                          const isLast = idx === 2 && blog.images.length > 3;
                          const remaining = blog.images.length - 3;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setActiveReviewId(blog.id);
                                setActiveImageIndex(idx);
                              }}
                              className="relative rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#164925] shrink-0"
                            >
                              <img
                                src={image}
                                alt={`Garden ${idx + 1}`}
                                className="w-16 h-16 object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
                              />
                              {isLast && (
                                <div className="absolute inset-0 bg-black/55 flex items-center justify-center rounded-lg">
                                  <span className="text-white text-xs font-semibold font-poppins">+{remaining}</span>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-dashed border-[rgba(22,73,37,0.1)]">
                        <div className="min-w-0">
                          <p className="text-[12px] font-semibold text-[#164925] font-poppins">
                            <span className="hidden md:inline">{blog.author}, {blog.authorRole}</span>
                            <span className="inline md:hidden">{blog.author} / {blog.authorRole}</span>
                          </p>
                          <p className="text-[12px] text-[#164925] opacity-70 font-nunito mt-0.5">
                            {blog.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="block lg:hidden  container  mt-2 mx-auto px-4 sm:px-6 max-w-[1200px]">
          <img src="/images/v1.svg" alt="" className="w-full h-full object-contain" />
        </div>



        {/* Centered Controls Area */}
        <div className="hidden lg:block  container mx-auto px-4 sm:px-6 max-w-[1200px]">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-[42px] h-[42px] rounded-full border border-[#164925] bg-transparent flex items-center justify-center text-[#164925] hover:bg-[#164925] hover:border-[#164925] hover:text-white active:bg-[#164925] active:border-[#164925] active:text-white transition-all cursor-pointer group"
              aria-label="Previous blog"
            >
              <LeftArrow className="w-[6px] h-[11px] stroke-current transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="w-[42px] h-[42px] rounded-full border border-[#164925] bg-transparent flex items-center justify-center text-[#164925] hover:bg-[#164925] hover:border-[#164925] hover:text-white active:bg-[#164925] active:border-[#164925] active:text-white transition-all cursor-pointer group"
              aria-label="Next blog"
            >
              <RightArrow className="w-[6px] h-[11px] stroke-current transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setActiveReviewId(null)}
        >
          <div
            className="relative w-full max-w-4xl px-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActiveReviewId(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 hover:bg-white text-[#164925] shadow rounded-full flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Prev Image */}
            {activeReview.images.length > 1 && (
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-6 z-50 w-12 h-12 bg-white/85 hover:bg-white text-[#164925] shadow rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <LeftArrow className="w-6 h-6" />
              </button>
            )}

            {/* Active Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-black/20 flex items-center justify-center">
              <img
                src={activeReview.images[activeImageIndex]}
                alt="Review garden view"
                className="max-w-full max-h-full object-contain"
              />
              {/* Counter Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-xs rounded-full font-medium tracking-wide font-nunito">
                {activeImageIndex + 1} / {activeReview.images.length}
              </div>
            </div>

            {/* Next Image */}
            {activeReview.images.length > 1 && (
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-6 z-50 w-12 h-12 bg-white/85 hover:bg-white text-[#164925] shadow rounded-full flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <RightArrow className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}