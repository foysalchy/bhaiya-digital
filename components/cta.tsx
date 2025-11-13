import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl float"></div>
        <div className="absolute inset-0 shimmer-effect opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal delay={0} direction="up">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 luxury-shadow title-glow">
            Get In Touch
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up">
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how BhaiyaDigital can help you achieve your marketing goals.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 hover:scale-105"
            >
              <Zap className="w-4 h-4" />
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          
          </div>
        </ScrollReveal>
 
      </div>
    </section>
  )
}
