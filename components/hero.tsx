import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl float"></div>
        <div
          className="absolute -bottom-20 left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 -right-40 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 shimmer-effect opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <ScrollReveal delay={0} direction="down">
          <div className="mb-6 inline-block px-4 py-2 bg-primary/10 border border-primary rounded-full backdrop-blur-sm hover:border-primary/80 transition-all duration-300">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Welcome to BhaiyaDigital
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight text-balance luxury-shadow title-glow">
            Digital Designs <br />
            <span className="bg-gradient-to-r from-primary via-primary to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
              That Deliver
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            Crafting websites with purpose and passion. We combine strategic thinking with creative excellence to build
            digital experiences that captivate and convert.
          </p>
        </ScrollReveal>

        {/* <ScrollReveal delay={0.3} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 font-semibold bg-transparent transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Watch Demo
            </Button>
          </div>
        </ScrollReveal> */}

      

        <ScrollReveal delay={0.5} direction="up">
          <div className="flex flex-wrap gap-3 justify-center items-center mb-12">
            {["DIGITAL DESIGNS", "BRAND ENTERTAINMENT", "SEO MARKETING", "WEB DESIGN", "MOTION DESIGN"].map(
              (tag, idx) => (
                <div
                  key={tag}
                  className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-semibold text-primary hover:border-primary hover:bg-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {tag}
                </div>
              ),
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
