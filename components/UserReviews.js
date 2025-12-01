'use client';

import { useState, useRef } from 'react';
import { LeftArrow, RightArrow } from './icons';

export default function UserReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [lightboxImage, setLightboxImage] = useState(null);

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
      location: 'Sec -21, Gurugram'
    },
    {
      id: 2,
      rating: 4,
      title: 'Supportive team',
      description: 'Growniq provides very professional services. The team is extremely supportive and always happy to assist, even when you have additional requests.',
      author: 'Namita Jain',
      date: 'Sec -67, Gurugram',
      images: [
        '/images/r-image-2.png',
        '/images/r-image-3.png',
        '/images/r-image-4.png',
        '/images/r-image-5.png',
      ],
      authorImage: '/images/r-image-2.png',
      authorRole: 'Housewife',
      location: 'Sec -21, Dwarka, New Delhi'
    },
    {
      id: 3,
      rating: 5,
      title: 'Professional Gardening Service',
      description: '"I used to call a gardener through the guard or a friend, but then I found out Growniq is coming soon with an app  related to gardening. I contacted them through the their webiste, and now I’m very happy and satisfied with their team. All the best to the team for the app waiting.',
      author: 'Hemika Raghav',
      date: 'Sec -50, Gurgaon',
      images: [
        '/images/review-hm-5.png',
        '/images/review-hm-4.png',
        '/images/review-hm-3.png',
        '/images/review-hm-2.png',
        '/images/review-hm-1.png',
      ],
      authorImage: '/images/review-hm-5.png',
      authorRole: 'Housewife',
      location: 'Sec -21, Dwarka, New Delhi'
    },
    {
      id: 4,
      rating: 5,
      title: 'Great job done',
      description: 'Growniq provides very professional services. The team is extremely supportive and always happy to assist, even when you have additional requests.',
      author: 'Jaisheel',
      date: 'Sec -49, Gurgaon',
      images: [
        '/images/r-image-6.png',
        '/images/r-image-7.png',
        '/images/r-image-8.png',
      ],
      authorImage: '/images/r-image-6.png',
      authorRole: 'IT Professional',
      location: 'Sec -21, Dwarka, New Delhi'
    },

  ];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? blogs.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === blogs.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / blogs.length;
      const scrollPosition = cardWidth * index;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-green' : 'text-green'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      <section id="user-reviews" className="scroll-mt-24 md:scroll-mt-32 bg-[#FFFAF3] py-6 sm:py-12 lg:py-20 -mt-[1px]">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-[22px] md:text-4xl md:font-normal text-[#164925] mb-3 sm:mb-4">
              Why our customers keep coming back
            </h2>
            <p className="text-sm sm:text-base text-green max-w-3xl mx-auto mb-10">
              Experience the future of gardening with our upcoming AI features
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative -mx-4">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth mb-8"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex gap-6 lg:gap-8 pb-4">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="pl-4 last:pr-4 flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(28.571%-22.857px)] overflow-hidden md:basis-[340px] basis-[288px]"
                    style={{ scrollSnapAlign: 'start' }}
                  >
                    {/* Card Content */}
                    <div className=" md:space-y-5 ">
                      {/* Rating and Stars */}
                      <div className="flex items-center gap-1">
                        <span className="text-base font-bold text-green">{blog.rating}/5</span>
                        {renderStars(blog.rating)}
                      </div>

                      {/* Title */}
                      <h4 className="text-lg sm:text-xl font-normal text-green mb-2 !mt-2">
                        {blog.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-green leading-relaxed mb-5 h-[136px]">
                        {blog.description}
                      </p>



                      {/* Images Grid */}
                      <div className="flex gap-2 mb-5">
                        {blog.images.map((image, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setLightboxImage(image)}
                            className="rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-green"
                          >
                            <img
                              src={image}
                              alt={`Garden ${index + 1}`}
                              className="w-16 h-16 object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </button>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={blog.authorImage}
                          alt={blog.author}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-xs font-normal text-green">
                            {blog.author}, {blog.authorRole}
                          </p>
                          <p className="text-xs text-green font-normal">{blog.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:block">
              <div className="flex items-center justify-end gap-5 mt-8">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-green flex items-center justify-center "
                  aria-label="Previous blog"
                >
                  <LeftArrow className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-green flex items-center justify-center"
                  aria-label="Next blog"
                >
                  <RightArrow className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative  w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setLightboxImage(null)}
                className="absolute -top-9 md:top-4 right-4 w-6 h-6 bg-white text-green shadow rounded-full flex items-center justify-center hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <img
                src={lightboxImage}
                alt="Selected"
                className="w-full h-auto max-h-[100vh] object-contain bg-black/40"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
