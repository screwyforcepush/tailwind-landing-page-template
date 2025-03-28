export const metadata = {
  title: 'Alex Savage - AI Product Engineer',
  description: 'Multi-Startup Entrepreneur • AI Product Engineer • Ideation → Build → Deploy',
}

import Hero from '@/components/hero'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
