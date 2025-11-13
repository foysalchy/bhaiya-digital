"use client"

import { useEffect, useState } from "react"
import type React from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export default function ParallaxSection({ children, offset = 0.5, className = "" }: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${scrollY * offset}px)`,
      }}
    >
      {children}
    </div>
  )
}
