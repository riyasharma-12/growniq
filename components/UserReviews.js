'use client';

import { useState, useRef, useEffect } from 'react';
import { LeftArrow, RightArrow } from './icons';
import DownloadModal from './DownloadModal';

export default function UserReviews() {
  const scrollContainerRef = useRef(null);
  const [carouselStyle, setCarouselStyle] = useState({});
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const autoplayRef = useRef(null);

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

  // Lightbox states
  const [activeReviewId, setActiveReviewId] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const blogs = [
    {
      id: 1,
      rating: 5,
      title: 'Best Gardening Service Ever',
      description: 'We heard about the service from a friend and decided to give it a try. The team was highly professional and knowledgeable, and their gardeners were both supportive and helpful throughout the process.',
      author: 'Sunita',
      images: [
        '/images/review-SBO-1.png',
        '/images/review-SBO-2.png',
      ],
      authorImage: '/images/review-SBO-1.png',
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
        '/images/r-image-2.png',
        '/images/r-image-3.png',
        '/images/r-image-4.png',
      ],
      authorImage: '/images/r-image-2.png',
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
        '/images/review-hm-5.png',
        '/images/review-hm-4.png',
        '/images/review-hm-3.png',
      ],
      authorImage: '/images/review-hm-5.png',
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
        '/images/r-image-6.png',
        '/images/r-image-7.png',
        '/images/r-image-8.png',
      ],
      authorImage: '/images/r-image-6.png',
      authorRole: 'IT Professional',
      location: 'Sec - 49, Gurgaon'
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId;
    const speed = 0.8; // Smooth scrolling speed in pixels/frame

    const scroll = () => {
      if (!isHovered && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const singleWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleWidth) {
          container.scrollLeft = container.scrollLeft - singleWidth;
        } else {
          container.scrollLeft += speed;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.querySelector('.review-card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 32; // lg:gap-8 is 32px
        const singleWidth = container.scrollWidth / 3;
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
      const cardElement = container.querySelector('.review-card');
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 32; // lg:gap-8 is 32px
        const singleWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleWidth * 2 - 10) {
          container.scrollLeft = container.scrollLeft - singleWidth;
        }
        container.scrollBy({
          left: cardWidth + gap,
          behavior: 'smooth'
        });
      }
    }
  };

  const duplicatedBlogs = [...blogs, ...blogs, ...blogs];

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
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-6">
            <span className="text-[#164925] text-sm md:text-base font-medium font-poppins whitespace-nowrap">
              Download Growniq App
            </span>
            <div className="flex items-center gap-3">
              {/* Apple Store Button */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDownloadOpen(true);
                }}
                className="flex-shrink-0"
              >
                <img
                  src="/images/608.svg"
                  alt="Download on the App Store"
                  className="h-9 md:h-12 w-auto object-contain"
                />
              </a>
              {/* Google Play Button */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDownloadOpen(true);
                }}
                className="flex-shrink-0"
              >
                <img
                  src="/images/609.svg"
                  alt="Get it on Google Play"
                  className="h-9 md:h-12 w-auto object-contain"
                />
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
            <img src="/images/subtract2.svg" alt="" className="w-[21px] h-[26px] mb-6 object-contain" />
            <h2 className="text-3xl md:text-5xl font-medium text-[#164925] mb-4 font-poppins">
              Why our customers keep coming back
            </h2>
            <p className="text-base md:text-lg text-[#164925] max-w-3xl mx-auto font-nunito">
              Experience the future of gardening with our upcoming AI features
            </p>
          </div>
        </div>

        {/* Carousel Container - Starts at left container boundary, extends to right edge */}
        <div
          className="overflow-hidden mb-8"
          style={carouselStyle}
        >
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="bg-[#FFFAF3] overflow-x-auto overflow-y-hidden scrollbar-hide"
          >
            <div className="flex gap-6 lg:gap-8 pb-4">
              {duplicatedBlogs.map((blog, index) => (
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
                      <h4 className="text-lg font-semibold text-[#164925] font-poppins leading-snug">
                        {blog.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-[#164925] leading-relaxed font-nunito line-clamp-6 opacity-90">
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
                                className="w-12 h-12 object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
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
                          <p className="text-xs font-semibold text-[#164925] font-poppins">
                            <span className="hidden md:inline">{blog.author}, {blog.authorRole}</span>
                            <span className="inline md:hidden">{blog.author} / {blog.authorRole}</span>
                          </p>
                          <p className="text-[11px] text-[#164925] opacity-70 font-nunito mt-0.5">
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

        {/* Centered Controls Area */}
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-[42px] h-[42px] rounded-full border border-[rgba(22,73,37,0.3)] bg-transparent flex items-center justify-center text-[#164925] hover:bg-[#164925] hover:border-[#164925] hover:text-white active:bg-[#164925] active:border-[#164925] active:text-white transition-all cursor-pointer group"
              aria-label="Previous blog"
            >
              <LeftArrow className="w-[6px] h-[11px] stroke-current transition-colors" />
            </button>
            <button
              onClick={handleNext}
              className="w-[42px] h-[42px] rounded-full border border-[rgba(22,73,37,0.3)] bg-transparent flex items-center justify-center text-[#164925] hover:bg-[#164925] hover:border-[#164925] hover:text-white active:bg-[#164925] active:border-[#164925] active:text-white transition-all cursor-pointer group"
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