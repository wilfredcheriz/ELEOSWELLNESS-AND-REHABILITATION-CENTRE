import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">E</span>
      </div>
      <span className="font-heading font-bold text-xl text-foreground">Eleos Wellness</span>
    </Link>
  )
}
