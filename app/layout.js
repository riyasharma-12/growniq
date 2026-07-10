import {Poppins, Nunito} from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import MobileHeader from '@/components/MobileHeader'
import Footer from '@/components/Footer'
import MobileFooter from '@/components/MobileFooter'

export const metadata = {
  title: 'GrownIQ - Grow Your Intelligence',
  description: 'A modern platform for learning and growth',
}

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${poppins.variable} ${nunito.variable} antialiased`}>
        <MobileHeader />
        <Header />
        {children}
        <MobileFooter />
        <Footer className='border-t border-gray-200 mt-12' />
      </body>
    </html>
  )
}
