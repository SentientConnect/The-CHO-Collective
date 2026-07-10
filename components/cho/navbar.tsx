"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"
import { CtaButton } from "./cta-button"
import { trackEvent } from "@/lib/analytics"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Edwin", href: "#about" },
  { label: "The 10-Week Journey", href: "#program" },
  { label: "Community", href: "#community" },
  { label: "Happy Monday Message", href: "#happy-monday" },
  { label: "Member Wins", href: "#wins" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <CtaButton
            href="#join"
            analyticsId="nav_join"
            className="hidden sm:inline-flex"
          >
            Join the Collective
          </CtaButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v)
              trackEvent("nav_menu_toggle")
            }}
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-transparent",
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <CtaButton
              href="#join"
              analyticsId="nav_join_mobile"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Join the Collective
            </CtaButton>
          </li>
        </ul>
      </div>
    </header>
  )
}
