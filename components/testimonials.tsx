import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    image: "/professional-headshot.jpg",
    content:
      "BhaiyaDigital transformed our brand presence. Their strategic approach and creative execution helped us achieve 300% growth.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Marketing Director, E-Shop Co",
    image: "/business-woman-portrait.jpg",
    content:
      "Working with this team has been an absolute game-changer. Their data-driven strategies are unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Founder, Digital Solutions",
    image: "/entrepreneur-portrait.jpg",
    content:
      "From concept to execution, every step was seamless. They genuinely care about our success and it shows in the results.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal delay={0} direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 luxury-shadow">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of satisfied clients who have transformed their business
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <ScrollReveal key={testimonial.name} delay={idx * 0.1} direction="up">
              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed group-hover:text-primary/90 transition-colors duration-300">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-primary/30 group-hover:border-primary/80 transition-all duration-300 group-hover:scale-110"
                  />
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
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
