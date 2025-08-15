import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'

const About = dynamic(() => import('@/components/about'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})
const Features = dynamic(() => import('@/components/feature'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})
const Contact = dynamic(() => import('@/components/contact'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})
const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => <div className="h-32 bg-black animate-pulse" />
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}
