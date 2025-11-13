import { Card } from "@/components/ui/card"
import { Sparkles, Megaphone, BarChart3, Code2, Camera, Zap } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that reach your target audience and drive engagement across all channels.",
  },
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description: "Crafting unique brand identities that resonate with your market and stand out from competition.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Data",
    description: "Data-driven insights to measure success, optimize performance, and maximize ROI.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and applications built for performance, conversion, and user experience.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Compelling visual and written content that tells your story and captivates your audience.",
  },
  {
    icon: Zap,
    title: "Social Media",
    description: "Engaging social strategies that build communities and amplify your brand message.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal delay={0} direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 luxury-shadow">
              Innovative Services for <br />
              <span className="text-primary title-glow">Modern Brands</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business goals
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} delay={idx * 0.1} direction="up">
                <Card className="p-8 hover:border-primary/50 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur hover:bg-card/80 group hover:shadow-xl hover:shadow-primary/10 cursor-pointer">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
