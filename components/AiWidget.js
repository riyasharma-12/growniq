'use client';
import { AiStar } from './icons';
import Image from 'next/image';

export default function AiWidget() {
  const features = [
    {
      id: 1,
      icon: (
        '/images/ai-1.svg'
      ),
      title: 'Plant Identification',
    },
    {
      id: 2,
      icon: (
        '/images/ai-2.svg'),
      title: 'Disease Diagnosis',
    },
    {
      id: 3,
      icon: (
        '/images/ai-3.svg'),
      title: 'Seasonal Care',
    },
    {
      id: 4,
      icon: (
        '/images/ai-4.svg'),
      title: 'Water Reminder',
    }
  ];

  return (
    <section className="aiWidget bg-[#D7EBE7] py-16 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Coming Soon Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-[linear-gradient(95deg,#5B9155_4.68%,#775D07_39.42%,#75277C_65.19%,#FF6200_102.59%)] px-4 py-2 rounded-full">
            <AiStar />
            <span className="text-sm font-semibold">
              Coming Soon</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl md:text-4xl font-medium text-green mb-3 sm:mb-4">
            AI-Powered Garden Care
          </h2>
          <p className="text-sm sm:text-base font-normal text-green max-w-3xl mx-auto">
            Experience the future of gardening with our upcoming AI features
          </p>
        </div>

        <ul className='md:w-[834px] h-full flex-wrap  mx-auto flex justify-between md:gap-0 gap-1.5 md:p-2 p-1.5 rounded-[20px] bg-[linear-gradient(90deg,rgba(255,255,255,0.15)_0%,rgba(240,240,240,0.15)_100%)] shadow-[0_4px_24px_0_rgba(0,0,0,0.05)]'>
          {features.map((feature) => (
            <li key={feature.id} className=' md:w-[193px] w-[155px] p-3 rounded-[16px] md:bg-[rgba(199,226,221,0.20)] md:shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] bg-[#C7E2DD]'>
              <div className="flex items-center md:gap-4 gap-1" >
                <Image src={feature.icon} alt="Logo" width={42} height={42} />
                <p className="font-normal md:text-[18px] text-base text-green">{feature.title}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className='flex items-center justify-center gap-4 !mt-12 flex-col md:flex-row'>

          <div className='aiImage relative hidden md:block'>
            <Image src="/images/ai-image.png" alt="Logo" width={544} height={480} />
          </div>

          <div className="md:hidden">
            <Image src="/images/AI-Plant-mobi.png" alt="Logo" width={300} height={244} />
          </div>

          <div className='aiContent md:p-8 p-5 rounded-3xl bg-[linear-gradient(127deg,rgba(255,222,130,0.5)_1.92%,rgba(255,167,169,0.5)_100%)]'>
            <h2 className='block md:text-[30px] text-[15px] font-semibold text-green md:leading-10 md:mb-6 md:pb-6 pb-3 border-b border-green border-dashed'>Living Room Plant</h2>
            <h2 className='block md:text-[30px] text-[15px] font-medium text-green leading-10  md:pb-5 pb-0'>Overall Health Materix</h2>

            <div className="flex gap-8 md:text-[18px] text-[11px] font-normal text-green md:mb-6 mb-3">
              <p>Status : <span className="font-extrabold">Good</span></p>
              <p>Plant Height : <span className="font-extrabold">20.3 cm</span></p>
            </div>

            <ul className='aiSubList flex md:gap-4 gap-2 flex-wrap pt-7 border-t border-green border-dashed'>
              <li className='md:w-[230px] flex items-center gap-3 p-1 rounded-full bg-[rgba(255,255,255,0.45)]'>
                <div className=" flex items-center justify-center rounded-full">
                  <img src="/images/humidity.svg" alt="" />
                </div>
                <div>
                  <p className="text-green text-[11px] md:text-[18px] font-light leading-normal">Humidity</p>
                  <p className="font-semibold text-green text-[11px] md:text-[18px] leading-normal">78%</p>
                </div>
              </li>

              <li className='md:w-[230px] flex items-center gap-3 p-1 rounded-full bg-[rgba(255,255,255,0.45)]'>
                <div className=" flex items-center justify-center rounded-full">
                  <img src="/images/humidity.svg" alt="" />
                </div>
                <div>
                  <p className="text-green text-[11px] md:text-[18px] font-light leading-normal">Water</p>
                  <p className="font-semibold text-green text-[11px] md:text-[18px] leading-normal">78%</p>
                </div>
              </li>
              <li className='md:w-[230px] flex items-center gap-5 p-1 rounded-full bg-[rgba(255,255,255,0.45)]'>
                <div className=" flex items-center justify-center rounded-full">
                  <img src="/images/humidity.svg" alt="" />
                </div>
                <div>
                  <p className="text-green text-[11px] md:text-[18px] font-light leading-normal">Atmosphere</p>
                  <p className="font-semibold text-green text-[11px] md:text-[18px] leading-normal">27°C</p>
                </div>
              </li>
              <li className='md:w-[230px] flex items-center gap-3 rounded-full p-1 bg-[rgba(255,255,255,0.45)]'>
                <div className=" flex items-center justify-center rounded-full">
                  <img src="/images/humidity.svg" alt="" />
                </div>
                <div>
                  <p className="text-green text-[11px] md:text-[18px] font-light leading-normal">Light</p>
                  <p className="font-semibold text-green text-[11px] md:text-[18px] leading-normal">70%</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
