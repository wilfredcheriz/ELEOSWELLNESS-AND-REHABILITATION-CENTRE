import { SectionHeading } from "@/components/atoms/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    content:
      "The compassionate care I received at Eleos transformed my life. The therapists truly understand the healing process.",
    rating: 5,
  },
  {
    name: "Michael R.",
    content:
      "After struggling with addiction for years, I found hope and recovery through their comprehensive programs.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    content: "Family therapy helped us rebuild our relationships. We are stronger than ever thanks to their guidance.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            title="Stories of Hope and Healing"
            subtitle="Real experiences from individuals who found their path to wellness with us"
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
