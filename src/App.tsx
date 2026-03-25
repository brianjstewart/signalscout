import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BriefSections from './components/BriefSections'
import HowItWorks from './components/HowItWorks'
import DeliveryOptions from './components/DeliveryOptions'
import OriginStory from './components/OriginStory'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import WaitlistForm from './components/WaitlistForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <BriefSections />
        <HowItWorks />
        <DeliveryOptions />
        <OriginStory />
        <Pricing />
        <FAQ />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
