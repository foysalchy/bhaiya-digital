"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight,ArrowDown } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background animated gradient orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 animated-gradient"
          style={{
            background: "linear-gradient(135deg, #C0FF00, #1E90FF, #00D4FF)",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 animated-gradient"
          style={{
            background: "linear-gradient(135deg, #1E90FF, #C0FF00, #FF1493)",
            transform: `translateY(${scrollY * -0.3}px)`,
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-25 animated-gradient"
          style={{
            background: "linear-gradient(135deg, #00D4FF, #C0FF00, #1E90FF)",
            transform: `translateY(${scrollY * 0.7}px)`,
          }}
        />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(192, 255, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 255, 0, 0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Floating shapes with parallax */}
        <div
          className="absolute top-40 right-20 w-32 h-32 border-2 border-primary/30 rounded-3xl float-rotate"
          style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)` }}
        />
        <div
          className="absolute bottom-40 left-32 w-24 h-24 border-2 border-primary/20 rounded-full float-rotate"
          style={{ transform: `translateY(${scrollY * -0.3}px) rotate(${-scrollY * 0.1}deg)` }}
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0} direction="down">
          <div className="mb-6 mt-16 inline-block px-4 py-2 bg-primary/10 border border-primary rounded-full backdrop-blur-sm hover:border-primary/80 transition-all duration-300">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Welcome to BhaiyaDigital
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight text-balance luxury-shadow title-glow">
            Creative Digital
            <br />
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg animated-gradient">
              Solutions
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-balance">
            Transforming brands with cutting-edge digital experiences. BhaiyaGroup's digital arm delivering innovation
            across all verticals.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 group"
            >
              Brand We Support <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
           
          </div>
        </ScrollReveal>

        {/* Parallax image showcase */}
        <ScrollReveal delay={0.4} direction="up">
          <div
            className="relative max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden border border-border/50 group hover:border-primary/50 transition-all duration-500 cursor-pointer"
            style={{
              transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/bhaiya-digital-creative-workspace-modern-agency.jpg"
              alt="BhaiyaDigital creative workspace"
              className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 shadow-2xl shadow-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </ScrollReveal>

        {/* Animated service tags */}
        <ScrollReveal delay={0.5} direction="up">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {["CREATIVE DESIGN", "DIGITAL MARKETING", "WEB DEVELOPMENT", "BRANDING", "MOTION GRAPHICS"].map(
              (tag, idx) => (
                <div
                  key={tag}
                  className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-semibold text-primary hover:border-primary hover:bg-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 pulse-glow"
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
