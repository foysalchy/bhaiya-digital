import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"

const servicesData = {
  "mobile-app-development": {
    title: "Mobile Application Development",
    subtitle: "Build Powerful Apps for iOS and Android",
    description:
      "Our mobile app development services create feature-rich, user-friendly applications that drive engagement and deliver measurable business results.",
    technologies: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "React Native App Development",
    ],
    benefits: [
      {
        title: "Cross-Platform Compatibility",
        description: "Build once, deploy everywhere with frameworks like Flutter and React Native",
      },
      {
        title: "Native Performance",
        description: "Leverage native APIs for superior speed and responsiveness",
      },
      {
        title: "User-Centric Design",
        description: "Intuitive interfaces designed for optimal user experience",
      },
      {
        title: "Scalable Architecture",
        description: "Built to grow with your business needs",
      },
    ],
    process: [
      "Discovery & Planning",
      "UI/UX Design",
      "Development",
      "Testing & QA",
      "Deployment",
      "Maintenance & Support",
    ],
  },
  "website-development": {
    title: "Website Development",
    subtitle: "Create Powerful Web Experiences",
    description:
      "Modern, responsive websites built with the latest technologies to engage visitors, drive conversions, and accelerate business growth.",
    technologies: [
      "React JS Development",
      "Angular JS Development",
      "Laravel Development",
      "Vue JS Development",
      "Next.js Development",
      "Node.js Backend",
    ],
    benefits: [
      {
        title: "Responsive Design",
        description: "Perfect display on all devices and screen sizes",
      },
      {
        title: "SEO Optimized",
        description: "Built to rank well in search engines",
      },
      {
        title: "Fast Performance",
        description: "Optimized for lightning-fast loading speeds",
      },
      {
        title: "Conversion Focused",
        description: "Designed to drive user actions and sales",
      },
    ],
    process: [
      "Requirement Analysis",
      "Wireframing",
      "Design",
      "Development",
      "Testing",
      "Deployment",
      "SEO Optimization",
    ],
  },
  "ui-ux-design": {
    title: "UX/UI Design",
    subtitle: "Beautiful Design That Works",
    description:
      "Comprehensive design solutions that blend aesthetics with usability to create memorable digital experiences.",
    technologies: [
      "User Research",
      "User Personas",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Design Systems",
    ],
    benefits: [
      {
        title: "User Research",
        description: "Deep insights into user behavior and needs",
      },
      {
        title: "Intuitive Interfaces",
        description: "Easy to navigate and understand",
      },
      {
        title: "Brand Consistency",
        description: "Coherent visual identity across all touchpoints",
      },
      {
        title: "Accessibility",
        description: "Inclusive design for all users",
      },
    ],
    process: [
      "User Research",
      "Persona Development",
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Design Refinement",
      "Handoff to Development",
    ],
  },
  "graphics-design": {
    title: "Graphics Design",
    subtitle: "Visual Excellence for Your Brand",
    description:
      "Creative visual solutions that capture attention, communicate your message, and elevate your brand identity.",
    technologies: [
      "Packaging Design",
      "Infographic Design",
      "Illustration",
      "Brand Identity Design",
      "Print Design",
      "Digital Design",
    ],
    benefits: [
      {
        title: "Brand Identity",
        description: "Unique and memorable visual presence",
      },
      {
        title: "Storytelling",
        description: "Visuals that communicate your brand story",
      },
      {
        title: "Professional Quality",
        description: "High-quality designs that impress",
      },
      {
        title: "Versatility",
        description: "Designs that work across all mediums",
      },
    ],
    process: [
      "Brief & Discovery",
      "Concept Development",
      "Design Creation",
      "Revision & Refinement",
      "Finalization",
      "Delivery & Support",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

export const metadata: Metadata = {
  title: "Services | BhaiyaDigital",
  description: "Explore our comprehensive digital services tailored to your business needs.",
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]
console.log("Params slug:", params.slug);
console.log("Service found:", service);

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#services"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          <h1 className="text-5xl font-black text-foreground mb-2">{service.title}</h1>
          <p className="text-xl text-muted-foreground">{service.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
          </section>

          {/* Technologies */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Technologies & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.technologies.map((tech) => (
                <Card key={tech} className="p-4 bg-card/50 border-border/50">
                  <p className="font-semibold text-foreground">{tech}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="p-6 bg-card/50 border-border/50 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Process</h2>
            <div className="flex flex-wrap gap-4">
              {service.process.map((step, idx) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <span className="font-semibold text-foreground">{step}</span>
                  {idx < service.process.length - 1 && <span className="text-muted-foreground">→</span>}
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary/10 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Let's discuss how we can help transform your vision into reality.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
