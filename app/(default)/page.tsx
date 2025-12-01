export const metadata = {
  title: 'Alex Savage - AI Product Engineer',
  description: 'Multi-Startup Entrepreneur • AI Product Engineer • Ideation → Build → Deploy',
}

import Hero from '@/components/hero'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import ScrollGlitchEffect from '@/components/utils/scroll-glitch-effect'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <ScrollGlitchEffect />
      <Hero />
      {/* <Features /> */}
      <FeaturesBlocks />
      <Testimonials />
      <Footer />
    </>
  )
}
