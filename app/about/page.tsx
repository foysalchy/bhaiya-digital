'use client'

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />
      
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500 via-red-500 to-red-600 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute -top-32 -right-96 w-96 h-96 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full blur-3xl opacity-20" />

      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-12 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About BhaiyaDigital</h1>
          <p className="text-lg text-white/70">We transform businesses through cutting-edge digital marketing strategies and creative excellence.</p>
        </div>

        {/* Our Story Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-white/80 mb-4 leading-relaxed">
            BhaiyaDigital was founded with a simple mission: to help businesses of all sizes reach their digital potential. What started as a small team of passionate digital marketers has grown into a full-service digital agency.
          </p>
          <p className="text-white/80 mb-4 leading-relaxed">
            We believe that great digital marketing is about understanding your audience, crafting compelling stories, and delivering measurable results. Every project we undertake is an opportunity to make a lasting impact.
          </p>
          <p className="text-white/80 leading-relaxed">
            Our team combines years of industry experience with fresh, innovative thinking to deliver solutions that drive real business growth.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { number: '50+', label: 'Successful Projects' },
            { number: '30+', label: 'Happy Clients' },
            { number: '8+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, i) => (
            <div key={i} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl text-center">
              <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.number}</p>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To empower businesses with innovative digital marketing strategies that drive growth, enhance brand visibility, and create meaningful connections with their target audiences. We are committed to delivering exceptional value and measurable results.
            </p>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To be the most trusted and innovative digital marketing partner for businesses across industries. We aim to set new standards of excellence, foster lasting client relationships, and create digital experiences that inspire and transform.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Innovation', desc: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.' },
              { title: 'Integrity', desc: 'We operate with transparency and honesty in all our business dealings and client relationships.' },
              { title: 'Excellence', desc: 'We strive for perfection in every project, delivering work that exceeds expectations.' },
              { title: 'Collaboration', desc: 'We believe in the power of teamwork and partner closely with our clients for success.' }
            ].map((value, i) => (
              <div key={i}>
                <h4 className="text-xl font-bold text-orange-400 mb-2">{value.title}</h4>
                <p className="text-white/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose BhaiyaDigital?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Proven Track Record', desc: 'With 50+ successful projects, we have consistently delivered results that drive business growth.' },
              { title: 'Expert Team', desc: 'Our team comprises seasoned digital marketers, designers, and developers with diverse expertise.' },
              { title: 'Strategic Approach', desc: 'We develop customized strategies tailored to your business goals and target audience.' },
              { title: 'Transparent Communication', desc: 'We keep you informed every step of the way with regular updates and detailed reports.' },
              { title: 'Latest Technology', desc: 'We leverage cutting-edge tools and platforms to ensure maximum efficiency and effectiveness.' },
              { title: 'Dedicated Support', desc: 'Your success is our priority. We provide ongoing support and optimization for your campaigns.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-orange-400 font-bold text-2xl">✓</span>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl mt-20">
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
