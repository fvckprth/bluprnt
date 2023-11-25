import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Work from '@/components/work'
import Subscribe from '@/components/subscribe'
import FAQ from '@/components/faq'

export default function Home() {
  return (
    <div className='md:mx-auto overflow-x-hidden'>
      <Nav />
      <Hero />
      <Work />
      <Subscribe />
      <FAQ />
    </div>
  )
}
