import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Happy Monday Message | The CHO Collective",
  description:
    "Start the week with clarity, optimism, and purpose through Edwin Edebiri's Happy Monday Message from The CHO Collective.",
  keywords: [
    "Happy Monday Message",
    "Edwin Edebiri",
    "The CHO Collective",
    "Chief Happiness Officer",
    "leadership mindset",
    "happiness at work",
  ],
  openGraph: {
    title: "Happy Monday Message | The CHO Collective",
    description:
      "A simple weekly reset from Edwin Edebiri to help you begin Monday with clarity, energy, and purpose.",
    type: "website",
    images: [
      {
        url: "/images/happy-monday-message.png",
        width: 1672,
        height: 941,
        alt: "The CHO Collective Happy Monday Message",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Monday Message | The CHO Collective",
    description:
      "Begin Monday with clarity, energy, and purpose through Edwin Edebiri's weekly message.",
    images: ["/images/happy-monday-message.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fff9ec",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
