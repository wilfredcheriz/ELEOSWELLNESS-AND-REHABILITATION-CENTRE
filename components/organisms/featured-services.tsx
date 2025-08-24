import { SectionHeading } from "@/components/atoms/section-heading"
import { ServiceCard } from "@/components/molecules/service-card"
import { Brain, Heart, Users, Leaf } from "lucide-react"

const featuredServices = [
  {
    title: "Mental Health Counseling",
    description:
      "Individual therapy sessions with licensed professionals to address anxiety, depression, trauma, and other mental health concerns.",
    icon: <Brain className="h-8 w-8" />,
    href: "/services#mental-health",
  },
  {
    title: "Addiction Recovery",
    description:
      "Comprehensive addiction treatment programs including detox support, counseling, and long-term recovery planning.",
    icon: <Heart className="h-8 w-8" />,
    href: "/services#addiction",
  },
  {
    title: "Family & Marriage Therapy",
    description:
      "Relationship counseling and family therapy to strengthen bonds and improve communication between loved ones.",
    icon: <Users className="h-8 w-8" />,
    href: "/services#family-therapy",
  },
  {
    title: "Wellness Programs",
    description:
      "Holistic wellness programs including mindfulness, stress management, and lifestyle coaching for overall well-being.",
    icon: <Leaf className="h-8 w-8" />,
    href: "/services#wellness",
  },
]

export function FeaturedServices() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            title="Our Featured Services"
            subtitle="Comprehensive care tailored to your unique needs and journey toward wellness"
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
