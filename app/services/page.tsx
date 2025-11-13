import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Services from "@/components/services"

export const metadata: Metadata = {
  title: "Our Services | BhaiyaDigital",
  description:
    "Explore our comprehensive digital services including web development, mobile apps, UI/UX design, and graphics design.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="py-12 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-black text-foreground mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
        <Services />
      </div>
      <Footer />
    </main>
  )
}
