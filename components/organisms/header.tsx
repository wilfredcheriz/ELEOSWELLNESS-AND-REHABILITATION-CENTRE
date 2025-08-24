import { Logo } from "@/components/atoms/logo"
import { NavigationMenu } from "@/components/molecules/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <NavigationMenu />
        </div>
      </div>
    </header>
  )
}
