"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight, Plus, X } from "lucide-react"
import ScrollReveal from "./scroll-reveal"
import Link from "next/link"
import { useState } from "react"

const services = [
  {
    id: "mobile-app-development",
    number: "01",
    title: "Mobile Application Development",
    description: "Create powerful and user-friendly mobile apps for iOS and Android platforms.",
    technologies: [
      "Android App Development",
      "iOS App Development",
      "Flutter App Development",
      "React Native App Development",
    ],
    image: "/developer-working-on-laptop.jpg",
  },
  {
    id: "website-development",
    number: "02",
    title: "Website Development",
    description: "Build responsive and performant websites that engage users and drive conversions.",
    technologies: ["React JS Development", "Angular JS Development", "Laravel Development", "Vue JS Development"],
    image: "/web-design-development.png",
  },
  {
    id: "ui-ux-design",
    number: "03",
    title: "UX/UI Design",
    description: "Design beautiful and intuitive interfaces that enhance user experience and engagement.",
    technologies: [
      "User Research",
      "User Personas",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],
    image: "/ux-ui-design-mockup.jpg",
  },
  {
    id: "graphics-design",
    number: "04",
    title: "Graphics Design",
    description: "Create stunning visual content that communicates your brand message effectively.",
    technologies: [
      "Packaging Design",
      "Infographic Design",
      "Illustration",
      "Brand Identity Design",
      "Print Design",
      "Digital Design",
    ],
    image: "/graphic-design-creativity.jpg",
  },
]

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal delay={0} direction="up">
          <div className="mb-12">
            <p className="text-primary font-semibold mb-2 flex items-center gap-2">
              <span className="inline-block w-8 h-0.5 bg-primary"></span>
              Our Services
            </p>
            <h2 className="text-5xl font-black text-foreground mb-6">Discover Our Digital Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 0.1} direction="up">
              <Card
                onClick={() => toggleService(service.id)}
                className="p-8 bg-black border-border/50 hover:bg-slate-900 transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-6">
                      <span className="text-5xl font-black text-slate-600">{service.number}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>

                        {expandedService !== service.id && (
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {service.technologies.map((tech) => (
                              <p key={tech} className="text-sm text-slate-400">
                                {tech}
                              </p>
                            ))}
                          </div>
                        )}

                        <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Buttons */}
                  <div className="flex flex-col gap-4 lg:items-end" onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-3">
                      <Link href={`/services/${service.id}`}>
                        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                          Learn More
                          <ArrowRight size={16} />
                        </button>
                      </Link>

                      <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                        {expandedService === service.id ? <X size={20} /> : <Plus size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
