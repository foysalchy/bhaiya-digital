"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-primary/70">
              Who We Are
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
            BhaiyaDigital is a premier digital marketing agency and a concern of BhaiyaGroup—a diversified conglomerate
            driving innovation across multiple sectors.
          </p>
        </div>

        {/* Mission Statement */}
        <div
          className={`bg-gradient-to-br from-background via-background/50 to-background border border-primary/20 rounded-2xl p-8 md:p-12 backdrop-blur-xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ boxShadow: "0 8px 32px rgba(192, 255, 0, 0.1)" }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                We empower businesses within the BhaiyaGroup ecosystem and beyond with cutting-edge digital marketing
                solutions, brand strategy, and creative excellence. Our expertise spans across real estate, automotive,
                hospitality, insurance, healthcare, and food sectors.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading digital transformation partner for enterprises seeking to innovate, scale, and
                connect with their audiences in meaningful ways. We believe in the power of creativity merged with
                strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
