'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      alert('Thanks! We will get back to you soon.');
      e.currentTarget.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="contact-us relative py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="text-white md:pt-[345px]">
              <p className="uppercase tracking-wide text-sm opacity-90 mb-3">Let us call you back</p>
              <h2 className="text-3xl sm:text-4xl font-medium leading-tight mb-4">Share your message & we’ll respond</h2>
              <p className="text-sm sm:text-base text-white/80 max-w-xl mb-6">
                Growniq thrives and open communication! Whether you have a question about your green corner, your plant or interested in learning more about our services, just share your message, we will connect with you.
              </p>
              <hr className="border-white/20 mb-6" />
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img src="/images/avtar-1.png" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    <img src="/images/avtar-2.png" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    <img src="/images/avtar-3.png" alt="avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold">1000+</div>
                    <div className="opacity-90">Users actively booking</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-right">
                  <div className="font-semibold flex items-center gap-1">
                    5/5
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-green">Rating by users</div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end w-full">
              <div className="rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_10px_25px_rgba(0,0,0,0.25)] p-5 sm:p-6 lg:p-8">
                <h3 className="text-white text-xl mb-4">Get in touch</h3>
                <p className="text-white/90 text-sm mb-6">Please give us information and we will get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white text-sm mb-2">Name<span className="text-red-500">*</span></label>
                    <input type="text" name="name" required className="w-full rounded-md bg-white text-black placeholder-gray-500 px-4 py-2.5 outline-none focus:ring-2 focus:ring-white/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Mobile Number<span className="text-red-500">*</span></label>
                    <input type="tel" name="mobile" required className="w-full rounded-md bg-white text-black placeholder-gray-500 px-4 py-2.5 outline-none focus:ring-2 focus:ring-white/50" placeholder="Enter mobile number" />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Email ID</label>
                    <input type="email" name="email" className="w-full rounded-md bg-white text-black placeholder-gray-500 px-4 py-2.5 outline-none focus:ring-2 focus:ring-white/50" placeholder="name@example.com" />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Your Message</label>
                    <textarea name="message" rows={4} className="w-full rounded-md bg-white text-black placeholder-gray-500 px-4 py-2.5 outline-none focus:ring-2 focus:ring-white/50" placeholder="Write your message" />
                  </div>
                  <div className="pt-2">
                    <button type="submit" disabled={submitting} className="w-full sm:w-auto min-w-[160px] rounded-md border border-white bg-[#1E6130] text-white px-6 py-2.5 hover:bg-[#1a552a] disabled:opacity-60">
                      {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
