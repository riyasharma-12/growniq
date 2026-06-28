'use client';

import Link from 'next/link';
import Image from 'next/image';
import DownloadWidget from '@/components/DownloadWidget';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#FFFAF3] py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        {/* Breadcrumb / Back Link */}
        <div className="mb-6 flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-[#164925] font-medium text-sm md:text-base hover:opacity-80 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span className="underline [text-underline-position:from-font] decoration-solid">Back To Home Screen</span>
          </Link>
        </div>

        {/* Hero Section Card */}
        <div className="bg-[#164925] text-white rounded-[32px] p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16 shadow-lg">
          <div className="space-y-6 md:max-w-[50%]">
            <span className="inline-block bg-[#FFE9CA] text-[#164925] px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-medium leading-tight text-[#FFFAF3] flex items-center gap-2 flex-wrap">
              We’re Growniq
              <img className="inline w-8 h-8 md:w-10 md:h-10 shrink-0" src="/images/about-us-icon.svg" alt="asterisk" />
            </h1>
            <p className="text-base md:text-lg text-[#FFFAF3] opacity-90 font-nunito leading-relaxed">
              Making Gardening Simple, Smart & Accessible for Everyone
            </p>
          </div>
          <div className="w-full md:max-w-[45%] shrink-0">
            <div className="relative w-full aspect-[16/9] md:aspect-[1.9] rounded-2xl overflow-hidden shadow-md">
              <img 
                src="/images/about-us-image.png" 
                alt="Beautiful garden view" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-[840px] mx-auto text-center space-y-12 md:space-y-16 pb-16">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-medium text-[#164925] font-poppins">
              The Journey
            </h2>
            <p className="text-base text-[#164925] font-normal font-nunito leading-relaxed">
              Growniq was founded in 2025 with a vision to make greenery more accessible and enjoyable for everyone. As more people embraced plants and green spaces in their homes, offices, balconies, and gardens, we saw a need for a platform that could bring every green need together in one place.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-medium text-[#164925] font-poppins">
              So, we decided to simplify the entire green journey.
            </h2>
            <p className="text-base text-[#164925] font-normal font-nunito leading-relaxed">
              Finding quality plants, booking trusted gardening services, seeking expert guidance, and maintaining healthy green spaces often required dealing with multiple vendors and fragmented solutions. We believed there had to be a better way.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-medium text-[#164925] font-poppins">
              One Platform for Every Green Need.
            </h2>
            <p className="text-base text-[#164925] font-normal font-nunito leading-relaxed">
              Growniq brings together plants, gardening services, expert care, garden setup solutions, and future AI-powered plant guidance into one seamless ecosystem. Whether you’re a first-time plant parent, a gardening enthusiast, a homeowner, or a business, Growniq is designed to make green living simpler and more accessible.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-medium text-[#164925] font-poppins">
              Our vision goes beyond plants.
            </h2>
            <p className="text-base text-[#164925] font-normal font-nunito leading-relaxed">
              We envision a future where greenery is accessible to every home, workplace, and community. Through technology, we aim to empower local nurseries, gardeners, and green professionals while helping people create and maintain thriving green spaces with confidence.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-medium text-[#164925] font-poppins">
              Building a greener future, one space at a time.
            </h2>
            <p className="text-base text-[#164925] font-normal font-nunito leading-relaxed">
              As we grow, our mission remains simple: to connect people with nature, support sustainable living, create livelihood opportunities within the green ecosystem, and contribute to greener, healthier communities.
            </p>
          </div>

          {/* Separator and Bottom Brand */}
          <div className="pt-8 space-y-8 flex flex-col items-center">
            <img 
              className="w-48 h-auto object-contain" 
              src="/images/bottom-bar.png" 
              alt="Leaf separator" 
            />
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#164925] font-poppins">
                Growniq
              </h3>
              <p className="text-sm md:text-base text-[#164925] font-medium font-nunito">
                One Platform for Every Green Need.
              </p>
            </div>
          </div>

        </div>

        {/* Download App Section */}
        <div className="border-t border-[rgba(22,73,37,0.1)] mt-12 pt-8">
          <DownloadWidget />
        </div>
      </div>
    </div>
  );
}
