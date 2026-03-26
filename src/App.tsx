import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BriefSections from './components/BriefSections'
import HowItWorks from './components/HowItWorks'
import DeliveryOptions from './components/DeliveryOptions'
import OriginStory from './components/OriginStory'
import FoundingMember from './components/FoundingMember'
import FAQ from './components/FAQ'
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
        <FoundingMember />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
