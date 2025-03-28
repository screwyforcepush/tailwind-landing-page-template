'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Alex Savage">
      <Image 
        src="/images/logo.png" 
        alt="Logo" 
        width={32} 
        height={32} 
        className="transition-transform duration-300 hover:scale-110"
      />
    </Link>
  )
}