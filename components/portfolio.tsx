import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-design.jpg",
    description: "Complete e-commerce solution with seamless checkout experience",
  },
  {
    title: "SaaS Marketing Campaign",
    category: "Digital Marketing",
    image: "/marketing-analytics-dashboard.jpg",
    description: "Multi-channel campaign resulting in 250% ROI increase",
  },
  {
    title: "Brand Identity Design",
    category: "Branding",
    image: "/modern-brand-identity.jpg",
    description: "Complete brand refresh with new visual identity system",
  },
  {
    title: "Mobile App Marketing",
    category: "Social Media",
    image: "/mobile-app-interface.jpg",
    description: "Viral social media strategy achieving 1M+ impressions",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal delay={0} direction="up">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 luxury-shadow">
              Our Portfolio Showcase
            </h2>
            <p className="text-lg text-muted-foreground">Showcase of our recent projects and success stories</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 0.1} direction="up">
              <Card className="group overflow-hidden hover:border-primary/50 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur cursor-pointer hover:shadow-2xl hover:shadow-primary/15">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary font-bold mb-2 uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
