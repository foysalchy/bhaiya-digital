"use client"

import ScrollReveal from "./scroll-reveal"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Founder & CEO",
    title: "Visionary Leader",
    image: "/professional-man-ceo.jpg",
    bio: "Driving innovation and growth across BhaiyaGroup",
    socials: ["linkedin", "twitter", "mail"],
  },
  {
    id: 2,
    name: "CTO",
    title: "Technology Architect",
    image: "/professional-man-tech.jpg",
    bio: "Building digital transformation strategies",
    socials: ["linkedin", "twitter", "mail"],
  },
  {
    id: 3,
    name: "Head of Marketing",
    title: "Marketing Director",
    image: "/professional-woman-marketing.jpg",
    bio: "Leading creative campaigns and brand growth",
    socials: ["linkedin", "twitter", "mail"],
  },
  {
    id: 4,
    name: "Operations Lead",
    title: "Operations Manager",
    image: "/professional-man-ops.jpg",
    bio: "Optimizing processes and scaling operations",
    socials: ["linkedin", "twitter", "mail"],
  },
]

export default function Team() {
  return (
    <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal delay={0} duration={0.8}>
          <div className="text-center mb-20">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
                Our Leadership
              </span>
              <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-6 relative">
                <span className="relative inline-block">
                  Meet Our
                  <span
                    className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/60 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{
                      textShadow: "0 0 30px rgba(192, 255, 0, 0.5), 0 0 60px rgba(192, 255, 0, 0.3)",
                    }}
                  >
                    Meet Our
                  </span>
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent"
                  style={{
                    textShadow: "0 0 30px rgba(192, 255, 0, 0.4), 0 0 60px rgba(100, 200, 255, 0.3)",
                  }}
                >
                  Expert Team
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                Visionary leaders driving digital transformation and innovation across BhaiyaGroup
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.15} direction="up" duration={0.8}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition-colors duration-500"></div>

                <div className="relative p-6 h-full flex flex-col">
                  <div className="relative mb-6 overflow-hidden rounded-xl h-64 bg-gradient-to-br from-muted to-muted/50">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-lg font-black text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">{member.title}</p>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">{member.bio}</p>

                  <div className="flex gap-3 pt-4 border-t border-border/30">
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-110"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-110"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-110"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} direction="up" duration={0.8}>
          <div className="text-center p-12 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm hover:border-primary/60 transition-colors duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Growing Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join BhaiyaDigital and help us transform businesses
            </p>
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
              Explore Careers
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
