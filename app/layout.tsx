import './css/style.css'

import { JetBrains_Mono, Inter } from 'next/font/google'
import Script from 'next/script'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import { Analytics } from '@vercel/analytics/react'
import ParticleBackground from '@/components/utils/particle-background'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap'
})

export const metadata = {
  title: 'Alex Savage - AI Architect & Engineer',
  description: 'Entrepreneur • AI Product Engineer • Ideation → Build → Deploy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-inter antialiased dark-theme text-gray-200 tracking-tight relative`}>

        {/* Particle background */}
        <ParticleBackground />
        
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Analytics />
          <Banner />
        </div>
        
      </body>
    </html>
  )
}