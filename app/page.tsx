'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 70) return 70
        return prev + Math.random() * 15
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const filledSegments = Math.ceil((loadingProgress / 100) * 12)

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />
      
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full blur-3xl opacity-20 animation-delay-2000" />

      <main className="relative flex-1 flex flex-col items-center justify-center px-4 z-10">
        <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-16 max-w-lg w-full shadow-2xl">
            {/* Logo and branding */}
            <div className="mb-16 text-center">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
               <img src="/Bhaiya-white.png" alt="" />
              </h1>
            </div>

            {/* Loading section */}
            <div className="w-full space-y-6">
              <p className="text-center text-sm font-semibold text-white/70 tracking-widest">
                LOADING
              </p>

              <div className="flex gap-1 justify-center">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 w-3 rounded transition-all duration-300 ${
                      i < filledSegments
                        ? 'bg-gradient-to-b from-orange-400 to-red-500 animate-pulse shadow-lg'
                        : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>

              {/* Progress percentage */}
              <p className="text-center text-sm text-white/60">
                {Math.round(Math.min(loadingProgress, 70))}%
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <a href="/" className="font-bold text-white hover:text-orange-400 transition">
              Home
            </a>
            <a href="/about" className="font-bold text-white hover:text-orange-400 transition">
              About
            </a>
            <a href="/privacy-policy" className="font-bold text-white hover:text-orange-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="font-bold text-white hover:text-orange-400 transition">
              Terms & Conditions
            </a>
          </div>
        </nav>
      </footer>
    </div>
  )
}
