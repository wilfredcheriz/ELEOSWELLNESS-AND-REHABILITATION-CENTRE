import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Eleos Wellness & Rehabilitation Centre - Where Healing Begins",
  description:
    "Professional mental health, addiction recovery, family therapy, and wellness programs. Where healing begins, and hope is restored.",
  generator: "v0.app",
  keywords: "mental health, addiction recovery, family therapy, wellness programs, rehabilitation, counseling",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
