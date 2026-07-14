'use client';

import Link from 'next/link';
import DownloadWidget from '@/components/DownloadWidget';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FFFAF3] py-6 md:py-10">
      <div className="container mx-auto px-2 sm:px-2 max-w-[1150px]">
        
        {/* Breadcrumb / Back Link */}
        <div className="hidden md:flex mb-6 flex items-center gap-2">
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

        {/* Header Section */}
        <div className="text-center max-w-[1100px] mx-auto mb-10 md:mb-12 space-y-4">
          <div className="flex justify-center">
            <span className="inline-block bg-[#F2D6D8] text-[#164925] px-5 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase">
              Privacy Policy
            </span>
          </div>
          {/* <p className="text-3xl md:text-[60px] font-regular text-[#164925]  font-poppins">
            We're committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information.
          </p> */}

          <p className="hidden md:block text-center font-poppins font-normal md:text-[60px] text-[13px] leading-[60px] tracking-[-1.5px]  text-[#164925]">
  We're committed to protecting your<br/> privacy and ensuring transparency about how we collect, use, and safeguard your personal information.
</p>

<p className="block md:hidden font-poppins font-semibold  text-[13px]  text-[#164925]">
  We're committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information.
</p>

<p className='text-[#164925]/90 text-center text-[18px] md:text-[20px]'>Updated March 17,2025</p>
          {/* <p className="text-sm md:text-base text-[#164925] opacity-90 font-semibold uppercase tracking-wider">
            Growniq Private Limited
          </p>
          <div className="text-xs md:text-sm text-[#164925] opacity-80 font-nunito space-y-1">
            <p><strong>Effective Date:</strong> 15th Sept 2025 | <strong>Last Updated:</strong> 25th June 2026</p>
            <p><strong>Office:</strong> 2nd Floor, Plot No. 121, Sector 44, Gurugram, Haryana – 122003, India</p>
            <p><strong>Email:</strong> contact@growniq.in | <strong>Phone:</strong> +91 9717104342 | <strong>Website:</strong> www.growniq.in</p>
          </div> */}
        </div>

        {/* Combined Content Container */}
        {/* <div className="max-w-[900px] mx-auto bg-white rounded-3xl shadow-md border border-[rgba(22,73,37,0.1)] p-6 md:p-10 text-[#164925] space-y-8 mb-12 font-nunito leading-relaxed"> */}
        <div>
          
          {/* Table of Contents */}
          <div className="bg-[#FFFAF3] p-6 sm:p-2 ">
            <h2 className="text-[20px] font-poppins mb-4 uppercase font-medium text-[#164925]/90">
              Table of Contents
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-[13px] font-regular text-[#164925]/90">
              <li><a href="#section-1" className="hover:underline">Introduction</a></li>
              <li><a href="#section-2" className="hover:underline">Definitions</a></li>
              <li><a href="#section-3" className="hover:underline">Scope</a></li>
              <li><a href="#section-4" className="hover:underline">Information We Collect</a></li>
              <li><a href="#section-5" className="hover:underline">Information Collected From Customers</a></li>
              <li><a href="#section-6" className="hover:underline">Information Collected From Nursery Partners</a></li>
              <li><a href="#section-7" className="hover:underline">Information Collected From Gardening Service Partners</a></li>
              <li><a href="#section-8" className="hover:underline">Information Collected From Corporate Customers</a></li>
              <li><a href="#section-9" className="hover:underline">Information Collected Automatically</a></li>
              <li><a href="#section-10" className="hover:underline">Device Information</a></li>
              <li><a href="#section-11" className="hover:underline">Location Information</a></li>
              <li><a href="#section-12" className="hover:underline">Camera, Gallery, and File Access</a></li>
              <li><a href="#section-13" className="hover:underline">Reviews, Ratings, and Responses</a></li>
              <li><a href="#section-14" className="hover:underline">Notifications</a></li>
              <li><a href="#section-15" className="hover:underline">Marketing Communications</a></li>
              <li><a href="#section-16" className="hover:underline">Cookies and Similar Technologies</a></li>
              <li><a href="#section-17" className="hover:underline">Payment Information</a></li>
              <li><a href="#section-18" className="hover:underline">Why We Collect and Use Information</a></li>
              <li><a href="#section-19" className="hover:underline">Legal Grounds For Processing</a></li>
              <li><a href="#section-20" className="hover:underline">Sharing Of Information</a></li>
              <li><a href="#section-21" className="hover:underline">Data Security</a></li>
              <li><a href="#section-22" className="hover:underline">Data Retention</a></li>
              <li><a href="#section-23" className="hover:underline">Your Rights</a></li>
              <li><a href="#section-24" className="hover:underline">Grievance Redressal</a></li>
              <li><a href="#section-25" className="hover:underline">Children’s Privacy</a></li>
              <li><a href="#section-26" className="hover:underline">Third-Party Links</a></li>
              <li><a href="#section-27" className="hover:underline">Policy Updates</a></li>
              <li><a href="#section-28" className="hover:underline">Contact Details</a></li>
              <li><a href="#section-29" className="hover:underline">Acknowledgment</a></li>
            </ol>
          </div>

          {/* <hr className="border-t border-[#8aa492]/20" /> */}

          {/* Section 1 */}
          {/* <div id="section-1" className="space-y-3 scroll-mt-20"> */}
          <div className="bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90 ">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">1. INTRODUCTION</h2>
            <p className=" text-[#164925]/90 text-[13px] font-regular ">
              Growniq Private Limited respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, store, retain, and protect personal data when you use our website, mobile applications, partner applications, admin dashboard, or any other services operated by us, including our hyperlocal gardening marketplace and related commerce and service offerings.
              This Privacy Policy is intended to be read together with our Terms of Use and any service-specific terms, policies, or consent notices we may provide from time to time.
           
            </p>
           
          </div>

          {/* Section 2 */}
         <div className="bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90 ">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">2. DEFINITIONS</h2>
            <p className=" text-[#164925]/90 text-[13px] font-regular pb-3">For purposes of this Privacy Policy, the following terms have the meanings set out below:</p>
            <ul className=" space-y-4 opacity-90  text-[#164925]/90 text-[13px] font-regular">
              <li>“2.1 Applicable Law” means all laws, rules, regulations, directions, and governmental requirements applicable in India, including the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000 to the extent applicable.</li>
              <li>“2.2 Customer”means any individual who browses, registers on, or uses the Platform to purchase products, book gardening services, or otherwise interact with Growniq for personal use.</li>
              <li>“2.3Corporate Customer” means any business, organisation, institution, society, or other legal entity that uses the Platform for commercial, institutional, gifting, landscaping, maintenance, or bulk procurement purposes.</li>
              <li>“2.4 Data Principal” has the meaning assigned to it under the Digital Personal Data Protection Act, 2023.</li>
              <li>“2.5 Gardening Service Partner” means an independent service provider, contractor, or other partner who offers gardening, landscaping, maintenance, or related services on or through the Platform.</li>
              <li>“2.6 Nursery Partner” means a nursery, plant seller, retailer, wholesaler, or related merchant listed on or using the Platform.</li>
              <li>“2.7 Personal Data” means any data about an individual who is identifiable by or in relation to such data.</li>
              <li>“2.8 Platform” means our website, customer app, nursery partner app, gardening service partner app, admin dashboard, and any related digital product, service, or communication channel operated by Growniq.</li>
              <li>“2.9 Processing” means collection, storage, use, disclosure, sharing, transmission, consultation, deletion, erasure, or other handling of Personal Data, in whole or in part through digital means.</li>
              <li>“2.10 Services” means all products, gardening services, corporate services, and other features made available through the Platform.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">3. SCOPE</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              3.1 This Privacy Policy applies to the processing of digital personal data collected by Growniq in India and, where applicable, outside India if the processing relates to offering goods or services to individuals in India.
            </p>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              3.2 This Privacy Policy does not apply to information that is lawfully made public by you or by another person acting under a legal obligation to make such information public, or to personal or domestic use by an individual where the law excludes such processing.
            </p>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              3.3 This Policy covers the following user categories:</p>
               <ul className="list-disc opacity-90  text-[#164925]/90 text-[13px] font-regular">
              <li> Customers</li>
               <li>Nursery Partners</li>
              <li>Gardening Service Partners</li>
               <li>Corporate Customers</li>
               <li>Website Visitors</li>
              <li>Job Applicants (if and when a careers page or recruitment process is added).</li>
              </ul>

              
           
          </div>

          {/* Section 4 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">4. INFORMATION WE COLLECT</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              4.1 We collect information that you provide directly, information collected automatically through your use of the Platform, and information we receive from third parties where permitted by law and necessary for our operations.
            </p>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              4.2 We collect only such information as is reasonably necessary for the purposes described in this Policy, consistent with the principles of consent, purpose limitation, data minimisation, accuracy, storage limitation, security safeguards, and accountability recognised under the DPDP framework.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2  className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">5. INFORMATION COLLECTED FROM CUSTOMERS</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">5.1 If you are a Customer, we may collect the following categories of information:</p>
            <ul className="list-disc opacity-90  text-[#164925]/90 text-[13px] font-regular">
              <li>Your name, mobile number, email address, OTP verification data, and account credentials.</li>
              <li>Delivery address, service address, billing address, and location preferences.</li>
              <li>Order history, purchase preferences, search history, cart information, wishlist items, and service bookings.</li>
              <li>Communication records with our support team, including complaints, queries, feedback, and dispute-related correspondence.</li>
              <li>Photos, videos, notes, and other content you upload relating to plants, gardens, products, or service issues.</li>
              <li>Reviews, ratings, comments, and responses posted by you.</li>
              <li>Payment-related information such as transaction status, payment confirmation, refund status, and invoice details.</li>
            </ul>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
5.2 We may also collect other information you voluntarily provide when you interact with the Platform or contact us for support.</p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">6. INFORMATION COLLECTED FROM NURSERY PARTNERS</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">6.1 If you are a Nursery Partner, we may collect the following information:</p>
            <ul className="list-disc opacity-90  text-[#164925]/90 text-[13px] font-regular">
              <li>Business name, legal structure, proprietor/partner/director details, and authorised signatory details.</li>
              <li>Mobile number, email address, business address, and communication preferences.</li>
              <li>GST number, GST certificate, PAN, business licence, trade registration, and other verification documents.</li>
              <li>Bank account details, payment instructions, and payout information.</li>
              <li>Product catalogue information, including product names, descriptions, prices, stock levels, photos, and specifications.</li>
              <li>Order fulfilment data, cancellation data, return data, dispute data, invoice data, quotation files, and service records.</li>
              <li>Business correspondence with Growniq, customers, and other Platform users.</li>
              <li>Ratings, reviews, and responses associated with your partner profile.</li>
            </ul>
            <p>
              
6.2 Where required for onboarding, compliance, or risk management, we may also collect identity documents and supporting verification records.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2  className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">7. INFORMATION COLLECTED FROM GARDENING SERVICE PARTNERS</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">7.1 If you are a Gardening Service Partner, we may collect the following information:</p>
            <ul className="list-disc opacity-90  text-[#164925]/90 text-[13px] font-regular">
              <li>Your name, mobile number, email address, profile photograph, address, and emergency contact details.</li>
              <li>Identity documents, verification documents, licences, permits, certifications, or skill-related records, where applicable.</li>
              <li>Bank account details, payout information, tax details, and any mandatory compliance documents.</li>
              <li>Service categories, service area, availability, scheduling preferences, and work history.</li>
              <li>Site visit records, service notes, attendance information, job completion records, and dispute records.</li>
              <li>Garden photographs, before-and-after images, service photographs, and related files uploaded by you.</li>
              <li>Communication with customers, Growniq, and other partners.</li>
              <li>Ratings, reviews, and responses associated with your profile.</li>
            </ul>
            <p>
              
7.2 We may require additional documents to verify identity, eligibility, tax status, or the ability to perform specific services.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">8. INFORMATION COLLECTED FROM CORPORATE CUSTOMERS</h2>
            <p  className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">8.1 If you are a Corporate Customer, we may collect the following information:</p>
            <ul className="list-disc opacity-90  text-[#164925]/90 text-[13px] font-regular">
              <li>Organisation name, registration details, GST details, billing address, and tax identification details.</li>
              <li>Name, designation, mobile number, and email address of the authorised contact person.</li>
              <li>Purchase order details, quotation history, invoice details, service specifications, and delivery instructions.</li>
              <li>Event details, gifting preferences, site details, office or premises details, and maintenance requirements.</li>
              <li>Approvals, internal communication records, and coordination notes exchanged with us.</li>
              <li>Supporting documents needed for bulk orders, corporate gifting, rentals, maintenance contracts, or landscaping engagements.</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">9. INFORMATION COLLECTED AUTOMATICALLY</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              9.1 When you use the Platform, we may automatically collect certain technical and usage information, including device information (model, operating system, browser type, app version, language settings, IP address, and device identifiers) and usage information (pages viewed, features used, click patterns, session duration, referral source, and crash or diagnostic information).
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2  className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">10. DEVICE INFORMATION</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              10.1 We may collect device-level information from the device you use to access the Platform, such as hardware model, operating system, app version, mobile network information, browser configuration, language settings, and identifiers. This helps us maintain compatibility, troubleshoot problems, and prevent misuse.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">11. LOCATION INFORMATION</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              11.1 We may collect location information with your permission or as permitted by law. We use location information for finding nearby nurseries, assigning nearby gardeners, calculating delivery charges, scheduling gardening services, providing services at your selected location, fraud prevention, and improving service availability.
            </p>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              11.3 You may disable location access through your device settings, but some features of the Platform may not function properly without it.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">12. CAMERA, GALLERY, AND FILE ACCESS</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              12.1 If you permit access, the Platform may use your camera, gallery, or file storage so that you can upload content relevant to your interaction with Growniq (plant photographs, service photographs, profile photographs, identity documents, GST certificates, invoices, quotation files, before-and-after images, etc.). We only access such permissions for lawful and intended purposes related to the Services.
            </p>
          </div>

          {/* Section 13 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">13. REVIEWS, RATINGS, AND RESPONSES</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              13.1 Customers may submit reviews, ratings, and responses about products, partners, and services. Partners may reply to reviews where the Platform enables such replies. Reviews may remain visible after order completion. We reserve the right to moderate, restrict, remove, or refuse to publish reviews that are fake, abusive, defamatory, spammy, misleading, or unlawful.
            </p>
          </div>

          {/* Section 14 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">14. NOTIFICATIONS</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              14.1 We may send notifications through SMS, in-app notifications, push notifications, WhatsApp, email, or other lawful channels. These may include OTPs, order updates, delivery updates, booking reminders, subscription reminders, payment confirmations, cancellation alerts, offers, and plant care reminders.
            </p>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              14.3 You may opt out of promotional communications, but you cannot opt out of critical service notifications needed for account security, order fulfilment, payment processing, or compliance.
            </p>
          </div>

          {/* Section 15 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">15. MARKETING COMMUNICATIONS</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              15.1 Where permitted by law, we may send you marketing communications relating to offers, product launches, seasonal promotions, festival campaigns, gardening tips, and platform updates. You may withdraw consent for marketing communications or unsubscribe through the method provided in the communication.
            </p>
          </div>

          {/* Section 16 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">16. COOKIES AND SIMILAR TECHNOLOGIES</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              16.1 We use cookies and similar technologies to keep you signed in, remember your preferences, analyse usage and traffic, improve platform performance, support security, and prevent fraud. You can manage cookies through your browser or device settings, although certain features may not work as intended if cookies are disabled.
            </p>
          </div>

          {/* Section 17 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">17. PAYMENT INFORMATION</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              17.1 We use Razorpay as a payment gateway for processing payments on the Platform. Payment information you provide is handled by Razorpay and its systems in accordance with their policies and applicable law.
            </p>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              17.2 Growniq does not store complete debit card or credit card details on its own systems. We may retain limited payment-related information such as transaction IDs, payment status, invoice references, refund status, and reconciliation data for accounting, fraud prevention, dispute handling, and legal compliance.
            </p>
          </div>

          {/* Section 18 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">18. WHY WE COLLECT AND USE INFORMATION</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">18.1 We collect and use personal data for the following purposes:</p>
            <ul className="list-disc opacity-90  text-[#164925]/90 text-[13px] font-regular">
              <li>Order processing and fulfilment.</li>
              <li>Providing gardening and landscaping services.</li>
              <li>Customer support and complaint handling.</li>
              <li>Partner onboarding and verification.</li>
              <li>Identity verification and fraud prevention.</li>
              <li>Payment processing, refunds, and payouts.</li>
              <li>GST compliance and tax administration.</li>
              <li>Invoice generation and record keeping.</li>
              <li>Service scheduling and route planning.</li>
              <li>Product improvement, analytics, and dispute resolution.</li>
            </ul>
          </div>

          {/* Section 19 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">19. LEGAL GROUNDS FOR PROCESSING</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              19.1 We process personal data with your consent, for specified purposes you have voluntarily requested, for certain legitimate uses permitted under Applicable Law, and to comply with law, lawful orders, tax obligations, and regulatory requirements.
            </p>
          </div>

          {/* Section 20 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">20. SHARING OF INFORMATION</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              20.1 We may share personal data on a need-to-know basis with Nursery Partners, Gardening Service Partners, Delivery Partners, payment gateways (including Razorpay), cloud service providers, legal advisors, auditors, government authorities, and business transferees in connection with a merger or acquisition.
            </p>
            <p className="opacity-90"><strong>20.3 We do not sell personal information.</strong></p>
          </div>

          {/* Section 21 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2  className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">21. DATA SECURITY</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              21.1 We implement reasonable technical and organisational safeguards designed to protect personal data from unauthorised access, alteration, disclosure, loss, misuse, or destruction. If a personal data breach occurs, we will handle it in accordance with Applicable Law.
            </p>
          </div>

          {/* Section 22 */}
          <div  className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">22. DATA RETENTION</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              22.1 We retain personal data only for as long as reasonably necessary to fulfil the purposes for which it was collected, to comply with legal or regulatory obligations, to resolve disputes, and to protect our legitimate interests. When a Customer deletes their account, personal information is generally deleted or anonymised within approximately 90 days, unless required otherwise.
            </p>
          </div>

          {/* Section 23 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">23. YOUR RIGHTS</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              23.1 Subject to Applicable Law, you may have the right to access your personal data, correct or update inaccurate data, request deletion, withdraw consent, opt out of marketing, and delete your account. Partners may require contacting Growniq to resolve pending payouts or open obligations before account closure.
            </p>
          </div>

          {/* Section 24 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">24. GRIEVANCE REDRESSAL</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              24.1 If you have any complaint, concern, or question regarding this Privacy Policy or our handling of personal data, you may contact us using the details below. We will endeavour to respond to grievances within a reasonable time and in accordance with Applicable Law.
            </p>
          </div>

          {/* Section 25 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">25. CHILDREN’S PRIVACY</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              25.1 The Platform is intended for general audiences and may be used by younger users under parental or guardian guidance. We do not knowingly collect personal data in violation of applicable child data protection laws.
            </p>
          </div>

          {/* Section 26 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">26. THIRD-PARTY LINKS</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              26.1 The Platform may contain links to third-party websites, applications, or services. We do not control and are not responsible for the privacy practices, security, or content of such third parties.
            </p>
          </div>

          {/* Section 27 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">27. POLICY UPDATES</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              27.1 We may update this Privacy Policy from time to time to reflect changes in our products, services, practices, legal obligations, or technology. Any updated version will be posted on the Platform with a revised “Last Updated” date.
            </p>
          </div>

          {/* Section 28 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2  text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">28. CONTACT DETAILS</h2>
            <div className="space-y-2 text-[#164925]/90 text-[13px] font-regulars">
              <p><strong>Growniq Private Limited</strong></p>
              <p>2nd Floor, Plot No. 121, Sector 44, Gurugram, Haryana – 122003, India</p>
              
                <p>Email: <a href="mailto:contact@growniq.in" className="underline hover:opacity-80">contact@growniq.in</a> </p>
              <p>Phone: +91 9717104342 </p>
              <p>Website: www.growniq.in</p>
             
            </div>
          </div>

          {/* Section 29 */}
          <div className="space-y-4 bg-[#FFFAF3] p-6 sm:p-2 text-[#164925]/90">
            <h2 className="text-xl md:text-[20px] font-medium font-poppins  text-[#164925]/90">29. ACKNOWLEDGMENT</h2>
            <p className="space-y-4  text-[#164925]/90 text-[13px] font-regulars">
              By using the Platform, you acknowledge that you have read and understood this Privacy Policy. Where consent is required, your use of the relevant features constitute your consent to the processing, subject always to your rights under Applicable Law.
            </p>
          </div>

        </div>

        {/* Download App Section */}
        {/* <div className="border-t border-[rgba(22,73,37,0.1)] mt-12 pt-8">
          <DownloadWidget />
        </div> */}
      </div>
    </div>
  );
}
