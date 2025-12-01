import Hero from '@/components/Hero'
import ExpertServices from '@/components/ExpertServices'
import WhyChoose from '@/components/WhyChoose'
import DownloadWidget from '@/components/DownloadWidget'
import SubscriptionWidget from '@/components/SubscriptionWidget'
import AiWidget from '@/components/AiWidget'
import UserReviews from '@/components/UserReviews'
import BlogWidget from '@/components/BlogWidget'
import ContactUs from '@/components/ContactUs'
import FaqWidget from '@/components/FaqWidget'
import DigiNursery from '@/components/DigiNursery'

export default function Home() {
  return (
    <main className=''>
    
      <Hero />
      <ExpertServices />
      <DigiNursery />
      <DownloadWidget />
      <WhyChoose />
      <SubscriptionWidget />
      <AiWidget />
      <UserReviews />
      <BlogWidget />
      <ContactUs />
      <FaqWidget />
    </main>
  )
}
