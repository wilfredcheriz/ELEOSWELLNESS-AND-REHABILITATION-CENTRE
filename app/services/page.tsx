import { Header } from "@/components/organisms/header"
import { Footer } from "@/components/organisms/footer"
import { SectionHeading } from "@/components/atoms/section-heading"
import { ServiceCard } from "@/components/molecules/service-card"
import { Brain, Heart, Users, Leaf, Building, Mountain, Globe } from "lucide-react"

const serviceCategories = [
  {
    id: "mental-health",
    title: "Mental Health Services",
    services: [
      {
        title: "Individual Therapy",
        description: "One-on-one counseling sessions tailored to your specific needs and goals.",
        icon: <Brain className="h-8 w-8" />,
      },
      {
        title: "Group Therapy",
        description: "Supportive group sessions that foster connection and shared healing experiences.",
        icon: <Users className="h-8 w-8" />,
      },
      {
        title: "Trauma Counseling",
        description: "Specialized therapy for processing and healing from traumatic experiences.",
        icon: <Heart className="h-8 w-8" />,
      },
    ],
  },
  {
    id: "addiction",
    title: "Addiction Recovery",
    services: [
      {
        title: "Detox Support",
        description: "Medical supervision and support during the detoxification process.",
        icon: <Heart className="h-8 w-8" />,
      },
      {
        title: "Recovery Counseling",
        description: "Individual and group counseling focused on addiction recovery and relapse prevention.",
        icon: <Brain className="h-8 w-8" />,
      },
      {
        title: "Family Support",
        description: "Programs to help families understand addiction and support their loved ones.",
        icon: <Users className="h-8 w-8" />,
      },
    ],
  },
  {
    id: "family-therapy",
    title: "Family & Marriage Therapy",
    services: [
      {
        title: "Couples Counseling",
        description: "Relationship therapy to improve communication and strengthen partnerships.",
        icon: <Heart className="h-8 w-8" />,
      },
      {
        title: "Family Therapy",
        description: "Sessions designed to improve family dynamics and resolve conflicts.",
        icon: <Users className="h-8 w-8" />,
      },
      {
        title: "Child & Adolescent Therapy",
        description: "Specialized therapy services for children and teenagers.",
        icon: <Brain className="h-8 w-8" />,
      },
    ],
  },
  {
    id: "wellness",
    title: "Wellness Programs",
    services: [
      {
        title: "Mindfulness Training",
        description: "Learn meditation and mindfulness techniques for stress reduction and mental clarity.",
        icon: <Leaf className="h-8 w-8" />,
      },
      {
        title: "Stress Management",
        description: "Practical strategies and tools for managing stress in daily life.",
        icon: <Brain className="h-8 w-8" />,
      },
      {
        title: "Lifestyle Coaching",
        description: "Guidance on developing healthy habits and sustainable lifestyle changes.",
        icon: <Heart className="h-8 w-8" />,
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate Wellness",
    services: [
      {
        title: "Employee Assistance Programs",
        description: "Confidential counseling and support services for employees.",
        icon: <Building className="h-8 w-8" />,
      },
      {
        title: "Workplace Mental Health Training",
        description: "Educational programs to promote mental health awareness in the workplace.",
        icon: <Users className="h-8 w-8" />,
      },
      {
        title: "Stress Management Workshops",
        description: "Interactive workshops on managing workplace stress and burnout.",
        icon: <Leaf className="h-8 w-8" />,
      },
    ],
  },
  {
    id: "retreats",
    title: "Retreats & Intensive Programs",
    services: [
      {
        title: "Wellness Retreats",
        description: "Multi-day intensive programs focused on healing and personal growth.",
        icon: <Mountain className="h-8 w-8" />,
      },
      {
        title: "Recovery Intensives",
        description: "Concentrated addiction recovery programs with comprehensive support.",
        icon: <Heart className="h-8 w-8" />,
      },
      {
        title: "Mindfulness Retreats",
        description: "Immersive experiences in meditation and mindfulness practices.",
        icon: <Leaf className="h-8 w-8" />,
      },
    ],
  },
  {
    id: "community",
    title: "Community Programs",
    services: [
      {
        title: "Support Groups",
        description: "Peer-led support groups for various mental health and wellness topics.",
        icon: <Users className="h-8 w-8" />,
      },
      {
        title: "Educational Workshops",
        description: "Community workshops on mental health awareness and wellness topics.",
        icon: <Globe className="h-8 w-8" />,
      },
      {
        title: "Crisis Support",
        description: "24/7 crisis intervention and emergency mental health support.",
        icon: <Heart className="h-8 w-8" />,
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive mental health and wellness services designed to support your journey toward healing and
                growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-16 lg:py-24 ${categoryIndex % 2 === 1 ? "bg-muted" : ""}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <SectionHeading title={category.title} centered />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard
                    key={serviceIndex}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}
