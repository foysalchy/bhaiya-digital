"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Car, Hotel, Shield, Heart, Utensils, Zap } from "lucide-react"

export default function Brands() {
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

  const brands = [
    {
      name: "Bhaiya Housing",
      description: "Premium residential and commercial properties",
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Bhaiya Autos",
      description: "Automotive excellence and solutions",
      icon: Car,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Bhaiya Hotels & Resort",
      description: "Luxury hospitality experiences",
      icon: Hotel,
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "Provoti Insurance",
      description: "Comprehensive insurance coverage",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Right Aid Hospital",
      description: "Quality healthcare services",
      icon: Heart,
      color: "from-red-500 to-rose-500",
    },
    {
      name: "Next Food",
      description: "Innovative food and beverage",
      icon: Utensils,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Bhaiya Lamborghini",
      description: "Luxury automotive showroom",
      icon: Car,
      color: "from-red-600 to-pink-600",
    },
    {
      name: "Bhaiya Mart",
      description: "Upcoming retail revolution",
      icon: Zap,
      color: "from-primary to-primary/70",
    },
  ]

  return (
    <section ref={ref} id="brands" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-primary/70">
              Brands We Support
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
            Part of the prestigious BhaiyaGroup ecosystem—diversified, innovative, and industry-leading across multiple
            sectors.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => {
            const Icon = brand.icon
            return (
              <div
                key={brand.name}
                className={`group relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-xl border border-border/50 bg-gradient-to-br from-background/50 to-background/20 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${brand.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                      {brand.description}
                    </p>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 rounded-xl`}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Future Plans */}
        <div
          className={`mt-16 p-8 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ boxShadow: "0 8px 32px rgba(192, 255, 0, 0.1)" }}
        >
          <h3 className="text-2xl font-bold text-primary mb-2">🚀 Coming Soon: Bhaiya Mart</h3>
          <p className="text-muted-foreground">
            BhaiyaGroup is preparing to launch Bhaiya Mart—the next generation retail platform designed to revolutionize
            shopping experiences with innovation and excellence.
          </p>
        </div>
      </div>
    </section>
  )
}
