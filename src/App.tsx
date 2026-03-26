import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ImageBreak from './components/ImageBreak'
import BriefSections from './components/BriefSections'
import HowItWorks from './components/HowItWorks'
import OriginStory from './components/OriginStory'
import DeliveryOptions from './components/DeliveryOptions'
import FoundingMember from './components/FoundingMember'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <ImageBreak />
        <BriefSections />
        <HowItWorks />
        <OriginStory />
        <DeliveryOptions />
        <FoundingMember />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
