import LandingHeader from "@/components/LandingHeader"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"

export default function App() {
  return (
    <div className="font-exo2 bg-[#121318]">
      <LandingHeader />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </div>
  )
}
