import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OriginStory from './components/OriginStory'
import HowItWorks from './components/HowItWorks'
import BriefSections from './components/BriefSections'
import Pricing from './components/Pricing'
import DeliveryOptions from './components/DeliveryOptions'
import SignupForm from './components/SignupForm'
import WaitlistForm from './components/WaitlistForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <OriginStory />
        <HowItWorks />
        <BriefSections />
        <Pricing />
        <DeliveryOptions />
        <SignupForm />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
