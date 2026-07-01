import BokehAmbience from './components/BokehAmbience'
import Nav from './components/Nav'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Impact from './sections/Impact'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <BokehAmbience />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Services />
        <Portfolio />
        <Impact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
