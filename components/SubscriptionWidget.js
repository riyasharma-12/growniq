'use client';

import { useState } from 'react';
import { TickMark } from './icons';

export default function SubscriptionWidget() {
  const [activeTab, setActiveTab] = useState('standard');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for small gardens and basic maintenance',
      price: '₹1500',
      priceLabel: 'per month',
      visits: '3 times weekly',
      popular: false,
      features: [
        'Basic Plan(3 days a week)',
        'Watering & Cleaning',
        'Pest & Disease Check',
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      description: 'Ideal for medium gardens with comprehensive care',
      price: '₹2500',
      priceLabel: 'per month',
      visits: '3 times weekly',
      popular: true,
      features: [
        'Watering & Cleaning',
        'Weeding & Pruning',
        'Pest & Disease Check',
        'Fertilizing / Composting',
        'Seasonal Tune-Up',
        'Garden Cleaning / After Rain Cleanup',
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Complete garden transformation and maintenance',
      price: '₹3500',
      priceLabel: 'per month',
      visits: '3 times weekly',
      popular: false,
      features: [
        'Watering & Cleaning',
        'Weeding & Pruning',
        'Pest & Disease Check',
        'Fertilizing / Composting',
        'Small Laws Moving',
        'Seasonal Tune-Up',
        'Garden Cleaning / After Rain Cleanup',
        'Soil Refresh & Pot Replacement'
      ]
    }
  ];

  return (
    <section className="bg-[#D7EBE7] py-8 sm:py-16 lg:py-20 relative -mt-[1px]" >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-[22px] md:text-4xl md:font-normal text-[#164925] mb-3 sm:mb-4">
            Honest Pricing & Subscription Plans you can Trust
          </h2>
          <p className="text-sm sm:text-base text-green max-w-3xl mx-auto mb-7 sm:mb-16">
            Choose the perfect plan for your garden's needs
          </p>
        </div>

        {/* Mobile Tabs - Only visible on mobile */}
        <div className="lg:hidden mb-3">
          <div className="flex overflow-x-auto gap-2 rounded-full border border-[#164925] ">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(plan.id)}
                className={`flex-1  p-2.5 rounded-full font-normal  transition-all duration-300 ${activeTab === plan.id
                  ? 'bg-white/60 text-[#164925]'
                  : ' text-[#164925]'
                  }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Mobile Single Card View */}
        <div className="lg:hidden">
          {plans
            .filter((plan) => plan.id === activeTab)
            .map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
        </div>
      </div>

      <div className="text-center text-[#164925] text-[13px] font-semibold flex items-center gap-1 justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 9.36621C4 10.2198 4.16813 11.065 4.49478 11.8537C4.82144 12.6423 5.30022 13.3588 5.90381 13.9624C6.50739 14.566 7.22394 15.0448 8.01256 15.3714C8.80117 15.6981 9.64641 15.8662 10.5 15.8662C11.3536 15.8662 12.1988 15.6981 12.9874 15.3714C13.7761 15.0448 14.4926 14.566 15.0962 13.9624C15.6998 13.3588 16.1786 12.6423 16.5052 11.8537C16.8319 11.065 17 10.2198 17 9.36621C17 7.6423 16.3152 5.989 15.0962 4.77002C13.8772 3.55103 12.2239 2.86621 10.5 2.86621C8.77609 2.86621 7.12279 3.55103 5.90381 4.77002C4.68482 5.989 4 7.6423 4 9.36621Z" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 6.5H10.0083" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9.16663 9H9.99996V12.3333H10.8333" stroke="#164925" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span className="text-[13px] md:text-base font-medium">These plans are for up to 15 plants</span>
      </div>

    </section>
  );
}

function PricingCard({ plan }) {
  return (
    <div
      className={`relative md:bg-white rounded-2xl p-0 sm:p-8 ${plan.popular ? 'md:border-2 border-[#164925]' : 'border border-gray-200'
        }`}
    >


      {/* Plan Header */}
      <div className="text-center pt-2">
        <h3 className="text-xl sm:text-2xl font-bold text-green mb-2 md:block hidden">
          {plan.name}
        </h3>
        <p className="text-sm sm:text-base text-green mb-2">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-[28px] sm:text-4xl font-bold text-green">
              {plan.price}
            </span>
            <span className="text-[13px] md:text-base text-green">{plan.priceLabel}</span>
          </div>
        </div>

        {/* Subscribe Button */}
        <button
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 relative ${plan.popular
            ? 'bg-[#164925] text-white hover:bg-[#164925] hover:text-white '
            : 'bg-[#164925] text-white md:text-green md:bg-white text-green border border-[rgba(22, 73, 37, 0.20)] hover:bg-green hover:text-white'
            }`}
        >
          Subscribe Now

          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute -md:right-5 rotate-[30deg] -md:top-4 -right-[14px] -top-[14px]">
              <span className="bg-[#FFF] h-[18px] text-[#164925] px-1.5 py-[2px] rounded-[4px] text-[10px] font-medium border border-green">
                Popular
              </span>
            </div>
          )}
        </button>

        {/* Visits Badge */}
        <div className="inline-block text-green px-8 py-1 rounded-b-lg text-xs font-normal mb-4 md:mb-8">
          {plan.visits}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-green mb-4 md:mb-6"></div>

      {/* Features List */}
      <ul className="space-y-3 h-[265px] md:h-auto">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <TickMark />
            <span className="text-sm sm:text-base text-green">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
