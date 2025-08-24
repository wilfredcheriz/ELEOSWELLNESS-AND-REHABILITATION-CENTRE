import { Header } from "@/components/organisms/header"
import { HeroSection } from "@/components/organisms/hero-section"
import { FeaturedServices } from "@/components/organisms/featured-services"
import { TestimonialsSection } from "@/components/organisms/testimonials-section"
import { Footer } from "@/components/organisms/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedServices />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
