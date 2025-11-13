import Header from "@/components/header"
import PHero from "@/components/parallax-hero"
import About from "@/components/about"
import Brands from "@/components/brands"
import Team from "@/components/team"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PHero />
      <About />
      <Brands />
      {/* <Team /> */}
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </div>
  )
}
