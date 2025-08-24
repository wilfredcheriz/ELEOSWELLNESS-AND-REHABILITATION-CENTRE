import { Header } from "@/components/organisms/header"
import { Footer } from "@/components/organisms/footer"
import { SectionHeading } from "@/components/atoms/section-heading"
import { Card, CardContent } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2018",
    title: "The Vision Begins",
    description:
      "Founded by a team of experienced mental health professionals who recognized the need for comprehensive, accessible wellness services in our community.",
  },
  {
    year: "2019",
    title: "Opening Our Doors",
    description:
      "Eleos Wellness opened its first location, offering individual therapy and addiction recovery services to those in need.",
  },
  {
    year: "2020",
    title: "Expanding Services",
    description:
      "Added family therapy, group counseling, and wellness programs to better serve our growing community of clients.",
  },
  {
    year: "2021",
    title: "Community Outreach",
    description:
      "Launched community programs and educational workshops to reduce mental health stigma and increase awareness.",
  },
  {
    year: "2022",
    title: "Corporate Wellness",
    description: "Introduced corporate wellness programs to support employee mental health and workplace well-being.",
  },
  {
    year: "2023",
    title: "Retreat Programs",
    description: "Opened our retreat center, offering intensive healing programs in a peaceful, natural setting.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description:
      "Today, we continue to expand our services and reach, always staying true to our mission of healing and hope.",
  },
]

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Our Story</h1>
              <p className="text-xl text-muted-foreground">
                A journey of compassion, growth, and unwavering commitment to healing.
              </p>
            </div>
          </div>
        </section>

        {/* Story Narrative */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <SectionHeading
                title="Where It All Began"
                subtitle="The story of Eleos Wellness is one of hope, determination, and the belief that everyone deserves access to quality mental health care"
                centered
              />

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  In 2018, a group of dedicated mental health professionals came together with a shared vision: to
                  create a place where healing begins and hope is restored. They had witnessed firsthand the barriers
                  that prevented people from accessing quality mental health care—stigma, cost, availability, and the
                  often impersonal nature of traditional healthcare settings.
                </p>

                <p>
                  The name "Eleos" comes from the ancient Greek word for compassion and mercy. It represents our core
                  belief that healing happens best in an environment of understanding, empathy, and genuine care. From
                  our very first client to the thousands we've served since, this principle has guided every
                  interaction, every treatment plan, and every decision we make.
                </p>

                <p>
                  What started as a small practice has grown into a comprehensive wellness center, but our mission
                  remains unchanged: to provide accessible, evidence-based care that treats the whole person—mind, body,
                  and spirit. We believe that everyone has the capacity for healing and growth, and we're honored to be
                  part of that journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionHeading
                title="Our Journey"
                subtitle="Key milestones in our growth and service to the community"
                centered
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">{event.year}</span>
                      </div>
                    </div>
                    <Card className="flex-1 bg-background">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Be Part of Our Story</h2>
              <p className="text-xl text-muted-foreground">
                Your healing journey is the next chapter in our story. Let us walk alongside you as you discover hope,
                healing, and renewed purpose.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
