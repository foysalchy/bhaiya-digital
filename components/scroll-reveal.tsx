"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const directionMap = {
    up: "fade-in-up",
    down: "fade-in-down",
    left: "slide-in-left",
    right: "slide-in-right",
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? directionMap[direction] : "opacity-0"}`}
      style={{
        animation: isVisible ? `${directionMap[direction]} ${duration}s ease-out` : "none",
      }}
    >
      {children}
    </div>
  )
}
