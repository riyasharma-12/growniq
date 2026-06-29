import Hero from '@/components/Hero'
import ExpertServices from '@/components/ExpertServices'
import WhyChoose from '@/components/WhyChoose'
import DownloadWidget from '@/components/DownloadWidget'
import AiWidget from '@/components/AiWidget'
import UserReviews from '@/components/UserReviews'
import FaqWidget from '@/components/FaqWidget'
import DigiNursery from '@/components/DigiNursery'

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <ExpertServices />
      <DigiNursery />
      <WhyChoose />
      <AiWidget />
      <UserReviews />
      <DownloadWidget />
      <FaqWidget />
    </main>
  )
}
