import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-muted to-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight">
            Where Healing Begins, and Hope is Restored
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Professional mental health, addiction recovery, and wellness services designed to support your journey
            toward healing and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Image Placeholder */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <img
          src="/peaceful-nature-scene-with-trees-and-sunlight-for-.png"
          alt="Peaceful wellness background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
