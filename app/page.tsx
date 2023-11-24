import Image from 'next/image'
import Hero from '@/components/hero'
import Work from '@/components/work'
import Subscribe from '@/components/subscribe'
import FAQ from '@/components/faq'

export default function Home() {
  return (
    <div className='mx-auto'>
      <Hero />
      <Work />
        <Subscribe />
      <FAQ />
    </div>
  )
}
