import { Header } from "@/components/organisms/header"
import { Footer } from "@/components/organisms/footer"
import { SectionHeading } from "@/components/atoms/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Eye, Compass, Users } from "lucide-react"

const coreValues = [
  {
    title: "Compassion",
    description: "We approach every individual with empathy, understanding, and genuine care for their unique journey.",
    icon: <Heart className="h-8 w-8" />,
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in our therapeutic practices and continuously improve our services.",
    icon: <Eye className="h-8 w-8" />,
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical practices in all our interactions.",
    icon: <Compass className="h-8 w-8" />,
  },
  {
    title: "Community",
    description: "We believe in the power of connection and building supportive communities for healing.",
    icon: <Users className="h-8 w-8" />,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">About Eleos Wellness</h1>
              <p className="text-xl text-muted-foreground">
                Dedicated to providing compassionate, professional care that transforms lives and restores hope.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <SectionHeading
                title="Our Story"
                subtitle="Founded on the belief that everyone deserves access to quality mental health and wellness services"
                centered
              />
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Eleos Wellness & Rehabilitation Centre was born from a vision to create a sanctuary where healing
                  begins and hope is restored. Our founders, experienced mental health professionals, recognized the
                  need for comprehensive, compassionate care that addresses the whole person—mind, body, and spirit.
                </p>
                <p>
                  Since our establishment, we have been committed to breaking down barriers to mental health care and
                  creating an environment where individuals and families feel safe, supported, and empowered to embark
                  on their healing journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-center">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    To provide accessible, evidence-based mental health and wellness services that empower individuals
                    and families to overcome challenges, build resilience, and achieve lasting well-being.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-center">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    To be a leading wellness center that transforms communities by making mental health care accessible,
                    reducing stigma, and fostering environments where healing and hope flourish.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do" centered />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl font-heading">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
