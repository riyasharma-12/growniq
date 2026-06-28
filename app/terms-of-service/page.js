'use client';

import { useState } from 'react';
import Link from 'next/link';
import DownloadWidget from '@/components/DownloadWidget';

export default function TermsOfService() {
  const [activeTab, setActiveTab] = useState('customer');

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

        {/* Header Section */}
        <div className="text-center max-w-[980px] mx-auto mb-10 md:mb-12 space-y-4">
          <div className="flex justify-center">
            <span className="inline-block bg-[#F2D6D8] text-[#164925] px-5 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase">
              Terms of Service
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-medium text-[#164925] leading-tight tracking-tight font-poppins">
            Our Terms of Service
          </h1>
          <p className="text-base md:text-lg text-[#164925] opacity-90 font-nunito max-w-2xl mx-auto">
            Read our Terms below to learn more about your rights and responsibilities as a Growniq user.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="max-w-[900px] mx-auto bg-white rounded-3xl shadow-md border border-[rgba(22,73,37,0.1)] overflow-hidden mb-12">
          
          {/* Tab Headers */}
          <div className="flex border-b border-[#8aa492]/30 bg-[#FFFAF3]/50">
            <button
              onClick={() => setActiveTab('customer')}
              className={`flex-1 py-4 md:py-5 text-center font-poppins text-lg md:text-xl font-medium transition-all border-b-4 ${
                activeTab === 'customer'
                  ? 'border-[#164925] text-[#164925] bg-white'
                  : 'border-transparent text-[#164925]/60 hover:text-[#164925] hover:bg-white/30'
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setActiveTab('partner')}
              className={`flex-1 py-4 md:py-5 text-center font-poppins text-lg md:text-xl font-medium transition-all border-b-4 ${
                activeTab === 'partner'
                  ? 'border-[#164925] text-[#164925] bg-white'
                  : 'border-transparent text-[#164925]/60 hover:text-[#164925] hover:bg-white/30'
              }`}
            >
              Partner
            </button>
            <button
              onClick={() => setActiveTab('gardner')}
              className={`flex-1 py-4 md:py-5 text-center font-poppins text-lg md:text-xl font-medium transition-all border-b-4 ${
                activeTab === 'gardner'
                  ? 'border-[#164925] text-[#164925] bg-white'
                  : 'border-transparent text-[#164925]/60 hover:text-[#164925] hover:bg-white/30'
              }`}
            >
              Gardner
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-10 text-[#164925] space-y-8 font-nunito">
            
            {activeTab === 'customer' && (
              <div className="space-y-8 animate-fadeIn">
                
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">1. INTRODUCTION</h3>
                  <p className="leading-relaxed text-sm md:text-base opacity-90">
                    Welcome to Growniq. These Terms of Service govern your access to and use of the Growniq platform, including our mobile application, website, and related urban gardening services. By creating an account, registering via OTP, or utilizing any of our services, you explicitly agree to be bound by these legally binding Terms. If you do not agree to these Terms, you must immediately cease using the platform.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">2. SERVICES OVERVIEW</h3>
                  <p className="leading-relaxed text-sm md:text-base opacity-90">
                    Growniq operates as a tech-enabled aggregator platform that connects residential and commercial users with independent, background-verified professional gardeners and licensed third-party partner nurseries. Growniq facilitates:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
                    <li>Ongoing, recurring monthly subscription-based garden maintenance and plant care</li>
                    <li>One-time, hourly specialized gardening, Re-potting services and others mentioned.</li>
                    <li>A digital marketplace for plants, soil, pots, and horticultural accessories</li>
                    <li>Bespoke landscape consulting and garden setup configurations.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">3. USER RESPONSIBILITIES &amp; PREMISES ACCESS</h3>
                  <p className="leading-relaxed text-sm md:text-base opacity-90">
                    To ensure seamless service delivery, the user agrees to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
                    <li>Provide precise physical address coordinates, society details, and active contact numbers.</li>
                    <li>Ensure that the assigned Growniq Captain is granted unhindered entry into the residential or commercial premises at the designated time slot.</li>
                    <li>Handle all prior visitor gate clearances required by your Resident Welfare Association (RWA) or society software (e.g., My Gate, No Broker Hood). Growniq bears no financial or operational liability if a Captain is turned away or delayed by gate security.</li>
                    <li>Maintain a secure, accessible, and hazard-free working environment for our Captains.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">4. BILLING, SUBSCRIPTIONS &amp; AUTO-DEBITS</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Advance Payment:</strong> Payment for all marketplace products and One time Gardening services must be cleared in advance securely via our integrated payment aggregator, Razorpay.</li>
                    <li><strong>Automated Recurring Billing:</strong> By subscribing to a monthly garden maintenance plan, you authorize Growniq to establish an automated e-mandate or UPI recurring debit via Razorpay. Your account will be charged automatically every thirty (30) days from the date of activation.</li>
                    <li><strong>Scheduling:</strong> Service frequencies are fixed by your plan, but exact routing, timings, and dates are dynamically assigned by Growniq based on area density and weather conditions.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">5. CANCELLATION, RESCHEDULING &amp; FORFEITURE RULES</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Rescheduling:</strong> If you need to shift a scheduled maintenance slot, the request must be submitted through the Growniq App at least twenty-four hours prior to the scheduled booking time.</li>
                    <li><strong>The 15-Minute Gate Rule:</strong> If a Captain arrives at your premises or society gate and cannot gain access or reach you via phone within fifteen minutes, the slot will be systematically marked as &quot;Fulfilled.&quot; No refunds, pro-rata adjustments, or complimentary reschedules will be granted for user-end absences or communication lapses.</li>
                    <li><strong>Subscription Termination:</strong> You may cancel an active subscription at any time via the app. To prevent the next automated charge, cancellation must be executed at least forty-eight hours before your next billing cycle. Mid-month cancellations are non-refundable for the remaining days of that active month.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">6. DIGI NURSERY MARKETPLACE &amp; LIMITATION OF LIABILITY</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Natural Variations:</strong> Botanical items listed on our marketplace are live products supplied by independent nurseries. Because plants are natural living organisms, variations in size, leaf count, shape, and colour from the catalogue images will naturally occur. Images inside the app are strictly for representational purposes.</li>
                    <li><strong>Plant Health Guarantee:</strong> Growniq ensures that live products are handed over in healthy, viable condition. Growniq offers a strict forty-eight hour window from delivery to report any damaged or diseased items. Past 48 hours, Growniq bears no liability for plant mortality, wilting, or decay caused by micro-climatic changes, local over-watering, insect attacks, or environmental conditions unique to the user&#39;s home.</li>
                    <li><strong>Financial Liability Cap:</strong> Growniq operates solely as a digital platform coordinator. Under no circumstances shall Growniq be held liable for indirect, accidental, or structural damages to your property during a service visit. In any event, Growniq’s total cumulative financial liability to any user shall never exceed the exact amount paid by the user for that specific service transaction or product order.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">7. REFUNDS &amp; COMPLAINTS</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base opacity-90">
                    <li>All service or delivery disputes must be registered via the app&#39;s helpdesk within forty-eight hours of the service window closing or item delivery, supported by photographic evidence.</li>
                    <li>Upon validation, approved refunds will be reversed directly back to your original source payment instrument via Razorpay within five to seven business days.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">8. USER COMMUNICATIONS CONSENT</h3>
                  <p className="leading-relaxed text-sm md:text-base opacity-90">
                    By registering a profile on Growniq, you give explicit transactional consent to receive automated booking updates, Captain tracking details, digital invoices, and critical account suspension notifications through SMS, automated phone alerts, and our official WhatsApp Business communication channels.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">9. GOVERNING LAW &amp; JURISDICTION</h3>
                  <p className="leading-relaxed text-sm md:text-base opacity-90">
                    These Terms of Service are governed by and construed strictly in accordance with the laws of the Republic of India. Any legal disputes, complaints, or proceedings arising out of your relationship with the platform shall be subject to the exclusive jurisdiction of the courts located in Gurugram, Haryana, India.
                  </p>
                </div>

              </div>
            )}

            {activeTab === 'partner' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-3">
                  <p className="leading-relaxed text-sm md:text-base font-semibold">
                    This Nursery Partner Service Level Agreement defines the commercial and operational terms governing independent commercial nurseries listing and selling products via the Growniq B2B vendor engine.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">1. STOCK QUALITY, AUTHENTICITY &amp; LOGISTICS COMPLIANCE</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Health Warranty:</strong> The Partner guarantees that every single plant allocated to a Growniq customer order is structurally sound, True-to-Name, well-rooted, and entirely free from weeds, fungal infections, pests, or visible disease at the point of handover.</li>
                    <li><strong>Dimensional Accuracy:</strong> For premium or large botanical specimens measuring above four feet in height, the Partner must input exact vertical height measurements and precise container/pot sizing into the Vendor App. If a logistics vehicle deployment fails (e.g., a two-wheeler is sent instead of a commercial three-wheeler/Porter) due to incorrect listing data provided by the Partner, the entire cost of the failed transit and re-routing will be auto-debited from the Partner’s weekly settlement.</li>
                    <li><strong>Spill-Proof Packaging:</strong> To protect item structural integrity during transit, the Partner must wrap and secure all orders using the standardized &quot;No-Spill&quot; eco-friendly packaging specifications provided or approved by Growniq to eliminate soil leakage or root damage during transit.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">2. SERVICE LEVEL AGREEMENTS &amp; OPERATIONAL DISCIPLINE</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>The 45-Minute Packing Rule:</strong> Upon receiving a digital purchase notification via the Growniq Vendor App, the Partner must pick, wrap, quality-check, and mark the order state as &quot;Ready for Pickup&quot; within a maximum timeframe of 45 minutes.</li>
                    <li><strong>Real-Time Inventory Maintenance:</strong> The Partner must keep their active inventory numbers synchronized on the app. If an order must be cancelled because an item listed as &quot;Available&quot; is physically out of stock at the nursery, a flat administrative penalty fee of ₹100 per instance will be deducted from the Partner&#39;s earnings ledger.</li>
                    <li><strong>Doorstep Rejections for Quality:</strong> If a customer refuses to accept an item at their doorstep due to poor plant quality, severe wilting, breakage, or major catalogue mismatches, the Partner will absorb the full financial loss of the transaction and bears sole responsibility for preparing an immediate replacement item.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">3. TAXATION, SETTLEMENTS &amp; COMMERCIAL COMPLIANCE</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>GST Invoicing:</strong> The Partner is contractually required to generate and print a valid GST-compliant tax invoice matching the precise purchase value for every single transaction fulfilled through the app.</li>
                    <li><strong>Tax Collected at Source (TCS):</strong> The Partner acknowledges that Growniq operates as an E-commerce Operator (ECO). As mandated under Section 52 of the Indian GST Act, Growniq will systematically deduct and remit Tax Collected at Source (TCS) from gross monthly online marketplace revenues to the government on behalf of the Partner.</li>
                    <li><strong>Weekly Financial Pay-outs:</strong> Net marketplace revenues, less platform facilitation cuts, TCS deductions, and operational penalty deductions, will be transferred to the Partner’s verified corporate bank account on a weekly settlement cycle via Razorpay.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">4. DATA ISOLATION &amp; NON-POACHING COVENANT</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li>The Partner is granted temporary, restricted visibility of customer details (names, delivery coordinates, and phone numbers) strictly to execute immediate delivery logistics.</li>
                    <li>Storing, downloading, copying, or utilizing customer private data for personal marketing, offline outreach, or bypass selling outside the Growniq platform is strictly prohibited. Any documented attempt by a Partner to poach a Growniq customer for direct cash transactions will result in an immediate permanent ban from the ecosystem and a contractual legal breach penalty of ₹50,000.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">5. INDEMNITY &amp; LEGAL JURISDICTION</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Platform Limitation:</strong> Growniq functions strictly as a marketplace matchmaker connecting buyers and sellers. Growniq is not responsible for commercial loss, stock decay, or inventory over-accumulation suffered by the Partner nursery.</li>
                    <li><strong>Governing Law:</strong> Any conflicts, contractual arguments, or legal disputes emerging between Growniq management and the Partner nursery will be subject to mediation under the exclusive jurisdiction of the courts of Gurugram, Haryana, India.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'gardner' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="space-y-3">
                  <p className="leading-relaxed text-sm md:text-base font-semibold">
                    This Gardener Partner Agreement defines the legally binding terms, operational guidelines, and code of conduct governing independent professional gardeners providing services via the Growniq aggregator platform.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">1. INDEPENDENT CONTRACTOR STATUS</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li>The Captain explicitly acknowledges and agrees that they are partnering with Growniq as an independent gig-worker/contractor. This agreement does not create an employer-employee relationship, a joint venture, or a formal partnership.</li>
                    <li>The Captain is free to accept or reject service slots based on their availability, but once a scheduled slot is accepted via the Gardener App, they are contractually bound to fulfil it according to Growniq’s Service Level Agreements.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">2. ANTI-POACHING, ZERO-LEAKAGE &amp; PLATFORM INTEGRITY</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Direct Dealing Prohibition:</strong> The Captain is strictly prohibited from sharing personal phone numbers, collecting cash, or entering into private, offline gardening arrangements with any customer introduced to them via the Growniq platform.</li>
                    <li><strong>The Breach Penalty:</strong> Any documented attempt or instance of platform leakage-where a Captain bypasses the app to deal directly with a customer-will result in immediate, permanent termination of the Captain&#39;s Growniq account. Upon termination for poaching, all accumulated non-monetary rewards, festival bonuses, medical perks, and any pending weekly platform pay-outs shall be permanently forfeited as liquidated damages.</li>
                    <li><strong>Gate &amp; RWA Integrity:</strong> The Captain must log their entry and exit exclusively through the digital protocols assigned by Growniq. Attempting to enter a society gate for a private deal under the guise of a Growniq booking will be treated as corporate fraud and criminal trespass.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">3. OPERATIONAL SLAs &amp; THE 15-MINUTE RULE</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Punctuality:</strong> The Captain must arrive at the customer&#39;s designated society/location exactly at the start of the accepted time slot.</li>
                    <li><strong>The 15-Minute No-Show Protocol:</strong> Upon arrival, if the Captain is blocked by society security, denied entry, or unable to reach the customer, the Captain must log a &quot;Customer Unreachable&quot; alert via the app and wait at the gate/door for a minimum of fifteen minutes. If the slot cannot be initiated within 15 minutes due to customer-end issues, the Captain will be systematically released from the booking, the slot will be marked as fulfilled, and the Captain will receive their base pay-out component for the transit.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">4. SERVICE QUALITY, TOOLS &amp; SAFETY MANDATES</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Professional Attire:</strong> The Captain must wear the clean, branded Growniq T-shirt and ID collateral at all times during service execution to maintain community trust and clear society security checkpoints.</li>
                    <li><strong>Consumables Management:</strong> The Captain must utilize only the standardized, high-quality soil amendments, fertilizers, and tools provided or approved by Growniq. Substituting inferior local materials or overcharging customers for extra materials offline is strictly forbidden.</li>
                    <li><strong>Property Damage Liability:</strong> The Captain must execute all potting, pruning, and balcony maintenance with utmost care. Growniq is a digital aggregator platform. If damage is caused to a customer&#39;s private property (e.g., broken structural fixtures, stained flooring, or broken premium planters) due to the Captain&#39;s direct recklessness or gross negligence, the Captain shall be held operationally accountable, and rectification costs may be deducted from their weekly ledger settlements.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">5. INCENTIVES, BENEFITS &amp; WEEKLY SETTLEMENTS</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li><strong>Pay-out Structure:</strong> Pay-outs are calculated systematically based on completed base service visits, recurring subscription milestones. Settlements are processed and transferred directly to the Captain’s verified bank account/UPI on a strict weekly cycle.</li>
                    <li><strong>Ecosystem Benefits:</strong> Active Captains who maintain high customer ratings (above 4.5 stars) and zero SLA breaches over a sustained rolling period will unlock exclusive non-monetary platform perks, including company-sponsored accidental medical benefits, performance rewards, and seasonal tool upgrades. These benefits are non-transferable and cease instantly upon account deactivation.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold font-poppins">6. TERMINATION &amp; GOVERNING LAW</h3>
                  <ul className="list-disc pl-5 space-y-3 text-sm md:text-base opacity-90">
                    <li>Growniq retains the absolute right to deactivate or permanently ban a Captain&#39;s app access instantly for behavioural misconduct, verbal abuse toward customers, theft, systemic lateness, or platform poaching.</li>
                    <li>This contract is governed by the laws of India, and any operational disputes or legal arbitrations between the platform and the partner Captain shall be settled exclusively within the jurisdiction of the courts of Gurugram, Haryana.</li>
                  </ul>
                </div>
              </div>
            )}

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
