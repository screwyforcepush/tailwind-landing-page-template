import Link from 'next/link'
import Image from 'next/image'


export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src="/images/monocle.png" alt="Logo" width={32} height={32} />
    </Link>
  )
}
