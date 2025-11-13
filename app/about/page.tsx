import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Us - BhaiyaDigital",
  description:
    "Learn about BhaiyaDigital, our mission, vision, and the team behind the innovative digital marketing solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">About BhaiyaDigital</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We transform businesses through cutting-edge digital marketing strategies and creative excellence.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              BhaiyaDigital was founded with a simple mission: to help businesses of all sizes reach their digital
              potential. What started as a small team of passionate digital marketers has grown into a full-service
              digital agency.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We believe that great digital marketing is about understanding your audience, crafting compelling stories,
              and delivering measurable results. Every project we undertake is an opportunity to make a lasting impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines years of industry experience with fresh, innovative thinking to deliver solutions that
              drive real business growth.
            </p>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border/50">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Successful Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">30+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">8+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border/50">
              <h3 className="text-2xl font-black text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital marketing strategies that drive growth, enhance brand
                visibility, and create meaningful connections with their target audiences. We are committed to
                delivering exceptional value and measurable results.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border/50">
              <h3 className="text-2xl font-black text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative digital marketing partner for businesses across industries. We aim
                to set new standards of excellence, foster lasting client relationships, and create digital experiences
                that inspire and transform.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-12 text-center">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with transparency and honesty in all our business dealings and client relationships.",
              },
              {
                title: "Excellence",
                description: "We strive for perfection in every project, delivering work that exceeds expectations.",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partner closely with our clients for success.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <h4 className="font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-12 text-center">
            Why Choose BhaiyaDigital?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Proven Track Record",
                description:
                  "With 50+ successful projects, we have consistently delivered results that drive business growth.",
              },
              {
                title: "Expert Team",
                description:
                  "Our team comprises seasoned digital marketers, designers, and developers with diverse expertise.",
              },
              {
                title: "Strategic Approach",
                description: "We develop customized strategies tailored to your business goals and target audience.",
              },
              {
                title: "Transparent Communication",
                description: "We keep you informed every step of the way with regular updates and detailed reports.",
              },
              {
                title: "Latest Technology",
                description:
                  "We leverage cutting-edge tools and platforms to ensure maximum efficiency and effectiveness.",
              },
              {
                title: "Dedicated Support",
                description:
                  "Your success is our priority. We provide ongoing support and optimization for your campaigns.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
