// 'use client';
// import { useState } from 'react';

// export default function FaqWidget({
//   title = 'FAQs About Growniq',
//   items = [],
//   initiallyOpen = 0,
// }) {
//   const [openIndex, setOpenIndex] = useState(initiallyOpen);

//   const data = items.length > 0 ? items : [
//     {
//       q: 'Which areas do you serve initially?',
//       a: 'We’re starting operations across Delhi–NCR: Delhi, Gurugram, Noida, Ghaziabad and Faridabad. We’ll expand to more cities after launch, sign up to get updates for your area.'
//     },
//     {
//       q: 'What services will Growniq provide?',
//       a: 'Growniq offers complete garden maintenance, along with our Digi Nursery marketplace and smart AI plant-care support. You can buy plants with doorstep delivery, book on-demand gardeners, or choose subscription care. We also provide dedicated B2B gardening solutions and separate Corporate/CSR green initiative services for all Big Companies, all through one app.'
//     },
//     {
//       q: 'How do I book a gardener or service?',
//       a: 'At launch you’ll be able to book via the Growniq app. Meanwhile, you can request a service inquiry or join the waitlist on our website and our team will contact you to schedule a pilot visit.'
//     },
//     {
//       q: 'How are your gardeners vetted?',
//       a: 'We verify identity, experience and basic training for every gardener/partner. We also validate work history and customer feedback before listing them on Growniq to ensure trusted, reliable service.'
//     },
//     {
//       q: 'How is pricing calculated? (basic idea)',
//       a: 'Pricing depends on garden size, number &amp; size of plants, service plan (Basic / Standard /Platinum) and visit frequency. Use our online estimator (or contact us) for a quick quote detailed pricing will be available inside the app.'
//     },
//     {
//       q: 'What is AI Plant Care and how will it help me?',
//       a: 'Growniq’s AI Plant Care will provide plant-specific reminders, early pest or stress detection suggestions, and tailored care tips, helping beginners and busy households keep plants healthy with minimal effort..'
//     },
//     {
//       q: 'How can I get early access, corporate partnerships, or request a demo?',
//       a: 'Join our waitlist on the website for early access and launch offers. For B2B, CSR collaborations, or demos, email partners@growniq.in and our team will follow up within 48 hours.'
//     }
//   ];

//   return (
//     <section className="bg-[#FFFAF3] py-10 md:py-12">
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="mb-3 sm:mb-5">
//           <h2 className="text-[22px] md:text-4xl md:font-normal text-[#164925] mb-3 sm:mb-4">{title}</h2>
//         </div>

//         <div className="">
//           {data.map((item, idx) => {
//             const isOpen = openIndex === idx;
//             const contentId = `faq-panel-${idx}`;
//             const buttonId = `faq-button-${idx}`;
//             return (
//               <div key={idx} className="">
//                 <button
//                   id={buttonId}
//                   aria-controls={contentId}
//                   aria-expanded={isOpen}
//                   onClick={() => setOpenIndex(isOpen ? -1 : idx)}
//                   className="w-full flex items-center justify-between text-left py-4"
//                 >
//                   <span className={`text-[18px] sm:text-[20px] font-semibold ${isOpen ? 'text-green' : 'text-green'}`}>
//                     {item.q}
//                   </span>
//                   <span
//                     className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full text-green"
//                     aria-hidden
//                   >
//                     {/* plus/minus icon */}
//                     <svg
//                       className="h-3 w-3"
//                       viewBox="0 0 12 12"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                       {!isOpen && (
//                         <path d="M6 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                       )}
//                     </svg>
//                   </span>
//                 </button>

//                 {isOpen && (
//                   <div
//                     id={contentId}
//                     role="region"
//                     aria-labelledby={buttonId}
//                     className="pb-5 text-[15px] font-normal sm:text-base leading-relaxed text-green"
//                   >
//                     {item.a}
//                   </div>
//                 )}

//                 <div className="border-t border-dashed border-green/40"></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';
import { useState } from 'react';

export default function FaqWidget({
  title = 'FAQs About Growniq',
  items = [],
  initiallyOpen = 0,
}) {
  const [openIndex, setOpenIndex] = useState(initiallyOpen);

  const data = items.length > 0 ? items : [
    {
      q: 'What is Growniq and when will the app launch?',
      a: 'Growniq is an upcoming app-based one-stop gardening platform for Delhi–NCR offering garden care, landscaping, indoor plant & Vastu solutions, AI plant care, an online gardening store, and B2B services etc. The app is in final development, join our waitlist to get notified on launch and early-access offers.'
    },
    {
      q: 'Which areas do you serve initially?',
      a: 'We\'re starting operations across Delhi–NCR: Delhi, Gurugram, Noida, Ghaziabad and Faridabad. We\'ll expand to more cities after launch, sign up to get updates for your area.'
    },
    {
      q: 'What services will Growniq provide?',
      a: 'Growniq offers complete garden maintenance, along with our Digi Nursery marketplace and smart AI plant-care support. You can buy plants with doorstep delivery, book on-demand gardeners, or choose subscription care. We also provide dedicated B2B gardening solutions and separate Corporate/CSR green initiative services for all Big Companies, all through one app.'
    },
    {
      q: 'How do I book a gardener or service?',
      a: 'At launch you\'ll be able to book via the Growniq app. Meanwhile, you can request a service inquiry or join the waitlist on our website and our team will contact you to schedule a pilot visit.'
    },
    {
      q: 'How are your gardeners vetted?',
      a: 'We verify identity, experience and basic training for every gardener/partner. We also validate work history and customer feedback before listing them on Growniq to ensure trusted, reliable service.'
    },
    {
      q: 'How is pricing calculated? (basic idea)',
      a: 'Pricing depends on garden size, number & size of plants, service plan (Basic / Standard / Platinum) and visit frequency. Use our online estimator (or contact us) for a quick quote — detailed pricing will be available inside the app.'
    },
    {
      q: 'What is AI Plant Care and how will it help me?',
      a: 'Growniq\'s AI Plant Care will provide plant-specific reminders, early pest or stress detection suggestions, and tailored care tips, helping beginners and busy households keep plants healthy with minimal effort.'
    },
    {
      q: 'How can I get early access, corporate partnerships, or request a demo?',
      a: 'Join our waitlist on the website for early access and launch offers. For B2B, CSR collaborations, or demos, email partners@growniq.in and our team will follow up within 48 hours.'
    }
  ];

  return (
    <section className="bg-[#D7EBE7] py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">

        {/* Title */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-medium text-[#164925] font-poppins text-center md:text-left">
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div>
          {data.map((item, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;
            return (
              <div key={idx}>
                <button
                  id={buttonId}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left py-4 md:py-5 gap-4"
                >
                  <span className="text-[15px] sm:text-[18px] md:text-[20px] font-medium text-[#164925] font-poppins leading-snug">
                    {item.q}
                  </span>
                  <span
                    className="ml-2 flex-shrink-0 inline-flex h-6 w-6 items-center justify-center text-[#164925]"
                    aria-hidden
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 6H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      {!isOpen && (
                        <path d="M6 1V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      )}
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-5 text-[16px] sm:text-[15px] md:text-base font-normal leading-relaxed text-[#164925] font-nunito opacity-90"
                  >
                    {item.a}
                  </div>
                )}

                <div className="border-t border-dashed border-[#164925]/30" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}