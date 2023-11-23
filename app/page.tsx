import Image from 'next/image'
import Hero from '@/components/hero'
import Work from '@/components/work'
import Subscribe from '@/components/subscribe'

export default function Home() {
  return (
    <div className='mx-auto pt-24'>
      <Hero />
      <Work />
      <Subscribe />
    </div>
  )
}
