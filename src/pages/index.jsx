import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>UpSide - Your Personal Meeting Assistant</title>
        <meta
          name="description"
          content="Your meetings deserve 100% of your attention. Focus on communication, let us take care of the rest."
        />
      </Head>
      <div className='bg-gradient-to-r from-sky-200 to-indigo-200'>
      <Header />
      <main className='bg-gradient-to-r from-sky-200 to-indigo-200'>
      
      
      <Hero />
        {/* <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction/>
        <Testimonials />
        <Pricing />
        <Faqs /> */} 
      
      </main>
      <Footer />
      </div>
    </>
  )
}
